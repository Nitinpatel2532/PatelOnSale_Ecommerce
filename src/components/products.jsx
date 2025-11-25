import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container,Image, Row, Col, Button } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductDetail from './product_detail';



// images
import c1 from "../assets/image/freshstyle.avif";
import c2 from "../assets/image/man.jpg";
import c5 from "../assets/image/women.webp";
import c4 from "../assets/image/kids.jpg";
import c6 from "../assets/image/home.jpg";
import beauty from "../assets/image/beauty.jpeg";
import bag from "../assets/image/bag.jpg";
import ass from "../assets/image/jwe.jpg";
import soft from "../assets/image/soft.webp"

// mens product image
import classic from "../assets/image/classic.avif"
import chinos from "../assets/image/chinos.jpg"
import leather from "../assets/image/leather.jpg"
import sneaker from "../assets/image/sneaker.webp"
import tshirt from "../assets/image/tshirt.avif"
import black from "../assets/image/black.webp"
import wallet from "../assets/image/wallet.webp"
import shoe from "../assets/image/shoe.avif"

// women product image
import maxi from "../assets/image/maxi.webp"
import ladyjean from "../assets/image/ladyjeans.jpg"
import cbag from "../assets/image/cbag.jpg"
import denim from "../assets/image/denim.jpg"
import w2 from "../assets/image/w2.jpg"

// kids product image
import k1 from "../assets/image/ctshirt.webp"
import k2 from "../assets/image/dung.jpg"
import k3 from "../assets/image/kshoe.jpeg"
import k4 from "../assets/image/kjacket.jpg"
import k5 from "../assets/image/kbag.jpg"
import OfferBanner from './OfferBanner';

// promotion image
import pro1 from "../assets/image/pro1.jpg"
import pro2 from "../assets/image/pro2.jpg"
import pro3 from "../assets/image/pro3.jpg"
import man1 from "../assets/image/man.jpg"
import man2 from "../assets/image/man2.jpg"

// promotion video
import vdo1 from "../assets/video/vdo1.mp4"
import vdo3 from "../assets/video/vdo4.mp4"




function Product() {


  // initialize Aos for animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  // mens products

  let men_product = [
    {
      id: 1,
      image: classic,
      type: "Classic Oxford Shirt",
      price: 490,
      description: "A timeless white Oxford shirt made from 100% premium cotton. Perfect for both formal occasions and casual outings."
    },
    {
      id: 2,
      image: chinos,
      type: "Slim Fit Chinos",
      price: 350,
      description: "Versatile, slim-fit chinos crafted with stretchable fabric for all-day comfort. Available in khaki, navy, and olive."
    },
    {
      id: 3,
      image: leather,
      type: " Leather Biker Jacket",
      price:1790,
      description: "A rugged, genuine leather jacket with a classic biker cut. Features zippered pockets and adjustable cuffs."
    },
    {
      id: 4,
      image: sneaker,
      type: "Minimalist White Sneakers",
      price: 590,
      description: "Clean and contemporary white sneakers made with vegan leather. Durable, lightweight, and pairs well with any outfit."
    },
    {
      id: 5,
      image: tshirt,
      type: "Graphic Print T-Shirt",
      price: 249,
      description: "Soft cotton t-shirt with bold graphic prints. Breathable fabric perfect for daily wear and relaxed weekends."
    },
    {
      id: 6,
      image: black,
      type: "Black Slim Trousers",
      price:2950,
      description: "Tailored black slim-fit trousers suitable for office wear or evening events. Features stretch material for added ease."
    },
    {
      id: 7,
      image: wallet,
      type: "Vintage Leather Wallet",
      price: 349,
      description: "Handcrafted leather wallet with multiple compartments for cash and cards. Vintage look with a modern touch."
    },
    {
      id: 8,
      image: shoe,
      type: "Ankle Chelsea Boots",
      price: 890,
      description: "Premium suede Chelsea boots with elastic side panels and durable rubber soles. Great for smart-casual looks."
    },
  ]

  // women product
  let women_product = [

    {
      id: 1,
      image: maxi,
      title: "Floral Maxi Dress",
      price: 1200,
      type: "Dresses",
      description: "Elegant floral print maxi dress with flowy fabric, perfect for summer outings."
    },
    {
      id: 2,
      image: w2,
      title: "White Sneakers",
      price: 750,
      type: "Footwear",
      description: "Classic white sneakers crafted for comfort and style, suitable for everyday wear."
    },
    {
      id: 3,
      image: denim,
      title: "Denim Jacket",
      price: 900,
      type: "Outerwear",
      description: "Timeless blue denim jacket with button closure and front pockets."
    },
    {
      id: 4,
      image: cbag,
      title: "Crossbody Bag",
      price: 600,
      type: "Accessories",
      description: "Compact leather crossbody bag with adjustable strap and zip closure."
    },
    {
      id: 5,
      image: ladyjean,
      title: "High Waist Skinny Jeans",
      price: 815,
      type: "Bottoms",
      description: "Stretchable high-waisted skinny jeans for a sleek and flattering silhouette."
    }
  ];

  // kids products
  const kidsProducts = [
    {
      id: 1,
      image: k1,
      title: "Cartoon Print T-Shirt",
      price: 250,
      type: "Tops",
      description: "Bright and fun cartoon print t-shirt made from soft, breathable cotton."
    },
    {
      id: 2,
      image: k2,
      title: "Denim Dungarees",
      price: 450,
      type: "Bottoms",
      description: "Classic denim dungarees with adjustable straps and side button closures."
    },
    {
      id: 3,
      image: k3,
      title: "Velcro Sports Sneakers",
      price: 350,
      type: "Footwear",
      description: "Lightweight and comfortable sneakers with easy velcro fastening for active kids."
    },
    {
      id: 4,
      image: k4,
      title: "Winter Puffer Jacket",
      price: 600,
      type: "Outerwear",
      description: "Warm and cozy puffer jacket with hood and zip closure for chilly weather."
    },
    {
      id: 5,
      image: k5,
      title: "Cartoon Character Backpack",
      price: 320,
      type: "Accessories",
      description: "Colorful backpack with popular cartoon characters, spacious and perfect for school."
    }
  ];



  // useState to track the selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // onClick event handler
  const handleproduct = (product) => {
    setSelectedProduct(product);

    // store data in local storage
    localStorage.setItem('selected_product', JSON.stringify(product))
    
    // open new window
    window.open('/productdetail','_blank','width=600px,height=600px')

  };

  // context api

  return (
    <>



      {/* for advertisement */}
      <div data-aos="fade-down" className="p-6 bg-white rounded-lg shadow-lg pro">
        <OfferBanner />
      </div>



      <div className="product_title ">
        <h2>All Products</h2>
      </div>

      <div className="allproducts">
        <div data-aos="fade-up" className="p-6 bg-white rounded-lg shadow-lg pro">
          <img src={c1} alt="" />
          <p>FRESH STYLES</p>
        </div>
        <div data-aos="fade-up" className="p-6 bg-white rounded-lg shadow-lg pro">
          <img src={c2} alt="" />
          <p>MEN</p>
        </div>
        <div data-aos="fade-up" className="p-6 bg-white rounded-lg shadow-lg pro">
          <img src={c4} alt="" />
          <p>KIDS</p>
        </div>
        <div data-aos="fade-up" className="p-6 bg-white rounded-lg shadow-lg pro">
          <img src={c5} alt="" />
          <p>WOMEN</p>
        </div>
        <div data-aos="fade-up" className="p-6 bg-white rounded-lg shadow-lg pro">
          <img src={c6} alt="" />
          <p>HOME</p>
        </div>
        <div data-aos="fade-up" className="p-6 bg-white rounded-lg shadow-lg pro">
          <img src={ass} alt="" />
          <p>JEWELLERY</p>
        </div>
        <div data-aos="fade-up" className="p-6 bg-white rounded-lg shadow-lg pro">
          <img src={beauty} alt="" />
          <p>BEAUTY</p>
        </div>
        <div data-aos="fade-up" className="p-6 bg-white rounded-lg shadow-lg pro">
          <img src={bag} alt="" />
          <p>ACCESSORIES</p>
        </div>
        <div data-aos="fade-up" className="p-6 bg-white rounded-lg shadow-lg pro">
          <img src={soft} alt="" />
          <p>SOFT CRAFT</p>
        </div>
      </div>


      {/* mens collection */}

      <div className="mens_product_title">
        <h4>Men's Collection</h4>
      </div>

      <div className="mens_pro">

        {
          men_product.map((pro) => (
            <div data-aos="fade-up" className="p-6 bg-white rounded-lg shadow-lg menpro" onClick={() => handleproduct(pro)}>
              <img src={pro.image} alt={pro.type} style={{ cursor: "pointer" }} />
              <p>{pro.type}</p>
              <p>price : ₹{pro.price}</p>
              

            </div>

          ))
        }
      </div>

      {/* womens collection */}

      <div className="mens_product_title">
        <h4>Women's Collection</h4>
      </div>

      <div className="mens_pro">

        {
          women_product.map((pro) => (
            <div data-aos="fade-up" className="p-6 bg-white rounded-lg shadow-lg menpro" onClick={() => handleproduct(pro)}>
              <img src={pro.image} alt={pro.type} style={{ cursor: "pointer" }} />
              <p>{pro.type}</p>
              <p>price : ₹{pro.price}</p>

            </div>

          ))
        }
      </div>

      {/* kids collection */}

      <div className="mens_product_title">
        <h4>Kids's Collection</h4>
      </div>

      <div className="mens_pro">

        {
          kidsProducts.map((pro) => (
            <div data-aos="fade-up" className="p-6 bg-white rounded-lg shadow-lg menpro" onClick={() => handleproduct(pro)}>
              <img src={pro.image} alt={pro.type} style={{ cursor: "pointer" }} />
              <p>{pro.type}</p>
              <p>price : ₹{pro.price}</p>

            </div>

          ))
        }
      </div>


      {/* promotion container */}

      <div data-aos="zoom-out-up">

        <div className="pmain">
          
        <div className="ptitle">
          <h2> Trending styles </h2>
          </div>
          
          <div className="ppchild">
            
         <div className="pchild">
          <img src={pro1} alt=""  />
          <h3>Toon world</h3>
          <p>Bringing imagination to life</p>
          <button>SHOP NOW</button>
          </div>

          <div className="pchild">
          <img src={pro2} alt=""  />
          <h3>Style unleashed</h3>
          <p>Ace looks by flying machine</p>
          <button>SHOP NOW</button>
          </div>

          <div className="pchild">
          <img src={pro3} alt=""  />
          <h3>Style staples</h3>
          <p>Everyday essentials,effortlessly</p>
          <button>SHOP NOW</button>
        </div>

        </div>
       
        </div>
      </div>
      


      {/* videos promotion */}

       <Container fluid className="p-0">
         <div
           style={{
             position: "relative",
             textAlign: "center",
             color: "white",
            height: "450px",
             margin:"20px"
           }}
         >
           {/* Background Image */}
           <video
             src={vdo1}
             controls  autoPlay
             alt="Offer Banner"
             style={{
               width: "100%",
               height: "450px",
               objectFit: "cover",
               filter: "brightness(0.6)"
             }}
           /> <video/>
   
           {/* Offer Text Overlay */}
           <div
             style={{
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)"
             }}
           >
             <h1 className="mb-3">Urban Cool Graphic Shirt</h1>
             <p className="mb-4">"Turn heads and steal the spotlight with this bold funky print shirt. Designed for men who love to break the rules, it pairs perfectly with your favorite jeans and street sneakers. Complete the look with statement goggles for that effortlessly cool vibe."</p>
             <Button variant="warning">Shop Now</Button>
           </div>
         </div>
      </Container>


      <Container className="my-5 p-4 bg-light rounded shadow">
      <Row className="align-items-center">
        {/* Image Section */}
        <Col md={6} className="mb-4 mb-md-0" data-aos="fade-right">
          <Image 
            src={man2}
            alt="Promotion"
            fluid 
              rounded 
              style={{
                width:"100%",
                height:"350px"
              }}
          />
        </Col>

        {/* Content Section */}
        <Col md={6} data-aos="fade-left">
          <h2 className="fw-bold mb-3">🔥Bold & Bright Statement Shirt</h2>
          <p className="text-muted fs-5">
          "Unleash your inner rebel with our Retro Pop Print Shirt. Made from lightweight, breathable fabric and splashed with quirky patterns, it's your go-to for summer street strolls, beach parties, and rooftop hangs."
          </p>
          <Button variant="primary" size="lg">
            Shop Now
          </Button>
        </Col>
      </Row>
      </Container>
      
      
      <Container fluid className="p-0">
         <div
           style={{
             position: "relative",
             textAlign: "center",
             color: "white",
            height: "450px",
             margin:"20px"
           }}
         >
           {/* Background Image */}
           <video
             src={vdo3}
             controls  autoPlay
             alt="Offer Banner"
             style={{
               width: "100%",
               height: "450px",
               objectFit: "cover",
               filter: "brightness(0.6)"
             }}
           /> <video/>
   
           {/* Offer Text Overlay */}
           <div
             style={{
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)"
             }}
           >
             <h1 className="mb-3">Sharp Slim-Fit Party Blazer</h1>
             <p className="mb-4">"Elevate your formal style with our Classic Tailored Fit Blazer. Crafted with premium fabric and precision cuts, this piece adds instant sophistication to your wardrobe — whether it's a boardroom meeting or an evening date."</p>
             <Button variant="warning">Shop Now</Button>
           </div>
         </div>
       </Container>

  
    
    </>

  );
};

export default Product; 
