import {useState, useEffect} from "react"
import axios from "axios"
import DisplayHome from "./displayHome/DisplayHome"

const GetData = () => {
  const [datas, setDatas] = useState([])
  // const [beers, setBeers] = useState([])
  // let beers = []

  useEffect(() => {
    const fetchData = async () => {
      for (let i = 1; i < 2; i++) {
        let url = `https://api.punkapi.com/v2/beers?page=${i}&per_page=80`
        let res = await axios.get(`${url}`)
        let currentBeers = res.data
        setDatas([...datas, ...currentBeers])
      }
      // setDatas(beers)
    }
    fetchData()
  }, [])

  return (
    <div>
      <DisplayHome datas={datas} />
    </div>
  )
}

export default GetData
