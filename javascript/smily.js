/**
 * 
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */



const countSmilyFace = arr => 
    arr.reduce((count, face) => count + /^[:;][-~]?[)D]$/.test(face), 0)

module.exports = {
    countSmilyFace
}