<?php
    include $_SERVER['DOCUMENT_ROOT'] . '/src/session.php';
?>

<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <title>Hideyoshi - Creative Simple Portfolio Page</title>
        <link rel="icon" href="/img/logohideyoshi-red.png">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="stylesheet" type="text/css" href="/css/src/grid.css" />
        <link rel="stylesheet" type="text/css" href="/css/src/normalize.css" />
        <link rel="stylesheet" type="text/css" href="/css/src/header.css" />
        <link rel="stylesheet" type="text/css" href="/css/src/footer.css" />
        <link rel="stylesheet" type="text/css" href="/css/src/main.css" />
        <link rel="stylesheet" type="text/css" href="/css/index.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/59950f6906.js" crossorigin="anonymous"></script>
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="apple-mobile-web-app-title" content="Hideyoshi - Moderno">
        <link rel="manifest" href="/manifest.json">
    </head>
    <body>
        <div class="wrapper">
            <?php
                include $_SERVER['DOCUMENT_ROOT'] . '/src/base/header.php'
            ?>
            <div class="presentation">
                <div class="center">
                    <h1>HIDEYOSHI</h1>
                    <div class="intro">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id tempor augue, non consequat magna. Donec non massa libero. Maecenas imperdiet tristique augue sed ultrices. Sed malesuada massa id enim bibendum efficitur. Nullam non aliquam sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec molestie nec massa vel tristique.</p>
                    </div>
                    <div class="btm">
                        <button type="button"><a href="./contact.html">Get in Touch</a></button>
                    </div>            
                </div>
            </div>
            <div class="stories">
                <div class="center">
                    <h2>Success Stories</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci voluptates odit ab labore eos aspernatur, amet earum, deleniti tempore debitis porro omnis minima nobis et. Quae porro architecto odio.
                        <br>
                        Nulla et turpis magna. Pellentesque consequat tellus in laoreet euismod. In molestie arcu justo, ut semper quam venenatis sit amet. Phasellus a feugiat nisl, at volutpat magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies enim. Nam viverra consectetur ante. Nullam et nunc lobortis, scelerisque erat vitae, aliquet quam. Fusce sagittis placerat suscipit. Donec dapibus tortor vel nibh aliquet sodales a id quam. Suspendisse potenti. Nunc pulvinar varius dolor nec vulputate.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci voluptates odit ab labore eos aspernatur, amet earum, deleniti tempore debitis porro omnis minima nobis et. Quae porro architecto odio.
                    </p>
                
                </div>
            </div>
            <div class="services">
                <div class="center container">
                    <div class="skill-card">
                        <div class="card-image">
                            <a href="#" class='iconbtn fas fa-atom'></a>
                        </div>
                        <div class="card-text">
                            <h3>One Post</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor expedita numquam beatae eligendi recusandae, molestias alias quos qui ab voluptatibus earum nam doloribus modi vel, commodi in, impedit quas nemo.</p>
                        </div>
                    </div>
                    <div class="skill-card">
                        <div class="card-image">
                            <a href="#" class='iconbtn fas fa-atom'></a>
                        </div>
                        <div class="card-text">
                            <h3>One Post</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor expedita numquam beatae eligendi recusandae, molestias alias quos qui ab voluptatibus earum nam doloribus modi vel, commodi in, impedit quas nemo.</p>
                        </div>
                    </div>
                    <div class="skill-card">
                        <div class="card-image">
                            <a href="#" class='iconbtn fas fa-atom'></a>
                        </div>
                        <div class="card-text">
                            <h3>One Post</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor expedita numquam beatae eligendi recusandae, molestias alias quos qui ab voluptatibus earum nam doloribus modi vel, commodi in, impedit quas nemo.</p>
                        </div>
                    </div>
                </div>
            </div>
            <?php
                include $_SERVER['DOCUMENT_ROOT'] . '/src/base/footer.php'
            ?>
        </div>
        <script>
            if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(function(registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function(err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
                });
            });
            }
        </script>
        <script src="/sw.js"></script>
    </body>
</html>