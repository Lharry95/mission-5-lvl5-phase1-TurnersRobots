import express from "express";
import mongoose from "mongoose";
import connectingDb from "./auction-data-cli/db/databaseConnection.js";
import AuctionData from "./auction-data-cli/models/auctionData.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

connectingDb();

// gets all auction items
app.get("/auctions", async (req, res) => {
  const auctions = await AuctionData.find({});

  try {
    res.send(auctions);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error! Couldn't retrieve all auctions", error });
  }
});

// search function
app.get("/auctions-item/search", async (req, res) => {
  const query = req.query.title;

  try {
    const search = new RegExp(query, "i");
    const item = await AuctionData.find({ title: search });
    res.send(item);
  } catch (error) {
    res.status(500).json({ message: "Error! Couldn't retrieve item", error });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is now running...`);
});
