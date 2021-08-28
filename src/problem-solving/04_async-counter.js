/**
 * Export a function named 'count'.
 * It should call the given callback every 10th of a second with a increment from given start to end integer
 * Return a function to prematurely cancel the counting process.
 *
 * @param {number} start - Given to callback first
 * @param {number} end - Stop when count reached this value
 * @param {function(number): void} callback - Called after each 100ms with an increment
 * @returns {function(): void} - Cancel countdown function
 */

const count = (start, end, cb) => {

  let count = start;
  
  // We use setInterval to invoke our callback each 100ms and we increment the counter
  // We check if our counter surpassed the end we clearInterval to stop the
  // setInterval from being invoked
  let intervalID = setInterval(() => {
    count <= end ? cb(count++) : cancelCount();
  }, 100);

  // We return a function to prematurely cancel the counting
  const cancelCount = () => clearInterval(intervalID);
  return cancelCount;

};


module.exports.count = count;
