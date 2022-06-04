
function HogDetails({hog}) {
    return(
        <div>
            {hog.specialty} <br></br>
            {hog.greased ? "is greased" : "is not greased"} <br></br>
            {hog.weight} <br></br>
            {hog["highest medal achieved"]} <br></br>
        </div>
    )
}
export default HogDetails