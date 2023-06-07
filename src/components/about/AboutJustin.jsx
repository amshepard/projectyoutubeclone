import Justin from "./Assets/Justin.png";
import github from "./Assets/github-logo.png"

export default function JustinBio() {
    return (
        <>
            <div className="JustinBio">
                <div className="JustinCard">
                    <img className="biopic" src={Justin} alt='Justin'/>
                </div>
                <strong> Justin Knolley </strong>
                <p> Fullstack Developer Aspiring to Break The Barriers for POC in Tech. </p>
            </div>
            <div className="github-links">
                <a href="https://github.com/j-knolley">
                <img src={github} alt="Github Link" className="github-logo" />
                </a>
            </div>
        </>
    )
}