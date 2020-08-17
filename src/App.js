import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type1: "Vegetables",

      veg1: "Spinach",
      veg1Img:
        "Images/tomatoes.jpg",
      spinachQuantity: 10,

      veg2: "Onion",
      veg2Img:
        "Images/images.jpg",
      onionQuantity: 30,

      veg3: "Carrots",
      veg3Img:
      "Images/tomatoes.jpg",
      carrotQuabtity: 50,

      type2: "Fruits",

      fruit1: " banana",
      fruit1Img:
        "Images/images(2).jpg",
      bananaQuantity: 200,

      fruit2: " Mango",
      fruit2Img:
        "Images/passion_65799.jpg",
      mangoQuantity: 50,

      appleImg:
        "Images/images.jpg",

      appleImgQuantity: 30,
      appleImgPrice: 100,

      bunchImg:
        "Images/tomatoes.jpg",

      bunch2Img:
        "Images/tomatoes.jpg",

      bunch3Img:
        "https://images.pexels.com/photos/2820144/pexels-photo-2820144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        
    }; 

  }


  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>GREEN KIOSK</h1>
        <h> Welcome to our{this.state.type1} </h>

        <section className="products">
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.appleImg} alt="" />
            </div>
            <div className="product-info">
              <img src="Images/.tomatoes.jpg"></img>
              <h5> Apples</h5>
              <p> Kes {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.spinachQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg1Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Tomatoes</h5>
              <h6> kes 50</h6>
              <p> Quantity {this.state.spinachQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg2Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Skumawiki</h5>
              <h6> kes 50</h6>
              <p> Quantity {this.state.spinachQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.bunchImg} alt="" />
            </div>
            <div className="product-info">
              <h5> Skumawiki</h5>
              <p> Kes {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.appleImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>
           </section>
      </div>
    );
  }
}

export default App;


