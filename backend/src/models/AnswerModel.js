import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  answer : {
    type: String,
    required : true,
  },
  Qid : {
    type: String,
    required : true,
  }
});

const Answer = mongoose.model("Answer", answerSchema);

export default Answer;
