const btn = document.querySelector('.user .profile');
const mn = document.querySelector('.user-menu');
let menuToogle = false;

btn.addEventListener('click', () => {
    //Toggle Nav
    if(!menuToogle) {
        mn.classList.add('active');
        menuToogle = true;

    } else {
        mn.classList.remove('active');
        menuToogle = false;
    }
});

// Declaring the Navigation Menu variables

const mnBtn = document.querySelector('.menu');
const navLink = document.querySelector('.nav-links');
const Links = document.querySelectorAll('.nav-links ul li')
let menuOpen = false;

navLink.classList.add('nav-deactive')

// Declaring the User Menu variables

const profileBtn = document.querySelector('.nav-links .profile');
const navUser = document.querySelector('.nav-user');
const userSpaces = document.querySelectorAll('.nav-user ul li')
let userOpen = false;

navUser.classList.add('nav-deactive')

// Declaring Separator

const separator = document.querySelector('.separator')
separator.classList.add('separator-deactive')

// Declaring the Menu Handler function

mnBtn.addEventListener('click', () => {
    //Toggle Nav
    if(!menuOpen) {
        mnBtn.classList.add('open');
        navLink.classList.remove('nav-deactive')
        navLink.classList.add('nav-active')
        separator.classList.remove('separator-deactive')
        separator.classList.add('separator-active')
        menuOpen = true;

    } else {
        if(menuOpen && userOpen) {
            profileBtn.classList.remove('open');
            navUser.classList.remove('nav-active')
            navUser.classList.add('nav-deactive')
            userOpen = false;
        } else {
        mnBtn.classList.remove('open');
        navLink.classList.remove('nav-active')
        navLink.classList.add('nav-deactive')
        separator.classList.remove('separator-active')
        separator.classList.add('separator-deactive')
        menuOpen = false;
        }
    }
    
    //Animate Links
    Links.forEach((link, index) => {
        if(!menuOpen) {
            link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        } else {
            link.style.animation = `navUnfade 0.5s ease forwards ${index / 7 + 0.5}s`
        }
    });

    const rows = Links.length
    console.log(`We have ${rows} rows`)

    if(!menuOpen) {
        profileBtn.style.animation = `navFade 0.5s ease forwards ${ (rows+1) / 7 + 0.5}s`;
    } else {
        profileBtn.style.animation = `navUnfade 0.5s ease forwards ${ (rows+1) / 7 + 0.5}s`
    } 

});

profileBtn.addEventListener('click', () => {
    //Open User menu

        profileBtn.classList.add('open');
        navUser.classList.remove('nav-deactive')
        navUser.classList.add('nav-active')
        userOpen = true;

    //Animate Links
    userSpaces.forEach((space, index) => {
        if(!userOpen) {
            space.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        } else {
            space.style.animation = `navUnfade 0.5s ease forwards ${index / 7 + 0.5}s`
        }
    });
});

separator.addEventListener('click',() => {
    //Toggle Nav
    if(menuOpen && userOpen) {
        profileBtn.classList.remove('open');
        navUser.classList.remove('nav-active')
        navUser.classList.add('nav-deactive')
        userOpen = false;
    } else {
    mnBtn.classList.remove('open');
    navLink.classList.remove('nav-active')
    navLink.classList.add('nav-deactive')
    separator.classList.remove('separator-active')
    separator.classList.add('separator-deactive')
    menuOpen = false;
    }
});