
const validateSpace = (snack) => {
    let array = snack.name.split(" ");
    console.log("Word Array",array);
    let upperFunc = array.map((word) => {
        if(word.length> 2){
            return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
        }else{
            return word.toLowerCase();
        }
        // console.log("DOT MAP", word)
    }).join(" ")
    //console.log("HELLLOO",upperFunc)
    return upperFunc
}

module.exports = validateSpace;