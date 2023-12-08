import Question from "../models/QuestionModel.js";
import Answer from "../models/AnswerModel.js";

/** @type {import("express").RequestHandler} */
export const createQuestion = async (req, res) => {
    try {
        const newQuestion = new Question(req.body);
        await newQuestion.save();

        res.status(200).json({ message: "OK" });
    } catch (err) {
        if (err.name === "ValidationError") {
            res.status(400).json({ error: "Bad Request" });
        } else {
            res.status(500).json({ error: "Internal server error." });
        }
    }
};

/** @type {import("express").RequestHandler} */
export const createAnswer = async (req, res) => {
    try {
        const newAnswer = new Answer(req.body);
        await newAnswer.save();

        res.status(200).json({ message: "OK" });
    } catch (err) {
        if (err.name === "ValidationError") {
            res.status(400).json({ error: "Bad Request" });
        } else {
            res.status(500).json({ error: "Internal server error." });
        }
    }
};

/** @type {import("express").RequestHandler} */
export const getQuestion = async (req, res) => {
    const questions = await Question.find();

    res.status(200).json(questions);
};

/** @type {import("express").RequestHandler} */
export const getAnswer = async (req, res) => {
    const answers = await Answer.find({ Qid: req.params.id });

    res.status(200).json(answers);
};

//import Question from "../models/itemModel.js";

/* @type {import("express").RequestHandler} */

/*export const createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();

    res.status(200).json({ message: "OK" });
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({ error: "Bad Request" });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
};

export const createAnswer = async (req, res) => {
  try {
    const newAnswer = new Anewer(req.body);
    await newAnswer.save();

    res.status(200).json({ message: "OK" });

    Post.findById(req.params.postId, function(err, post) {
      if (err) return res.send(err);
      post.commentIds.push(comment);
      post.save(function(err) {
        if (err) return res.send(err);
        res.json({ status : 'done' });
      });
    });
  }
    catch (err) {
      if (err.name === "ValidationError") {
        res.status(400).json({ error: "Bad Request" });
      } else {
        res.status(500).json({ error: "Internal server error." });
      }
    }
};
*/
