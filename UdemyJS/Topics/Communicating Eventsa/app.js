const form = document.querySelector("#signup-form")
const creditCard = document.querySelector("#cc")
const termsCheckbox = document.querySelector("#terms")
const selectVeggie = document.querySelector("#veggie")

const formData = {}
for (let input of [ creditCard, termsCheckbox, selectVeggie]){
    input.addEventListener("input", ({target}) => {
        const {name, type, value, checked} = target
        formData[name] = type === "checkbox" ? checked : value
        console.log(formData)
    })
}
/*
creditCard.addEventListener("input", (e) => {
console.log("CC CHANGED", e)
formData["cc"] = e.target.value
})

selectVeggie.addEventListener("input", (e) => {
    console.log("Veggie CHANGED", e)
    formData["veggie"] = e.target.value
    })

termsCheckbox.addEventListener("input", (e) => {
    console.log("CHECKBOX", e)
    formData["agreeToTerms"] = e.target.checked
})*/
