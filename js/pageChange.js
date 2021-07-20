function pageDown(event, height) {
    event.preventDefault();
    if(nowPage <= 6 && nowPage >= 0) {
        prevPage = nowPage;
        nowPage += 1;
        // console.log(nowPage)
        // console.log("down")
        const move = nowPage * height
        // console.log(move)
        wrap.style.transform = `translate3d(0px, ${-move}px, 0px)`;
        
        const aniTarget = wrap.children[nowPage].querySelector(".animation");
        // console.log(aniTarget)
        const dotScroll = dotScrolls.children[nowPage-1];

        if (aniTarget !== null){
            setTimeout(function() {
                if(aniTarget.classList.contains("bmart-rider")){
                    aniTarget.classList.add("move-left")
                }else if(aniTarget.classList.contains("bike")){
                    aniTarget.classList.add("move-bike")
                }else{
                    aniTarget.classList.add("move")
                }
            }, 600)
        }else{
            header1.classList.remove("show");
            header2.classList.remove("show");
            header1.classList.add("show-hidden");
            header2.classList.add("show-hidden");
        }

    }
}

function pageUp(event, height) {
    event.preventDefault();
    if(nowPage <= 7 && nowPage >= 1) {
        prevPage = nowPage;
        nowPage -= 1;
        // console.log(nowPage)
        // console.log("up")
        const move = nowPage * height
        // console.log(wrap)
        wrap.style.transform = `translate3d(0px, ${-move}px, 0px)`;

        // const aniTarget = wrap.children[nowPage].querySelector(".animation");


        if (prevPage === 7){
            header1.classList.remove("show-hidden");
            header2.classList.remove("show-hidden");
            header1.classList.add("show");
            header2.classList.add("show");

        }
    }
}

function activeSection() {
    wrap.children[prevPage].classList.remove("active");
    wrap.children[nowPage].classList.add("active");
}


//_________________________________________


const wrap = document.querySelector("#section-wrap");
// const page = wrap.children;
let nowPage = 0;
let prevPage = 0;
let check = true;

// console.log(page.length)
// console.log(wrap.children[2]);
// console.dir(addEventListener)

//_________________________________________
// ANIMATION

const app = document.querySelector("#download_btn");
const riderBener = document.querySelector("#rider-bener");
const header = document.querySelector(".header-inner");
const header1 = header.querySelector("#logo");
const header2 = header.querySelector(".submenu");
const dotScrolls = document.querySelector("#pagination");
// console.log(app)


//_________________________________________
// eventlistener

history.scrollRestoration = "manual"    // 새로고침시 최상단으로
window.addEventListener('mousewheel', function(event) {
    if(check === true){
        check = false;
        event.preventDefault();
        const height = window.innerHeight;
        // console.log(aniTarget);
        // console.log(event.deltaY);
        // console.dir(event)
    
        if(event.deltaY > 0) {
            pageDown(event, height);
            activeSection();
    
        }else if(event.deltaY < 0) {
            pageUp(event, height);
            activeSection();
        }
        
        // animation
        if(wrap.children[0].classList.contains("active")) {
            if (app.classList.contains("show")){
                app.classList.add("show-hidden");
            }
            app.classList.remove("show");
            if(riderBener.classList.contains("show-hidden")) {
                riderBener.classList.add("show");
            }
            riderBener.classList.remove("show-hidden");
        }else {
            app.classList.remove("show-hidden");
            app.classList.add("show");
            riderBener.classList.remove("show");
            riderBener.classList.add("show-hidden");
        }




        setTimeout(function() {
            check = true;
        }, 300)
    }
},{passive: false});