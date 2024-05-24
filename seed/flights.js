const db = require('../db')
const {Airport, Flight} = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error"))

const main = async () => {
    const torontoAirport = await Airport.find({ name: 'Toronto Pearson International Airport'})
    const vancouverAirport = await Airport.find({ name: 'Vancouver International Airport'})
    const indyAirport = await Airport.find({ name: 'Indianapolis International Airport'})
    const dallasAirport = await Airport.find({ name: 'Dallas International Airport'})
    const flights = [
        {
            airline: 'Air Canada',
            flightNumber: 1,
            price: 1000000,
            numberOfSeats: 300,
            departingAirport: torontoAirport[0]._id,
            arrivalAirport: dallasAirport[0]._id,
            departureDateTime: '1/7, 14:30',
        },
        {
            airline: 'Spirit Airlines',
            flightNumber: 109238390482304283420394858129,
            price: 350,
            numberOfSeats: 300,
            departingAirport: indyAirport[0]._id,
            arrivalAirport: torontoAirport[0]._id,
            departureDateTime: '1/7, 00:30',
        },
        {
            airline: 'Ryanair',
            flightNumber: 7,
            price: 15,
            numberOfSeats: 50,
            departingAirport: indyAirport[0]._id,
            arrivalAirport: torontoAirport[0]._id,
            departureDateTime: '1/7, 16:00',
        },
        {
            airline: 'Air Canada',
            flightNumber: 227,
            price: 115,
            numberOfSeats: 77,
            departingAirport: torontoAirport[0]._id,
            arrivalAirport: vancouverAirport[0]._id,
            departureDateTime: '1/7, 19:15',
        },
        {
            airline: 'Air Canada',
            flightNumber: 666,
            price: 666,
            numberOfSeats: 666,
            departingAirport: dallasAirport[0]._id,
            arrivalAirport: indyAirport[0]._id,
            departureDateTime: '8/5, 07:06',
        },
        {
            airline: 'Spirit Airline',
            flightNumber: 734,
            price: 200,
            numberOfSeats: 12,
            departingAirport: indyAirport[0]._id,
            arrivalAirport: vancouverAirport[0]._id,
            departureDateTime: '1/7, 10:15',
        },
        {
            airline: 'Air Canada',
            flightNumber: 100,
            price: 471,
            numberOfSeats: 88,
            departingAirport: torontoAirport[0]._id,
            arrivalAirport: vancouverAirport[0]._id,
            departureDateTime: '1/7, 23:15',
        },
        
        
    ]
    await Flight.insertMany(flights)
    console.log('Created Flights with Airports!')
}

const run = async () => {
    await main()
    db.close()
}

run()