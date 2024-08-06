const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    completed:{
      type:Boolean,
      default:false
    },
    user: [
      {
        type: mongoose.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  { timestamps: true, Collection: "list" }
);

module.exports = mongoose.model("list", listSchema);
