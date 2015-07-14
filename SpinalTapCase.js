function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    str = str.replace(/([A-Z])/g, " $1").replace(/[^A-Za-z]+/g, "-").replace(/^[^A-Za-z]/, "");
    return str.toLowerCase();
}

spinalCase('This Is Spinal Tap');