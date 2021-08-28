/**
 * This test, tests some knowledge of Regular Expressions.
 *
 * See the test for what functions you need to implement.
 */

const answers  = {
    containsNumber(str){

        return /\d+/g.test(str)

    },
    containsRepeatingLetter(str){

        return /([a-z])\1/i.test(str)

    },
    endsWithVowel(str){

        return /[aeiou]$/i.test(str)

    },
    captureThreeNumbers(str){

        let matched = str.match(/[0-9]{3}/)
        return matched ? matched[0] : false

    },
    matchesPattern(str){

        return /^\d{3}-\d{3}-\d{4}$/.test(str)

    },
    isUSD(str){
        
        return /^\$(0|[1-9][0-9]{0,2})(,\d{3})*(\.\d{2})?$/.test(str)
        
    }
}

export default answers
