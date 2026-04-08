// prompts for Auction cust
const questionsForAuctions = [
  {
    type: "input",
    name: "title",
    message: "title:",
  },
  {
    type: "input",
    name: "description",
    message: "description:",
  },
  {
    type: "input",
    name: "start_price",
    message: "start_price:",
  },
  {
    type: "input",
    name: "reserve_price",
    message: "reserve_price:",
  },
];
// prompts for cust
const questionsForItems = [
  {
    type: "input",
    name: "condition",
    message: "condition:",
  },
  {
    type: "input",
    name: "dimensions",
    message: "dimensions:",
  },
  {
    type: "input",
    name: "shipping_and_pickup",
    message: "shipping_and_pickup:",
  },
  {
    type: "input",
    name: "payment_options",
    message: "payment_options:",
  },
];

module.exports = { questionsForAuctions, questionsForItems };
