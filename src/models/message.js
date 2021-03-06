const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Message = new Schema({
  message: {
    type: String,
    require: true
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Message", Message);
