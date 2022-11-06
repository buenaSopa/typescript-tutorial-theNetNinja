import {HasFormatter} from "../Interfaces/HasFormatter"

class Payment  {
    constructor(
        private  recipient: string,
        private  details: string,
        private  amount: number
    ){}

    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`
    }
}

export {Payment}