"use strict";navigator.serviceWorker&&(console.log("service worker supported"),window.addEventListener("load",function(){navigator.serviceWorker.register("service-worker.js",{scope:"https://vasudevapitta.github.io/New-Responsive-Portfolio/"}).then(function(e){console.log("serviceWorker is registered")}).catch(function(e){console.log("serviceWorker is NOT registered: "+e)})}));