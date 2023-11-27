// connection of mongoDB database

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://amanvijayverma07:anikaverma21@cluster0.nymbmqm.mongodb.net/placement-cell?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

// const db= mongoose.connection;
// db.on("error", console.error.bind(console,"Error in connection to Mongodb"));

// db.once("open", function(){
//     console.log("Successfully connected to Database :: Mon goDB");

// });

// module.exports =db;
