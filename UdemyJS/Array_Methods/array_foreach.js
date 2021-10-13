const books = [
    {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25
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
books.forEach(txt => console.log(txt.title.toUpperCase()))

const n = [
    {
        num1: 9
    },
    {
        num2: 8
    }

]

n.forEach((elem,index,array) => console.log(elem,index,array.length))
//1 parâmetro: cada item da lista
//2 parâmetro: cada posição do item
//3 parâmetro: exibe a lista onde se encontra todos os itens