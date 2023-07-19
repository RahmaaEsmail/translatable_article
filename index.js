import data from './data.js';

const translateText = (lang)=> {
    const container = document.querySelector(".container");
    const primaryHeading = document.querySelector("h1");
    const headingParagraph = document.querySelector(".heading-paragraph");
    const headingText = document.querySelector("article p");
    const link = document.querySelector("a");

    if(lang == 'ar')
        container.dir = "rtl";
    else 
        container.dir = "ltr";
    
    primaryHeading.innerHTML = data.home_heading[lang];
    headingParagraph.innerHTML = data.home_paragraph[lang];
    headingText.innerHTML = data.home_text[lang];
    link.innerHTML = data.home_link[lang];
}


const init = ()=>{
    const btns = document.querySelectorAll("button");
    btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            translateText(e.target.dataset.lang)
        })
    })
}
init()