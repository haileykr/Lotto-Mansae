const express = require("express");
const router = express.Router();
const moment = require("moment");
const { Number } = require("../models");
const { default: axios } = require("axios");
const { Op } = require("sequelize");

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
    let latestStoredWeek = await Number.findOne({
      attributes: ["round"],
      order: [["round", "DESC"]],
    });

    if (latestStoredWeek) {
      latestStoredWeek = latestStoredWeek.dataValues.round;
    } else {
      // latestStoredWeek = 1;
      latestStoredWeek = currentWeek - 2;
    }

    while (latestStoredWeek < currentWeek) {
      latestStoredWeek += 1;
      const lottoInfo = await axios(
        `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${latestStoredWeek}`
      );
      await Number.create({
        round: latestStoredWeek,
        date: lottoInfo.data.drwNoDate,
        number1: lottoInfo.data.drwtNo1,
        number2: lottoInfo.data.drwtNo2,
        number3: lottoInfo.data.drwtNo3,
        number4: lottoInfo.data.drwtNo4,
        number5: lottoInfo.data.drwtNo5,
        number6: lottoInfo.data.drwtNo6,
        numberBon: lottoInfo.data.bnusNo,
      });
    }
    return res.status(200).json("success");
  } catch (err) {
    console.error(err);
    return res.status(401).send(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    const allNumbers = await Number.findAll({});
    res.status(200).json(allNumbers);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.post("/number-counts", async (req, res) => {
  try {
    const allNumbers = await Number.findAll({
      where: { date: { [Op.between]: [req.body.from, req.body.to] } },
    });
    const dic = [];
    for (let i = 0; i < 45; i++) {
      dic[i] = [i + 1, 0];
    }
    allNumbers.forEach((round) => {
      dic[round.number1 - 1][1] += 1;
      dic[round.number2 - 1][1] += 1;
      dic[round.number3 - 1][1] += 1;
      dic[round.number4 - 1][1] += 1;
      dic[round.number5 - 1][1] += 1;
      dic[round.number6 - 1][1] += 1;
      dic[round.numberBon - 1][1] += 1;
    });
    res.status(200).send(dic);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/latest", async (req, res) => {
  try {
    const latestNums = await Number.findOne({
      order: [["round", "DESC"]],
    });
    res.status(200).send(latestNums);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/initialize", async (req, res) => {
  // await Number.destroy({ where: {} });
  // await Number.drop();
  await Number.destroy({ where: { id: 993 } });
});

const getWeek = () => {
  const t1 = moment("20021207");
  const t2 = moment();
  const dff = moment.duration(t2.diff(t1)).asDays();
  return Math.floor(dff / 7) + 1;
};

module.exports = router;
