var isToggle = true;

async function toggle() {
    console.log("clicked");
    isToggle = !isToggle;
    if (isToggle) {
        await gsap.to(".projects", { opacity: 0, duration: 0.5 });
        document.getElementsByClassName('projects')[0].style.display = 'none';
        if (window.innerWidth <= 1000) {
            document.getElementsByClassName('renders')[0].style.display = 'flex';
        } else {
            document.getElementsByClassName('renders')[0].style.display = 'grid';
        }
        await gsap.to(".renders", { opacity: 1, duration: 0.5 });
    
    } else {
        await gsap.to(".renders", { opacity: 0, duration: 0.5 });
        document.getElementsByClassName('renders')[0].style.display = 'none';
        document.getElementsByClassName('projects')[0].style.display = 'flex';
        await gsap.to(".projects", { opacity: 1, duration: 0.5 });
    }
}

document.getElementById("project-toggle").onclick = toggle;
document.getElementById("render-toggle").onclick = toggle;