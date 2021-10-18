const votes = ['y','y','n','y','n','y','n','y','n','n','n','y','y']

const results = votes.reduce((tally,val) => {
    tally[val] = (tally[val] || 0) + 1
    return tally
},{})
//console.log(results)

const books = [
    {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 3.25
    },
    {
        title: "Bones: The Complete Edition",
        authors: ["Jeff Smith"],
        rating: 4.42
    },
    {
        title: "American Gods",
        authors: ["Neil Gaiman"],
        rating: 4.11

    }

]
const groupedbyRatings = books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating)
    if (!groupedBooks[key]) groupedBooks[key] = []
    groupedBooks[key].push(book)
    return groupedBooks
},{})
console.log(groupedbyRatings)

