import Antoine from "./Assets/Antoine.jpeg";
import github from "./Assets/github-logo.png"

export default function AntoineBio() {
    return (
        <>
            <div className="AntoineBio">
                <div className="AntoineCard">
                    <img className="biopic" src={Antoine} alt='Antoine'/>
                </div>
                <strong> Antoine Shephard </strong>
                <p> Pursuit Fellow on the path to becoming a Fullstack Developer. 🗽 Native NYer. 👯‍♀️ Dad of two. 💪 Capable. 🗣 Communicator. 🤝 Collaborator. </p>
            </div>
            <div className="github-links">
                <a href="https://github.com/amshepard">
                <img src={github} alt="Github Link" className="github-logo" />
                </a>
            </div>
        </>
    )
}