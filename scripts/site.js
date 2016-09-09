
// Use the sqs-core module to access core Squarespace
// functionality, like Lifecycle and ImageLoader. For
// full documentation, go to:
//
// http://github.com/squarespace/squarespace-core

//TODO: move @sqs/core to @squarespace/core before publishing
var core = require('@sqs/core');

window.addEventListener('DOMContentLoaded', function() {

  var images = document.querySelectorAll('img[data-src]');

  for (var i = 0; i < images.length; i++) {
    core.ImageLoader.load(images[i], {
      load: true
    });
  }

});