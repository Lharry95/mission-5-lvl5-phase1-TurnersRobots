#!/usr/bin/env node

const { Command } = require("commander");
const {
  addAuction,
  findAuction,
  updateAuction,
  deleteAuction,
  listAuctions,
  seedAuctions,
  deleteAll,
  addItem,
} = require("../index.js");
const inquirer = require("inquirer").default;
const { questionsForAuctions, questionsForItems } = require("./prompts.js");

const program = new Command();

program
  .name("auction-data-cli")
  .description("CLI tool for managing trademe Auction data")
  .version("1.0.0");

// list of auctions
program
  .command("list")
  .description("List of all added auctions")
  .action(() => listAuctions());

program
  .command("add")
  .description("Add a new auction listing")
  .action(() => {
    inquirer
      .prompt(questionsForAuctions)
      .then((answers) => addAuction(answers));
  });

program
  .command("find <title>")
  .description("find an auction listing")
  .action((title) => findAuction(title));

program
  .command("update <_id>")
  .description("Update auction")
  // using the id to update the auction
  .action((_id) => {
    inquirer
      .prompt(questionsForAuctions)
      .then((answers) => updateAuction(_id, answers));
  });

program
  .command("seed")
  .description("seeding all auctions into MongoDB")
  .action(() => seedAuctions());

//   delete one auction
program
  .command("delete <_id>")
  .description("delete an auction listing")
  .action((_id) => deleteAuction(_id));

//   delete all auctions from mongoDB
program
  .command("deleteAll")
  .description("Deleting all auctions from MongoDB")
  .action(() => deleteAll());

// adding items
program
  .command("addItem")
  .description("Add a new auction listing")
  .action(() => {
    inquirer.prompt(questionsForItems).then((answers) => addItem(answers));
  });

program.parse(process.argv);
