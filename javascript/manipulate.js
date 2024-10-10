/**
 * 
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */


const manipulate = (str, prefix = '') => 
    str.length === 0 ? [prefix] :
    [...new Set(str.split('').flatMap((char, i) => 
        manipulate(str.slice(0, i) + str.slice(i + 1), prefix + char)
    ))]

module.exports = {
    manipulate
}