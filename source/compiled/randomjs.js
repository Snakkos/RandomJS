var CHARACTERS_NUMBERS = "1234567890";
var CHARACTERS_UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var CHARACTERS_LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
var CHARACTERS_ALPHANUMERIC = CHARACTERS_NUMBERS + CHARACTERS_UPPERCASE + CHARACTERS_LOWERCASE;
var CHARACTERS_ALPHANUMERIC_AND_SYMBOLS = CHARACTERS_ALPHANUMERIC + "@#&&*{}[],=-.+;'/";
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
function randomString(characters, length) {
    var generatedString = "";
    if (characters.length == 0) {
        console.log("Warning: Generating one or more random strings unsing an empty characters list");
    }
    for (var i = 0; i < length; i++) {
        generatedString += characters.charAt(randomInt(0, characters.length - 1));
    }
    return generatedString;
}
