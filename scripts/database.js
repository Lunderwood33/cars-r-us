


const database = {

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
            size: 17,
            type: "Pair Radial"
        },
        {
            id: 2,
            size: 17,
            type: "Pair Radial Black"
        },
        {
            id: 3,
            size: 18,
            type: "Pair Spoke Silver"
        },
        {
            id: 4,
            size: 18,
            type: "Pair Spoke Black"
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
