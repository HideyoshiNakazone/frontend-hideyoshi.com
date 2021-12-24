<?php

    $servidor = "postgres";
    $dbname = "postgres";
    $usuario = "postgres";
    $senha ="postgres";


    $conn = pg_connect("host=$servidor dbname=$dbname user=$usuario password=$senha") or
    die ("Não foi possível conectar ao servidor PostGreSQL");