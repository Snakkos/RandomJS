const CHARACTERS_NUMBERS = "1234567890"
const CHARACTERS_UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const CHARACTERS_LOWERCASE = "abcdefghijklmnopqrstuvwxyz"
const CHARACTERS_ALPHANUMERIC = CHARACTERS_NUMBERS + CHARACTERS_UPPERCASE + CHARACTERS_LOWERCASE
const CHARACTERS_ALPHANUMERIC_AND_SYMBOLS = CHARACTERS_ALPHANUMERIC + "@#&&*{}[],=-.+;'/"

function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min
}

function randomString(characters: string, length: number): string {
    let generatedString: string = ""

    if(characters.length == 0) {
        console.log("Warning: Generating a string unsing an empty characters list")
    }

    for(let i = 0; i < length; i++) {
        generatedString += characters.charAt(randomInt(0, characters.length - 1))
    }

    return generatedString
}
