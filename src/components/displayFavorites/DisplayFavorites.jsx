import {useState, useEffect} from "react"
import api from "../../services/apiConfig"
import {FavoritesLink} from "../styles/FavoritesLink.styled"
import {FavoriteListContainer} from "../styles/FavoriteListContainer.styled"
import DeleteButton from "../DeleteButton"
import "./displayFavorites.css"

const DisplayFavorites = () => {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let res = await api.get()
      setDatas(res.data.records)
    }
    fetchData()
  }, [])

  return (
    <div>
      <FavoriteListContainer>
        <h1>Your List Favorite Beers</h1>
        <div className="favorites-list-container">
          {datas.map((data, index) => {
            return (
              <div key={index} className="favorites-container">
                <FavoritesLink to={`/description/${data.fields.id}`}>
                  <h3>{data.fields.name}</h3>
                  <p>{data.fields.description}</p>
                </FavoritesLink>
                <DeleteButton id={data.id} />
              </div>
            )
          })}
        </div>
      </FavoriteListContainer>
    </div>
  )
}

export default DisplayFavorites
