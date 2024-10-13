import { Answer } from "./answer";

export function Question(props) {
    return (
        <div className="question">
            <h3 className="question__title">{props.title}</h3>
            <p className="question__definition">{props.text}</p>
            <Answer answer="Answer 1"/>
            <Answer answer="Answer 2"/>
        </div>
    );
};