import images from './app.js'
Kakao.init("32ac78b0b5d2fe39116efb22d978c462");

for (i = 1; i <= 136; i++) {
  Kakao.Link.createDefaultButton({
    container: `#icon_${String(i).padStart(3, 0)}`,
    objectType: "feed",
    content: {
      title: "냥장콘 😺",
      imageUrl: images[i],
      link: {
        mobileWebUrl: "http://yg1ee.github.io/caticon",
        webUrl: "http://yg1ee.github.io/caticon",
      },
    },
  });
}
