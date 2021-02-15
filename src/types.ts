type Invoice = {
  customer: string
  performances: Perfomances[]
}

type Perfomances = {
  playID: string
  audience: number
}

// type Plays = {
//   hamlet:Play
//   'as-like':Play
//   othelo:Play 
// }

type Play = {
  name: string
  type: string
}

export {Invoice, Perfomances, Play}