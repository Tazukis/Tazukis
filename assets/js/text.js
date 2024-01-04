$(function () {
  var title = document.title,
    animSeq = ["|"],
    animIndex = 0,
    titleIndex = 0;
  function doInverseSpinZeroPitch() {
    var loadTitle = title.substring(0, titleIndex);
    if (titleIndex > title.length) {
      animIndex = 0;
      titleIndex = 0;
    }
    if (animIndex > 1) {
      titleIndex++;
      animIndex = 0;
    }
    document.title = loadTitle + animSeq[0];
    animIndex++;
  }
  window.setInterval(doInverseSpinZeroPitch, 150);
});
$(function () {
  $(".typed").typed({
    strings: [
      "Hello, my name is Phan Minh Phát",
      "I like playing minecraft and fifa online",
      "I come from dear Vietnam💖",
      "I am the founder of NeoNixMC",
      "I like eating ice cream 🍦 and listening to music 🎵",
      "I am a wibu, love anime 🍨",
      "Have a good day 🍀",
      "My in-game name is TazukiVN 🎮",
      "My email is phxnquyng@Gmail.com",
    ],
    typeSpeed: 235,
    loop: true,
    cursorChar: "|",
  });
});
