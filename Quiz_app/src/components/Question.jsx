export default function Question({
data,
current,
total,
selectedOption,
setSelectedOption,
onNext
}) {
return (
<div className="question-box">
<h3>
Question {current + 1} / {total}
</h3>
<p>{data.question}</p>


{data.options.map((option, index) => (
<label key={index} className="option">
<input
type="radio"
name="option"
checked={selectedOption === index}
onChange={() => setSelectedOption(index)}
/>
{option}
</label>
))}


<button onClick={onNext} disabled={selectedOption === null}>
Next
</button>
</div>
);
}