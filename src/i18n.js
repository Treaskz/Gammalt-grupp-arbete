import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'


i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    detection: {
        order: ['querystring', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            translation: {
                header: {
                    firstLink: 'Home',
                    secondLink: 'About',
                    thirdLink: 'News',
                    fourthLink: 'FAQ',
                    fifthLink: 'Contact',
                    title: 'We got the best bikes',
                    firstDesc: 'Caferaiders offers the best bikes on the market. We promise you high quality build bikes that you will love!',
                    btn: 'SEE BIKES',
                    popularBike: 'Popular Bikes',
                    bikeDesc: 'A popular bike through the times. A nice and beautiful bike that is fun to drive',
                    maxSpeed: 'Maximum speed:',
                    capacity: 'Capacity:',
                    output: 'Output',
                    torque: 'Max. torque:',
                    buy: 'BUY',
                },
                footer: {
                    pages: 'Pages',
                    about: 'About us',
                    news: 'News',
                    faq: 'FAQ',
                    contact: 'Contact',
                    rights: '© 2021 Caferaider SWE, inc. All Rights Reserved'
                },
                about: {
                    title: 'We Were Born To Race',
                    about: 'About Us',
                    desc: 'Motorcycles are our passion. Together we have more than 30 years experience from selling, servicing and riding motorcyckels. We offer the best motorcycles at the lowest prices and will always ne there for our customers.',
                    employees: 'Employees',
                    role1: 'CEO',
                    role2: 'CFO',
                    role3: 'Coffee Courir',
                    role4: 'CTO',
                    role5: 'Technician',
                    role6: 'Salesman',
                    role7: 'Salesman',
                    role8: 'Salesman',
                },
                news: {
                    title: 'News and articles',
                    text: 'Here you will find news and articles',
                    content: [
                        {
                            id: 0,
                            title: 'Donald ducks bikes', 
                            date: '2000-03-25', 
                            author: 'Kalle Ost', 
                            category: 'News', 
                            content: 'Donald ducks bikes'
                        },
                        {
                            id: 1,
                            title: 'Future of bikes', 
                            date: '2001-04-20', 
                            author: 'Iqrah Small', 
                            category: 'Article', 
                            content: 'Future of bikes'
                        },
                        {
                            id: 2,
                            title: 'This new motor is awesome', 
                            date: '2002-01-10', 
                            author: 'Mara Molloy', 
                            category: 'News', 
                            content: 'This new motor is awesome'
                        },
                        {
                            id: 3,
                            title: 'How to start riding', 
                            date: '2003-11-22', 
                            author: 'Muhammed Alfaro', 
                            category: 'Article', 
                            content: 'How to start riding'
                        },
                        {
                            id: 4,
                            title: 'Top 10 bikes this year', 
                            date: '2004-12-30', 
                            author: 'Jethro Olsen', 
                            category: 'News', 
                            content: 'Top 10 bikes this year'
                        },
                        {
                            id: 5,
                            title: 'How to ride a bike', 
                            date: '2005-03-03', 
                            author: 'Cain Keith', 
                            category: 'Article', 
                            content: 'How to ride a bike'
                        },
                        {
                            id: 6,
                            title: 'New mega bike made', 
                            date: '2006-09-30', 
                            author: 'Paul Dunne', 
                            category: 'News', 
                            content: 'New mega bike made'
                        },
                        {
                            id: 7,
                            title: 'YOU WONT BELIVE THIS NEW BIKE', 
                            date: '2007-09-07', 
                            author: 'Rhiana Ballard', 
                            category: 'Article', 
                            content: 'YOU WONT BELIVE THIS NEW BIKE'
                        }
                    ],
                    all: 'All',
                    news: 'News',
                    article: 'Articles',
                    newest: 'Newest',
                    oldest: 'Oldest'
                },
                faq: {
                    description: 'Here is a collection of the most frequently asked questions',
                    questions: [
                        {
                            id: 0,
                            question: 'Am I required to have a motorcycle license if I want to buy a motorcycle?',
                            answer: 'No you do not need a motorcycle license to buy a motorcycle, just to ride it'
                        },
                        {
                            id: 1,
                            question: 'What kind of motorcycles are you selling?',
                            answer: 'We sell three different models of motorcycles: BMW F 900R, Triumphth BV T1 and Harley Davidson R5'
                        },
                        {
                            id: 2,
                            question: 'How long does it take to get a motorcycle?',
                            answer: 'Normal delivery time is three to five weeks'
                        },
                        {
                            id: 3,
                            question: 'What does a motorcycle cost?',
                            answer: 'Our motorcycles cost between 69000 - 89000SEK'
                        },
                        {
                            id: 4,
                            question: 'How can I contact you?',
                            answer: 'You can always contact us on telephone 042-2933159 during the day, otherwise you can send an email to contact@caferaiders.com'
                        },
                        {
                            id: 5,
                            question: 'Where can I find you?',
                            answer: 'You can find us at Helsingborgsvägen 1, 25227 Helsingborg'
                        },
                    ]
                },
                contact: {
                    contact: 'Contact',
                    name: 'Name:',
                    subject: 'Subject:',
                    question: 'Question regarding product',
                    complaints: 'Complaints',
                    jobs: 'Search for a job',
                    submit: 'Send'
                }
            }
        },
        sv: {
            translation: {
                header: {
                    firstLink: 'Hem',
                    secondLink: 'Om Oss',
                    thirdLink: 'Nyheter',
                    fourthLink: 'FAQ',
                    fifthLink: 'Kontakt',
                    title: 'Vi har de bästa MC:n',
                    firstDesc: 'Caferaiders erbjuder de bästa cyklarna på marknaden. Vi lovar dig cyklar av hög kvalitet som du kommer att älska!',
                    btn: 'SE MC',
                    popularBike: 'Populära MC',
                    bikeDesc: 'En populär mc genom tiderna. Trevlig och fin mc som är rolig att köra',
                    maxSpeed: 'Max hastighet',
                    capacity: 'Kapacitet:',
                    output: 'Effekt',
                    torque: 'Max vrid',
                    buy: 'KÖP'
                },
                footer: {
                    pages: 'Sidor',
                    about: 'Om oss',
                    news: 'Nyheter',
                    faq: 'Vanliga frågor',
                    contact: 'Kontakt',
                    rights: '© 2021 Caferaider SWE, inc. Alla Rättigheter Förbehållna.'
                },
                about: {
                    title: 'Födda till att köra',
                    about: 'Om Oss',
                    desc: 'Motorcyklar är våran passion. Tillsammans har vi mer än 30 års erfarenhet från försäljning, service och körande av motorcyklar. Vi erbjuder de bästa motorcycklarna till de lägsta priserna och kommer alltid att finnas där för våra kunder.',
                    employees: 'Anställda',
                    role1: 'VD',
                    role2: 'Ekonomiansvarig',
                    role3: 'Kaffekurir',
                    role4: 'Teknisk chef',
                    role5: 'Tekniker',
                    role6: 'Säljare',
                    role7: 'Säljare',
                    role8: 'Säljare',
                },
                news: {
                    title: 'Nyheter och artiklar',
                    text: 'Här hittar du nyheter och artiklar',
                    content: [
                        {
                            id: 0,
                            title: 'Kalle ankas motorcyklar', 
                            date: '2000-03-25', 
                            author: 'Kalle Ost', 
                            category: 'Nyhet', 
                            content: 'Kalle ankas motorcyklar'
                        },
                        {
                            id: 1,
                            title: 'Framtidens motorcyklar', 
                            date: '2001-04-20', 
                            author: 'Iqrah Small', 
                            category: 'Artikel', 
                            content: 'Framtidens motorcyklar'
                        },
                        {
                            id: 2,
                            title: 'Denna nya motorn är grym', 
                            date: '2002-01-10', 
                            author: 'Mara Molloy', 
                            category: 'Nyhet', 
                            content: 'Denna nya motorn är grym'
                        },
                        {
                            id: 3,
                            title: 'Hur du börjar köra', 
                            date: '2003-11-22', 
                            author: 'Muhammed Alfaro', 
                            category: 'Artikel', 
                            content: 'Hur du börjar köra'
                        },
                        {
                            id: 4,
                            title: 'Top 10 motorcyklar detta året', 
                            date: '2004-12-30', 
                            author: 'Jethro Olsen', 
                            category: 'Nyhet', 
                            content: 'Top 10 motorcyklar detta året'
                        },
                        {
                            id: 5,
                            title: 'Hur du kör', 
                            date: '2005-03-03', 
                            author: 'Cain Keith', 
                            category: 'Artikel', 
                            content: 'Hur du kör'
                        },
                        {
                            id: 6,
                            title: 'Ny mega motorcykel gjord', 
                            date: '2006-09-30', 
                            author: 'Paul Dunne', 
                            category: 'Nyhet', 
                            content: 'Ny mega motorcykel gjord'
                        },
                        {
                            id: 7,
                            title: 'DU KOMMER ALDRIG TRO DENNA NYA MOTORCYKELN', 
                            date: '2007-09-07', 
                            author: 'Rhiana Ballard', 
                            category: 'Artikel', 
                            content: 'DU KOMMER ALDRIG TRO DENNA NYA MOTORCYKELN'
                        }
                    ],
                    all: 'Alla',
                    news: 'Nyheter',
                    article: 'Artiklar',
                    newest: 'Nyast',
                    oldest: 'Äldst'
                },
                faq: {
                    description: 'Här har vi samlat några av de vanligaste frågorna',
                    questions: [
                        {
                            id: 0,
                            question: 'Måste jag ha motorcykelkörkort för att köpa?',
                            answer: 'Nej du behöver inte ha motorcykelkörkort för att få köpa en motorcykel, enbart för att få köra den'
                        },
                        {
                            id: 1,
                            question: 'Vad säljer ni för motorcyklar?',
                            answer: 'Vi säljer tre olika modeller av motorcyklar: BMW F 900R, Triumphth BV T1 och Harley Davidson R5'
                        },
                        {
                            id: 2,
                            question: 'Hur lång tid tar det att få en motorcykel?',
                            answer: 'Normal leveranstid är tre till fem veckor'
                        },
                        {
                            id: 3,
                            question: 'Vad kostar en motorcykel?',
                            answer: 'Våra motorcyklar kostar mellan 69000 - 89000SEK'
                        },
                        {
                            id: 4,
                            question: 'Hur kan man kontakta er?',
                            answer: 'Man kan alltid kontaka oss på telefon 042-2933159 under dagtid, annars kan man skicka ett mail till contact@caferaiders.com'
                        },
                        {
                            id: 5,
                            question: 'Vart kan man hitta er?',
                            answer: 'Man hittar oss på Helsingborgsvägen 1, 25227 Helsingborg'
                        },
                    ]
                },
                contact: {
                    contact: 'Kontakt',
                    name: 'Namn:',
                    subject: 'Ämne:',
                    question: 'Frågor om produkt',
                    complaints: 'Klagomål',
                    jobs: 'Sök jobb hos oss',
                    submit: 'Skicka'

                }
            }
        }
    }
})

export default i18n;