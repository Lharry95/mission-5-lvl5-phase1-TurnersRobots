import mongoose from "mongoose";

const auctionDataSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  start_price: { type: Number, required: true },
  reserve_price: { type: Number, required: true },
});

const AuctionData = mongoose.model("AuctionData", auctionDataSchema);

export default AuctionData;
