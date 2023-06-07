import Belle from "./Assets/Belle.jpeg";
import github from "./Assets/github-logo.png"

export default function BelleBio() {
    return (
        <>
            <div className="BelleBio">
                <div className="BelleCard">
                    <img className="biopic" src={Belle} alt='Belle'/>
                </div>
                <strong> Blanca (Belle) Altamirano </strong>
                <p> IT Support specialist and Aspiring FSW developer who loves gaming 🎮, reading fantasy 📖, and spending time with family👨‍👩‍👦. </p>
            </div>
            <div className="github-links">
                <a href="https://github.com/winterbelle">
                <img src={github} alt="Github Link" className="github-logo" />
                </a>
            </div>
        </>
    )
}