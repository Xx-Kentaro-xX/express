var express = require("express");
var router = express.Router();
const cors = require("cors");
// .envを利用するためのdotenvライブラリ読み込み
require("dotenv").config();

router.use(cors());

//mongoDB接続情報を設定
const { MongoClient } = require("mongodb");
const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

router.get("/", async (req, res) => {
  //データベース、コレクションを指定
  const database = client.db("notes");
  const notes = database.collection("notes");

  //すべてのドキュメントを取得
  const note = await notes.find({}).toArray();

  res.json(note);
});

module.exports = router;
