import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        
        <div className="home-row">
          <Product
            id="1"
            title="Nike Air VaporMax 2020 FK"
            price={220}
            rating={4}
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b541fd41-7304-46bc-8b52-0fdd3a2ce739/air-vapormax-2020-flyknit-mens-shoe-kn9vwZ.jpg"
          />
          
          <Product
            id="2"
            title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black"
            price={549.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L._AC_US160_.jpg"
          />
          
          <Product
            id="3"
            title="Oral-B 1000 CrossAction Electric Toothbrush, Black, Powered by Braun"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41i6FsmM0zL._AC_US160_.jpg"
          />
          <Product
            id="4"
            title="Samsung Galaxy Watch (42mm) Rose Gold (Bluetooth) (Renewed)"
            price={74.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61P033bD5gL._AC_UL320_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="5"
            title="DenTek Triple Clean Floss Picks | No Break Guarantee | 150 Count"
            price={34.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Axe2BdvfL._AC_US160_.jpg"
          />
          <Product
            id="6"
            title="Lush Décor Ravello Shabby Chic Style Pintuck White 5 Piece Comforter Set with Pillow Shams - King Comforter Set"
            price={699.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91w8ODgSDzL._AC_UL320_.jpg"
          />
          <Product
            id="7"
            title="Marvel’s Spider-Man: Miles Morales Launch Edition – PlayStation 5"
            price={14.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71CqfmZX3PL._AC_UY218_.jpg"
          />
        </div>

        <div className="home-row">
        <Product
            id="8"
            title="CyberpowerPC Gamer Xtreme VR Gaming PC, Intel i5-10400F 2.9GHz, GeForce GTX 1660 Super 6GB, 8GB DDR4, 500GB NVMe SSD, WiFi Ready & Win 10 Home (GXiVR8060A10)"
            price={749.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51rGP3HU3HL._AC_US160_.jpg"
          />
          <Product
            id="9"
            title="SAMSUNG 75-inch Class QLED Q70T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN75Q70TAFXZA, 2020 Model)"
            price={1569.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51d1lfcMIaL._AC_UY218_.jpg"
          />
        </div>
      
      </div>

    </div>

  
  )
}

export default Home