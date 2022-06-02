import "../style/style-About.css"
import email from "../images/maillogo.png"
import linkedin from "../images/linkedinlogo.png"

function About(){
    return(
        <div>
            <div className="BotonesConteiner">
                <a href="petragliamateo@gmail.com">
                    <button className="Botones">
                        <img src={email}></img>
                        <p>Email</p>
                    </button>
                </a>
                <a href="https://linkedin.com/petragliamateo">
                    <button className="Botones">
                        <img src={linkedin}></img>
                        <p>Linkedin</p>
                    </button> 
                </a>   
                
            </div>

            <div className="About">
                <h1>About</h1>
                <p>Soy Mateo Petraglia, estudiante de Ingeniería Electrónica de la Universidad Nacional de Buenos Aires, tengo conocimientos de programación</p>
                <h1>Interests</h1>
                <p>Me gusta estudiar y aprender cada día algo nuevo.</p>
            </div>
        </div> 
    )    
}

export default About;