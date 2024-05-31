import React, { useState } from 'react'
import blogList from "../utilis/blogdata"
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import PopularPost from '../shop/PopularPost'
import Tags from '../shop/Tags'


const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];
const BlogSingle = () => {
    const [blog, setBlog] = useState(blogList)
    const { id } = useParams()
    // console.log(id)
    const res = blog.filter((b) => b.id === Number(id));
    console.log(res[0])
    return (
        <div>
            <PageHeader title={"Single Blog Pages"} curPage={" Blog  /  Blog Details"} />
            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        res.map((item) => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img className='w-100' src={item.imgUrl} alt="" />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                            {/* <li>
                                                            <a href="">
                                                                <i className="icofont-calendar"></i>
                                                            </a>
                                                        </li> */}
                                                                            <ul className="lab-ul">
                                                                                {
                                                                                    item.metaList.map((val, i) => (
                                                                                        <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores expedita possimus magnam, quidem dolorem, sint adipisci placeat unde quibusdam numquam molestiae amet beatae, soluta labore nulla doloribus nostrum blanditiis cumque laboriosam. Similique culpa amet doloribus in quia sit laborum at quae quas error hic sunt qui laboriosam ratione laudantium autem quod atque a animi, nam veritatis enim quisquam. Quas, voluptatum.</p>
                                                                    <blockquote>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quibusdam?</p>
                                                                        <cite>
                                                                            <a href="">...Malisa Hunter</a>
                                                                        </cite>
                                                                    </blockquote>
                                                                    <p></p>
                                                                    <img src="../../../../public/images/blog/single/01.jpg" alt="" />
                                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro consequatur atque fuga enim. Itaque incidunt aut explicabo vitae consequatur vel alias nostrum quam, quia nemo tempora, sequi quisquam, corrupti omnis maiores unde deserunt soluta amet laborum voluptate! Molestias blanditiis eaque vitae commodi nulla ullam soluta numquam totam aliquid! Facilis adipisci molestiae modi illo suscipit eligendi ab odit quos repellendus voluptate, quaerat, dolor quis excepturi corrupti ipsum similique praesentium doloremque soluta quas distinctio eius earum hic nam architecto. In, quis voluptatum.</p>

                                                                    <div className="video-thumb">
                                                                        <img src="../../../../public/images/blog/single/02.jpg" alt="" />
                                                                        <a href="" className='video-button popup'>
                                                                            <i className="icofont-ui-play"></i>
                                                                        </a>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempore ipsa sit dolorum quasi fuga aliquam praesentium. Quae at reiciendis laboriosam sequi repudiandae ducimus, impedit odit error quo sint assumenda quod ratione mollitia voluptas dolorum quasi molestias culpa consequatur eius.</p>

                                                                    <div className="tags-section">
                                                                        <ul className="tags lab-ul">
                                                                            <li>
                                                                                <a href="">Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="">Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="">Personal</a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="lab-ul social-icons">
                                                                        {
                                                                          socialList.map((val,i)=>(
                                                                            <li key={i}>
                                                                                <a href="" className={val.className}>
                                                                                    <i className={val.iconName}></i>
                                                                                </a>
                                                                            </li>
                                                                          ))
                                                                        }
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div className="navigations-part">
                                            <div className="left">
                                                <a href="#" className='prev'>
                                                    <i className="icofont-double-left">Previous Blog</i>
                                                </a>
                                                <a href="" className='title'>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, voluptatem!
                                                </a>
                                            </div>
                                            <div className="right">
                                                <a href="#" className='prev'>
                                                    <i className="icofont-double-right">Previous Blog</i>
                                                </a>
                                                <a href="" className='title'>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, voluptatem!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                        <Tags/>
                            <PopularPost />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSingle
