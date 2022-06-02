import Info from "./components/Info"
import About from "./components/About"
import Footer from "./components/Footer"
import "./style/style.css"

function App(){
    return(
        <div className="UserCardBody">
            <div className="UserCard">
                <Info />
                <About />
                <Footer />
            </div>
        </div>
    )
}

export default App;