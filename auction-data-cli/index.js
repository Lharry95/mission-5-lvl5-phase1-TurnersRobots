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

// to add an auction
const addAuction = async (auction) => {
  try {
    await AuctionData.create(auction).then((auction) => {
      console.log("New Auction Added");
    });
  } catch (error) {
    console.error("Sorry! Couldn't add the auction", error);
  } finally {
    mongoose.connection.close();
  }
};

// to find a specific auction using any word in the title or the whole title.
const findAuction = async (title) => {
  // make case insensitive
  const search = new RegExp(title, "i");
  try {
    const auctions = await AuctionData.find({ title: search });
    console.log(auctions);
    console.log(`${auctions.length} matches`);
  } catch (error) {
    console.error("Uh oh, can't find the Auction", error);
  } finally {
    mongoose.connection.close();
  }
};

// update an auction
const updateAuction = async (_id, auction) => {
  try {
    AuctionData.updateOne({ _id }, auction).then((auction) => {
      console.log("Auction updated");
    });
  } catch (error) {
    console.error("Sorry couldn't update this!", error);
  } finally {
    mongoose.connection.close();
  }
};

// delete one auction
const deleteAuction = async (_id) => {
  try {
    AuctionData.deleteOne({ _id }).then((auction) => {
      console.log("Auction removed");
    });
  } catch (error) {
    console.error("Auction wasn't removed, something went wrong", error);
  } finally {
    mongoose.connection.close();
  }
};

// delete all the auctions
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

// list all the auctions in the list
const listAuctions = async () => {
  try {
    AuctionData.find().then((auctions) => {
      console.log(auctions);
      console.log(`${auctions.length} Auctions`);
    });
  } catch (error) {
    console.error("Couldn't find the Auction List", error);
  } finally {
    mongoose.connection.close();
  }
};

// seed all the auctions in seedData.js to mongoDB
const seedAuctions = async () => {
  try {
    AuctionData.insertMany(seedData).then((auctions) => {
      console.log("All auctions seeded successfully to MongoDB");
    });
  } catch (error) {
    console.error("Something went wrong. Couldn't seed data!", error);
  } finally {
    mongoose.connection.close();
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
