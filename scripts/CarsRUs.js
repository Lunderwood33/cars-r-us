import { CarInteriors } from "./Interiors.js"
import { Paints } from "./Paints.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"





export const CarsRUs = () => {
    return `
        <h1>Cars 'R' Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paint</h2>
                ${Paints()}
            </section>
            <section class="choices__interiors options">
                <h2>Interior</h2>
                ${CarInteriors()}
                </section>
            <section class="choices__technologies options">
                <h2>Technology</h2>
                ${Technologies()}
                </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
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