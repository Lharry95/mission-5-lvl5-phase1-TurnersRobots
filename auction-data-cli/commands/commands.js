#!/usr/bin/env node

import { Command } from "commander";
import {
  addAuction,
  findAuction,
  updateAuction,
  deleteAuction,
  listAuctions,
  seedAuctions,
  deleteAll,
} from "../index.js";
import inquirer from "inquirer";
import questions from "./prompts.js";

const program = new Command();
const { prompt } = inquirer;

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
    prompt(questions).then((answers) => addAuction(answers));
  });

program
  .command("find <title>")
  .description("find an auction listing")
  .action((title) => findAuction(title));

program
  .command("update <_id>")
  .description("Update auction")
  .action((_id) => {
    prompt(questions).then((answers) => updateAuction(_id, answers));
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

program.parse(process.argv);
