import mobileBenchmarksImage from "./assets/mobile-benchmarks.png"
import rutaImage from "./assets/ruta.png"
import cryptoStatsImage from "./assets/cryptostats.png"
import revealImage from "./assets/reveal.png"
import deliciousoImage from "./assets/deliciouso.png"
import htmlIcon from "./assets/html-icon.svg"
import cssIcon from "./assets/css-icon.svg"
import jsIcon from "./assets/js-icon.svg"
import reactIcon from "./assets/react-icon.svg"
import nodeIcon from "./assets/node-icon.svg"
import expressIcon from "./assets/express-icon.svg"
import mongoIcon from "./assets/mongo-icon.svg"
import figmaIcon from "./assets/figma-icon.svg"

type Stack = {
    name : string;
    color : string;
    iconPath : string;
}

const fullstackLanguages : Stack[] = [{
   name : "React.JS",
   iconPath : reactIcon,
   color : "#157AFB"
},
{
    name : "CSS",
    iconPath : cssIcon,
    color : "#1572B6"
 },
 {
    name : "Node.JS",
    iconPath : nodeIcon,
    color : "#3DA92E"
 },
 {
   name : "Express.JS",
   iconPath : expressIcon,
   color : "#000000"
  },
 {
    name : "MongoDB",
    iconPath : mongoIcon,
    color : "#439934"
 },
 {
    name : "Figma",
    iconPath : figmaIcon,
    color : "#F24E1E"
 }
]

const vanillaLanguages : Stack[] = [{
    name : "HTML",
    iconPath : htmlIcon,
    color : "#E75326"
 },
 {
     name : "CSS",
     iconPath : cssIcon,
     color : "#1572B6"
  },
  {
     name : "JavaScript",
     iconPath : jsIcon,
     color : "#D2B911"
  },
  {
     name : "Figma",
     iconPath : figmaIcon,
     color : "#F24E1E"
  }
 ]

const allProjects = [{
    projectImage : mobileBenchmarksImage,
    projectTitle : "Mobile Benchmarks : Discover Games That Run Perfectly on Your Phone ",
    projectDescription : "Mobile benchmarks is a web application that helps you compare and discover mobile games that perform well on your device. Mobile Benchmarks gives you tailored benchmarks, real-user results, and game-specific performance insights",
    liveSiteLink : "https://mobile-benchmarks.vercel.app/",
    languagesArray : fullstackLanguages
},
{
    projectImage : rutaImage,
    projectTitle : "Ruta : Your Guide to Learning fast with AI",
    projectDescription : "Ruta is a web application that leverages the power of AI to create personalized learning paths. Tell Ruta what you want to learn and Ruta generates a customized roadmap to help you achieve your learning objectives efficiently and effectively.",
    githubLink : "https://github.com/Daviddix/ruta",
    liveSiteLink : "https://deliciouso.netlify.app/",
    languagesArray : vanillaLanguages
},
{
    projectImage : cryptoStatsImage,
    projectTitle : "CryptoStats : Track Cryptocurrency Prices Without Leaving your Tab",
    projectDescription : "CryptoStats is a free Chrome extension designed to provide users with real-time updates on the prices of cryptocurrencies. This tool integrates seamlessly into the browser, allowing users to monitor their favorite coins and tokens without the need to navigate away from their current tabs",
    githubLink : "https://github.com/Daviddix/CryptoStats---Track-cryptocurrency-prices-without-leaving-your-tab",
    liveSiteLink : "https://chromewebstore.google.com/detail/cryptostats/apnalilblhlemleggbcddjpmkciocimc",
    languagesArray : vanillaLanguages
},
{
    projectImage : deliciousoImage,
    projectTitle : "Deliciouso : An Easy Way to Find & Share Recipes",
    projectDescription : "Deliciouso is a web application designed to help you discover a variety of recipes and allows you to add your own. With Deliciouso, you can easily view recipes, create new ones, delete them when no longer needed, and update your existing recipes. Additionally, Deliciouso lets you view the profiles of other users, making it a simple way to share and explore recipes with others.",
    githubLink : "https://github.com/Daviddix/recipe-web-application",
    liveSiteLink : "https://deliciouso.netlify.app/",
    languagesArray : fullstackLanguages
},
{
    projectImage : revealImage,
    projectTitle : "Reveal : Understand Privacy Policies Instantly",
    projectDescription : "Reveal is a  Chrome extension designed to help you understand privacy policies using AI, offering simplified summaries and easy-to-read insights. With Reveal, you can instantly extract and simplify any privacy policy, save it for later, and ensure you’re always in the know about how your data is handled.",
    githubLink : "https://github.com/Daviddix/Reveal---Easy-to-understand-privacy-policies",
    liveSiteLink : "https://chromewebstore.google.com/detail/reveal-instantly-understa/doapfofebjnljdcdpkknadbnojikkokp",
    languagesArray : vanillaLanguages
}]

export {fullstackLanguages, vanillaLanguages, allProjects}