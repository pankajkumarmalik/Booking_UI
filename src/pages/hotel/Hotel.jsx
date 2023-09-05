import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Header } from '../../components/header/Header'
import { Navbar } from '../../components/navbar/Navbar'
import { Mail } from '../../components/Mail/Mail'
import {Footer}  from '../../components/Footer/Footer'
import './hotel.css'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export const Hotel = () => {

  const [slideNumber, setSlideNumber]= useState(0);
  const [open, setOpen]= useState(false);
  const photos= [
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/95058973.jpg?k=a061dc2474962409577f55cce44e8bf56df849294da0e1244965e2351ec6683d&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/337721221.jpg?k=78013382943be4e27c31d5bf3bea22a87843e96a4b0174bd41c230569a9c3dcc&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/442830837.jpg?k=7642bca0cbdb5450d8b90257e3e6b371d92e517fee050ef020066f69be21b5d9&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/441700452.jpg?k=0324e6f4b5f4a899c885804109b587c02818a65fa166a7d1b46f5b60e0e373ac&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/236834128.jpg?k=8e1c5fbc25813f3a02fad6328f5f0416b1bfd126da46befabd6a068d2b93d3d8&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/450199962.jpg?k=f2e147b8c2eb3e99c7e65f89a80cc8bf858d5efdacf59a789d1f3f7c946d4a3e&o=&hp=1"
    }
  ]

const handleOpen= (i)=>{
  setSlideNumber(i);
  setOpen(true)
}

const handleMove= (direction)=>{
  let newSlideNumber;

  if(direction==="l"){
    newSlideNumber= slideNumber === 0 ? 5 : slideNumber - 1;
  }else{
    newSlideNumber= slideNumber === 5 ? 0 : slideNumber + 1;
  }

  setSlideNumber(newSlideNumber);
}

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src } alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
          </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Neo Lt. 123/G New York</span>
          </div>
          <span className="hotelDistance">Excellence distance, 600m from Airport</span>
          <span className="hotelPriceHighlight">Don't miss the great deal! Book in $680 and get a free airport taxi </span>
          <div className="hotelImages">
            {photos.map((photo, i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                </div>
            )

            )}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailText">
              <h1 className="hotelDetailsTitle">Stay in heart of the City</h1>
              <p className="hotelDetailsDesc">
              Our hotel's central location means you're never far from the city's most iconic attractions. Immerse yourself in the cultural wonders of City, explore nearby museums and galleries, or indulge in retail therapy at fashionable boutiques. Our concierge team is always ready to assist with recommendations and arrangements to make the most of your stay.
                <br /><br />
              we go above and beyond to deliver exceptional hospitality. Our dedicated staff is committed to ensuring every aspect of your stay is seamless and unforgettable. Whether it's arranging transportation, offering local insights, or attending to your preferences, we are here to exceed your expectations.
              </p>
              <br />
              <p className="hotelDetailsDesc">Experience luxury, comfort, and a world of hospitality at. Book your stay directly through our website for exclusive offers and the best rates guaranteed. Your journey into the heart of starts with us let be your home away from home.</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for 1 week stay!</h1>
              <span>Located in the real heart position of London, in excellent location from 600m distance of Airport. </span>
              <h2>
                <b>$680</b> (1 week stay)
              </h2>
              <button>Reserve for Book Now</button>
            </div>
          </div>
        </div>
        <Mail/>
        <Footer/>
      </div>
    </div>
  )
}
