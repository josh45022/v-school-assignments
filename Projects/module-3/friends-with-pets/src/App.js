import React from "react"
import friendsInfo from "./friendInfo"
import Friend from "./Friend"

function App() {
    const friendsData = friendsInfo.map(function(item) {
        return (
            <div>
                <Friend 
                    key={item.id} 
                    person={item}
                />
            </div>
        )
    })
    return friendsData
}

export default App

