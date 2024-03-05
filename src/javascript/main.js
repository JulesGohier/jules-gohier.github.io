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