"use strict";

// Simulates the kind of delay we see with network or filesystem operations
// const simulateDelay = require("./util/simulate-delay");
const Mongo = require("mongodb");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet, (err, res) => {
        if (err) return callback(err);
        callback(null, true);
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection("tweets").find().toArray((err, tweets) => {
        if (err) return callback(err);
        callback(null, tweets.sort(sortNewestFirst));
      });

    },

    addLike: function(tweetModifier, callback){
      const filter = { _id: Mongo.ObjectId(tweetModifier.id)};
      const newValues = {$set: {likes: tweetModifier.likes}};

      db.collection("tweets").updateOne(filter, newValues, function(err, res){
        if (err) throw err;
        callback(null, true);
      });

    }

  };
};

function sortNewestFirst(a, b){
  return b.created_at - a.created_at;
}
