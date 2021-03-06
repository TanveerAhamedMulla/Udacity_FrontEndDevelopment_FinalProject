import { handleSubmit } from './js/formHandler'
//alert("I exist!")

import './styles/style.scss'

// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}

export {
    handleSubmit
}