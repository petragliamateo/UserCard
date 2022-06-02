import "../style/style-Footer.css"
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"
import github from "../images/github.svg"

function Footer(){
    return(
        <div className="Footer">
            <a href="https://twitter.com">
                <img src={twitter}></img>
            </a>
            <a href="https://facebook.com">
                <img src={facebook}></img>
            </a>
            <a href="https://Instagram.com">
                <img src={instagram}></img>
            </a>
            <a href="https://github.com">
                <img src={github}></img>
            </a>
        </div>
    )
}

export default Footer;