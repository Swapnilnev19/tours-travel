import React, {useState} from 'react'
import '../../assets/css/style.scss'
function BookTour () {


  return (
    <>
      <div className='book-tour'>
          <div className='container'>
              <div className='flex-tour'>
                  <div className='tour-details'>
                      <h3>Tour Plan</h3>
                      <p>Qui tempore voluptate qui quia commodi rem praesentium alias et voluptates officia sed molestiae sint et voluptas quos. Qui harum repudiandae galisum dolorem Hic deleniti officiis est sapiente explicabo non eaque corporis aut voluptatum iusto At facere enim id voluptas reprehenderit. Ut voluptas laudantium</p>
                      <p>Sit quasi soluta non temporibus voluptas non necessitatibus tempore sit deleniti praesentium aut velit nostrum ut itaque atque ad expedita veniam. Hic deleniti officiis est sapiente explicabo non eaque corporis aut voluptatum iusto At facere enim id voluptas reprehenderit. Ut voluptas laudantium et molestias voluptatem ex doloremque omnis est ipsum nihil.</p>
                    <p>Quo facere eveniet 33 sint rerum est internos impedit sed dignissimos quia. Et rerum deleniti et voluptates saepe qui labore quisquam non accusantium temporibus. Quo velit numquam hic excepturi sequi sed dicta doloribus! In quos possimus quo quibusdam aliquid est culpa porro sed molestiae libero At blanditiis minima a reiciendis fugiat.</p>
                  </div>
                  <div className='tour-form'>
                      <form>
                          <h3>Book This Tour</h3>
                          <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
                          <div className='form-list'>
                              <div className='form-grp'>
                                  <input type='text' placeholder='Name' className='frm-field' />
                              </div>
                              <div className='form-grp'>
                                  <input type='email' placeholder='Email' className='frm-field' />
                              </div>
                              <div className='form-grp'>
                                  <input type='email' placeholder='Confirm Email' className='frm-field' />
                              </div>
                              <div className='form-grp'>
                                  <input type='number' placeholder='Phone' className='frm-field' />
                              </div>
                              <div className='form-grp'>
                                  <input type='number' placeholder='Number of ticket' className='frm-field' />
                              </div>
                              <div className='form-grp'>
                                  <textarea placeholder='Message' className='frm-field'> </textarea>
                              </div>
                              <div className='form-grp'>
                                  <button type='sbumit' className='btn-sm'>Book Now</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default BookTour