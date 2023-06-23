 require("dotenv").config;

 const MONGO_DB_CONFIG = {
    DB: 'mongodb+srv://kwahamgrace:kwahamgrace@PortfolioBackend.bk0obc3.mongodb.net/PortfolioBackend?retryWrites=true&w=majority'
 }

 module.exports = {
    MONGO_DB_CONFIG
 }