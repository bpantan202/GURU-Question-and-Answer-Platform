import { createAnswer, getAnswer } from "./api.js";
import { createQuestion, getQuestion} from "./api.js";


export async function fetchStart() {
    const answerList = document.getElementById("all-output");
    const questions = await getQuestion();
 
    for (const item of questions) {
        const questionElement = document.createElement("div");
        questionElement.id = "Q-" + item._id;
        questionElement.classList.add("question");
        questionElement.textContent = "Q: " + item.question;

        const br = document.createElement("br");
        questionElement.appendChild(br);

        const A_sec = document.createElement("div");
        A_sec.id = "A-" + item._id;
        questionElement.appendChild(A_sec);

        // create z (empty)
        const Z_sec = document.createElement("div");
        Z_sec.classList.add("ZZZ");
        Z_sec.id = "Z-" + item._id;
        const table = document.createElement("table");
        table.id = "T-" + item._id;
        const table2 = document.createElement("th");
        // table.id = "TH-" + item._id;
        const showButton = document.createElement("button");
        showButton.classList.add("show-button");
        showButton.textContent = "View";
        showButton.addEventListener("click", () => {
            show_ans(item._id);
        });

        table2.appendChild(showButton);
        table.appendChild(table2);
        Z_sec.appendChild(table);
        // Z_sec.appendChild(amount_ans);
        questionElement.appendChild(Z_sec);
        
        answerList.appendChild(questionElement);
    }
    for (const item of questions) {
        show_amount_ans(item._id);
    }
}


export async function answerQuestion(id) {
    const answerInput = document.getElementById(id);

    // Get the answer text from the input
    const answerText = answerInput.value.trim();
    if (answerText) {
        await handleCreateItemAns(id, answerText);
    }

    // Create a new answer element
    const lo_ans = document.getElementById("A-" + id);
    const createNewBox = document.createElement("div");
    createNewBox.classList.add("answer");
    createNewBox.textContent = answerText;
    // Append the answer to the question's element
    lo_ans.appendChild(createNewBox);

    //fetch ans box
    const ans_in_sec = document.getElementById("Z-" + id);
    ans_in_sec.innerHTML = "";
    const Input = document.createElement("textarea");
    Input.classList.add("answer-input");
    Input.id = id;
    Input.placeholder = " Type your answer here...";

    const hideButton = document.createElement("button");
    hideButton.classList.add("hide-button");
    hideButton.textContent = "Hide";
    hideButton.addEventListener("click", () => {
        hide_ans(id);
    });

    const ansButton = document.createElement("button");
    ansButton.classList.add("answer-button");
    ansButton.textContent = "Answer";
    ansButton.addEventListener("click", () => {
        answerQuestion(id);
    });
    
    ans_in_sec.appendChild(Input);
    ans_in_sec.appendChild(ansButton);
    ans_in_sec.appendChild(hideButton);
}

async function handleCreateItemAns(id, answerText) {
    const payload = {
        answer: answerText,
        Qid: id,
    };

    await createAnswer(payload);
    // await fetchAndDrawDiv();

    //fetch part ask question

}



export async function show_ans(id){
    const A_sec = document.getElementById("A-" + id);
    // A_sec.innerHTML = "";

    // Fetch answer by id
    const answers = await getAnswer(id);

    for (const item of answers) {
    // Create a new answer element
    const answerElement = document.createElement("div");
    answerElement.classList.add("answer");
    answerElement.textContent = item.answer;

    // Append the answer to the question's element
    A_sec.appendChild(answerElement);
    }

    //ans box
    const Z_sec = document.getElementById("Z-" + id);
    Z_sec.innerHTML = "";

    const answerInput = document.createElement("textarea");
    answerInput.classList.add("answer-input");
    answerInput.id = id;
    answerInput.placeholder = " Type your answer here...";

    const hideButton = document.createElement("button");
    hideButton.classList.add("hide-button");
    hideButton.textContent = "Hide";
    hideButton.addEventListener("click", () => {
        hide_ans(id);
    });

    const answerButton = document.createElement("button");
    answerButton.classList.add("answer-button");
    answerButton.textContent = "Answer";
    answerButton.addEventListener("click", () => {
        answerQuestion(id);
    });
    Z_sec.appendChild(answerInput);
    Z_sec.appendChild(answerButton);
    Z_sec.appendChild(hideButton);

}

export async function hide_ans(id){
    const A_sec = document.getElementById("A-" + id);
    const Z_sec = document.getElementById("Z-" + id);
    A_sec.innerHTML = "";
    Z_sec.innerHTML = "";
    const table = document.createElement("table");
    table.id = "T-" + id;
    const table2 = document.createElement("th");
    const showButton = document.createElement("button");
    showButton.classList.add("show-button");
    showButton.textContent = "View";
    showButton.addEventListener("click", () => {
        show_ans(id);
    });
    table2.appendChild(showButton);
    table.appendChild(table2);
    Z_sec.appendChild(table);
    
    show_amount_ans(id);
}

// const Z_sec = document.createElement("div");
//         Z_sec.id = "Z-" + item._id;
//         const table = document.createElement("table");
//         table.id = "T-" + item._id;
//         const table2 = document.createElement("th");
//         // table.id = "TH-" + item._id;
//         const showButton = document.createElement("button");
//         showButton.classList.add("show-button");
//         showButton.textContent = "View";
//         showButton.addEventListener("click", () => {
//             show_ans(item._id);
//         });

//         table2.appendChild(showButton);
//         table.appendChild(table2);
//         Z_sec.appendChild(table);

export async function handleCreateItem() {
    const questionInput = document.getElementById("question-input");

    const payload = {
        question: questionInput.value,
    };

    await createQuestion(payload);
    // await fetchAndDrawDiv();
    // const question = getQuestion();
    const questions = await getQuestion();
    const new_ques = questions[questions.length-1];
    const id = new_ques._id;
    // console.log(questions[questions.length-1]);
    // const id = find(question.questionInput.value)._id;

    const answerList = document.getElementById("all-output");
    const questionElement = document.createElement("div");
    questionElement.id = "Q-" + id;
    questionElement.classList.add("question");
    questionElement.textContent = "Q: " + questionInput.value;

    const br = document.createElement("br");
    questionElement.appendChild(br);

    const A_sec = document.createElement("div");
    A_sec.id = "A-" + id;
    questionElement.appendChild(A_sec);

    // create z (empty)
    const Z_sec = document.createElement("div");
    Z_sec.id = "Z-" + id;
    const table = document.createElement("table");
    table.id = "T-" + id;
    const table2 = document.createElement("th");
    const showButton = document.createElement("button");
    showButton.classList.add("show-button");
    showButton.textContent = "View";
    showButton.addEventListener("click", () => {
        show_ans(id);
    });

    const am_ans = document.createElement("div");
    am_ans.classList.add("amount-ans");
    am_ans.textContent = "ans : 0";
    const table3 = document.createElement("ta");
    questionInput.value = "";
    table2.appendChild(showButton);
    table.appendChild(table2);
    table3.appendChild(am_ans);
    table.appendChild(table3);
    Z_sec.appendChild(table);
    questionElement.appendChild(Z_sec);
    answerList.appendChild(questionElement);
}

// async function handleCreateItemAns(id, answerText) {
//     const payload = {
//         answer: answerText,
//         Qid: id,
//     };

//     await createAnswer(payload);
//     // await fetchAndDrawDiv();

//     //fetch part ask question

// }

export async function show_amount_ans(id) {
    const location = document.getElementById("T-" + id);
    const group_t = document.createElement("th");
    const answers = await getAnswer(id);
    const amount_ans = answers.length;
    const am_ans = document.createElement("div");
    am_ans.classList.add("amount-ans");
    am_ans.textContent = "ans : " + amount_ans;
    
    group_t.appendChild(am_ans);
    location.appendChild(group_t);
}