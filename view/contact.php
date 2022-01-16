<div class="container-fluid presentation mt-5">
    <div class="container text-center justify-content-center align-items-center">
        <h1>MODERNO</h1>
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda veniam odio, quos nobis error suscipit nemo nulla, laudantium ipsa itaque iusto! Veritatis cupiditate, aliquid ipsa consequatur reprehenderit et necessitatibus aliquam!</p>
        </div>
        <div class="row justify-content-center align-items-center">
            <form name="cantactForm" method="POST" action="#">
                <div class="form-group">
                    <input class="form-control" name="name" placeholder="Nome"/>
                </div>
                <div class="form-group">
                    <input class="form-control" name="email" placeholder="E-mail"/>
                </div>
                <div class="form-group">
                    <textarea class="form-control" name="message" placeholder="Digite uma mensagem"></textarea>
                </div>
                <button class="buttom" type="submit">Enviar</button>
            </form>
        </div>

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