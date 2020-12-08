import React from "react"
import VacationInfo from "./VacationInfo.js"
import VacationComp from "./VacationComponent.js"

function App() {
  const vacationData = VacationInfo.map(function(item){
      return(
         <VacationComp key={item.id} choice={item}/>
      )
    }
  )
     
  return (
    vacationData
  )
}

export default App