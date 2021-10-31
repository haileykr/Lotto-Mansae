const express = require("express");
const router = express.Router();
const moment = require("moment");
const { Round, Number } = require("../models");
const { default: axios } = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET the latest lotto round numbers
router.get("/lottos/update", async (req, res) => {
  try {
    // Get the current week info
    let currentWeek = getWeek();
    console.log(currentWeek);

    // Get the latest week info stored in the database
    let latestStoredWeek = await Round.findOne({
      attributes: ["round"],
      order: [["round", "DESC"]],
    });

    if (latestStoredWeek) {
      latestStoredWeek = latestStoredWeek.dataValues.round;
    } else {
      latestStoredWeek = currentWeek - 2;
    }

    while (latestStoredWeek < currentWeek) {
      const lottoInfo = await axios(
        `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${currentWeek}`
      );
      await Round.create({
        round: currentWeek,
        date: lottoInfo.data.drwNoDate,
      });
      for (let i = 1; i < 7; i++) {
        const field = "drwtNo" + i;
        await Number.create({
          round: currentWeek,
          number: lottoInfo.data[field],
        });
      }
      await Number.create({
        round: currentWeek,
        number: lottoInfo.data.bnusNo,
      });

      currentWeek -= 1;
    }

    return res.status(200).json("success");
  } catch (err) {
    console.error(err);
    return res.status(401).send(err);
  }
});

router.get("/all", async (req, res) => {
  const allNumbers = await Number.findAll({
    attributes: ["number"],
  });
  console.log(allNumbers);
  console.log("here");
  res.json(allNumbers);
});

router.get("/latest", async (req, res) => {
  try {
    const latestNums = await Number.findAll({
      limit: 7,
    });
    console.log(latestNums);
    res.status(200).send(latestNums);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/initialize", async (req, res) => {
  await Number.destroy({ where: {} });
  await Round.destroy({ where: {} });
});
// router.get("/documents/:id", (req, res) => {
//   res.json({ id: req.params.id });
// });

router.get("/round", async (req, res) => {
  let latestStoredWeek = await Round.findAll({
    order: [["round", "DESC"]],
  });
  res.send(latestStoredWeek);
});

const getWeek = () => {
  const t1 = moment("20021207");
  const t2 = moment();
  const dff = moment.duration(t2.diff(t1)).asDays();
  return Math.floor(dff / 7) + 1;
};

module.exports = router;

// ORIGINAL POST
// router.get("/lottos/last", (req, res) => {
//   let week = getWeek();

// request.get(
//   {
//     url:
//       "https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=" +
//       week,
//     strictSSL: false,
//   },
//   (error, response, body) => {
//     res.json(JSON.parse(body));
//   }
// );
// });
