var headerController = function ($scope, $rootScope, $http, $uibModal, sessionAPI, backEndUrl) {

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

    var navLinkAnimate = function () {
        var arrayNodes = Array.prototype.slice.call(Links, 0);
        if (!menuOpen) {
            //Animate Links
            arrayNodes.reverse().forEach(function (link, index) {
                link.style.animation = `navFade 0.5s ease backwards ${index / 14}s`;
            });
    
            const rows = Links.length
            profileBtn.style.animation = `navFade 0.5s ease backwards ${(rows + 1) / 14}s`;
        } else {
            const rows = Links.length
            profileBtn.style.animation = `navUnfade 0.5s ease forwards ${(rows + 1) / 7 + 0.2}s`
            
            arrayNodes.forEach(function (link,index) {
                link.style.animation = `navUnfade 0.5s ease forwards ${index / 7 + 0.2}s`
            });
        }

    }

    var userLinkAnimate = function () {
        var arrayNodes = Array.prototype.slice.call(userSpaces, 0);
        //Animate Links
        if (!userOpen) {
            arrayNodes.reverse().forEach((space, index) => {
                space.style.animation = `navFade 0.5s ease backwards ${index / 18}s`;            });
        } else {
            arrayNodes.forEach((space, index) => {
                space.style.animation = `navUnfade 0.5s ease forwards ${index / 14}s`
            });
        }
    }

    mnBtn.addEventListener('click', () => {
        //Toggle Nav
        if (!menuOpen) {
            mnBtn.classList.add('open');
            navLink.classList.remove('nav-deactive')
            navLink.classList.add('nav-active')
            separator.classList.remove('separator-deactive')
            separator.classList.add('separator-active')
            menuOpen = true;
            navLinkAnimate();

        } else if (menuOpen && userOpen) {
            profileBtn.classList.remove('open');
            navUser.classList.remove('nav-active')
            navUser.classList.add('nav-deactive')
            userOpen = false;
            userLinkAnimate();
        } else {
            mnBtn.classList.remove('open');
            navLink.classList.remove('nav-active')
            navLink.classList.add('nav-deactive')
            separator.classList.remove('separator-active')
            separator.classList.add('separator-deactive')
            menuOpen = false;
            navLinkAnimate();
        }


    });

    profileBtn.addEventListener('click', () => {
        //Open User menu
        profileBtn.classList.add('open');
        navUser.classList.remove('nav-deactive')
        navUser.classList.add('nav-active')
        userOpen = true;

        userLinkAnimate();
    });

    separator.addEventListener('click', () => {
        //Toggle Nav
        if (menuOpen && userOpen) {
            profileBtn.classList.remove('open');
            navUser.classList.remove('nav-active')
            navUser.classList.add('nav-deactive')
            userOpen = false;
            userLinkAnimate();
        } else {
            mnBtn.classList.remove('open');
            navLink.classList.remove('nav-active')
            navLink.classList.add('nav-deactive')
            separator.classList.remove('separator-active')
            separator.classList.add('separator-deactive')
            menuOpen = false;
            navLinkAnimate();
        }
    });

    $(function () {
        $('.dropdown-menu').on('click', function (event) {
            if (!$(event.target).closest('a').length) {
                event.stopPropagation();
            }
        })
    });

    $scope.openLoginPopup = function () {
        $uibModal.open({
            component: "loginPopup",
            windowClass: 'app-modal-window'
        }).result.then(function (result) {

        }, function (reason) {

        });
    };

    $scope.openSignupPopup = function () {
        $uibModal.open({
            component: "signupPopup",
            windowClass: 'app-modal-window'
        }).result.then(function (result) {

        }, function (reason) {

        });
    };

    $scope.logoutEndSession = function () {
        sessionAPI.destroySession()
        .then(function (response) {
            delete $rootScope.Client;
            delete $scope.client;
        }, function (error) {
            console.log(error);
        })
    }

};

angular.module("portifolio").component("header", {
    templateUrl: "view/src/header.html",
    controller: headerController
});