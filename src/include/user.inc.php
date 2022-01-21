<?php

session_start();

require_once 'db.inc.php';
require_once 'functions.inc.php';

if (isset($_POST["submit_signup"])) {
    
    $full_name = $_POST["full_name"];
    $email = $_POST["email"];
    $username = $_POST["username"];
    $passwd = $_POST["passwd"];
    $passwd_confirm = $_POST["passwd_confirm"];

    if (emptyInputSignup($full_name, $email, $username, $passwd, $passwd_confirm) !== false) {
        header("location: ../../index.php?error=emptyinput");
    }

    if (invalidusername($username) !== false) {
        header("location: ../../index.php?error=invalidusername");
    }

    if (passwdMatch($passwd, $passwd_confirm) !== false) {
        header("location: ../../index.php?error=passwdMatch");
    }

    if (usernameExists($conn, $username, $email) !== false) {
        header("location: ../../index.php?error=usernameTaken");
    }
    
    if (createUser($conn, $full_name, $email, $username, $passwd) !== false) {
        header("location: ../../index.php?error=dbfailed");
    }

    header("location: ../../index.php?error=none");

} elseif (isset($_POST["submit_login"])) {
    
    $username = $_POST["username"];
    $passwd = $_POST["passwd"];

    if (checkCredentials($conn, $username, $passwd) !== false) {
        header("location: ../../index.php?error=userundefined");
    }
    
    header("location: ../../index.php?error=none");

} else {
    echo "didn't work";
}