import React, { useState } from 'react'
import Ratting from '../components/Ratting';
import pr1 from '../../public/images/instructor/01.jpg'
import pr2 from '../../public/images/instructor/02.jpg'
import pr3 from '../../public/images/instructor/03.jpg'
import pr4 from '../../public/images/instructor/04.jpg'

const reviewTitle = "Add a Review"
let ReviewList = [ { imgUrl: pr1, imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: pr2, imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: pr3, imgAlt: "Client thumb", name: "Telford Bois", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl:pr4, imgAlt: "Client thumb", name: "Cher Daviau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, ];
const Review = () => {
    const [reviewShow,setReviewShow] = useState(true)
  return (
    <>
    <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
      <li className='desc' onClick={()=> setReviewShow(!reviewShow)}>Description</li>
      <li className="rev"  onClick={()=> setReviewShow(!reviewShow)}>Reviews 4</li>
    </ul>
    <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
      <div className="review-showing">
        <ul className='content lab-ul' >
        
            {
                ReviewList.map((review,i)=>(
                <li key={i}>
                 <div className="post-thumb">
                    <img src={review.imgUrl} alt="" />
                 </div>
                  <div className="post-content">
                    <div className="entry-meta">
                       <div className="posted-on">
                        <a href="">{review.name}</a>
                        <p>{review.date}</p>
                       </div>
                    </div>
                    <div className="entry-content">
                        <p>{review.desc}</p>
                    </div>
                  </div>
                </li>
                ))
            }
        </ul>
        <div className="client-review">
            <div className="review-form">
                <div className="review-title">
                    <h5>{reviewTitle}</h5>
                </div>
                <form action="action" className='row'>
                    <div className="col-md-4 col-12">
                        <input type="text" name='name' id='name' placeholder='Full Name *' />
                    </div>
                    <div className="col-md-4 col-12">
                        <input type="email" name='email' id='name' placeholder='Your Email *' />
                    </div>
                    <div className="col-md-4 col-12">
                    <div className="ratting">
                        <span className='me-2'>Your Ratting</span>
                        <Ratting/>
                    </div>
                    </div>
                    <div className="col-md-12 col-12">
                        <textarea name="message" id="message" rows="8" placeholder='Type Here Message'></textarea>
                    </div>
                    <div className="col-12">
                        <button type='submit' className='default-button'>
                            <span>Submit Review </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
      <div className="description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eius rerum esse vel quam distinctio optio repellendus magni? Ipsum aspernatur placeat omnis quidem rerum itaque officia, velit reprehenderit, quod explicabo id nulla, enim vero suscipit. Alias vel ipsam soluta tenetur officia laudantium cumque, iste repellat, error perspiciatis quo quasi voluptas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eius rerum esse vel quam distinctio optio repellendus magni? Ipsum aspernatur placeat omnis quidem rerum itaque officia, velit reprehenderit, quod explicabo id nulla, enim vero suscipit. Alias vel ipsam soluta tenetur officia laudantium cumque, iste repellat, error perspiciatis quo quasi voluptas.</p>
        <div className="post-item">
            <div className="post-thumb">
                <img src="/src/assets/images/shop/01.jpg  " alt="" />
            </div>
            <div className="post-content">
                <ul className="lab-ul">
                    <li>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, porro?</li>
                    <li>  amet consectetur adipisicing elit. Dolorum, porro?</li>
                    <li>  amet consectetur adipisicing elit. Dolorum, porro?</li>
                    <li>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, porro?</li>
                    <li>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, porro?</li>
                    <li>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, porro?</li> 
                </ul>
            </div>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eius rerum esse vel quam distinctio optio repellendus magni? Ipsum aspernatur placeat omnis quidem rerum itaque officia, velit reprehenderit, quod explicabo id nulla, enim vero suscipit. Alias vel ipsam soluta tenetur officia laudantium cumque, iste repellat, error perspiciatis quo quasi voluptas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eius rerum esse vel quam distinctio optio repellendus magni? Ipsum aspernatur placeat omnis quidem rerum itaque officia, velit reprehenderit, quod explicabo id nulla, enim vero suscipit. Alias vel ipsam soluta tenetur officia laudantium cumque, iste repellat, error perspiciatis quo quasi voluptas.</p>
      </div>
    </div>
    </>
  )
}

export default Review
