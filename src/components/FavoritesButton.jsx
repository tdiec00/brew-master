import {useNavigate} from "react-router-dom"
import api from "../services/apiConfig"

const FavoritesButton = ({favorite}) => {
  const default_input = {
    name: favorite.name,
    id: favorite.id,
    description: favorite.description,
  }

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const fields = default_input
    await api.post("/", {fields})
    navigate("/favorites")
  }

  return <button onClick={handleSubmit}>Add to Favorites List</button>
}

export default FavoritesButton
