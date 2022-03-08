import {createBrowserHistory} from "history"

const Alphabetize = ({datas}) => {
  let history = createBrowserHistory()

  const handleChange = (value) => {
    history.push(`/description/${value}`)
    history.go()
  }

  let beerArr = []
  datas.map((data) => {
    return beerArr.push({id: data.id, name: data.name})
  })
  beerArr.sort(function (a, b) {
    return a.name - b.name
  })

  return (
    <select onChange={(event) => handleChange(event.target.value)}>
      <option>Select a Beer</option>
      {beerArr.map((beer) => {
        return (
          <option key={beer.id} value={beer.id}>
            {beer.name}
          </option>
        )
      })}
    </select>
  )
}

export default Alphabetize
