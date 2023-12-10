import React from 'react'
  

const subtitle = "Save The Day";
const title = (
    <h2 className="title">Join on Day Long Free Workshop for<b>Advance<span>Mastering</span></b>on Sales</h2>
    )
    const desc = "Limited Time Offer! Hurry Up"
const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
       <div className="container">
        <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
            <div className="col">
                <div className="section-header">
                    <span className="subtitle">{subtitle}</span>
                    {title}
                    <p>{desc}</p>
                </div>
            </div>
            <div className="col">
                <div className="section-wrapper">
                    <h4>Register Now</h4>
                    <form className="register-form">
                        <input type="text" name="name" className="register-input" placeholder="Username" />
                        <input type="email" name="email" className="register-input" placeholder="Email" />
                        <input type="number" name="number" className="register-input" placeholder="Phone" />
                        <button type="submit" className="lab-btn">
                            Register Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
       </div>
    </section>
  )
}

export default Register
