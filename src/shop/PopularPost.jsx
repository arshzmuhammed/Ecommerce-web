import React from 'react'
import { Link } from 'react-router-dom'
import Blog1 from '../../public/images/blog/10.jpg'
import Blog11 from '../../public/images/blog/11.jpg'
import Blog12 from '../../public/images/blog/12.jpg'
import Blog09 from '../../public/images/blog/09.jpg'

const title="Most popular Post"
const postList = [{ id: 1, imgUrl: Blog1, imgAlt: 'rajibraj91', title: 'Poor People Campaign Our Resources', date: 'Jun 05,2022', }, { id: 2, imgUrl: Blog11, imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022', }, { id: 3, imgUrl: Blog12, imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022', }, { id: 4, imgUrl: Blog09, imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022', },]
const PopularPost = () => {
    return (
        <div className="widget widget-post">
            <div className="widget-header">
                <div className="title">{title}</div>
            </div>
            <ul className="widget-wrapper ">
                {
                  postList.map((blog, i)=>(
                    <li key={i} className='d-flex flex-wrap justify-content-between'>
                        <div className="post-thumb">
                            <Link to={`/blog/${blog.id}`}><img src={blog.imgUrl} alt="" /></Link>
                        </div>
                        <div className="post-content">
                            <Link to={`/blog/${blog.id}`}><h5>{blog.title}</h5></Link>
                            <p>{blog.date}</p>
                        </div>
                    </li>
                  ))
                }
            </ul>
        </div>
    )
}

export default PopularPost
