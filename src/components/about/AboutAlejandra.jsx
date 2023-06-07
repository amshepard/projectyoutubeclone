import Alejandra from "./Assets/Alejandra.jpeg"
import github from "./Assets/github-logo.png"

export default function AlejandraBio() {
    return (
        <>
            <div className="AlejandraBio">
                <div className="AlejandraCard">
                    <img className="biopic" src={Alejandra} alt='Alejandra'/>
                </div>
                <strong> Alejandra Ramirez </strong>
                <p> Entry-level Full Stack Javascript Developer, looking to fulfill society needs by supporting IT growth in all fields. </p>
            </div>
            <div className="github-links">
                <a href="https://github.com/AlejandraRV91">
                <img src={github} alt="Github Link" className="github-logo" />
                </a>
            </div>
        </>
    )
}