import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";

class HousesService {
  createHouse(newHouse){
    let house = new House(newHouse.bedrooms, newHouse.baths, newHouse.sqFootage, newHouse.address, newHouse.price, newHouse.imgUrl)
    ProxyState.houses = [...ProxyState.houses, house]
  }

  bid(id) {
    // find the house
    let house = ProxyState.houses.find(house => house.id === id)
    // make the change
    house.price += 100

    // trigger the cycle (this can only be the top level properties of ProxyState) to update the page
    ProxyState.houses = ProxyState.houses
  }
  deleteHouse(id) {
    // remove the house with that id from the array... then trigger the update cycle by setting the value of ProxyState.houses
    // NOTE filter itterates over an array and only keeps things where the statement provided is true
    // here we remove the house with the id by only keeping houses that do NOT have that id.
    // THEN we set the ProxyState array back to the result after the filter.
    ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
  }
}

export const housesService = new HousesService();