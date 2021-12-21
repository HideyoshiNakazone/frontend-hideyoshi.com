<?php

    $servidor = "localhost";
    $dbname = "hideyoshi";
    $usuario = "hideyoshi";
    $senha ="llmv6342";


    $conn = pg_connect("host=$servidor dbname=$dbname user=$usuario password=$senha") or
    die ("Não foi possível conectar ao servidor PostGreSQL");