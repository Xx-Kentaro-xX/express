var express = require("express");
var router = express.Router();

//mongoDB接続情報を設定
const { MongoClient } = require("mongodb");
const url = "";
const client = new MongoClient(url);

router.get("/", async (req, res) => {
  //データベース、コレクションを指定
  const database = client.db("notes");
  const notes = database.collection("notes");

  //idが1のドキュメントを取得する
  const query = { id: 1 };
  const note = await notes.findOne(query);

  res.json(note);
});

module.exports = router;
