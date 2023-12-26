import { Component } from "react"

import './App.css';


const cartList = [
  {
    id: 1,
    item: "1 Pair",
    price: "190.00",
    percentage: "40",
    sizes: ["S", "M", "L"],
    colors: ["Colour", "Blue", "Green"],

  },
  {
    id: 2,
    item: "2 Pair",
    price: "250.00",
    percentage: "50",
    sizes: ["S", "M", "L"],
    colors: ["Colour", "Blue", "Green"],
    offerPrice: "195.00",
    popular: "Most Popular"

  },
  {
    id: 3,
    item: "2 Pair",
    price: "250.00",
    percentage: "60",
    sizes: ["S", "M", "L"],
    colors: ["Colour", "Blue", "Green"],

  }
]


class App extends Component {
  state = { selectedOption: 0 }

  getSelectedId = (event) => {
    const updatedValue = Number(event.target.id)
    this.setState({ selectedOption: updatedValue })
  }



  render() {
    const { selectedOption } = this.state
    return (
      <div className="bg-container ">
        <div className="title-container">
          <hr />
          <h1 className="title">Bundle & Save</h1>
          <hr />
        </div>
        <ul>
          {
            cartList.map(eachObject => (<li className="card-main-container" key={eachObject.id}>
              <label htmlFor={eachObject.id} className="label-container" >
                <div className={eachObject.id === selectedOption ? "selected-card-container" : "card-container"}>
                  <div className="card-head-container flx-row">
                    <div className="flx-row input-plus-div">
                      <input id={eachObject.id} type="radio" name="group" onChange={this.getSelectedId} />
                      <div >
                        <p>{eachObject.item}</p>
                        <p className="dkk-head">DKK {eachObject.price}</p>
                      </div>
                      <div className="offer-container">
                        <p className="offer-para">{eachObject.offerPrice}</p>
                      </div>

                    </div>
                    <div className="percentage-conatiner">
                      <p className="most">{eachObject.popular}</p>
                      <p className="dkk-head">{eachObject.percentage} % OFF</p>
                    </div>
                  </div>
                  <div className={selectedOption === eachObject.id ? "will-display" : "will-not-display"}>
                    <div className="flx-row size-color-cont">
                      <p className="size-p">Size</p>
                      <p className="size-p">Color</p>
                    </div>
                    <div className="flx-row quantity-container">
                      <p className="quanity-num"># 1</p>
                      <select className="style-drop-down">
                        {eachObject.sizes.map(eachsize => (<option value={eachsize} key={eachsize}>{eachsize}</option>))}
                      </select>
                      <select>
                        {eachObject.colors.map(eachColor => (<option value={eachColor} key={eachColor}>{eachColor}</option>))}
                      </select>
                    </div>
                    <div className="flx-row quantity-container">
                      <p className="quanity-num"># 2</p>
                      <select className="style-drop-down">
                        {eachObject.sizes.map(eachsize => (<option value={eachsize} key={eachsize}>{eachsize}</option>))}
                      </select>
                      <select>
                        {eachObject.colors.map(eachColor => (<option value={eachColor} key={eachColor}>{eachColor}</option>))}
                      </select>
                    </div>
                  </div>
                </div>
              </label>
            </li>))
          }
        </ul>
        <div className="flx-row free-cont">
          <p className="free">Free Day Shipping</p>
          <p>Total: <span>DKK 360.00</span></p>
        </div>

        <button className="style-button" type="button">+ Add to Cart</button>

      </div >
    )
  }
}


export default App;
