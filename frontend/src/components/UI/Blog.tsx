import '../../styles/blog.css'

import videoImg from '../../images/video.png'
import articleImg from '../../images/article.png'
import caseStudy from '../../images/case-study.png'

const blogData = [
    {
        imgUrl: videoImg,
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
        title: 'Video',
        linkUrl: '#'
    },
    {
        imgUrl: articleImg,
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
        title: 'Artigo',
        linkUrl: '#'
    },
    {
        imgUrl: caseStudy,
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
        title: 'Caso de estudo',
        linkUrl: '#'
    },
]

export const Blog = () => {
    return (
        <section id="blog" className='blog'>
            <div className="container">
                <div className="blog__top-content">
                    <h6 className="subtitle">Nosso blog</h6>
                    <h2>Vamos dar uma olhada no nosso <span className="highlight">recente blog</span></h2>
                </div>

                <div className="blog__wrapper">
                    {
                        blogData.map((item, index) => (
                            <div className="blog__item" key={index}>
                                <h3>{item.title}</h3>
                                <div className="blog__img">
                                    <img src={item.imgUrl} alt="" />
                                </div>
                                <p className="description blog__desc">
                                    {item.desc}
                                </p>

                                <div>
                                    <a href={item.linkUrl} className="learn__more">
                                        <i className="ri-arrow-right-line"></i>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}
