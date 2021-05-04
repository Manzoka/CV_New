window.onload = () => {
    whatIsHappening();
    changeCvContent();
}

function whatIsHappening() {
    setTimeout(() => {
        const body = document.body;
        body.style.WebkitTransitionDuration='8s';
        body.style.webkitTransform = 'rotate(5400deg)';
    }, 5000);
}

function changeCvContent() {
    setTimeout(() => {
        updateProfileTitle();
        updateProfilePicture();
    }, 10000);
}

function updateProfileTitle() {
    document.getElementsByTagName('h1').item(0).textContent = "I'm Maci, the ultimate king here";
}

function updateProfilePicture() {
    const profilePic = document.getElementsByTagName('img').item(1);
    profilePic.src = 'images/hekk.jpg';
    profilePic.style.borderRadius = '50%';
}
