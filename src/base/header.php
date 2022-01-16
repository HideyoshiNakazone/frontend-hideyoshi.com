<div class="header">
    <div class="principal">
        <div class="logo">
            <a href="/"><img src="./img/logohideyoshi-white.png" alt=""></a>
        </div>
        <div class="separator"></div>
        <div class="nav-links">
            <ul class="link-container">
                <li><a href="#!/">Home</a></li>
                <li><a href="#!/main">Work</a></li>
                <li><a href="#!/contact">Contact</a></li>
                <li><a href="#!/index.html">About</a></li>
            </ul>
            <div class="profile">
                <i class="fas fa-user"></i>
            </div>
        </div>
        <div class="nav-user">
            <?php
                if (isset($_SESSION['username'])) {
                    echo '
                        <ul class="link-container">
                            <li><i class="icon-box far fa-user"></i><a href="#">My Profile</a></li>
                            <li><i class="icon-box far fa-edit"></i><a href="#">Edit Profile</a></li>
                            <li><i class="icon-box fas fa-inbox"></i><a href="#">Inbox</a></li>
                            <li><i class="icon-box fas fa-cogs"></i><a href="#">Settings</a></li>
                            <li><i class="icon-box fas fa-question-circle"></i><a href="#">Help</a></li>
                            <li><i class="icon-box fas fa-sign-out-alt"></i><a href="/logout.php">Logout</a></li>
                        </ul>';
                } else {
                    echo '
                    <ul class="link-container">
                        <li><i class="icon-box far fa-user"></i><a href="#">Login</a></li>
                        <li><i class="icon-box far fa-edit"></i><a href="#">Sign Up</a></li>
                    </ul>';
                }
            ?>
        </div>
        <div class="user">
            <div class="profile">
                <i class="fas fa-user"></i>
            </div>
            <?php
                if (isset($_SESSION['username'])) {
                    echo '<div class="user-menu">
                        <h3>'.$_SESSION['username'].'</h3>
                        <ul>
                            <li>
                                <i class="icon-box far fa-user"></i><a href="#">My Profile</a>
                            </li>
                            <li>
                            <i class="icon-box far fa-edit"></i><a href="#">Edit Profile</a>
                            </li>
                            <li>
                                <i class="icon-box fas fa-inbox"></i><a href="#">Inbox</a>
                            </li>
                            <li>
                                <i class="icon-box fas fa-cogs"></i><a href="#">Settings</a>
                            </li>
                            <li>
                                <i class="icon-box fas fa-question-circle"></i><a href="#">Help</a>
                            </li>
                            <li>
                            <i class="icon-box fas fa-sign-out-alt"></i><a href="src/include/logout.inc.php">Logout</a>
                            </li>
                        </ul>
                    </div>';}
                else {
                    echo '<div class="user-menu">
                        <h3>User Account</h3>    
                        <ul>
                            <li>
                                <i class="icon-box far fa-user"></i> <a onclick="loginShow()" href="#">Login</a>
                            </li>
                            <li>
                                <i class="icon-box far fa-edit"></i> <a onclick="signinShow()" href="#">Sign up</a>
                            </li>
                        </ul>
                    </div>';}
            ?>
            <!-- <div class="register">
                <button type="button"><a href="./signup.html">Register</a></button>
            </div>
            <div class="login">
                <button type="button"><a href="./login.html">Login</a></button>
            </div> -->
        </div>
        <div class="menu">
            <div class="burger">
            </div>
        </div>
    </div>
    <script src="../../js/header.js"></script>
</div>