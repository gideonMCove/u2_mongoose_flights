const db = require('./db')
const { Flight, Airport } = require('./models')

const findFlight = async () => {
    const flights = await Flight.find()
    const airports = await Airport.find()
    console.log(flights)
    console.log(airports)
}

const detailFlight = async () => {
    const flights = await Flight.findById('664ff817b2efb612a4275fcf')
    const airports = await Airport.findById('664ff882d0edc983516ec244')
    console.log(flights)
    console.log(airports)
}

const createFlight = async () => {
    const airport = await Airport.findOne()
    const airport2 = await Airport.findOne()

    let flight = await Flight.create({
        airline: 'Air Canada',
        flightNumber: 123,
        price: 456,
        numberOfSeats: 789,
        departingAirport: airport._id,
        arrivalAirport: airport2._id,
        departureDateTime: '1/2, 12:34',
    })
    console.log(flight)
}

const updateFlight = async () => {
    const updatedFlight = await Flight.updateOne(
        { price: 200 },
        { price: 2000000}
    )
    const updatedAirport = await Airport.updateOne(
        { name: 'Dallas International Airport', location: 'Dallas Fort Worth', code: 'DFW' },
        { name: 'Montréal-Pierre Elliott Trudeau International Airport', location: 'Montreal', code: 'YUL' },
    )
    console.log(updatedFlight, updatedAirport)

}

const deleteFlight = async () => {
    let deletedFlight = await Flight.deleteOne({ price: 15})
    let deletedAirport = await Airport.deleteOne( {name: 'Indianapolis International Airport'})
    console.log(deletedFlight, deletedAirport)
}

async function main() {
    try {
        await findFlight()
        await detailFlight()
        await createFlight()
        await updateFlight()
        await deleteFlight
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
  }
  
  main()