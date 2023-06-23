 require("dotenv").config;

 const MONGO_DB_CONFIG = {
   DB: 'mongodb+srv://kwahamgrace:4RNikzPaDxeC68eI@cluster0.bk0obc3.mongodb.net/PortfolioBackend?retryWrites=true&w=majority'
  
 }

 module.exports = {
    MONGO_DB_CONFIG
 }