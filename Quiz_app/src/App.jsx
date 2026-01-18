import { useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";
import "./App.css";
const questions = [
{
question: "What does HTML stand for?",
options: [
"Hyper Tool Markup Language",
"Hyper Text Markup Language",
"High Text Markup Language",
"Hyperlinks Text Mark Language"
],
correctAnswer: 1
},
{
question: "Which language is used for styling web pages?",
options: ["HTML", "JQuery", "CSS", "XML"],
correctAnswer: 2
},
{
question: "Which is not a JavaScript framework?",
options: ["React", "Angular", "Vue", "Django"],
correctAnswer: 3
},
{
question: "Which hook is used for state in React?",
options: ["useEffect", "useRef", "useState", "useMemo"],
correctAnswer: 2
},
{
question: "Which symbol is used for JSX expressions?",
options: ["[]", "()", "{}", "<>"],
correctAnswer: 2
}
];


export default function App() {
const [currentQuestion, setCurrentQuestion] = useState(0);
const [selectedOption, setSelectedOption] = useState(null);
const [score, setScore] = useState(0);
const [showResult, setShowResult] = useState(false);


const handleNext = () => {
if (selectedOption === questions[currentQuestion].correctAnswer) {
setScore(score + 1);
}


setSelectedOption(null);


if (currentQuestion + 1 < questions.length) {
setCurrentQuestion(currentQuestion + 1);
} else {
setShowResult(true);
}
};


const handleRestart = () => {
setCurrentQuestion(0);
setSelectedOption(null);
setScore(0);
setShowResult(false);
};


return (
<div className="quiz-container">
<h1>Quiz Application</h1>


{showResult ? (
<Result
score={score}
total={questions.length}
onRestart={handleRestart}
/>
) : (
<Question
data={questions[currentQuestion]}
current={currentQuestion}
total={questions.length}
selectedOption={selectedOption}
setSelectedOption={setSelectedOption}
onNext={handleNext}
/>
)}
</div>
);
}