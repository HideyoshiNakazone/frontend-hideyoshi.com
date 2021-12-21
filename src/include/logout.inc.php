<?php
    include $_SERVER['DOCUMENT_ROOT'] . '/src/include/session.inc.php';
    session_destroy();
    header('Location: ../../index.php?logedout');