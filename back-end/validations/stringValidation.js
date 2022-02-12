// Expected: "Spiders on a Log"
// Received: "spiders on a log"

// Expected: "CoBbos"
// Received: "COMBOS"

// Expected: "Flamin' Hot Cheetoes"
// Received: "FLAMIN' hot Cheetoes"

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











// let testing = snack.name.split(" ")
// console.log("THE SPLIT",testing)
// let mapFunction = testing.map((el)=> {
//     if(el.length > 2){
//         console.log(el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
//         el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
//     }else{
//         console.log(el.toLowerCase());
//         el.toLowerCase();
//     }
// })
// console.log(mapFunction)