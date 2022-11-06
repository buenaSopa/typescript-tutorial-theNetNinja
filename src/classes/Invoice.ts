import {HasFormatter} from "../Interfaces/HasFormatter"

class Invoice implements HasFormatter {
    constructor(
        private  client: string,
        private  details: string,
        private  amount: number
    ){}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

export {Invoice}