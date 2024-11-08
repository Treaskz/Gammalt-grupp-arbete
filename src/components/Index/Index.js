import Styles from './index.module.css'

import Bike1 from '../../resources/images/bike1.png';
import Bike2 from '../../resources/images/bike2.png';
import Bike3 from '../../resources/images/bike3.png';

import { useTranslation, Trans } from 'react-i18next';

function Index() {
    const { t, i18n } = useTranslation();

    return (
    <div>
        <div className={Styles.heroContainer}>
            <div className={Styles.heroBanner}>
                <div className={Styles.heroBannerText}>
                    <Trans i18nKey= "header.title"></Trans> 
                </div>
            </div>
            <div className={Styles.textSection}>
                <h2 className={Styles.h2Styling}>
                    <Trans i18nKey= "header.firstDesc"></Trans> 
                </h2>
            </div>
        <button className={Styles.btnStyling}>
            <Trans i18nKey= "header.btn"></Trans></button>
        </div>

        <div id={ Styles.bikeSection }>
            <div>
                <h1>
                    <Trans i18nKey= "header.popularBike"></Trans> 
                </h1>
                <section>
                    <article>
                        <header>
                            <img src={ Bike1 } alt="Bike" />
                            <h3>89 000 SEK</h3>
                        </header>
                        <h4>BMW F 900 R</h4>
                        <p>
                            <Trans i18nKey= "header.bikeDesc"></Trans> 
                        </p>
                        <p className={ Styles.specTitle }>Specs:</p>
                        <footer>
                            <div>
                                <p>
                                    <Trans i18nKey= "header.maxSpeed"></Trans> 
                                </p> 
                                <p>189 mph</p>
                            </div>
                            <div>
                                <p>
                                    <Trans i18nKey= "header.capacity"></Trans> 
                                </p> 
                                <p>999 cc</p>
                            </div>
                            <div>
                                <p>
                                    <Trans i18nKey= "header.output"></Trans> 
                                </p> 
                                <p>205 hp</p>
                            </div>
                            <div>
                                <p>
                                    <Trans i18nKey= "header.torque"></Trans> 
                                </p> 
                                <p>83 lbs-ft</p>
                            </div>
                        </footer>
                        <div className={ Styles.buyBtnContainer }>
                            <span>
                                <Trans i18nKey= "header.buy"></Trans> 
                            </span>
                        </div>
                    </article>
                    <article>
                        <header>
                            <img src={ Bike2 } alt="Bike"/>
                            <h3>79 000 SEK</h3>
                        </header>
                        <h4>TRIUMPTH BV T1</h4>
                        <p>
                            <Trans i18nKey= "header.bikeDesc"></Trans> 
                        </p>
                        <p className={ Styles.specTitle }>Specs:</p>
                        <footer>
                            <div>
                                <p>
                                    <Trans i18nKey= "header.maxSpeed"></Trans> 
                                </p> 
                                <p>189 mph</p>
                            </div>
                            <div>
                                <p>
                                    <Trans i18nKey= "header.capacity"></Trans> 
                                </p> 
                                <p>999 cc</p>
                            </div>
                            <div>
                                <p>
                                    <Trans i18nKey= "header.output"></Trans> 
                                </p> 
                                <p>205 hp</p>
                            </div>
                            <div>
                                <p>
                                    <Trans i18nKey= "header.torque"></Trans> 
                                </p> 
                                <p>83 lbs-ft</p>
                            </div>
                        </footer>
                        <div className={ Styles.buyBtnContainer }>
                            <span>
                                <Trans i18nKey= "header.buy"></Trans> 
                            </span>
                        </div>
                    </article>
                    <article>
                        <header>
                            <img src={ Bike3 } alt="Bike" />
                            <h3>69 000 SEK</h3>
                        </header>
                        <h4>HARLEY DAVIDSON R5</h4>
                        <p>
                            <Trans i18nKey= "header.bikeDesc"></Trans> 
                        </p>
                        <p className={ Styles.specTitle }>Specs:</p>
                        <footer>
                            <div>
                                <p>
                                    <Trans i18nKey= "header.maxSpeed"></Trans>     
                                </p> 
                                <p>189 mph</p>
                            </div>
                            <div>
                                <p>
                                    <Trans i18nKey= "header.capacity"></Trans> 
                                </p> 
                                <p>999 cc</p>
                            </div>
                            <div>
                                <p>
                                    <Trans i18nKey= "header.output"></Trans> 
                                </p> 
                                <p>205 hp</p>
                            </div>
                            <div>
                                <p>
                                    <Trans i18nKey= "header.torque"></Trans> 
                                </p> 
                                <p>83 lbs-ft</p>
                            </div>
                        </footer>
                        <div className={ Styles.buyBtnContainer }>
                            <span>
                                <Trans i18nKey= "header.buy"></Trans> 
                            </span>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    </div>
    )
}

export default Index
