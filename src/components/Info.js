import foto from "../images/Foto.jpg"
import "../style/style-Info.css"

function Info(){
    return(
        <div className="Info">
            <img src={foto}></img>
            <h1>Mateo Petraglia</h1>
            <h2>Frontend Developer</h2>
            <h3>github.com/petragliamateo</h3>
        </div>
    )
}

export default Info;