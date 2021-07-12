const containerEle = document.querySelector(".container")

let CurrentQuesNum = 0;
let score = 0;

class Question{
    constructor(question,options,answer)
    {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }


    checkAnswer(a)
    {
        if(a === this.answer)
        {
            return true;
        }

        return false;
    }

    printOnScreen(){
        containerEle.innerHTML = "";
        const questionTitle = document.createElement('h2');
        questionTitle.innerText = this.question;
        containerEle.appendChild(questionTitle);
        for (let x in this.options)
        {   
            let option = document.createElement('div');
            let optionText = document.createElement('p');
            optionText.innerText = x + " " + this.options[x];
            option.appendChild(optionText);
            containerEle.appendChild(option);
            let button = document.createElement('button');
            button.innerText = "Select";
            option.appendChild(button);
            button.addEventListener("click",() => {
                if(this.checkAnswer(x)){
                    score++;
                }
                CurrentQuesNum++;
                printQuestion(questions[CurrentQuesNum]);
            });
        }
    }
}

const question1 = new Question(
    "If soccer is called football in England, what is American football called in England?",
    {
        a: "American Football",
        b: "Combball",
        c:"Handball",
        d:"Touchdown",
    },
    "a"   
);

const question2 = new Question(
    "What is the largest country in the world?",
    {
        a: "Tumhara baju wale ka ghar",
        b: "Canada",
        c:"China",
        d:"Russia",
    },
    "d"  
);


const question3 = new Question(
    "A doctor with a PhD is a doctor of what?",
    {
        a: "Psychology",
        b: "Philosophy",
        c:"Phrenology",
        d:"Physical Therapy",
    },
    "b"   
);

function displayScore()
{
    const scoreElement = document.createElement('h1');
    scoreElement.innerText = `Your score is ${score}`;
    containerEle.innerHTML = "";
    containerEle.appendChild(scoreElement);

    const retryButton = document.createElement('button');
    retryButton.innerText= "Retry";
    retryButton.addEventListener("click",function()
    {
        score =0;
        CurrentQuesNum=0;
        printQuestion(questions[0]);
    })

    containerEle.appendChild(retryButton);
}

function printQuestion(question)
{
    if(!question)
    {
        return displayScore();
    }

    question.printOnScreen();
}

const questions = [question1, question2, question3];
printQuestion(questions[0]);