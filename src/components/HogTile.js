import React, {useState} from "react"
import HogDetails from "./HogDetails"

function HogTile({hog}) {
    const [visibleDetails, setVisibleDetails] = useState(false)
    function handleClick() {
        setVisibleDetails(visibleDetails => !visibleDetails)
    }
    return(
        <div>
            <h1>{hog.name}</h1>
            <img onClick={handleClick} src={hog.image} height="200" width="250" ></img>
            {visibleDetails ? 
            <HogDetails hog={hog} />
            : null }
        </div>
    )
}
export default HogTile