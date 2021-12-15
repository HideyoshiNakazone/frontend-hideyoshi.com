<?php
    include $_SERVER['DOCUMENT_ROOT'] . '/src/session.php';
    session_destroy();
    header('Location: ' . $_SERVER['HTTP_REFERER']);
?>