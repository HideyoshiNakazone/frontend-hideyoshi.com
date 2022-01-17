var headerController = function ($scope, $rootScope, clientesAPI, config, sha256) {

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
        if (!menuOpen) {
            mnBtn.classList.add('open');
            navLink.classList.remove('nav-deactive')
            navLink.classList.add('nav-active')
            separator.classList.remove('separator-deactive')
            separator.classList.add('separator-active')
            menuOpen = true;

        } else {
            if (menuOpen && userOpen) {
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
            if (!menuOpen) {
                link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            } else {
                link.style.animation = `navUnfade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });

        const rows = Links.length
        console.log(`We have ${rows} rows`)

        if (!menuOpen) {
            profileBtn.style.animation = `navFade 0.5s ease forwards ${(rows + 1) / 7 + 0.5}s`;
        } else {
            profileBtn.style.animation = `navUnfade 0.5s ease forwards ${(rows + 1) / 7 + 0.5}s`
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
            if (!userOpen) {
                space.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            } else {
                space.style.animation = `navUnfade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });
    });

    separator.addEventListener('click', () => {
        //Toggle Nav
        if (menuOpen && userOpen) {
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

    var getRandomString = function (length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for (var i = 0; i < length; i++) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

    var pepper = "ThisIsASimplePepper";

    verifyClienteData = function (servCliente, cliente) {

        if (servCliente) {

            var passwdToVerify = sha256.convertToSHA256(pepper + cliente.passwd + servCliente.salt);

            if (servCliente.userid == cliente.userid && passwdToVerify == servCliente.passwd) {
                $rootScope.cliente = servCliente;
            } else {
                delete $scope.cliente;
            }

        } else {
            delete $scope.cliente;
            $scope.clienteForm.$setPristine();
        }

    }

    $scope.loginCliente = function (cliente) {
        clientesAPI.getCliente(cliente).then(function (response) {
            verifyClienteData(response.data[0], cliente);
        }, function (error) {
            delete $scope.cliente;
            console.log(error);
        });
    };

    $scope.logoutEndSession = function () {
        delete $rootScope.cliente;
        delete $scope.cliente;
        $scope.clienteForm.$setPristine();
    }

};

angular.module("portifolio").component("header", {
    templateUrl: "view/src/header.html",
    controller: headerController
});