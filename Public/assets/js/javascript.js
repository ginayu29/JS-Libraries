// Dark Mode Options and Code
const options = {
  bottom: '64px',
  right: 'unset',
  left: '32px',
  time: '0.5s',
  mixColor: '#fff',
  backgroundColor: '#fff',
  buttonColorDark: '#100f2c',
  buttonColorLight: '#fff',
  saveInCookies: false,
  autoMatchOsTheme: true,
  exclude: '.darkmode-exclude', // Add this line to exclude elements with 'darkmode-exclude' class
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

// Put the Darkmode Widget on the top so it isn't covered by the fullpage background script
const darkModeToggle = document.querySelector('.darkmode-toggle');
if (darkModeToggle) {
  darkModeToggle.style.zIndex = '9999'; // Adjust the value as needed
}
// bideo.js scripts
(function () {

  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    // autoplay: false,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'night.mp4',
        type: 'video/mp4'
      },
      {
        src: 'night.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
}());