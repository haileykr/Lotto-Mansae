const express = require("express");
const router = express.Router();
const moment = require("moment");
const { Number } = require("../models");
const { default: axios } = require("axios");
const { Op } = require("sequelize");
const _ = require("lodash");

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
      latestStoredWeek = 0;
    }

    while (latestStoredWeek < currentWeek) {
      latestStoredWeek += 1;
      const lottoInfo = await axios(
        `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${latestStoredWeek}`
      );
      if (!lottoInfo) break;
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
router.get("/number-counts-stats", async (req, res) => {
  try {
    const allNumbers = await Number.findAll();
    const dic = [];
    let sorted1Month;
    let sorted3Months;
    let sorted1Year;
    let sorted3Years;
    let sorted10Years;
    for (let i = 0; i < 45; i++) {
      dic[i] = [i + 1, 0];
    }
    const len = allNumbers.length;
    for (let i = len - 1; i >= 0; i--) {
      const round = allNumbers[i];
      dic[round.number1 - 1][1] += 1;
      dic[round.number2 - 1][1] += 1;
      dic[round.number3 - 1][1] += 1;
      dic[round.number4 - 1][1] += 1;
      dic[round.number5 - 1][1] += 1;
      dic[round.number6 - 1][1] += 1;
      dic[round.numberBon - 1][1] += 1;

      if (i === len - 5) {
        sorted1Month = _.cloneDeep(dic).sort((a, b) => b[1] - a[1]);
      } else if (i === len - 13) {
        sorted3Months = _.cloneDeep(dic).sort((a, b) => b[1] - a[1]);
      } else if (i === len - 53) {
        sorted1Year = _.cloneDeep(dic).sort((a, b) => b[1] - a[1]);
      } else if (i === len - 157) {
        sorted3Years = _.cloneDeep(dic).sort((a, b) => b[1] - a[1]);
      } else if (i === len - 521) {
        sorted10Years = _.cloneDeep(dic).sort((a, b) => b[1] - a[1]);
      }
    }
    sortedAll = dic.sort((a, b) => b[1] - a[1]);
    const result = {
      sorted1Month,
      sorted3Months,
      sorted1Year,
      sorted3Years,
      sorted10Years,
      sortedAll,
    };
    res.status(200).send(result);
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
  await Number.destroy({ where: {} });
  // await Number.drop();
  // await Number.destroy({ where: { id: 993 } });
});

const getWeek = () => {
  const t1 = moment("20021207");
  const t2 = moment();
  const dff = moment.duration(t2.diff(t1)).asDays();
  return Math.floor(dff / 7) + 1;
};

module.exports = router;
