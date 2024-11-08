import Styles from './footer.module.css'
import { Link } from 'react-router-dom'

import { useTranslation, Trans } from 'react-i18next';

function Footer() {
    const { t, i18n } = useTranslation();

    return(
        <div className={Styles.Box}>
            <div>
                <h1 className={Styles.h1}>
                    <Trans i18nKey= "footer.pages"></Trans> 
                </h1>
                <ul className={Styles.text}>
                    <li><Link to ="/About" className={Styles.text}>
                        <Trans i18nKey= "footer.about"></Trans> 
                    </Link></li>
                    <li><Link to ="/News" className={Styles.text}>
                        <Trans i18nKey= "footer.news"></Trans> 
                    </Link></li>
                    <li><Link to ="/faq" className={Styles.text}>
                        <Trans i18nKey= "footer.faq"></Trans> 
                    </Link></li>
                    <li><Link to ="/Contact" className={Styles.text}>
                        <Trans i18nKey= "footer.contact"></Trans> 
                    </Link></li>
                </ul>
            </div>
            <div>
                <h5 className={Styles.h5}>
                    <Trans i18nKey= "footer.rights"></Trans>     
                </h5>
            </div>
        </div>
    )
}

export default Footer;