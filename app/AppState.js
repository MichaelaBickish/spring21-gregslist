import Car from "./Models/Car.js"
import House from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [
    new Car('Ford', 'Pinto', 1975, 1000, 'ITS HOT!', 'https://pbs.twimg.com/media/ETpZLKZXgAANyBw.jpg'),
    new Car('AMC', 'Gremlin', 1972, 1200, 'Gremlin Green!', 'https://cdn1.mecum.com/auctions/fl0120/fl0120-395915/images/1-1572992729058@2x.jpg?1574881322000'),
    new Car('Volkswagen', 'Rabbit', 1983, 2990, 'Not an actual rabbit', 'https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/546b400aba069_-_gti11-lg.jpg'),
    new Car('Zastava', 'Yugo', 1988, 100, 'spome rust', 'https://media.istockphoto.com/photos/old-rusty-red-broken-and-damaged-yugo-car-full-of-junk-parked-and-on-picture-id1056309302?s=612x612')
  ]

  /**@type {House[]} */
  houses = [
    new House(3, 2, 1625, '436 11th Ave S. Boise, ID 83702', 358000, 'https://cdn.houseplansservices.com/product/min6o9ss5pb54bmsfngosscuqq/w620x413.JPG?v=6'),
    new House(5, 3.5, 4100, '12643 W Roosevelt St. Meridian, ID 83676', 689000, 'https://cdn.houseplansservices.com/product/devvpg3i3s31hmkutcr2rjvdr1/w800x533.jpg?v=5'),
    new House(2, 1, 1350, '322 Houston Dr. Caldwell, ID 83605', 240000, 'https://static.onecms.io/wp-content/uploads/sites/37/2019/07/25145312/white-house-wooden-fence-d4a01820.jpg')
  ]
}

// NOTE Oh oh.. its magic! Ya know!
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
