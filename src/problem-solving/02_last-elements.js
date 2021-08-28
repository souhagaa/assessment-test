/**
 * Get the last n data elements from the nested object
 *
 * See the test if you have questions
 */

// Using recursion

const getLastNumbers = (payload, n) => {

    if (n === 0) return []
    let arr = []
    
    if(payload.next) {
        arr.push(payload.data)
        arr = arr.concat(getLastNumbers(payload.next, n))

    } else { 
        arr.push(payload.data)
    }
    return arr.slice(-n)

}


// We can achieve the same result using JSON.stringify to turn the object into string
// then matching with regex to get the numbers in the string
// after that we take the last n elements and convert them back into numbers

// const getLastNumbers = (payload, n) => {
//     if (n === 0) return []
//     let numbers = JSON.stringify(payload).match(/\d+/g)
//     return numbers.slice(-n).map(element => {
//         return +element
//     });
// }

module.exports.getLastNumbers = getLastNumbers