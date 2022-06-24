const sections = document.querySelectorAll("section")
const a_All = document.querySelectorAll("nav ul li a")
const toReveal = document.querySelectorAll(".reveal")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.target.classList.contains("reveal")) {
            entry.target.classList.toggle("on-view", entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target)
        }
    })
}, {threshold: 0.1})

toReveal.forEach(element => {
    observer.observe(element)
})
window.addEventListener("scroll", () => {
    let currentSection = ""
    sections.forEach((section) => {
        const sectionTopDist = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTopDist - sectionHeight / sections.length) {
            currentSection = section.getAttribute("id")
        }
    })

    a_All.forEach((a) => {
        a.classList.remove("active")
        if (a.dataset.section !== undefined) {
            if (a.dataset.section.includes(currentSection)) {
            a.classList.add("active")
            }
        }
    })
})

