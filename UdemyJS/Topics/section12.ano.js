const annoyer = {
    phrases: ["literraly","cray cray",
    "I can't even",
    "Totes!","YOLO",
    "Can't Stop, Won't Stop"],
    pickPhrase(){
        const {
            phrases
        } = this
        const idx = Math.floor(Math.random() * phrases.length)
        return phrases[idx]
    },
    start(){
        //console.log(this.pickPhrase())
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase())
        },3000)
    },
    stop(){
        clearInterval(this.timerId)
    console.log("PHEW THANK HEAVENS THAT IS OVER")
    }
}


console.log(annoyer.start())
annoyer.stop()