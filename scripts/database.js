


const database = {

    orderBuilder: {},

    paints: [
        {
            id: 1,
            color: "Silver",
            price: 1000.00
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 1500.00
        },

        {
            id: 3,
            color: "Firebrick Red",
            price: 2000.00
        },
        {
            id: 4,
            color: "Spring Green",
            price: 2300.00
        }
    ],

    interiors: [
        {
            id: 1,
            type: "Beige Fabric",
            price: 200.00
        },
        {
            id: 2,
            type: "Charcoal Fabric",
            price: 300.00
        },
        {
            id: 3,
            type: "White Leather",
            price: 800.00
        },
        {
            id: 4,
            type: "Black Leather",
            price: 1000.00
        }
    ],

    technologies: [
        {
            id: 1,
            package: "Basic Package (basic sound system)",
            price: 200.00
        },
        {
            id: 2,
            package: "Navigation Package (includes integrated navigation controls)",
            price: 500.00
        },
        {
            id: 3,
            package: "Visibility Package (includes side and rear cameras)",
            price: 750.00
        },
        {
            id: 4,
            package: "Ultra Package (includes navigation and visibility packages)",
            price: 1500.00
        }
    ],

    wheels: [
        {
            id: 1,
            size: "17 Pair Radial",
            price: 600.00
        },
        {
            id: 2,
            size: "17 Pair Radial Black",
            price: 650.00
        },
        {
            id: 3,
            size: "18 Pair Spoke Silver",
            price: 800.00
        },
        {
            id: 4,
            size: "18 Pair Spoke Black",
            price: 950.00
        }
    ],
    customOrders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelId: 1,
            timestamp: 1614659931693
        }
    ]
}


export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}