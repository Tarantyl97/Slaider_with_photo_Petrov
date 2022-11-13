let images = [
  {
    url: "..//images/sochi.jpg",
  },
  {
    url: "..//images/rostov-admiral.jpg",
  },
  {
    url: "..//images/rostov-patriotik.jpg",
  },
];

let linksText = [
  "Rostov-on-Don, Admiral",
  "Sochi Thieves",
  "Rostov-on-Don Patriotic",
];

let textArray = [
  //text for first image
  [
    "Rostov-on-Don <br>LCD admiral", //0
    "Sochi Thieves",
    "Rostov-on-Don <br>Patriotic",
    "81 m2", //3
    "105 m2",
    "93 m2",
    "3.5 months", //6
    "4 months",
    "3 months",
    "Upon request", //9
    "Upon request",
    "Upon request",
  ],
  //text for second image
  [
    "Sochi Thieves", //0
    "LoremIpsum",
    "LoremIpsum",
    "105 m2", //3
    "LoremIpsum",
    "LoremIpsum",
    "4 months", //6
    "LoremIpsum",
    "LoremIpsum",
    "Upon request", //9
    "LoremIpsum",
    "LoremIpsum",
    "LoremIpsum",
    "LoremIpsum",
  ],
  //text for third image
  [
    "Rostov-on-Don <br>Patriotic", //0
    "LoremIpsum3", 
    "LoremIpsum3", 
    "93 m2", //3
    "LoremIpsum3", 
    "LoremIpsum3", 
    "3 months", //6
    "LoremIpsum3", 
    "LoremIpsum3", 
    "Upon request", //9
    "LoremIpsum3",
    "LoremIpsum3",
    "LoremIpsum3",
    "LoremIpsum3",
  ],
];

function initSlider(options) {
  if (!images || !images.length) return;

  options = options || {
    //   titles: false,
    dots: true,
    links: true,
    info: true,
    //   autoplay: false
  };

  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__arrows");
  let sliderDots = document.querySelector(".slider__dots");
  let linksArrow = document.querySelector(".section2__table");
  let infoBlocks = document.querySelector(".info");

  initImages();
  initArrows();

  if (options.dots) {
    initDots();
  }
  if (options.info) {
    initInfo();
  }

  // if (options.titles) {
  //   initTitles();
  // }

  if (options.links) {
    initLinks();
  }

  // if (options.autoplay) {
  //   initAutoplay();
  // }

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${
        index === 0 ? "active" : ""
      }" style="background-image:url(${
        images[index].url
      });" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initLinks() {
    images.forEach((image, index) => {
      let links = `<li><a class="section2__table-text n${index} ${
        index === 0 ? "active" : ""
      }" href="#"  data-index="${index}">${linksText[index]}</a></li>`;
      linksArrow.innerHTML += links;
    });
    linksArrow.querySelectorAll(".section2__table-text").forEach((link) => {
      console.log(link);
      link.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }
  function initInfo() {
    images.forEach((image, index) => {
      let info = ` <div class="infoBlock n${index} ${
        index === 0 ? "active" : ""
      }"  data-index="${index}" >
  <div>
      <h3 class="tittle__info">City:</h3>
      <span class="text__info">${textArray[index][0]}</span><br>
      <span class="text__info2">${textArray[index][1]}</span><br>
      <span class="text__info3">${textArray[index][2]}</span>
  </div>
  <div>
      <h3 class="tittle__info">apartment area:</h3>
      <span class="text__info">${textArray[index][3]}</span><br>
      <span class="text__info2">${textArray[index][4]}</span><br>
      <span class="text__info3">${textArray[index][5]}</span>
  </div>    
  <div>
      <h3 class="tittle__info">Repair time:</h3>
      <span class="text__info">${textArray[index][6]}</span><br>
      <span class="text__info2">${textArray[index][7]}</span><br>
      <span class="text__info3">${textArray[index][8]}</span>
  </div>
  <div>
      <h3 class="tittle__info">Repair Cost:</h3>
      <span class="text__info">${textArray[index][9]}</span><br>
      <span class="text__info2">${textArray[index][10]}</span><br>
      <span class="text__info3">${textArray[index][11]}</span>
  </div>
  </div>`;
      infoBlocks.innerHTML += info;
    });
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }
    if (options.links) {
      linksArrow.querySelector(".active").classList.remove("active");
      linksArrow.querySelector(".n" + num).classList.add("active");
    }
    if (options.info) {
      infoBlocks.querySelector(".active").classList.remove("active");
      infoBlocks.querySelector(".n" + num).classList.add("active");
    }
    //   if (options.titles) changeTitle(num);
  }

  // function initTitles() {
  //   let titleDiv = `<div class="slider__images-title">${images[0].title}</div>`;
  //   sliderImages.innerHTML += titleDiv;
  // }

  // function changeTitle(num) {
  //   if (!images[num].title) return;
  //   let sliderTitle = sliderImages.querySelector(".slider__images-title");
  //   sliderTitle.innerText = images[num].title;
  // }

  // function cropTitle(title, size) {
  //   if (title.length <= size) {
  //     return title;
  //   } else {
  //     return title.substr(0, size) + "...";
  //   }
  // }

  // function initAutoplay() {
  //   setInterval(() => {
  //     let curNumber = +sliderImages.querySelector(".active").dataset.index;
  //     let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
  //     moveSlider(nextNumber);
  //   }, options.autoplayInterval);
  // }
}

let sliderOptions = {
  dots: true,
  info: true,
  links: true,
  autoplay: true,
  autoplayInterval: 5000,
};

document.addEventListener("DOMContentLoaded", function () {
  initSlider(sliderOptions);
});
