import { generateId } from "../Utils/GenerateId.js"

export default class House {
    constructor (bedrooms, baths, sqFootage, address, price, imgUrl){
        this.id = generateId()
        this.bedrooms = bedrooms
        this.baths = baths
        this.sqFootage = sqFootage
        this.address = address
        this.price = price
        this.imgUrl = imgUrl
    }


    get Template() {
        return `
        <div class="col-md-4 mb-3">
          <div class="card shadow">
              <img class="card-img-top" src="${this.imgUrl}" alt="">
              <div class="card-body">
                  <h4 class="card-title">${this.bedrooms} Bed | ${this.baths} Bath | ${this.sqFootage} Sq Ft</h4>
                  <p class="card-text">${this.address} - $${this.price.toFixed(2)}</p>
              </div>
              <div class="px-3 pb-3 d-flex justify-content-between">
                  <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
                  <button type="button" class="btn btn-info" onclick="app.housesController.bid('${this.id}')">Bid</button>
              </div>
          </div>
        </div>
        `
      }
}




