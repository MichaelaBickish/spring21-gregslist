import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";


//Private
function _draw() {
 let houses = ProxyState.houses
 let template = ''

 houses.forEach(house => {
     template += house.Template
 })

 document.getElementById('houses').innerHTML = template
}

//Public
export default class HousesController {
  constructor() {
    ProxyState.on("houses", _draw);
    _draw()
  }

  createHouse() {
    // if this method is triggered by an event (submit event) prevent the default action of reloding the page
    window.event.preventDefault()
    // grab the element from html that triggered this event
    const form = window.event.target
    debugger
    let newHouse = {
        bedrooms: form.bedrooms.value,
        baths: form.baths.value,
        sqFootage: form.sqFootage.value,
        address: form.address.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value
    }
    housesService.createHouse(newHouse)

    // @ts-ignore
    form.reset()

    // get the modal and close (using jQuery's "$" selector) 
    document.getElementById('new-house-form').modal('hide')
  }


  deleteHouse(id) {
    housesService.deleteHouse(id)
  }

  bid(id) {
    housesService.bid(id)

}
}
