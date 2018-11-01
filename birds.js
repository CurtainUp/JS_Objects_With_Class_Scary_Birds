class ScaryBirds {

  constructor (props) {
    this.height = props.height
    this.flightless = props.flightless
    this.isExtinct = props.isExtinct
    this.name = props.name
    this.runningSpeed = props.runningSpeed
  }

  toString (prop1, prop2, prop3) {
    console.log(`The ${this.name} is a big, scary bird that stands up to ${this.height} and can
    run up to ${this.runningSpeed}! DANG, ${this.name}. You scary!`)
  }
}

const pelicanProperties = {
  height: "6 ft",
  flightless: false,
  isExtinct: false,
  name: "Dalmation Pelican",
  runningSpeed: "300 light years"
}

const pelican = new ScaryBirds(pelicanProperties)

const ostrichProperties = {
  height: "6.9 ft",
  flightless: true,
  isExtinct: false,
  name: "Ostrich",
  runningSpeed: "43 mph"
}

const ostrich = new ScaryBirds(ostrichProperties)

const bustardProperties = {
  height: "5 ft",
  flightless: false,
  isExtinct: false,
  name: "Kori Bustard",
  runningSpeed: "like a super fast speed"
}

const bustard = new ScaryBirds(bustardProperties)

pelican.toString()
ostrich.toString()
bustard.toString()

