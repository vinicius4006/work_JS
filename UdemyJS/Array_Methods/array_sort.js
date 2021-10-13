const prices =  [400.50, 3000, 99.99, 35.99, 12.00, 9500]


const ascSort = prices.sort((a,b) => a - b)
const descSort = prices.sort((x,y) => y - x)

/*
If compareFunc(a,b) returns less than 0 
    -> Sort a before b
If compareFunc(a,b) returns 0
    -> Leave a and b unchanged with respect to each other
If compareFunc(a,b) returns greater than 0
    -> Sort b before a
*/