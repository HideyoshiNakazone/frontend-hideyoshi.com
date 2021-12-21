<?php

$GLOBALS["pepper"] = "Thisisasimplepepper";

function emptyInputSignup($username, $email, $userid, $passwd, $passwd_confirm) {
    if (empty($username) || empty($email) || empty($userid) || empty($passwd) || empty($passwd_confirm)) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}

function invalidUserId($userid) {
    if ( ! preg_match("/^[a-zA-Z0-9]*$/", $userid)) {
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

function useridExists($conn, $userid, $email) {

    $sql = "SELECT * FROM store.cliente WHERE userid = $1 OR email = $2;";

    if (! pg_prepare($conn, "checkExists", $sql)) {
        header("location: ../../index.php?error=pg_preparefailed");
        exit();
    }

    $result = pg_execute($conn, "checkExists", array($userid, $email));
    if ( $row = pg_fetch_assoc($result)) {
        return $row;
    } else {
        return $result = false;
    }
}

function createUser($conn, $username, $email, $userid, $passwd) {

    $str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $salt = str_shuffle($str);
    $hashed_passwd = password_hash($GLOBALS["pepper"] . $passwd . $salt, PASSWORD_DEFAULT);

    $sql = "INSERT INTO store.cliente (user_name,email,userid,passwd,salt) VALUES ($1,$2,$3,$4,$5);";
    if (!pg_prepare($conn, "createUser", $sql)) {
        header("location: ../../index.php?error=dbfailed");
    }

    $result = pg_execute($conn, "createUser",array($username,$email,$userid,$hashed_passwd,$salt));
    if (!$result) {
        header("location: ../../index.php?error=pg_preparefailed");
    } else {
        $_SESSION["username"] = $userid;
    }

    return $result = false;
}

function checkCredentials($conn, $userid, $passwd) {
    
    $salt_sql = "SELECT salt FROM store.cliente WHERE userid = $1";
    if (!pg_prepare($conn, "getSalt", $salt_sql)) {
        header("location: ../../index.php?error=nosalt");
    }
    $result = pg_execute($conn, "getSalt", array($userid));
    $salt = pg_fetch_array($result)[0];

    $passwd_sql = "SELECT passwd FROM store.cliente WHERE userid = $1";
    if (!pg_prepare($conn, "getPass", $passwd_sql)) {
        header("location: ../../index.php?error=ushallnotpass");
    }
    $result = pg_execute($conn, "getPass", array($userid));
    $hashpasswd = pg_fetch_array($result)[0];

    $compare = $GLOBALS["pepper"].$passwd.$salt;

    if (password_verify($compare, $hashpasswd)) {
        $_SESSION["username"] = $userid;
    }

    return $result = false;
}