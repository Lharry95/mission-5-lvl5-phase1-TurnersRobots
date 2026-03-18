import mongoose from "mongoose";
import AuctionData from "./models/auctionData.js";
import connectingDb from "./db/databaseConnection.js";
import seedData from "./data/seedData.js";

// map global promise - get rid of warning
mongoose.Promise = global.Promise;

try {
  // connecting to db
  await connectingDb();
} catch (error) {
  console.log("Error! Could not connect", error);
  process.exit(1);
}

const addAuction = async (auction) => {
  await AuctionData.create(auction).then((auction) => {
    console.log("New Auction Added");
    mongoose.connection.close();
  });
};

const findAuction = async (title) => {
  // make case insensitive
  const search = new RegExp(title, "i");
  try {
    const auctions = await AuctionData.find({ title: search });
    console.log(auctions);
    console.log(`${auctions.length} matches`);
    mongoose.connection.close();
  } catch (error) {
    console.error("Uh oh, can't find the Auction", error);
  }
};

const updateAuction = async (_id, auction) => {
  try {
    AuctionData.updateOne({ _id }, auction).then((auction) => {
      console.log("Auction updated");
      mongoose.connection.close();
    });
  } catch (error) {
    console.error("Sorry couldn't update this!", error);
  }
};

const deleteAuction = async (_id) => {
  try {
    AuctionData.deleteOne({ _id }).then((auction) => {
      console.log("Auction removed");
      mongoose.connection.close();
    });
  } catch (error) {
    console.error("Auction wasn't removed, something went wrong", error);
  }
};

const deleteAll = async () => {
  try {
    AuctionData.deleteMany().then((auctions) => {
      console.log("All auctions successfully removed from Mongo!");
      mongoose.connection.close();
    });
  } catch (error) {
    console.error("Auctions weren't removed, something went wrong", error);
  }
};

const listAuctions = async () => {
  try {
    AuctionData.find().then((auctions) => {
      console.log(auctions);
      console.log(`${auctions.length} Auctions`);
      mongoose.connection.close();
    });
  } catch (error) {
    console.error("Couldn't find the Auction List", error);
  }
};

const seedAuctions = async () => {
  try {
    AuctionData.insertMany(seedData).then((auctions) => {
      console.log("All auctions seeded successfully to MongoDB");
      mongoose.connection.close();
    });
  } catch (error) {
    console.error("Something went wrong. Couldn't seed data!", error);
  }
};

export {
  addAuction,
  findAuction,
  updateAuction,
  deleteAuction,
  listAuctions,
  seedAuctions,
  deleteAll,
};
