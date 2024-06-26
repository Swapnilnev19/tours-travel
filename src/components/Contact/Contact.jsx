import React, {useState} from 'react'
import '../../assets/css/style.scss'
import axios from 'axios';
function Contact () {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    date: '',
    tickets: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name) {
      isValid = false;
      newErrors.name = 'Name is required';
    }else if (!/^[a-zA-Z ]{2,}$/.test(formData.name)) {
      isValid = false;
      newErrors.name = 'Name must be at least 2 characters long and contain only letters';
    }


    if (!formData.email) {
      isValid = false;
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      newErrors.email = 'Email is invalid';
    }

    if (formData.email !== formData.confirmEmail) {
      isValid = false;
      newErrors.confirmEmail = 'Emails do not match';
    } else if (!/^\d{10}$/.test(formData.phone)) {  
      isValid = false;
      newErrors.phone = 'Phone number is invalid';
    }

    if (!formData.phone) {
      isValid = false;
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.date) {
      isValid = false;
      newErrors.date = 'Date is required';
    }

    if (!formData.tickets) {
      isValid = false;
      newErrors.tickets = 'Number of tickets is required';
    }

    if (!formData.message) {
      isValid = false;
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios.post('http://localhost:3000/bookings', formData);
        alert('Booking successful!');
      } catch (error) {
        console.error('There was an error processing your booking!', error);
      }
    }
  };
  
 
   return (
    <>
      <div className='contact-main'>
        <div className='container'>
            <div className='flex-wrap'>
                <div className='contact-heading'>
                      <h1>Contact Us</h1>
                </div>
            </div>
        </div>
      </div>

      <div className='contact-form'>
          <div className='container'>
              <div className='form-inner'>
                  <form onSubmit={handleSubmit}>
                      <div className='heading'>
                          <h3>Book This Tour</h3>
                          <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
                      </div>
                      <div className='form-grp'>
                          <input
                            type='text'
                            className='form-filed'
                            placeholder='Name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                          />
                          {errors.name && <span>{errors.name}</span>}
                        </div>
                        <div className='form-grp'>
                          <input
                            type='email'
                            className='form-filed'
                            placeholder='Email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && <span>{errors.email}</span>}
                        </div>
                        <div className='form-grp'>
                          <input
                            type='email'
                            className='form-filed'
                            placeholder='Confirm Email'
                            name='confirmEmail'
                            value={formData.confirmEmail}
                            onChange={handleChange}
                          />
                          {errors.confirmEmail && <span>{errors.confirmEmail}</span>}
                        </div>
                        <div className='form-grp'>
                          <input
                            type='text'
                            className='form-filed'
                            placeholder='Phone'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                          />
                          {errors.phone && <span>{errors.phone}</span>}
                        </div>
                        <div className='form-grp'>
                          <input
                            type='date'
                            className='form-filed'
                            placeholder='dd-mm-yy'
                            name='date'
                            value={formData.date}
                            onChange={handleChange}
                          />
                          {errors.date && <span>{errors.date}</span>}
                        </div>
                        <div className='form-grp'>
                          <input
                            type='text'
                            className='form-filed'
                            placeholder='Number of ticket'
                            name='tickets'
                            value={formData.tickets}
                            onChange={handleChange}
                          />
                          {errors.tickets && <span>{errors.tickets}</span>}
                        </div>
                        <div className='form-grp'>
                          <textarea
                            placeholder='Message'
                            className='form-filed'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                          />
                          {errors.message && <span>{errors.message}</span>}
                        </div>
                        <div className='form-grp'>
                          <button type='submit' className='btn-sm'>Book Now</button>
                        </div>
                  </form>
              </div>
          </div>
      </div>
    </>
  )
}

export default Contact