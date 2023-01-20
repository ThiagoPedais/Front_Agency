import '../../styles/team.css'

import team01 from '../../images/team-01.png'
import team02 from '../../images/team-02.png'
import team03 from '../../images/team-03.png'
import team04 from '../../images/team-04.png'


const teamMembers = [
    {
        imgUrl: team01,
        name: "Countny Hurry",
        position: 'Product Development'
    },
    {
        imgUrl: team02,
        name: "Gamora Waltom",
        position: 'Frontend Development'
    },
    {
        imgUrl: team03,
        name: "Harry Martin",
        position: 'Product Design'
    },
    {
        imgUrl: team04,
        name: "Jhon Cooper",
        position: 'Backend Development'
    },
]

export const Team = () => {
    return (
        <section id="team" className='our__team'>
            <div className="container">
                <div className="team__content">
                    <h6 className="subtitle">Nosso time</h6>
                    <h2>
                        Conheça <span className="highlight">nosso time</span>
                    </h2>
                </div>

                <div className="team__wrapper">
                    {
                        teamMembers.map((item, index) => (
                            <div className="team__item" key={index}>
                                <div className="team__img">
                                    <img src={item.imgUrl} alt="" />
                                </div>
                                <div className="team__details">
                                    <h4>{item.name}</h4>
                                    <p className="description">{item.position}</p>

                                    <div className="team__member-social">
                                        <span><i className='ri-linkedin-line'></i></span>
                                        <span><i className='ri-twitter-line'></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}
