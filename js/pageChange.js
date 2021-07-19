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
        console.log(aniTarget)
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

    }
}

function activeSection() {
    wrap.children[prevPage].classList.remove("active");
    wrap.children[nowPage].classList.add("active");
}


//_________________________________________


const wrap = document.querySelector("#section-wrap");
const page = wrap.children;
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
// console.log(app)


//_________________________________________
// eventlistener

history.scrollRestoration = "manual"    // 새로고침시 최상단으로
window.addEventListener('mousewheel', function(event) {
    if(check === true){
        check = false;
        event.preventDefault();
        const height = window.innerHeight;
        // const aniTarget = wrap.children[nowPage].querySelector(".animation");
        // console.log(aniTarget);
        console.dir(event.deltaY);
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