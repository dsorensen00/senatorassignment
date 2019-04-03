import Senators from './data/senators'

export const republicans = () => {
  return Senators.filter(senator=> senator.party === 'Republican' )
}

export const democrats = () => {
  return Senators.filter(senator=> senator.party === 'Democrat')
}

export const independents = () => {
  return Senators.filter(senator=> senator.party === 'Independent')
}

export const males = () => {
  return Senators.filter(senator=> senator.person.gender_label === 'Male')
}

export const females = () => {
  return Senators.filter(senator=> senator.person.gender_label === 'Female')
}

export const byState = (state = 'UT') => {
  return Senators.filter(senator=> senator.state === 'UT')
}

export const mapping = () => {
  return Senators.map(senator=> ({
   firstName: senator.person.firstname,
   lastName: senator.person.lastname,
   party: senator.party,
   gender: senator.person.gender_label
  })
  )
}
export const birthplaceSeniorSenator = () => {
  return Senators.filter((senator=> senator.state === 'AZ'){
    
  })



}


// const REPLACE_ME_WITH_CODE = false
