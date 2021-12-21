<?php

session_start();

require_once 'db.inc.php';
require_once 'functions.inc.php';

if (isset($_POST["submit_signup"])) {
    
    $username = $_POST["username"];
    $email = $_POST["email"];
    $userid = $_POST["userid"];
    $passwd = $_POST["passwd"];
    $passwd_confirm = $_POST["passwd_confirm"];

    if (emptyInputSignup($username, $email, $userid, $passwd, $passwd_confirm) !== false) {
        header("location: ../../index.php?error=emptyinput");
    }

    if (invalidUserId($userid) !== false) {
        header("location: ../../index.php?error=invaliduserid");
    }

    if (passwdMatch($passwd, $passwd_confirm) !== false) {
        header("location: ../../index.php?error=passwdMatch");
    }

    if (useridExists($conn, $userid, $email) !== false) {
        header("location: ../../index.php?error=useridTaken");
    }
    
    if (createUser($conn, $username, $email, $userid, $passwd) !== false) {
        header("location: ../../index.php?error=dbfailed");
    }

    header("location: ../../index.php?error=none");

} elseif (isset($_POST["submit_login"])) {
    
    $userid = $_POST["userid"];
    $passwd = $_POST["passwd"];

    if (checkCredentials($conn, $userid, $passwd) !== false) {
        header("location: ../../index.php?error=userundefined");
    }
    
    header("location: ../../index.php?error=none");

} else {
    echo "didn't work";
}