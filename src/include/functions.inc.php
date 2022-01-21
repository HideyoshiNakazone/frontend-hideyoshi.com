<?php

$GLOBALS["pepper"] = "Thisisasimplepepper";

function emptyInputSignup($full_name, $email, $username, $passwd, $passwd_confirm) {
    if (empty($full_name) || empty($email) || empty($username) || empty($passwd) || empty($passwd_confirm)) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}

function invalidusername($username) {
    if ( ! preg_match("/^[a-zA-Z0-9]*$/", $username)) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}

function invalidEmail($email) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}

function passwdMatch($passwd, $passwd_confirm) {
    if ($passwd !== $passwd_confirm) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}

function usernameExists($conn, $username, $email) {

    $sql = "SELECT * FROM store.client WHERE username = $1 OR email = $2;";

    if (! pg_prepare($conn, "checkExists", $sql)) {
        header("location: ../../index.php?error=pg_preparefailed");
        exit();
    }

    $result = pg_execute($conn, "checkExists", array($username, $email));
    if ( $row = pg_fetch_assoc($result)) {
        return $row;
    } else {
        return $result = false;
    }
}

function createUser($conn, $full_name, $email, $username, $passwd) {

    $str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $salt = str_shuffle($str);
    $hashed_passwd = password_hash($GLOBALS["pepper"] . $passwd . $salt, PASSWORD_DEFAULT);

    $sql = "INSERT INTO store.client (user_name,email,username,passwd,salt) VALUES ($1,$2,$3,$4,$5);";
    if (!pg_prepare($conn, "createUser", $sql)) {
        header("location: ../../index.php?error=dbfailed");
    }

    $result = pg_execute($conn, "createUser",array($full_name,$email,$username,$hashed_passwd,$salt));
    if (!$result) {
        header("location: ../../index.php?error=pg_preparefailed");
    } else {
        $_SESSION["full_name"] = $username;
    }

    return $result = false;
}

function checkCredentials($conn, $username, $passwd) {
    
    $salt_sql = "SELECT salt FROM store.client WHERE username = $1";
    if (!pg_prepare($conn, "getSalt", $salt_sql)) {
        header("location: ../../index.php?error=nosalt");
    }
    $result = pg_execute($conn, "getSalt", array($username));
    $salt = pg_fetch_array($result)[0];

    $passwd_sql = "SELECT passwd FROM store.client WHERE username = $1";
    if (!pg_prepare($conn, "getPass", $passwd_sql)) {
        header("location: ../../index.php?error=ushallnotpass");
    }
    $result = pg_execute($conn, "getPass", array($username));
    $hashpasswd = pg_fetch_array($result)[0];

    $compare = $GLOBALS["pepper"].$passwd.$salt;

    if (password_verify($compare, $hashpasswd)) {
        $_SESSION["full_name"] = $username;
    }

    return $result = false;
}