function createFooterBg(footerHeight) {
    const img = document.createElement('div');
    img.id = "footer-bg";
    img.style.position = "relative"
    img.style.left = '50%';
    img.style.marginLeft = '-50vw';
    img.style.right = '50%';
    img.style.marginRight = '-50vw';
    img.style.top = '0';
    img.style.width = '100vw';
    img.style.height = footerHeight + 'px';
    return img;
}

const blue = 'rgb(116, 182, 212, 0.6)';
const blueBg = 'rgb(179, 205, 210, 0.001)';
const green = 'rgb(194, 231, 209, 0.5)';
const pink = 'rgb(227, 194, 208, 0.65)';
const yellow = 'rgb(229, 224, 193, 0.7)';

function changeBackgroundGradient(x, y) {
    // console.log(`X: ${x}, Y: ${y}`);
    var width = window.innerWidth;
    var height = window.innerHeight;
    var bgElement = document.getElementById('footer-bg');
    console.log('bgElement: ' + bgElement);

    var xPercent = x/width*100;
    var yPercent = y/height*100;

    let pink1 = 'radial-gradient(at '+(xPercent)+'% '+(yPercent)+'%, '+pink+', '+blue+')';
    let yellow1 = 'radial-gradient(at '+(20-yPercent**0.1)+'% '+(xPercent**0.2+55)+'%, '+yellow+', '+blue+')';
    let green1 = 'radial-gradient(at '+(yPercent**0.4-20)+'% '+(xPercent**0.2+20)+'%, '+green+' 20%, transparent 90%)';
    
    let radialGradient = pink1+','+yellow1+','+green1;
    bgElement.style.background = radialGradient;
    console.log('footer: ' + bgElement.style);
}

class FooterGradient extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            document.addEventListener('mousemove', (e) => {
                console.log('mousemoved footer' + e.clientX);
                changeBackgroundGradient(e.clientX, e.clientY);
            });

            var footerHeight = this.offsetHeight;
            var footerWidth = this.offsetWidth;
            console.log('footer width: ' + footerWidth);
            console.log("footer height: " + footerHeight);
            this.appendChild(createFooterBg(footerHeight));
        } 
}
customElements.define('footer-gradient', FooterGradient);
