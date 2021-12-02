/*const examScores = [50,36,59,87,45,32]

for (let i = 0; i < examScores.length; i++)
    console.log(examScores[i])

    const word = "stressed"
    let reverseWord = ""
    for (let i = word.length - 1; i >= 0; i--)
        reverseWord += word[i]

        console.log(word)
        console.log(reverseWord)
        //let row2 = []
        const gameBoard = [
            [4, 32 ,8, 4],
            [64, 8, 32 ,2],
            [8, 32, 16, 4],
            [2, 8, 4, 2]
        ]
        for (let i = 0; i < gameBoard.length; i++){
            let row = gameBoard[i]
            console.log(gameBoard[i])
            for(let j = 0; j < row.length; j++)
            console.log(row[j])
            //row2.push(row[j])
        }
        //console.log(row2)

   const target = Math.floor(Math.random() * 10)
   let guess = Math.floor(Math.random() * 10)
   while (guess !== target){
        console.log(guess)
     guess = Math.floor(Math.random() * 10)
   }
   console.log(`Target: ${target} Guess: ${guess}`)

   let array = [1,2,3,4,9,6]
   for (let char in array)
        console.log(char)*/
        
//for...of with object
const movieReviews = {
    Arrival                 : 9.5,
    Alien                   : 9,
    Amelie                  : 8,
    "in Bruges"             : 9,
    Amadeus                 : 10,
    "Kill Bill"             : 8,
    "Little Miss Sunshine"  : 8.5,
    Coraline                : 7.5
}
total = 0
div = 0
for (let movie in movieReviews){
    total += movieReviews[movie]
    div ++
    console.log(movie)
}
console.log(total/div)
