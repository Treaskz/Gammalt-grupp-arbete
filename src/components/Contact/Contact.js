import React from 'react'
import lokalen from '../../resources/images/lokalen.jpg' 
import Styles from './contact.module.css'

import { useTranslation, Trans } from 'react-i18next';

function Contact() {
    const { t, i18n } = useTranslation();

    return(
        <div className={Styles.wrapper}>
            <div className={Styles.box}>
                <div>
                    <div>
                        <h1>
                            <Trans i18nKey= "contact.contact">Hem</Trans> 
                        </h1>
                    </div>
                    <div>
                        <ul className={Styles.info}>
                            <li>Helsingborgsvägen 1, 25227 Helsingborg</li>
                            <li>contact@caferaiders.com</li>
                            <li>042-2933159</li>
                        </ul>
                    </div>
                </div>
                <div><img className={Styles.img} src={lokalen} alt="lokal"/></div>
            </div>
            <div className={Styles.formwrapper}>
            <form className={Styles.form}>
                <label>
                    <p className={Styles.p}>
                        <Trans i18nKey= "contact.name"></Trans> 
                    </p>
                    <input type="text" name="name" />
                </label>
                <label>
                <p className={Styles.p}>Email:</p>
                    <input type="text" name="email" />
                </label>
                <label>
                <p className={Styles.p}>
                    <Trans i18nKey= "contact.subject"></Trans> 
                </p>
                    <select className={Styles.selectStyling}>
                        <option value="grapefruit">
                            {t('contact', { returnObjects: true })['question']}
                        </option>
                        <option value="lime">Feedback</option>
                        <option defaultValue value="coconut">
                            {t('contact', { returnObjects: true })['complaints']}
                        </option>
                        <option value="mango">
                            {t('contact', { returnObjects: true })['jobs']}
                        </option>
                    </select>
                </label>
                <label>
                <p className={Styles.p}>Text:</p>
                <textarea rows="6" cols="40" className={Styles.textarea}>
                </textarea>
                </label>
                    <input className={Styles.button} type="submit" value={t('contact', {returnObjects: true})['submit']} />
                </form>
            </div>
        </div>
    )
}

export default Contact;