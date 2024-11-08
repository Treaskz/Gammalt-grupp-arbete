import Styles from './about.module.css';

import gents from '../../resources/images/distinguished-gents-ride.jpg';
import profile from '../../resources/images/profile.jpg';
import profile2 from '../../resources/images/profile2.jpg';
import profile3 from '../../resources/images/profile3.jpg';
import profile4 from '../../resources/images/profile4.jpg';

import { useTranslation, Trans } from 'react-i18next';

function About() {
    const { t, i18n } = useTranslation();

    return(
        <div className={Styles.wrapper}>
            <header className={Styles.top}>
                <div className={Styles.banner}>
                    <h1 className={Styles.h1}>
                        <Trans i18nKey= "about.title"></Trans> 
                    </h1>
                </div>
            </header>

            <div className={Styles.middle}>
                <div className={Styles.mid}>
                    <div className={Styles.gentsDiv}>
                        <img className={Styles.gentsImg} src={gents} alt="Gentlemen" />
                    </div>
                        
                    <div className={Styles.middleText}>
                        <h2 className={Styles.h2}>
                            <Trans i18nKey= "about.about"></Trans> 
                        </h2>
                        <p className={Styles.p}>
                            <Trans i18nKey= "about.desc"></Trans> 
                        </p>
                    </div>
                </div>
            </div>

            <div className={Styles.emph2box}>
                <h2 className={Styles.h2}>
                    <Trans i18nKey= "about.employees"></Trans> 
                </h2>
            </div>

            <div className={Styles.boxWrapper}>
                <div className={Styles.boxTop}>

                    <div className={Styles.boxOne}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile} alt="Profile" />
                            </div>
                        <div className={Styles.cardName}>
                            <h3 className={Styles.h3}>Stefan Helikoptersson</h3>
                        </div>
                        <div className={Styles.cardInfo}>
                            <p>
                                <Trans i18nKey= "about.role1"></Trans>
                            </p>
                            <p className={Styles.boxEmail}>example@email.com</p>
                        </div>
                    </div>

                    <div className={Styles.boxTwo}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile2} alt="Profile" />
                            </div>
                        <div className={Styles.cardName}>
                            <h3 className={Styles.h3}>Filip Hårdisksson</h3>
                        </div>
                        <div className={Styles.cardInfo}>
                            <p>
                                <Trans i18nKey= "about.role2"></Trans>
                            </p>
                            <p className={Styles.boxEmail}>example2@email.com</p>
                        </div>
                    </div>
                        

                    <div className={Styles.boxThree}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile3} alt="Profile" />
                            </div>
                        <div className={Styles.cardName}>
                            <h3 className={Styles.h3}>Simon Simoff</h3>
                        </div>
                        <div className={Styles.cardInfo}>
                            <p>
                                <Trans i18nKey= "about.role3"></Trans>
                            </p>
                            <p className={Styles.boxEmail}>example3@email.com</p>
                        </div>
                    </div>

                    <div className={Styles.boxFour}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile4} alt="Profile" />
                            </div>
                            <div className={Styles.cardName}>
                                <h3 className={Styles.h3}>Samuel Från Fymden</h3>
                            </div>
                            <div className={Styles.cardInfo}>
                                <p>
                                    <Trans i18nKey= "about.role4"></Trans>
                                </p>
                                <p className={Styles.boxEmail}>example4@email.com</p>
                            </div>
                        </div>
                </div>

                <div className={Styles.boxBottom}>
                    <div className={Styles.boxFive}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile4} alt="Profile" />
                            </div>
                        <div className={Styles.cardName}>
                            <h3 className={Styles.h3}>Sebastian Fantastian</h3>
                        </div>
                        <div className={Styles.cardInfo}>
                            <p>
                                <Trans i18nKey= "about.role5"></Trans>
                            </p>
                            <p className={Styles.boxEmail}>example5@email.com</p>
                        </div>
                    </div>

                    <div className={Styles.boxSix}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile3} alt="Profile" />
                            </div>
                        <div className={Styles.cardName}>
                            <h3 className={Styles.h3}>Olle Fälktström</h3>
                        </div>
                        <div className={Styles.cardInfo}>
                            <p>
                                <Trans i18nKey= "about.role6"></Trans>
                            </p>
                            <p className={Styles.boxEmail}>example6@email.com</p>
                        </div>
                    </div>

                    <div className={Styles.boxSeven}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile2} alt="Profile" />
                            </div>
                        <div className={Styles.cardName}>
                            <h3 className={Styles.h3}>Dimitri Smiti</h3>
                        </div>
                        <div className={Styles.cardInfo}>
                            <p>
                                <Trans i18nKey= "about.role7"></Trans>
                            </p>
                            <p className={Styles.boxEmail}>example7@email.com</p>
                        </div>
                    </div>
                    
                    <div className={Styles.boxEight}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile} alt="Profile" />
                            </div>
                        <div className={Styles.cardName}>
                            <h3 className={Styles.h3}>Ronja Rövarsson</h3>
                        </div>
                        <div className={Styles.cardInfo}>
                            <p>
                                <Trans i18nKey= "about.role8"></Trans>
                            </p>
                            <p className={Styles.boxEmail}>example8@email.com</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About;