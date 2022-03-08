import Alphabetize from "../Alphabetize"
import {DisplayHomeContainer} from "../styles/DiplayHomeContainer.styled"
import beer from "../../images/beer.png"
import "./displayHome.css"

const DisplayHome = ({datas}) => {
  return (
    <div>
      <DisplayHomeContainer>
        <h1>Welcome to Brew Master Index</h1>
        <p>
          Hello my fellow brewer. Are you a first timer and not sure which beer to start with? Or maybe you have explored around and are not sure what or where to begin. Well you have come to the
          right place. Explore our vast index of beers and ingredients, and experience how to get your brew on!
        </p>
        <h2>Check out below to get started</h2>
        <p>Select from the list of beers below</p>

        <Alphabetize datas={datas} />
        <br />
        <div className="home-img-container">
          <img className="home-img" src={beer} alt="4 beer bottles"></img>
        </div>
      </DisplayHomeContainer>
    </div>
  )
}

export default DisplayHome
