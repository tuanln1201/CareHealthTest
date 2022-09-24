const axios = require("axios");
const express = require("express");
require("dotenv").config();
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const getAllCurrencies = async (offset, orderBy, search) => {
  console.log(offset, orderBy, search);
  const response = await axios.get(
    `${process.env.COINRANKING_LIST_URI}?offset=${offset}&orderBy=${orderBy}&orderDirection=desc&search=${search}`,
    {
      headers: {
        "x-access-token": `${process.env.SECRETKEY}`,
      },
    }
  );
  return response.data;
};

const getSingleCurrency = async (id) => {
  const response = await axios.get(
    `${process.env.COINRANKING_SINGLE_URI}/${id}`,
    {
      headers: {
        "x-access-token": `${process.env.SECRETKEY}`,
      },
    }
  );
  return response.data;
};
app.get("/", async (req, res) => {
  return res.json(
    await getAllCurrencies(
      req.query.offset,
      req.query.orderBy,
      req.query.search
    )
  );
});

app.get("/:id", async (req, res) => {
  return res.json(await getSingleCurrency(req.params.id));
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Running this application on the Port ${process.env.PORT}`);
});
