var isToggle = true;

function toggle() {
    console.log("clicked");
    isToggle = !isToggle;
    if (isToggle) {
        if (window.innerWidth <= 1000) {
            document.getElementsByClassName('renders')[0].style.display = 'flex';
        } else {
            document.getElementsByClassName('renders')[0].style.display = 'grid';
        }
        document.getElementsByClassName('projects')[0].style.display = 'none';
    } else {
        document.getElementsByClassName('renders')[0].style.display = 'none';
        document.getElementsByClassName('projects')[0].style.display = 'flex';
    }
}

document.getElementById("project-toggle").onclick = toggle;
document.getElementById("render-toggle").onclick = toggle;