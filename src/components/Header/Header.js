import Styles from './header.module.css'
import { NavLink } from 'react-router-dom'
import Img from '../../resources/images/logo.png'

import { useTranslation, Trans } from 'react-i18next';

const lngs = {
    sv: { nativeName: 'Sv' },
    en: { nativeName: 'En' }
  };

function Header() {
    const { t, i18n } = useTranslation();

    return (
        <div className={Styles.headerWrapper}>
            <div className={Styles.innerHeader}>
                <div className={Styles.siteLogo}>
                    <img className={Styles.logo} src={Img} alt=''/>
                </div>
                <div className={Styles.siteNavWrapper}>
                    <nav className={Styles.siteNavigation}>
                        <NavLink exact to='/' activeStyle={{fontWeight: "bold"}}>
                           <Trans i18nKey= "header.firstLink">Hem</Trans> 
                        </ NavLink>
                        <NavLink exact to='about' activeStyle={{fontWeight: "bold"}}>
                            <Trans i18nKey= "header.secondLink">Om oss</Trans> 
                        </NavLink>
                        <NavLink exact to='news' activeStyle={{fontWeight: "bold"}}>
                            <Trans i18nKey= "header.thirdLink">Nyheter</Trans> 
                        </NavLink>
                        <NavLink exact to='faq' activeStyle={{fontWeight: "bold"}}>
                            <Trans i18nKey= "header.fourthLink">Vanliga frågor</Trans> 
                        </NavLink>
                        <NavLink exact to='contact' activeStyle={{fontWeight: "bold"}}>
                            <Trans i18nKey= "header.fifthLink">Kontakt</Trans> 
                        </NavLink>
                    </nav>
                    <div className={Styles.changeLang}>
                    {Object.keys(lngs).map((lng) => (
                        <p key={lng} className={Styles.langHead} style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                        {lngs[lng].nativeName}
                        </p>
                    ))}
                        {/* <p className={Styles.langHead}>SV</p>
                        <i className={`fas fa-chevron-down`}></i> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
