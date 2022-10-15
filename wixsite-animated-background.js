// import wixSite from 'wix-site';

function createSectionBg(sectionHeight) {
    const img = document.createElement('div');
    img.id = "section-bg";
    // img.style.position = 'relative';
    // img.style.right = '50%';
    img.style.left = '50';
    img.style.marginLeft = '-50vw';
    // img.style.marginRight = '-50vw';
    // img.style.margin = '0';
    // img.style.right = '0';
    img.style.top = '0';
    // img.style.bottom = '0';
    img.style.width = '150vw';
    img.style.height = sectionHeight + 'px';
    return img;
}

// var sectionHeight = 100;

const blue = 'rgb(116, 182, 212, 0.6)';
const blueBg = 'rgb(179, 205, 210, 0.001)';
const green = 'rgb(194, 231, 209, 0.5)';
const pink = 'rgb(227, 194, 208, 0.65)';
const yellow = 'rgb(229, 224, 193, 0.7)';

function changeBackgroundGradient(x, y) {
    // console.log(`X: ${x}, Y: ${y}`);
    var width = window.innerWidth;
    var height = window.innerHeight;
    var bgElement = document.getElementById('section-bg');
    console.log('bgElement: ' + bgElement);

    var xPercent = x/width*100;
    var yPercent = y/height*100;

    // let pink1 = 'radial-gradient(at '+(xPercent**0.5+95)+'% '+(yPercent**0.7+5)+'%, '+pink+' 5%, transparent 40%)';
    // let yellow1 = 'radial-gradient(at '+(yPercent**0.5+5)+'% '+(xPercent**0.8+95)+'%, '+yellow+' 0%, transparent 50%)';
    // let green1 = 'radial-gradient(at '+(yPercent**0.7)+'% '+(xPercent**0.6)+'%, transparent 50%, '+green+' 70%, transparent 90%)';
    // let blue1 = 'radial-gradient(circle at '+(xPercent**0.5)+'% '+(yPercent**0.6)+'%, '+blue+' 10%, transparent 65%)';
    let pink1 = 'radial-gradient(at '+(xPercent)+'% '+(yPercent)+'%, '+pink+', '+blue+')';
    let yellow1 = 'radial-gradient(at '+(20-yPercent**0.1)+'% '+(xPercent**0.2+55)+'%, '+yellow+', '+blue+')';
    let green1 = 'radial-gradient(at '+(yPercent**0.4-20)+'% '+(xPercent**0.2+20)+'%, '+green+' 20%, transparent 90%)';
    
    let radialGradient = pink1+','+yellow1+','+green1;
    // let radialGradient = pink1+','+yellow1+','+green1+','+blue1;
    bgElement.style.background = radialGradient;
    console.log(bgElement.style);
    // bgElement.style.background = 'radial-gradient(at ' + xPercent +'% ' + yPercent + '%, #e66465, #9198e5)';
}

class BackgroundGradient extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            document.addEventListener('mousemove', (e) => {
                console.log('mousemoved ' + e.clientX);
                changeBackgroundGradient(e.clientX, e.clientY);
            });

            // if home page, create section background. (y: 1072, height: 808)
            // if (wixSite.currentPage.isHomePage) {
                // this.appendChild(createSectionBg());
            // }
            // create footer background object for all pages except menu lightbox. (y: 3222, height: 860)
            // if (wixSite.currentPage.type != 'lightbox') {
            var thisHeight = this.offsetHeight;
            console.log("section height: " + thisHeight);
            var sectionHeight = this.offsetHeight;
            this.appendChild(createSectionBg(sectionHeight));

            // var bgAnimStrip = document.getElementById('#bgAnimStrip');
            // console.log(bgAnimStrip);
            // var sectionHeight = bgAnimStrip.offsetHeight;
            // console.log(sectionHeight);
            thisHeight = this.offsetHeight;
            console.log("2: " + thisHeight);
            const nodeList= document.querySelectorAll("p");
            console.log(nodeList);
            // }
        } 
}
customElements.define('background-gradient', BackgroundGradient);
