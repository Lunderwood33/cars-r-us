


const database = {

    orderBuilder: {},

    paints: [
        {
            id: 1,
            color: "Silver"
        },
        {
            id: 2,
            color: "Midnight Blue"
        },

        {
            id: 3,
            color: "Firebrick Red"
        },
        {
            id: 4,
            color: "Spring Green"
        }
    ],

    interiors: [
        {
            id: 1,
            type: "Beige Fabric"
        },
        {
            id: 2,
            type: "Charcoal Fabric"
        },
        {
            id: 3,
            type: "White Leather"
        },
        {
            id: 4,
            type: "Black Leather"
        }
    ],

    technologies: [
        {
            id: 1,
            package: "Basic Package (basic sound system)"
        },
        {
            id: 2,
            package: "Navigation Package (includes integrated navigation controls)"
        },
        {
            id: 3,
            package: "Visibility Package (includes side and reat cameras)"
        },
        {
            id: 4,
            package: "Ultra Package (includes navigation and visibility packages)"
        }
    ],

    wheels: [
        {
            id: 1,
            size: "17 Pair Radial"
        },
        {
            id: 2,
            size: "17 Pair Radial Black"
        },
        {
            id: 3,
            size: "18 Pair Spoke Silver"
        },
        {
            id: 4,
            size: "18 Pair Spoke Black"
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