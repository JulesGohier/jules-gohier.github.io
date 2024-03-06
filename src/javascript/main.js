function changeDisplay(){
    let element = document.querySelector(".home-header-toggle");
    if (element.style.display == 'none') {
        element.style.display = 'flex';
    }else{
        element.style.display = 'none';
    }
}


const marqueeContent = document.querySelector(".home-footer-marquee");

for (let i = 0; i < 20; i++){
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


function copy(){
    navigator.clipboard.writeText("jules.gohier@outlook.fr");
}

function download(){
    browser.downloads("../assets/icons/Icon-Start.png")
}


const state = {};
const carouselList = document.querySelector(".projects-carousel-list");
const carouselItems = document.querySelectorAll(".projects-carousel-list-item");
const elems = Array.from(carouselItems);


carouselList.addEventListener("click", function (event) {
  var newActive = event.target.closest(".projects-carousel-list-item");

  var isItem = newActive.closest(".projects-carousel-list-item");

  if (!isItem) {
    return;
  }
  
  update(newActive);
});

const update = function (newActive) {
  const newActivePos = newActive.dataset.position;

  const current = elems.find((elem) => elem.dataset.position == 0);
  const prev = elems.find((elem) => elem.dataset.position == -1);
  const next = elems.find((elem) => elem.dataset.position == 1);
  const first = elems.find((elem) => elem.dataset.position == -2);
  const last = elems.find((elem) => elem.dataset.position == 2);

    console.log([current, prev, next, first, last]);

  [current, prev, next, first, last].forEach((item) => {
    var itemPos = item.dataset.position;

    item.dataset.position = getPos(itemPos, newActivePos);
    console.log(itemPos, item.dataset.position);
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  

  if (Math.abs(current - active) > 2) {
    return -current;
  }

  return diff;
};
