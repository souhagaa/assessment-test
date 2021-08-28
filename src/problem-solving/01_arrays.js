/**
 * Have a look at the test and implement the needed function, so the test will succeed
 */



const sum = arr => {

    return arr.reduce((a, b) => a + b, 0);

}

const concat = (...args) => {

    return [].concat(...args);
    
    // Or we can do this without concat with a forEach 
    // let big = []
    // args.forEach(el => {
    //     big.push(...el)
    // })
    // return big

}

const count = (arr, el) => {

    return arr.reduce((accumulator, element) => {
        return element === el ? accumulator+1 : accumulator
    }, 0)

}

const duplicates = arr => {

    // Count the number of occurences of each element in the array
    let occurences = {}
    
    occurences = arr.reduce((list, elem) => {  
        !list[elem] ? list[elem] = 1 : list[elem]++
        return list; 
    }, {});

    let dups = []
    for (let el in occurences) {
        if(occurences[el] > 1) dups.push(+el)
    }
    return dups;
    
    // Another way to solve this is using the Set data structure
    
    // let occurences = {}
    // let dups = new Set()
    // for(let el of arr) {
    //     if(!occurences[el]) occurences[el] = 1
    //     else {
    //         occurences[el]++
    //         dups.add(el)
    //     }
    // }
    // return Array.from(dups)
}

const square = arr => {

    return arr.map(el => el**2)

}

module.exports = {
    square,
    sum,
    duplicates,
    count,
    concat
}