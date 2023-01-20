import '../../styles/testimonials.css'

import Slider from 'react-slick'

import ava01 from '../../images/ava-1.jpg'
import ava02 from '../../images/ava-2.jpg'
import ava03 from '../../images/ava-2.jpg'


const testimonialsData = [
    {
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quis nostrum illum labore mollitia reprehenderit fuga incidunt saepe cupiditate id nesciunt esse, suscipit velit voluptas ut asperiores, distinctio aspernatur culpa!',
        imgUrl: ava01,
        name: 'John Doe',
        desc: 'Lorem ipsum dolor.'
    },
    {
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quis nostrum illum labore mollitia reprehenderit fuga incidunt saepe cupiditate id nesciunt esse, suscipit velit voluptas ut asperiores, distinctio aspernatur culpa!',
        imgUrl: ava02,
        name: 'Anney Martin',
        desc: 'Lorem ipsum dolor.'
    },
    {
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quis nostrum illum labore mollitia reprehenderit fuga incidunt saepe cupiditate id nesciunt esse, suscipit velit voluptas ut asperiores, distinctio aspernatur culpa!',
        imgUrl: ava03,
        name: 'Bonnie Salvatore',
        desc: 'Lorem ipsum dolor.'
    }
]

export const Testimonials = () => {


    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swiperToSlider: true
    }

    return (
        <section id="testimonials">
            <div className="container">
                <div className="slider__content-top">
                    <h6 className="subtitle">Testimonials</h6>
                    <h2>
                        Confiável por mais de <span className="highlight">5.000 clientes</span>
                    </h2>
                </div>

                <div className="slider__wrapper">
                    <Slider {...settings}>
                        {
                            testimonialsData.map((item, index) => (
                                <div className="slider__item" key={index}>
                                    <p className="description">
                                        {item.comment}
                                    </p>
                                    <div className="customer__details">
                                        <div className="customer__img">
                                            <img src={item.imgUrl} alt="" />
                                        </div>

                                        <div>
                                            <h5 className="customer__name">{item.name}</h5>
                                            <p className="description">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )

}