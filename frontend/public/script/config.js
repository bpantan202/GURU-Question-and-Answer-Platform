/**
 * @typedef {Object} Question
 * @typedef {Object} Answer
 * @property {string} _id
 * @property {string} question
 * @property {string} answer
 */

/** @typedef {Omit<Question, "_id">} QuestionPayload */
/** @typedef {Omit<Answer, "_id">} AnswerPayload */

export const BACKEND_URL = "http://localhost:3222";

