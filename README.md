# TradeMe's CLI tool for Auction Data with MongoDB

## Overview

This is a command-line-interface (CLI) tool to seed data into your local MongoDB database or delete data from it.

## Features

- Seed's data into MongoDB.
- Delete's seeding auction data from MongoDB
- Displays seeded data in MongoDB via a GET API.
- Can find auctions by using keyword searches.

## File Structure

```
mission-5-phase-1/
    ├── server.js               # Express server and API routes
    ├── auction-data-cli/
    │   └── commands/           # commands file
    │           ├── prompts.js
    │           └── commands.js
    ├── data/
    │   └── seedData.js         # Dummy Data
    ├── db/
    │   └── databaseConnection.js  # Database connection
    ├── models/
    │   └── auctionData.js       # Mongoose Schema
    ├── package.json            # Dependencies
    └── package-lock.json



```

## How It Works

1. The server connects to the MongoDB by running npm run dev in the terminal.
2. You are able to use various actions by using keywords in the termnal stored in commands.js file i.e. seed, add, delete, list, find <title>, update <\_id> etc.

for example:

```
node commands/commands.js add

```

questions then appear in the terminal for the Title, description, start_price and reserve_price. Enter the appropriate details and it will then add the new auction to MongoDB. 3. Open the API in postman to display seeded data. 4. API responds with either the full auction list or a keyword search can be completed to get a specific auction item.

## How To Run

Make sure the server is running by using the command

`npm run dev`

in your terminal.

The server connects at:

```
http://localhost:3000/auctions
```

or

```
http://localhost:3000/auctions-item/search
```

for keyword search.

## Technologies Used

- React
- JavaScript (Vanilla)
- Fetch API for backend communication

## Team

- **Hayley**
- **Lharyzza**
- **Justin**
- **Paywand**
