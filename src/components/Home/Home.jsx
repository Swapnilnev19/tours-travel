import React, {useState} from 'react'
import '../../assets/css/style.scss'
import axios from 'axios';
import img1 from "../../assets/images/banner-img.png"
import TourPackage from './TourPackage';
function Home () {

  const [post, setPost] = useState({
    title: '',
    travelType: '',
    duration: ''
  });

 const handleinut = (event) =>{ 
  setPost({...post, [event.target.name]: event.target.value})
 }

 const handleSubmit = (event) =>{
  
  event.preventDefault()
  
  axios.post('http://localhost:3000/posts' ,{post})
  .then(resp => console.log(resp))
  .catch(err => console.log(err))

  setPost({
    title: '',
    travelType: '',
    duration: ''
  })
 }
   return (
    <>
      <div className='banner-main'>
        <div className='container'>
            <div className='flex-wrap'>
                <div className='ban-caption'>
                    <h1 className='home-ttl'>No matter where you’re going to, we’ll take you there</h1>
                    <form className='mn-form' onSubmit={handleSubmit}>
                        <ul className='list-form'>
                          <li className='form-grp'>
                            <input type='text' value={post.title} placeholder='Where to?' name='title' className='field' onChange={handleinut} />
                          </li>
                          <li className='form-grp'>
                            <select className='field' value={post.travelType} name='travelType' onChange={handleinut}>
                              <option  disabled>Travel Type</option>
                              <option value='Type 1'>Type 1</option>
                              <option value='Type 2'>Type 2</option>
                              <option value='Type 3'>Type 3</option>
                            </select>
                          </li>
                          <li className='form-grp'>
                            <select className='field' value={post.travelType} name='duration' onChange={handleinut}>
                              <option disabled>Duration</option>
                              <option value="1 Day">1 Day</option>
                              <option value="1 week">1 week</option>
                              <option value="15 Days">15 Days</option>
                            </select>
                          </li>
                          <li className='form-grp'>
                            <button type='submit' className='btn-sm' >Submit</button>
                          </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
      </div>

      <TourPackage />
    </>
  )
}

export default Home