import React from 'react'

export const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src="assets/img/IMG_3011_1.jpg" alt="" className="about__img" />

                <div className="about__data">
                    <p className="about__description">Web developer, with extensive knowledge and years of experience,
                        working
                        in web technologies and UI/UX design, delivering quality work.</p>

                    <div className="about__info">
                        <div>
                            <span className="about__info-title">0</span>
                            <span className="about__info-name">Years <br /> experience</span>
                        </div>
                        <div>
                            <span className="about__info-title">10</span>
                            <span className="about__info-name">Completed <br /> project</span>
                        </div>
                        <div>
                            <span className="about__info-title">0</span>
                            <span className="about__info-name">Companies <br /> worked</span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <a download="" href="assets/pdf/ShankarSwarup_Resume.pdf" className="button button--flex">
                            Download CV<i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
