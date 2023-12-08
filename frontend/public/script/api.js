import { BACKEND_URL } from "./config.js";

export async function getQuestion() {
    const items = await fetch(`${BACKEND_URL}/items`).then((r) => r.json());
    // console.log(items);
    return items;
}

export async function createQuestion(question) {
    await fetch(`${BACKEND_URL}/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(question),
    });
}

export async function getAnswer(QuestionId) {
    const answers = await fetch(`${BACKEND_URL}/items/ans/${QuestionId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((r) => r.json());

    return answers;
}



export async function createAnswer(answer) {
    await fetch(`${BACKEND_URL}/items/ans`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(answer),
    });
}




