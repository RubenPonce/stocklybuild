// check that service worker allowable from browser
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(function() {
    });
}

// Sign up button animation
const signUpButton = document.querySelectorAll('.sign-up');

signUpButton.forEach(button => {
    button.addEventListener('mouseenter', (event) => mouseOverPriButton(event));
    button.addEventListener('mouseleave', (event) => mouseOutPriButton(event));
});

function mouseOverPriButton(event) {
    let targetedButton = event.target;
    TweenMax.to(targetedButton, 0.3, { backgroundColor: '#50CDC5' });
}

function mouseOutPriButton(event) {
    let targetedButton = event.target;
    TweenMax.to(targetedButton, 0.3, { backgroundColor: '#5AE5DD' });

}

// log in button animation
const loginButton = document.querySelectorAll('.log-in');

loginButton.forEach(button => {
    button.addEventListener('mouseenter', (event) => mouseOverSecButton(event));
    button.addEventListener('mouseleave', (event) => mouseOutSecButton(event));
});

function mouseOverSecButton(event) {
    let targetedButton = event.target;
    TweenMax.to(targetedButton, 0.3, {color: '#97A2B9'});
}

function mouseOutSecButton(event) {
    let targetedButton = event.target;
    TweenMax.to(targetedButton, 0.3, {color: '#0D122B'});

}

// hamburger button animation
const hamburgerMenu = document.querySelector('.menu label');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('close');
});

// nav link hover effect
const navLinks = document.querySelectorAll('.hover-nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', (event) => mouseOverNavLink(event));
    link.addEventListener('mouseleave', (event) => mouseOutNavLink(event));
})

function mouseOverNavLink(event) {
    let targetedLink = event.target;
    TweenMax.to(targetedLink, 0.3, { color: '#97A2B9' });
}

function mouseOutNavLink(event) {
    let targetedLink = event.target;
    TweenMax.to(targetedLink, 0.3, { color: '#0D122B' });
}

// footer list item hover effect
const footerLinks = document.querySelectorAll('.footer-links a');

footerLinks.forEach(link => {
    link.addEventListener('mouseenter', (event) => mouseOverFooterLink(event));
    link.addEventListener('mouseleave', (event) => mouseOutFooterLink(event));
});

function mouseOverFooterLink(event) {
    let targetedLink = event.target;
    TweenMax.to(targetedLink, 0.3, { color: '#5AE5DD' });
}

function mouseOutFooterLink(event) {
    let targetedLink = event.target;
    TweenMax.to(targetedLink, 0.2, { color: '#F9F9F9' });
}

// fixed scroll bar shadow
const navBar = document.querySelector('.nav-wrapper');
window.addEventListener('scroll', () => floatingNavBar());

function floatingNavBar() {
    if(navBar.classList.contains('floatingNav') && window.scrollY > 10){
        // do nothing
    } else if(window.scrollY > 10) {
        navBar.classList.add('floatingNav');
    } else {
        navBar.classList.remove('floatingNav');
    }
}


// approach page
if (document.title == 'Approach') {
    // target nodes on specific svg image
    const svgPaths = document.querySelectorAll('.approach-image-container path');

    let node1 = svgPaths[26];
    let node2 = svgPaths[27];
    let node3 = svgPaths[28];
    let node4 = svgPaths[29];
    let node5 = svgPaths[30];

    TweenMax.fromTo(node1, 1, {fill: '#5AE5DD', delay: 1.5}, {fill: '#dcf9f8', repeat: -1});
    TweenMax.fromTo(node2, 1, {fill: '#5AE5DD', delay: 1.2}, {fill: '#00d8cd', repeat: -1});
    TweenMax.fromTo(node3, 2, {fill: '#5AE5DD', delay: 0.9}, {fill: '#00bfaf', repeat: -1});
    TweenMax.fromTo(node4, 2, {fill: '#5AE5DD', delay: 0.6}, {fill: '#009e8d', repeat: -1});
    TweenMax.fromTo(node5, 3, {fill: '#5AE5DD', delay: 0.3}, {fill: '#00705c', repeat: -1});

    // trickle down animation effect on approach page load
    let t1 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });
    
    t1.add({
        targets: '.approach section div',
        backgroundColor: '#E0FCF9',
        delay: anime.stagger(75)
    })
    
    // fade in effect for various components on the approach page
    const stocklyApproach = document.querySelector('.stockly-approach');
    TweenMax.from(stocklyApproach, 2, {opacity: 0});
    
    const approachSection = document.querySelector('.approach');
    TweenMax.to(approachSection, 2, {backgroundColor: '#F9F9F9'});
    
    const approachHeader = document.querySelector('.header-approach h2');
    const approachSubtitle = document.querySelector('.header-approach p');
    const approachImage = document.querySelector('.header-approach .approach-image-container');
    
    TweenMax.from(approachHeader, 2, {opacity: 0});
    TweenMax.from(approachSubtitle, 2, {opacity: 0});
    TweenMax.from(approachImage, 2, {opacity: 0}); 

    
}


