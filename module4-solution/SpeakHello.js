(function (window) {
  let helloSpeaker = {
    speak: function (name) {
      console.log("Hello " + name);
    },
  };
  window.helloSpeaker = helloSpeaker;
})(window);
