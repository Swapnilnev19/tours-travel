import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
function TourPackage () {

  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const initialItems = 6
  const [visibleitem, setVisibleitem] = useState(initialItems);
  const loadMore = () =>{
    setVisibleitem(prevVisibleItems => prevVisibleItems + 5);
  } 
  const readLess = () =>{
    setVisibleitem(prevVisibleItems => prevVisibleItems - 5);
  } 

  const handleClick = (clickId) =>{
    const filterData = bookings.filter(e => e.id === clickId)
    console.log(filterData)
    navigate(`/bookings/${clickId}`, {state: {data: filterData[0].tourist}});
  } 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/state');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredBookings = bookings.filter(booking =>
    booking.name.toLowerCase().includes(search.toLowerCase())
  );

   return (
    <>
      <div className='tour-packages'>
          <div className='package-cont-inner'>
              <h3>Plan Your Trip base on States</h3>
              <input
                type="text"
                placeholder="Search bookings"
                value={search}
                onChange={handleSearchChange}
              />
          </div>
          <div className='package-list'>
          {filteredBookings.slice(0, visibleitem).map((booking) => (
              <div className='lst-itm' key={booking.id}>
                <div onClick={() =>handleClick(booking.id)} >
                  <img src={booking.img} alt='' width={300} height={300} className='img-fluid' />
                  <h3>{booking.name}</h3>
                  <p>{booking.about.slice(0 , 110)}<em>....</em></p>
                  </div>
              </div>
          ))}

          {visibleitem < filteredBookings.length && (
          <button onClick={loadMore}>Load More</button>
        )}
        {visibleitem > initialItems && (
          <button onClick={readLess}>Read Less</button>
        )} 
          </div>
      </div>
    </>
  )
}

export default TourPackage