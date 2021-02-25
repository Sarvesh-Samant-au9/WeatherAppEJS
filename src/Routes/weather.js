const express = require("express");
const APIKEY = "388053a21f6b02d9812861c21150602f";
const axios = require("axios");

const weatherRouter = express.Router();
weatherRouter.get("", async (req, res) => {
  try {
    const weatherUrl = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${APIKEY}`
    );
    console.log(weatherUrl.data);
    res.render("weatherInfo", {
      dataInfo: weatherUrl.data,
    });
  } catch (error) {
    res.render("SearchError");
  }
});

weatherRouter.post("", async (req, res) => {
  let cityQuery = req.body.search;
  try {
    const weatherUrl = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&appid=${APIKEY}`
    );
    res.render("weatherSearch", {
      dataInfo: weatherUrl.data,
    });
  } catch (error) {
    res.render("SearchError");
  }
});

module.exports = weatherRouter;
