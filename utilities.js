
/**
 * calculates the circumference of a circle based on its radius.
 * @param {number} radius - The radius of the circle.
 * @returns {number} - The circumference of the circle.
 */

function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

// Check if calculateCircumference is in global scope
 console.log(typeof calculateCircumference); // Should log "function"