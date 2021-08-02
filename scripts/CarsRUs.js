import { Interiors } from "./Interiors.js"
import { Paints } from "./Paints.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"


// remember to invoke fuctions

export const CarsRUs = () => {
    return `
        <h1>Cars 'R' Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                // remember to invoke fuction
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                // remember to invoke fuction
            </section>
            <section class="choices__technologies options">
                <h2>Tecnologies</h2>
                // remember to invoke fuction
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                // remember to invoke fuction
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            
        </article>
    `
}