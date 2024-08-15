const Alexa = require('ask-sdk-core');
const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');


const languageStrings = {
    en: {
        translation: {
            WELCOME_MESSAGE: 'Welcome, you can say Outstanding people from the Netherlands or Help. Which would you like to try?',
            HELLO_MESSAGE: 'Welcome, you can say Representative music from the Netherlands or Help. Which would you like to try?',
            HELP_MESSAGE: 'You can say hello to me! How can I help?',
            GOODBYE_MESSAGE: 'Goodbye!',
            REFLECTOR_MESSAGE: 'You just triggered %s',
            FALLBACK_MESSAGE: 'Sorry, I don\'t know about that. Please try again.',
            ERROR_MESSAGE: 'Sorry, there was an error. Please try again.',
            COUNTRY_MESSAGE: 'The Netherlands, commonly known as Holland, is a nation located in northwestern Europe, famous for its innovative water management, sprawling tulip fields, windmills, and picturesque canals. With a rich history spanning from the Golden Age in the 17th century to its current influence as a global center of commerce and culture, the Netherlands stands out for its progressive approach to human rights, its vibrant cultural life, and its architecture that blends the modern with the historical. Amsterdam, its capital, is famous for its museums, such as the Rijksmuseum and the Van Gogh Museum, and its focus on sustainability and cycling.',
            PLACES_MESSAGE: 'The Netherlands combines picturesque landscapes and a culture rich in history. It is a place where tradition and modernity intertwine, offering visitors a unique experience. Its natural beauty and focus on sustainability make it an unforgettable destination.',
            FOOD_MESSAGE: 'The food of the Netherlands reflects its simple culture rich in traditions. The dishes stand out for fresh and local ingredients, such as fish, cheeses and breads. Typical meals include authentic and comforting flavors, ranging from stews to traditional sweets.',
            CLOTES_MESSAGE: 'The typical clothing of the Netherlands is a symbol of its rich cultural heritage. Characterized by the famous wooden clogs, traditional costumes vary by region, but typically include long, colorful skirts for women, and button-down jackets for men. These garments reflect rural life and the working spirit of the country.',
            PEOPLE_MESSAGE: 'The Netherlands has given the world influential people in various areas. Among them, Vincent van Gogh, one of the most famous painters in the history of art, and Anne Frank, whose diary offers a powerful testimony to the Second World War. Contemporary figures such as Max Verstappen, a Formula 1 driver who has achieved worldwide fame, and André Rieu, a renowned violinist and conductor known for popularizing classical music, also stand out. These characters reflect the diversity and cultural impact of the Netherlands on a global level.',
            MUSIC_MESSAGE: 'The music of the Netherlands is diverse and vibrant, ranging from classical music to modern genres. The country is known for its tradition in classical music, highlighting composers such as Jan Pieterszoon Sweelinck and the contemporary André Rieu. In the realm of popular music, the Netherlands has a rich scene of DJs and electronic music producers, with prominent figures such as Tiësto and Armin van Buuren. In addition, traditional folk and regional styles such as "Levenslied" also play an important role in the countrys musical culture.'
        }
    },
    es: {
        translation: {
            WELCOME_MESSAGE: '¡Hola!, puedes decir Hola o Ayuda. ¿Cuál te gustaría probar?',
            HELLO_MESSAGE: '¡Hola!',
            HELP_MESSAGE: '¡Puedes puedes decir dame los platillos emblematicos de paise bajos o ayuda! ¿Cómo puedo ayudar?',
            GOODBYE_MESSAGE: '¡Adiós!',
            REFLECTOR_MESSAGE: 'Acabas de activar %s',
            FALLBACK_MESSAGE: 'Lo siento, no sé sobre eso. Por favor intenta de nuevo.',
            ERROR_MESSAGE: 'Lo siento, hubo un error. Por favor intenta de nuevo.',
            COUNTRY_MESSAGE: 'Los Países Bajos, conocidos comúnmente como Holanda, son una nación ubicada en el noroeste de Europa, famosa por su innovador manejo del agua, extensos campos de tulipanes, molinos de viento y canales pintorescos. Con una rica historia que abarca desde la Edad de Oro en el siglo XVII hasta su influencia actual como un centro global de comercio y cultura, los Países Bajos destacan por su enfoque progresista en derechos humanos, su vibrante vida cultural, y su arquitectura que mezcla lo moderno con lo histórico. Ámsterdam, su capital, es famosa por sus museos, como el Rijksmuseum y el Museo Van Gogh, y su enfoque en la sostenibilidad y el transporte en bicicleta.',
            PLACES_MESSAGE: 'Los Países Bajos combinan paisajes pintorescos y una cultura rica en historia. Es un lugar donde la tradición y la modernidad se entrelazan, ofreciendo a los visitantes una experiencia única. Su belleza natural y su enfoque en la sostenibilidad lo hacen un destino inolvidable.',
            FOOD_MESSAGE: 'La comida de los Países Bajos refleja su cultura sencilla y rica en tradiciones. Los platos destacan por ingredientes frescos y locales, como pescados, quesos y panes. Las comidas típicas incluyen sabores auténticos y reconfortantes, que van desde guisos hasta dulces tradicionales.',
            CLOTES_MESSAGE: 'La ropa típica de los Países Bajos es un símbolo de su rica herencia cultural. Caracterizada por los famosos zuecos de madera, los trajes tradicionales varían por región, pero suelen incluir faldas largas y coloridas para las mujeres, y chaquetas con botones para los hombres. Estas prendas reflejan la vida rural y el espíritu trabajador del país.',
            PEOPLE_MESSAGE: 'Los Países Bajos han dado al mundo personajes influyentes en diversas áreas. Entre ellos, Vincent van Gogh, uno de los pintores más célebres de la historia del arte, y Ana Frank, cuyo diario ofrece un poderoso testimonio de la Segunda Guerra Mundial. También destacan figuras contemporáneas como Max Verstappen, un piloto de Fórmula 1 que ha alcanzado fama mundial, y André Rieu, un renombrado violinista y director de orquesta conocido por popularizar la música clásica. Estos personajes reflejan la diversidad y el impacto cultural de los Países Bajos a nivel global.',
            MUSIC_MESSAGE: 'La música de los Países Bajos es diversa y vibrante, abarcando desde la música clásica hasta géneros modernos. El país es conocido por su tradición en la música clásica, destacando compositores como Jan Pieterszoon Sweelinck y el contemporáneo André Rieu. En el ámbito de la música popular, los Países Bajos tienen una rica escena de DJs y productores de música electrónica, con figuras prominentes como Tiësto y Armin van Buuren. Además, el folk tradicional y los estilos regionales como el "Levenslied" también juegan un papel importante en la cultura musical del país.'
            
        }
    }
};

const DOCUMENT_ID1 = "describeplace";
const DOCUMENT_ID2 = "lugaresturis";
const DOCUMENT_ID3 = "fooapl";
const DOCUMENT_ID4 = "clothesapl";
const DOCUMENT_ID5 = "peopleapl";
const DOCUMENT_ID6 = "musicapl";
const DOCUMENT_ID7 = "adiosres";
const DOCUMENT_ID8 = "holamundo";
const DOCUMENT_ID9 = "ayudares";


const describeplaceEs = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/10/24/amsterdam-paises-bajos.jpeg",
            "displayFullscreen": false,
            "headerTitle": "Conoce un poco sobre Países Bajos (Holanda).",
            "headerSubtitle": "",
            "logoUrl": "",
            "videoControlType": "none",
            "videoSources": [
                "https://media.istockphoto.com/id/1768080211/es/v%C3%ADdeo/zaandam-pa%C3%ADses-bajos-molinos-de-viento-zaanse-schans.mp4?s=mp4-640x640-is&k=20&c=35CXtm4zvP1d3iXo3ww8Fccs6kqPyBCvYM_I20sKfnY=",
                "https://cdn.pixabay.com/video/2022/04/24/114980-702647066_large.mp4"
            ],
            "sliderType": "determinate"
        }
    }
};

const describeplaceEn = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/10/24/amsterdam-paises-bajos.jpeg",
            "displayFullscreen": false,
            "headerTitle": "Learn a little about the Netherlands (Holland).",
            "headerSubtitle": "",
            "logoUrl": "",
            "videoControlType": "none",
            "videoSources": [
                "https://media.istockphoto.com/id/1768080211/es/v%C3%ADdeo/zaandam-pa%C3%ADses-bajos-molinos-de-viento-zaanse-schans.mp4?s=mp4-640x640-is&k=20&c=35CXtm4zvP1d3iXo3ww8Fccs6kqPyBCvYM_I20sKfnY=",
                "https://cdn.pixabay.com/video/2022/04/24/114980-702647066_large.mp4"
            ],
            "sliderType": "determinate"
        }
    }
};


const lugaresEs = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZEdiEIXoYVbsn3r9KBMooJrF4R0Ez3Kngw&s",
                    "size": "large"
                }
            ]
        },
        "title": "Lugares Turísticos",
        "listItems": [
            {
                "primaryText": "Casas Cubo de Rotterdam",
                "imageSource": "https://content.skyscnr.com/m/3b17546b4aa34b71/original/GettyImages-186148723.jpg?resize=1800px:1800px&quality=100"
            },
            {
                "primaryText": "Los pólderes",
                "imageSource": "https://content.skyscnr.com/m/2ae24248026bce37/original/GettyImages-479821578.jpg?resize=1800px:1800px&quality=100"
            },
            {
                "primaryText": "El jardín Keukenhof",
                "imageSource": "https://content.skyscnr.com/m/2f0706b73676c82a/original/GettyImages-490825016.jpg?resize=1800px:1800px&quality=100"
            },
            {
                "primaryText": "Naarden",
                "imageSource": "https://content.skyscnr.com/m/3118738c15aa3735/original/GettyImages-148224853.jpg?resize=1800px:1800px&quality=100"
            },
            {
                "primaryText": "Bosque místico en Efteling",
                "imageSource": "https://content.skyscnr.com/m/24306619212ec41f/original/GettyImages-115915661.jpg?resize=1800px:1800px&quality=100"
            },
            {
                "primaryText": "El Parque Clingendael",
                "imageSource": "https://content.skyscnr.com/m/2ffd4b2c15dade43/original/GettyImages-184831697.jpg?resize=1800px:1800px&quality=100"
            }
        ],
        "logoUrl": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png",
        "hintText": "Intenta, \"Alexa, háblame mas sobre las casas cubo de Rotterdam\""
    }
};
const lugaresEn = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZEdiEIXoYVbsn3r9KBMooJrF4R0Ez3Kngw&s",
                    "size": "large"
                }
            ]
        },
        "title": "Tourist Places",
        "listItems": [
            {
                "primaryText": "Rotterdam Cube Houses",
                "imageSource": "https://content.skyscnr.com/m/3b17546b4aa34b71/original/GettyImages-186148723.jpg?resize=1800px:1800px&quality=100"
            },
            {
                "primaryText": "The Polders",
                "imageSource": "https://content.skyscnr.com/m/2ae24248026bce37/original/GettyImages-479821578.jpg?resize=1800px:1800px&quality=100"
            },
            {
                "primaryText": "The Keukenhof Garden",
                "imageSource": "https://content.skyscnr.com/m/2f0706b73676c82a/original/GettyImages-490825016.jpg?resize=1800px:1800px&quality=100"
            },
            {
                "primaryText": "Naarden",
                "imageSource": "https://content.skyscnr.com/m/3118738c15aa3735/original/GettyImages-148224853.jpg?resize=1800px:1800px&quality=100"
            },
            {
                "primaryText": "Mystical forest in Efteling",
                "imageSource": "https://content.skyscnr.com/m/24306619212ec41f/original/GettyImages-115915661.jpg?resize=1800px:1800px&quality=100"
            },
            {
                "primaryText": "Clingendael Park",
                "imageSource": "https://content.skyscnr.com/m/2ffd4b2c15dade43/original/GettyImages-184831697.jpg?resize=1800px:1800px&quality=100"
            }
        ],
        "logoUrl": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png",
        "hintText": "Try, \"Alexa, tell me more about Rotterdam cube houses\""
    }
};



const fooaplEs = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://www.dehaanmovers.com/blog/wp-content/uploads/mudanzas-internacionales-desde-madrid-a-holanda-825x510.jpg",
            "headerTitle": "",
            "headerSubtitle": "",
            "headerAttributionImage": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png",
            "primaryText": "Comida típica de Países Bajos, un mundo se sabor y frescura.",
            "listItems": [
                {
                    "primaryText": "Bitterballen",
                    "thumbnailImage": "https://www.viajaraholanda.com/img/gastronomia-tradicional-bitterballen.jpg"
                },
                {
                    "primaryText": "Stamppot",
                    "thumbnailImage": "https://www.viajaraholanda.com/img/platos-tipicos-holanda.jpg"
                },
                {
                    "primaryText": "Erwtensoep",
                    "thumbnailImage": "https://www.viajaraholanda.com/img/sopa-gastronomia-holanda.jpg"
                },
                {
                    "primaryText": "Rookworst",
                    "thumbnailImage": "https://www.viajaraholanda.com/img/tipico-holanda.jpg"
                },
                {
                    "primaryText": "Groninger Mosterdsoep",
                    "thumbnailImage": "https://tensholanda.com/wp-content/uploads/2023/04/5.jpg.webp"
                },
                {
                    "primaryText": "Poffertjes",
                    "thumbnailImage": "https://www.viajaraholanda.com/img/que-platos-comer-holanda.jpg"
                }
            ]
        }
    }
};

const fooaplEn = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://www.dehaanmovers.com/blog/wp-content/uploads/mudanzas-internacionales-desde-madrid-a-holanda-825x510.jpg",
            "headerTitle": "",
            "headerSubtitle": "",
            "headerAttributionImage": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png",
            "primaryText": "Typical food from the Netherlands, a world of flavor and freshness.",
            "listItems": [
                {
                    "primaryText": "Bitterballen",
                    "thumbnailImage": "https://www.viajaraholanda.com/img/gastronomia-tradicional-bitterballen.jpg"
                },
                {
                    "primaryText": "Stamppot",
                    "thumbnailImage": "https://www.viajaraholanda.com/img/platos-tipicos-holanda.jpg"
                },
                {
                    "primaryText": "Erwtensoep",
                    "thumbnailImage": "https://www.viajaraholanda.com/img/sopa-gastronomia-holanda.jpg"
                },
                {
                    "primaryText": "Rookworst",
                    "thumbnailImage": "https://www.viajaraholanda.com/img/tipico-holanda.jpg"
                },
                {
                    "primaryText": "Groninger Mosterdsoep",
                    "thumbnailImage": "https://tensholanda.com/wp-content/uploads/2023/04/5.jpg.webp"
                },
                {
                    "primaryText": "Poffertjes",
                    "thumbnailImage": "https://www.viajaraholanda.com/img/que-platos-comer-holanda.jpg"
                }
            ]
        }
    }
};

const clothesaplEs = {
    "detailImageRightData": {
        "type": "object",
        "objectId": "detailImageRightSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCTsCvgWZuBXASWEtX5DeKkro9xj3O8Rs-Ks0KpK7ak-SW7coz2MzO6oIwI4wKf8w1a4&usqp=CAU",
                    "size": "large"
                }
            ]
        },
        "title": "Vestimenta Típica",
        "subtitle": "",
        "image": {
            "contentDescription": "",
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://www.absolutviajes.com/wp-content/uploads/2009/06/Volendam-1024x678.jpg",
                    "size": "large"
                }
            ]
        },
        "textContent": {
            "primaryText": {
                "type": "PlainText",
                "text": "Traje tradicional de Volendam"
            },
            "rating": {
                "text": ""
            },
            "locationText": {
                "type": "PlainText",
                "text": "Este traje incluye un gorro blanco con alas anchas, una blusa con mangas cortas y una falda a rayas o cuadros."
            },
            "secondaryText": {
                "type": "PlainText",
                "text": "Aunque hoy en día el vestuario típico no se usa a diario, sigue siendo una parte importante de las festividades y eventos culturales en los Países Bajos."
            }
        },
        "buttons": [
            {
                "text": ""
            },
            {
                "text": ""
            }
        ],
        "logoUrl": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png"
    }
};

const clothesaplEn = {
    "detailImageRightData": {
        "type": "object",
        "objectId": "detailImageRightSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCTsCvgWZuBXASWEtX5DeKkro9xj3O8Rs-Ks0KpK7ak-SW7coz2MzO6oIwI4wKf8w1a4&usqp=CAU",
                    "size": "large"
                }
            ]
        },
        "title": "Typical Clothing",
        "subtitle": "",
        "image": {
            "contentDescription": "",
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://www.absolutviajes.com/wp-content/uploads/2009/06/Volendam-1024x678.jpg",
                    "size": "large"
                }
            ]
        },
        "textContent": {
            "primaryText": {
                "type": "PlainText",
                "text": "Volendam traditional costume"
            },
            "rating": {
                "text": ""
            },
            "locationText": {
                "type": "PlainText",
                "text": "This costume includes a white hat with wide brims, a blouse with short sleeves and a striped or plaid skirt."
            },
            "secondaryText": {
                "type": "PlainText",
                "text": "Although traditional clothing is not worn daily today, it is still an important part of festivities and cultural events in the Netherlands."
            }
        },
        "buttons": [
            {
                "text": ""
            },
            {
                "text": ""
            }
        ],
        "logoUrl": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png"
    }
};


const peopleaplEs = {
    "gridListData": {
        "type": "object",
        "objectId": "gridListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://i.blogs.es/2766b8/650_1000_daan-roosegaarde-opens-solar-powered-van-gogh-bike/650_1200.jpg",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "title": "Personalidades destacadas  ",
        "listItems": [
            {
                "primaryText": "Vincent van Gogh",
                "imageSource": "https://amsterdamguias.com/wp-content/uploads/2017/07/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg"
            },
            {
                "primaryText": "Rembrandt Van Rijn",
                "imageSource": "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTp25yhA-GFkAZz7Yt78fK4I_VqGT52B6MGpfwP9rsdBkToHMaD25-G2XiEhgXvdCEGbXxykY3El_KiItQ"
            },
            {
                "primaryText": "Johan Cruyff",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vfbjnTzD8ri6T94uHi2CdZBJU_3BNfenOAp2eVHbHebBrDEqfL9QZSoE9MXdyQuIQyw&usqp=CAU"
            },
            {
                "primaryText": "Max Verstappen",
                "imageSource": "https://images.pagina12.com.ar/styles/focal_3_2_960x640/public/2024-03/822124-verstappen-20arabia.jpg?h=ada05aa9&itok=Ren2bquB"
            },
            {
                "primaryText": "Fanny Blankers-Koen",
                "imageSource": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Olympische_dag_in_Amsterdam._Fanny_Blankers-Koen%2C_Bestanddeelnr_903-4519.jpg/761px-Olympische_dag_in_Amsterdam._Fanny_Blankers-Koen%2C_Bestanddeelnr_903-4519.jpg"
            },
            {
                "primaryText": "Marleen Gorris",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLdNufltpcj8qPUMmsOqkpBcVER3_OyGZnL9980zUIl_UHVGdMzCUC7bzI36opZVqMxg&usqp=CAU"
            },
            {
                "primaryText": "Martin Garrix",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXM6dSiLX1TF_4blD6hvR5ZTwVViwTfkZ5n08W9Zxia_GiOjzDE_ZpSZuCjY4auLMj8w&usqp=CAU"
            },
            {
                "primaryText": "André Rieu",
                "imageSource": "https://yt3.googleusercontent.com/WON0-Y-iE_J-wkjIGSdZvCeSMhXGEQebj_M0GwlcH3lpYf411GQyeWIieAGaG5-tLA_NV1rr6w=s900-c-k-c0x00ffffff-no-rj"
            }
        ],
        "logoUrl": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png"
    }
};

const peopleaplEn = {
    "gridListData": {
        "type": "object",
        "objectId": "gridListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://i.blogs.es/2766b8/650_1000_daan-roosegaarde-opens-solar-powered-van-gogh-bike/650_1200.jpg",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "title": "Prominent personalities",
        "listItems": [
            {
                "primaryText": "Vincent van Gogh",
                "imageSource": "https://amsterdamguias.com/wp-content/uploads/2017/07/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg"
            },
            {
                "primaryText": "Rembrandt Van Rijn",
                "imageSource": "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTp25yhA-GFkAZz7Yt78fK4I_VqGT52B6MGpfwP9rsdBkToHMaD25-G2XiEhgXvdCEGbXxykY3El_KiItQ"
            },
            {
                "primaryText": "Johan Cruyff",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vfbjnTzD8ri6T94uHi2CdZBJU_3BNfenOAp2eVHbHebBrDEqfL9QZSoE9MXdyQuIQyw&usqp=CAU"
            },
            {
                "primaryText": "Max Verstappen",
                "imageSource": "https://images.pagina12.com.ar/styles/focal_3_2_960x640/public/2024-03/822124-verstappen-20arabia.jpg?h=ada05aa9&itok=Ren2bquB"
            },
            {
                "primaryText": "Fanny Blankers-Koen",
                "imageSource": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Olympische_dag_in_Amsterdam._Fanny_Blankers-Koen%2C_Bestanddeelnr_903-4519.jpg/761px-Olympische_dag_in_Amsterdam._Fanny_Blankers-Koen%2C_Bestanddeelnr_903-4519.jpg"
            },
            {
                "primaryText": "Marleen Gorris",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLdNufltpcj8qPUMmsOqkpBcVER3_OyGZnL9980zUIl_UHVGdMzCUC7bzI36opZVqMxg&usqp=CAU"
            },
            {
                "primaryText": "Martin Garrix",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXM6dSiLX1TF_4blD6hvR5ZTwVViwTfkZ5n08W9Zxia_GiOjzDE_ZpSZuCjY4auLMj8w&usqp=CAU"
            },
            {
                "primaryText": "André Rieu",
                "imageSource": "https://yt3.googleusercontent.com/WON0-Y-iE_J-wkjIGSdZvCeSMhXGEQebj_M0GwlcH3lpYf411GQyeWIieAGaG5-tLA_NV1rr6w=s900-c-k-c0x00ffffff-no-rj"
            }
        ],
        "logoUrl": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png"
    }
};

const musicaplEs = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "skip",
            "audioSources": [
                "https://drive.google.com/file/d/19iyMGgkd3zJqB_N3UqBtDUo_dxT25-G4/view?usp=sharing"
            ],
            "backgroundImage": "https://img.travesiasdigital.com/2020/01/Butterfly-Effect-By-Masamichi-Shimada-Amsterdam-Light-Festival-2019-Photo-Copyright-Janus-van-den-Eijnden-1-480x241.jpg",
            "coverImageSource": "https://i.discogs.com/v8nClM47IRy1BJXaNNjzJ1AVSBozFH0CphQ2ISLg7tE/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ3NjMw/NjUtMTM3NDcyOTQz/Ny03NDE5LmpwZWc.jpeg",
            "headerTitle": "Musica de Paises Bajos",
            "logoUrl": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png",
            "primaryText": "Tulpen uit Amsterdam",
            "secondaryText": "Herman Emmink",
            "sliderType": "determinate"
        }
    }
};

const musicaplEn = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "skip",
            "audioSources": [
                "https://open.spotify.com/intl-es/track/6tkxzcwl3yJ8d5chwHjf9L?si=10cf893a3fda481b"
            ],
            "backgroundImage": "https://img.travesiasdigital.com/2020/01/Butterfly-Effect-By-Masamichi-Shimada-Amsterdam-Light-Festival-2019-Photo-Copyright-Janus-van-den-Eijnden-1-480x241.jpg",
            "coverImageSource": "https://i.discogs.com/v8nClM47IRy1BJXaNNjzJ1AVSBozFH0CphQ2ISLg7tE/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ3NjMw/NjUtMTM3NDcyOTQz/Ny03NDE5LmpwZWc.jpeg",
            "headerTitle": "Musica de Paises Bajos",
            "logoUrl": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png",
            "primaryText": "Tulpen uit Amsterdam",
            "secondaryText": "Herman Emmink",
            "sliderType": "determinate"
        }
    }
};

const adiosresEs = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://debandera.es/361-large_default/bandera-paises-bajos.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Gracias por pasar a conocer un poco sobre Países Bajos"
                }
            },
            "logoUrl": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png",
            "hintText": "Tú puedes decir, ¡Alexa, cancelar o adiós!"
        }
    }
};

const adiosresEn = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://debandera.es/361-large_default/bandera-paises-bajos.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Thank you for stopping by to learn a little about the Netherlands"
                }
            },
            "logoUrl": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png",
            "hintText": "You can say, Alexa, help or show me tourist places in the Netherlands!"
        }
    }
};

const holamundoEs = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://www.cataloniahotels.com/es/blog/wp-content/uploads/2021/05/ciudades-mas-bonitas-de-los-paises-bajos.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": " ¡Hola!, conoce más sobre Países Bajos 😉"
                }
            },
            "logoUrl": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png",
            "hintText": "Puedes decir,  \"¡Alexa ayuda o describe Paises Bajos !\""
        }
    }
};

const holamundoEn = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://www.cataloniahotels.com/es/blog/wp-content/uploads/2021/05/ciudades-mas-bonitas-de-los-paises-bajos.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Hello!, learn more about the Netherlands 😉"
                }
            },
            "logoUrl": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png",
            "hintText": "You can say, \"Alexa help or describe Netherlands!\""
        }
    }
};

const ayudaresEs = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://blog.hoteleus.com/wp-content/uploads/2022/11/mejor-temporada-para-viajar-a-Paises-Bajos-PORTADA.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "¡Puedes saludarme! ¿Cómo te puedo ayudar?"
                }
            },
            "logoUrl": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png",
            "hintText": "Puedes decir, describe a Países Bajos o ayuda"
        }
    }
};
const ayudaresEn = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://blog.hoteleus.com/wp-content/uploads/2022/11/mejor-temporada-para-viajar-a-Paises-Bajos-PORTADA.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Hello! How can I help you?"
                }
            },
            "logoUrl": "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/128px/1f1f3-1f1f1.png",
            "hintText": "You can say, describe the Netherlands or help"
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const LocalizationInterceptor = {
    process(handlerInput) {
        const localizationClient = i18n.use(sprintf).init({
            lng: handlerInput.requestEnvelope.request.locale,
            fallbackLng: 'en',
            resources: languageStrings,
            returnObjects: true
        });

        const attributes = handlerInput.attributesManager.getRequestAttributes();
        attributes.t = function (...args) {
            return localizationClient.t(...args);
        };
        
     }
};

const CountryIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CountryIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = requestAttributes.t('COUNTRY_MESSAGE');
        let aplDocument = locale.startsWith('es') ? describeplaceEs : describeplaceEn;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID1, aplDocument);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log('APL interface not supported');
        } 
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const PlacesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PlacesIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = requestAttributes.t('PLACES_MESSAGE');
        let aplDocument = locale.startsWith('es') ? peopleaplEs : peopleaplEn;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID2, aplDocument);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log('APL interface not supported');
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FoodIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FoodIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = requestAttributes.t('FOOD_MESSAGE');
        let aplDocument = locale.startsWith('es') ? fooaplEs : fooaplEn;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID3, aplDocument);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log('APL interface not supported');
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ClotheIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ClotheIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = requestAttributes.t('CLOTES_MESSAGE');
        let aplDocument = locale.startsWith('es') ? clothesaplEs : clothesaplEn;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID4, aplDocument);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log('APL interface not supported');
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const PeopleIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PeopleIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = requestAttributes.t('PEOPLE_MESSAGE');
        let aplDocument = locale.startsWith('es') ? clothesaplEs : clothesaplEn;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID5, aplDocument);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log('APL interface not supported');
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const MusicIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MusicIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = requestAttributes.t('MUSIC_MESSAGE');
        let aplDocument = locale.startsWith('es') ? musicaplEs : musicaplEn;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID6, aplDocument);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log('APL interface not supported');
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = requestAttributes.t('WELCOME_MESSAGE');
        let aplDocument = locale.startsWith('es') ? holamundoEs : holamundoEn;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID8, aplDocument);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log('APL interface not supported');
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = requestAttributes.t('HELLO_MESSAGE');
        let aplDocument = locale.startsWith('es') ? holamundoEs : holamundoEn;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID8, aplDocument);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log('APL interface not supported');
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = requestAttributes.t('HELP_MESSAGE');
        let aplDocument = locale.startsWith('es') ? ayudaresEs : ayudaresEn;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID9, aplDocument);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log('APL interface not supported');
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = requestAttributes.t('GOODBYE_MESSAGE');
        let aplDocument = locale.startsWith('es') ? adiosresEs : adiosresEn;

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID7, aplDocument);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log('APL interface not supported');
        }
        

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('FALLBACK_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = requestAttributes.t('REFLECTOR_MESSAGE', intentName);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('ERROR_MESSAGE');
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        CountryIntentHandler,
        PlacesIntentHandler,
        FoodIntentHandler,
        ClotheIntentHandler,
        PeopleIntentHandler,
        MusicIntentHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(
        LocalizationInterceptor
    )
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();