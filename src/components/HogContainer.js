import React, {useState} from "react"
import HogTile from "./HogTile"

function HogContainer({hogs}) {
    console.log(hogs)
    const [filterGreased, setFilterGreased] = useState(false)
    const [sortName, setSortName] = useState(hogs)
    const [myHogs, setMyHogs] = useState(hogs)
    function handleFilter(e) {
        setFilterGreased(!filterGreased)

        if (e.target.checked) {
        const hogsFiltered = myHogs.filter(hog => {
            return hog.greased === true
        })
        setMyHogs(hogsFiltered)
        } else
        setMyHogs(hogs)

    }

    function handleSort(e) {
        setSortName(!sortName)
        if(e.target.checked) {
           let sortedHogs = myHogs.slice().sort((a,b) => {
               if(a.name < b.name) return -1
               if(a.name > b.name) return 1
               return 0
           })
           setMyHogs(sortedHogs)
        }
        else setMyHogs(hogs)
    }
    
    return(
        <div>
            Only greased:<input onClick={handleFilter} type="checkbox" id="filter"></input> 
            <br></br>
            Sort by name:<input onClick={handleSort} type="checkbox" id="sort"></input>
        {myHogs.map(hog => <HogTile hog={hog} /> )}
        </div>
        
    )
}

export default HogContainer