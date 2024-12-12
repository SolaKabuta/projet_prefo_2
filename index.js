// const pass = 1234;

// console.log(pass);

// if (pass === 1234) {
//   console.log("Acces autorise");
// } else {
//     console.log("Acces refuse");
//

// const lundi = 1
// const mardi = 2
// const mercredi = 3
// const jeudi = 4
// const vendredi = 5
// let samedi = "weekend"
// let dimanche = "weekend"


// console.log(dimanche, samedi)

// let temp = 18

// if (temp <= 0) {
//     console.log("Il fait très froid")
// } else if (temp >= 0 && temp < 20) {
//     console.log("Il fait frais")
// } else if (temp = 20) {
//     console.log("Il fait chaud")
// }

// let y = 2, x = 3, z = 4

// console.log(x)


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


