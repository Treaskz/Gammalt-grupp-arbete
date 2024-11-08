// Importing CSS
import Styles from './faq.module.css';

// Importing useState from react
import { useState } from 'react';

import { useTranslation, Trans } from 'react-i18next';


export default function Faq () {
    const { t, i18n } = useTranslation();

    // Defining state for 'clickedQuestion'
    const [clickedQuestion, setClickedQuestion] = useState(undefined);


    return (
        <section id={ Styles.faqWrapper }>
            <h1 className={ Styles.title }>FAQ</h1>
            <p className={ Styles.description }>
                <Trans i18nKey="faq.description"></Trans> 
            </p>

            <ul className={ Styles.menu }>
                { t('faq', { returnObjects: true })['questions'].map( (question) => {
                    return (
                        <li key={ question.id } onClick={() => { setClickedQuestion(question.id) }} className={ Styles.menuItem }>

                            <div className={ Styles.menuItemQuestionWrapper }>
                                <h2 className={ Styles.menuItemQuestion }>{ question.question }</h2>
                                <p className={ (question.id === clickedQuestion ? Styles.menuItemSelected : Styles.menuItemChevron) }>{'>'}</p>
                            </div>
                            
                            {   question.id === clickedQuestion ?
                                    <p className={ Styles.menuItemAnswer }>{ question.answer }</p>
                                :
                                    null
                            }
                            
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};
