<?php
    include('src/session.php');
?>

<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <title>New Order - Hideyoshi - Creative Simple Portfolio Page</title>
        <link rel="icon" href="./img/logohideyoshi-red.png">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="stylesheet" type="text/css" href="css/src/grid.css" />
        <link rel="stylesheet" type="text/css" href="css/src/normalize.css" />
        <link rel="stylesheet" type="text/css" href="css/src/header.css" />
        <link rel="stylesheet" type="text/css" href="css/src/footer.css" />
        <link rel="stylesheet" type="text/css" href="css/src/main.css" />
        <link rel="stylesheet" type="text/css" href="css/contact.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/59950f6906.js" crossorigin="anonymous"></script>
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="apple-mobile-web-app-title" content="Hideyoshi - Moderno">
        <link rel="manifest" href="manifest.json">
    </head>
    <body>
        <div class="wrapper">
            <?php
                include('./src/base/header.php');
            ?>
            <div class="contact">
                <div class="center">
                    <h1>MODERNO</h1>
                    <div class="intro">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda veniam odio, quos nobis error suscipit nemo nulla, laudantium ipsa itaque iusto! Veritatis cupiditate, aliquid ipsa consequatur reprehenderit et necessitatibus aliquam!</p>
                    </div>
                    <form class="form" method="POST" action="#">
                        <input class="form-control" name="name" placeholder="Nome"/>
                        <input class="form-control" name="email" placeholder="E-mail"/>
                        <textarea class="form-control" name="message" placeholder="Digite uma mensagem"></textarea>
                        <div class="btm">
                            <button class="buttom" type="submit">Enviar</button>
                        </div>
                    </form>

                    <?php
                        if(isset($_POST['name'])){
                            $name = $_POST['name'];
                        }
                        if(isset($_POST['email'])){
                            $email = $_POST['email'];
                        }
                        if(isset($_POST['message'])){
                            $message = $_POST['message'];
                        }
                        if (!isset($name)||!isset($email)||!isset($message)) {
                            echo '
                                <style type="text/css">
                                    .stories {
                                        display: none;
                                    }
                                    .footer {
                                        margin-top: 0;
                                    }
                                </style>';
                        }
                    ?>

                </div>
            </div>
            <div class="stories">
                <div class="center">
                    <h2><?php if(isset($name) && isset($email)){echo $name.' at '.$email;}?></h2>
                    <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit necessitatibus nam cupiditate exercitationem architecto? Sapiente cum id perferendis, illo expedita nobis deserunt, quia sit soluta laudantium repellat aliquid ad nesciunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus aspernatur magni illum itaque quibusdam non inventore alias rem in corporis asperiores officia, hic at, ab molestiae laboriosam ratione, veniam odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum corrupti doloribus laboriosam, tempore suscipit repellat possimus qui dolorum earum voluptates voluptatem! Et aliquam tempore, facilis provident illum neque laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo deserunt sunt, fuga aperiam ea maxime facere necessitatibus repellat suscipit esse laudantium praesentium, ullam, assumenda aut eligendi. Facere iusto delectus officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque deserunt quis accusamus veritatis doloribus provident hic ipsum nam vero quidem necessitatibus adipisci eveniet error? Veritatis minus sit asperiores quibusdam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio labore debitis molestias reprehenderit, incidunt ratione rerum magni magnam tempora perspiciatis at modi similique, exercitationem, saepe voluptatibus cupiditate laborum ipsa aut?</p> -->
                    <p><?php if(isset($message)){echo $message."                    <br>
                    <br>
                    <p>Message received</p>";} ?></p>
                </div>
            </div>
            <?php
                include('./src/base/footer.php')
            ?>
        </div>
        <script src="./js/main.js"></script>
    </body>
</html>