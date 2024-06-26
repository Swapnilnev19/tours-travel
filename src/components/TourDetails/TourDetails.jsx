import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import imgBanner from "../../assets/images/about-banner.png"
function TourDetails () {


  const location = useLocation();
  console.log(location, "data")

   return (
    <>
      <div className='TourDetails-banner'>
      <img src={imgBanner} />
          
      </div>

      <div className='details-btm'>
          <div className='container'>
              <div className='flex-details'>
                      {
                        location.state.data.map((res, key) =>{
                          const {images, name, info, location} = res 
                          return(
                            <div className='details-cont'>
                              <img src={images} width={300} height={300} alt='' />
                              <div className='inner-details'>
                                  <h3>{name}</h3>
                                  <p>{info.slice(0, 300)}<em>...</em></p>
                                  <Link to={location} target='_blank' className='find-location'>Location</Link>
                                  <a href='#'>Book This Tour</a>
                              </div>
                            </div>
                          )
                        })
                      }
              </div>
          </div>
      </div>
    </>
  )
}

export default TourDetails