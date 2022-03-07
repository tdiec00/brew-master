const RemoveDuplicates = ({beerData}) => {
  let hopArr = []
  let newHopArr = []
  beerData?.ingredients?.hops.map((hop) => {
    hopArr.push(hop.name)
    let obj = {}
    for (let i of hopArr) {
      obj[i] = true
    }
    newHopArr = Object.keys(obj)
  })
  return newHopArr.map((hop) => {
    return <p key={hop}>{hop}</p>
  })
}

export default RemoveDuplicates
