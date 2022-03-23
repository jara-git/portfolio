// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import artdesignIcon from "./images/art-design.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import linkedinIcon from "./images/linkedin.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Jara",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "An architect by training, I evolved into a stage and film designer. Later, I moved between botanical art and graphic work; and now between designer and UI developer, soon thinking about exploring virtual and augmented reality.",

  //Contact Email
  contactEmail: "jarabelmonte@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Monster Teeth", //Project Title - Add Your Project Title Here
      para:
        "Progressive Web App. Project for the awareness of dental hygiene for children. With tips for parents and motivation for daily cleaning in children. Illustrations, branding,  UX questionnaires, UI design. Prototyped in Figma, React project", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s8.gifyu.com/images/mockup-monsterteeth.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://www.figma.com/proto/HKnmdp1sdQQsgzktDg1OQj/Dental-app?node-id=360%3A74&scaling=min-zoom",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Caroline Champion", //Project Title - Add Your Project Title Here
      para:
        "Blog website for Caroline Champion, a flavors explorer ®: transverse profession approaching the taste by various ways, to converge research, art and culinary practice. UI design. Built in Wordpress", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s8.gifyu.com/images/Screenshot-2021-01-02-at-20.52.47.png",
      //Project URL - Add Your Project Url Here
      url: "http://caroline-champion.com/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Zoe", //Project Title - Add Your Project Title Here
      para:
        "Web application to collect data from an Arduino plate and graphic visualization of the data for a bacteria inactivation box. UX/UI, website layout. Built in ReactJs", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://imgbox.com/gCM9e03V",
      //Project URL - Add Your Project Url Here
      url: "https://zoe-cedrion.netlify.app/",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Pulse", //Project Title - Add Your Project Title Here
      para:
        "Electric and non-electric bicycle shop, for mountain, city, gravel... and rental. With blog section with tips. UI design. Built in Prestashop", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s8.gifyu.com/images/mockup-pulse.jpg",
      //Project URL - Add Your Project Url Here
      url: "http://pp2.presta.pls.loco.red/",
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "La Pajita", //Project Title - Add Your Project Title Here
      para:
        "Web application to control the amount of people that can attend a cocktail bar properly. Venues that activate the waiting list enable customers to subscribe to the list. ISDI Hackton project. UI design, prototyping in Figma, website layout. Built in ReactJs", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s8.gifyu.com/images/mockUp-LaPajitajpg.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://www.flickr.com/photos/191612382@N07/shares/jLD755",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Iunity-identity", //Project Title - Add Your Project Title Here
      para:
        "Landing page project for a course.The final product contains the following information: Course description Allusive image Duration Price Mode(online, face- to - face or semi - presential) Calendar(daily, weekends, etc) website layout, UI design ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s8.gifyu.com/images/mockup-iunit.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://www.figma.com/file/eSWLbVFgMlCujV8zTZYyx2/IUNITY?node-id=0%3A1",
    },

    /*
     To Add More Projects just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Section --------------
  aboutParaOne:
    "Professional Profile: In the last ten years I have worked as a graphic, interior and set designer in Madrid, New York and Utrecht. I have worked in sectors as diverse as architecture, research, marketing and advertising, theatre, cinema, florist and real estate, where I have expanded my knowledge in design, construction, communication and administration.",
  aboutParaTwo:
    "Skills: Graphical layout 3D modelling, Laser cutting, Logo and brand manual, Carpentry and welding of base metal, Illustration, Wordpress and web layout.",
  aboutParaThree:
    "Software expertise: AutoCad, Rhinoceros, Photoshop, Illustrator, InDesign, Keyshot, Figma, Adobe XD",
  aboutParaFour:
    "Professional Competences: Creativity, Management, Planning, Teamwork, Leadership, Communication with client and team, Learning ability",
  aboutImage:
    "https://s8.gifyu.com/images/jara-perfil-gris.jpg",

  // https://s2.gifyu.com/images/ilustracion-building.png
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "HTML5 course, University of Michigan | 2017 · Front-End development course HTML5 y CSS3 desArrolladoras | Samsung | 2020 · Women are programming scholarship at Wild Code School | 2020",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "CSS3 course, University of Michigan | 2017 · Front-End development course HTML5 y CSS3 desArrolladoras | Samsung | 2020 · Women are programming scholarship at Wild Code School | 2020",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "Javascript course, University of Michigan | 2017· Front-End development course desArrolladoras | Samsung | 2020 · Women are programming scholarship at Wild Code School | 2020",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "Women are programming scholarship at Wild Code School | 2020",
    },
    {
      id: 5,
      img: artdesignIcon,
      para:
        "Master in Fine Arts in Scenography, Hanze University | 2012 · Interior Architect UPM | 2006",
    },
    {
      id: 6,
      img: codeIcon,
      para:
        "I try to refine and improve my workflow every day. I like mixing different methodologies, in order to get the most out of each one … And keep learning code with each new project",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Never confuse movement with action.",
  promotionHeading: "Certainly, travel is more ",
  promotionSubHeading: "than the seeing of sights; it is a change that goes on, ",
  promotionSubsubHeading: "deep and permanent, in ",
  promotionSubsubsubHeading: "the ideas of living.",
  promotionPara:
    "I have twelve years of experience in the area of design, two in front-end development, five as a set designer, one in event design and production and four as an architect and graphic artist. Each of these backgrounds is part of a larger picture. The knowledge I learned in various fields can be used interchangeably.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create!",
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: githubIcon,
      url: "https://github.com/jara-git/"
    },
    {
      img: codepenIcon,
      url: "https://codepen.io/jara-git",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/jara_b_/",
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/jarabelmonte/",
    },
  ],

  // End Contact Section ---------------
}
