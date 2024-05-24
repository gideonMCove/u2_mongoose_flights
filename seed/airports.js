const db = require('../db')
const {Airport} = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
    
    const airports = [
        {
            name:'Toronto Pearson International Airport',
            location:'Toronto',
            code:"YYZ",
        },
        {
            name:'Vancouver International Airport',
            location:'Vancouver',
            code:"YVR",
        },
        {
            name:'Indianapolis International Airport',
            location:'Indianapolis',
            code:"IND",
        },
        {
            name:'Dallas International Airport',
            location:'Dallas Fort Worth',
            code:"DFW",
        },

    ]
    await Airport.insertMany(airports)
    console.log('Created Flights with Airports!')
}

const run = async () => {
    await main()
    db.close()
}

run()