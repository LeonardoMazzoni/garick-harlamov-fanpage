import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

export const spin = () => {
  let body = document.getElementsByTagName('body')[0];

  body.classList.add('animate-spin')

  setTimeout(() => {
    body.classList.remove('animate-spin')
  }, 1000);
}

export const img_black_hole = () => {
  // Get all img elements inside the body
  const images = document.querySelectorAll('body img');

  // Function to center each image in the viewport
  images.forEach(img => {

    const default_classlist = img.classList
    const default_style = img.style

    img.classList.add('transition-all');
    img.classList.add('duration-1000');
    // Apply CSS styles to center the image
    img.style.position = 'fixed';  // Fixed positioning to center in viewport
    img.style.top = '50%';         // Center vertically
    img.style.left = '50%';        // Center horizontally
    img.style.transform = 'translate(-50%, -50%)';  // Offset to perfectly center
    img.style.zIndex = '1000';     // Ensure it's above other content

    const randomNum = Math.floor(Math.random() * (500 - 300 + 1)) + 300;

    img.style.width = randomNum+"px";

    // Randomize spin duration between 3 to 10 seconds
    const spinDuration = Math.random() * 7 + 3;  // Random value between 3 and 10 seconds

    // Apply spinning animation with different rates
    img.style.animation = `spin ${spinDuration}s linear infinite`;  // Spin animation with random duration

    setTimeout(() => {
      img.classList = default_classlist;
      img.style = default_style;
    }, 10000);
  });
}

export const negative_garik = () => {
  const images = document.querySelectorAll('body img');

  images.forEach(img => {

    img.classList.add('transition-all');
    img.classList.add('duration-1000');
    img.classList.add('invert')

    setTimeout(() => {
      img.classList.remove('invert')
    }, 5000);
  })
}