// document.addEventListener("DOMContentLoaded", function () {
//     const wordContainers = document.querySelectorAll(".word");
//     const underlineElements = document.querySelectorAll(".underline");
//     const textSpans = document.querySelectorAll(".text");

//     const timeline = gsap.timeline();

//     wordContainers.forEach((wordContainer, index) => {
//         timeline.to(underlineElements[index], { width: "100%", duration: 1, ease: "power2.out" });
//         timeline.to(textSpans[index], { opacity: 1, duration: 0.5 }, `-=${0.5}`);
//     });
// });
const nav=document.querySelector(".navbar-container")
fetch("/navbar.html") 
.then(res=>res.text())
.then(data=>{

    let parser= new DOMParser();
    let doc= parser.parseFromString(data,"text/html")

    let path = window.location.pathname;
    let page = path.split("/").slice(1,2).toString();

    if(page==="blog")
    {
        let blog=doc.getElementById('inner-blog')
        blog.style.textDecoration='line-through' 
        blog.style.color='#8f00f1'
        //Adding newsletter at bottom
        fetch("/scripts/newsletter/news_letter.min.html")
        .then(res=>res.text())
        .then(data=>{
            let parser= new DOMParser()
            let doc=parser.parseFromString(data,"text/html")
            let subscribe=doc.getElementById("subscribe")
            const newsLetter=document.getElementById("newsletter").appendChild(subscribe)
        })


    }
    else if(page==="resume")
    {
        let resume=doc.getElementById('inner-nav') 
        resume.style.textDecoration='line-through'
        resume.style.color='#8f00f1'
    }
    else{
        let logo=doc.getElementById('inner-home')
        logo.style.textDecoration='line-through'
        logo.style.color='#8f00f1'

    }

    let body=doc.getElementsByTagName('body')[0].outerHTML
    nav.innerHTML+=body
})