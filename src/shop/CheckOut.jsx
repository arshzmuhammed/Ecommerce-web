import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import "../components/modal.css"
import { useLocation, useNavigate } from 'react-router-dom'

const CheckOut = () => {
    const [show, setShow] = useState(false)
    const [activeTab, setAtiveTab] = useState("Visa")

    const handleChange = (tabId) => {
        setAtiveTab(tabId)
    }
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
 
    const handleOrderedConform =() => {
       alert("Your Order is placed successfully!")
       localStorage.removeItem("cart");
       navigate(from,{replace:true})

    }

    return (
        <div className='modalCard'>
            <Button variant='primary' className='py-2' onClick={handleShow}>Proceed to Checkout</Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className='modal fade'
                centered
            >
                <div className="modal-dialog">
                    <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="tabs mt-3">
                                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                    <li className='nav-item' role='presentation'><a className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                                        id='visa-tab' data-toggle="tab" role='tab' aria-controls='visa'
                                        aria-selected={activeTab === "visa"}
                                        onClick={() => handleChange("visa")} href="#visa"><img src="https://4a7efb2d53317100f611-1d7064c4f7b6de25658a4199efb34975.ssl.cf1.rackcdn.com/visa-mastercard-agree-to-give-gas-pumps-break-on-emv-shift-showcase_image-9-p-2335.jpg" alt="" width="80" />
                                    </a>
                                    </li>
                                    <li className='nav-item' role='presentation'><a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                                        id='paypal-tab' data-toggle="tab" role='tab' aria-controls='paypal'
                                        aria-selected={activeTab === "paypal"}
                                        onClick={() => handleChange("paypal")} href="#paypal"><img src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15.fit_lim.size_1050x591.v1602794215.png" alt="" width="80" />
                                    </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id='myTabContent'>
                                    <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                                        id='visa'
                                        role='tabpanel'
                                        aria-labelledby='visa-tab'
                                    >
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Credit Card</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type="text" name='name' id='name' className='form-control' required />
                                                    <span>Cardholder Name</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input min="1" max="999" type="text" name='number' id='number' className='form-control' required />
                                                    <span>Card Number</span>
                                                    <i className="fa fa-eye"></i>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input min="1" max="999" type="text" name='number' id='number' className='form-control' required />
                                                        <span>Expiration Date</span>

                                                    </div>
                                                    <div className="inputbox">
                                                        <input min="1" max="999" type="text" name='number' id='number' className='form-control' required />
                                                        <span>CVV </span>

                                                    </div>

                                                </div>
                                                <div className="px-5 pay">
                                                    <button className="btn btn-success btn-block" onClick={handleOrderedConform}>Order Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content">
                                <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                                    id='paypal'
                                    role='tabpanel'
                                    aria-labelledby='paypal-tab'
                                >
                                  <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Paypal Account Info</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type="text" name='name' id='name' className='form-control' required />
                                                    <span>Enter your email</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input min="1" max="999" type="text" name='number' id='number' className='form-control' required />
                                                    <span>Your Name</span>
                                                </div>
                                                    <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input min="1" max="999" 
                                                        type="text" 
                                                        name='number' 
                                                        id='number' 
                                                        className='form-control'
                                                         required />
                                                        <span>Extra info</span>
                                                    </div> 
                                                    <div className="inputbox">
                                                        <input min="1" max="999" 
                                                        type="text" 
                                                        name='number' 
                                                        id='number' 
                                                        className='form-control'
                                                         required />
                                                        <span></span>
                                                    </div> 
                                                    </div>
                                               
                                                <div className="px-5 pay">
                                                    <button className="btn btn-success btn-block" onClick={handleOrderedConform}>Add Paypal</button>
                                                </div>
                                            </div>
                                        </div>

                                </div>
                                </div>

                                <p className='mt-3 px-4 p-Disclaimer'><em>Payment Disclaimer: </em> In event shall payment or partial paymment by Owner for any material or service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CheckOut
