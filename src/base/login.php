<div class="login-container" style="display: none">
    <div class="login-content">
        <form action="src/include/user.inc.php" method="post">
            <img src="../../img/undraw_profile_pic_ic5t.png">
            <h2 class="title">Welcome</h2>
            <div class="input-div one">
                <div class="i">
                        <i class="fas fa-user"></i>
                </div>
                <div class="input-element">
                    <input type="text" name="userid" class="input" placeholder="Username">
                </div>
            </div>
            <div class="input-div pass">
                <div class="i"> 
                        <i class="fas fa-lock"></i>
                </div>
                <div class="input-element">
                    <input type="password" name="passwd" class="input" placeholder="Password">
                </div>
            </div>
            <a href="#">Forgot Password?</a>
            <a href="./signup.html">Signup</a>
            <input type="hidden" name="submit_login" value="true"/>
            <button type="submit" name="submit">Login</button>
        </form>
    </div>

    <!-- <div class="separator"></div> -->

    <!-- <div class="social">

        <div class="g-signin2" data-onsuccess="onSignIn" 
        data-scope="https://www.googleapis.com/auth/plus.login" data-accesstype="offline"
        data-redirecturi="https://hideyoshinakazone.github.io/Moderno"
        data-theme="dark" data-width="300" data-height="50"
        data-longtitle="true" data-lang="pt-BR">
        </div>
    
        <button class='logout' onclick="Logoutfuncion()">Sign Out</button>

        <script>
        function LogoutFunction() {
            gapi.auth2.getAuthInstance().signOut().then(function () {
            console.log('User signed out.');
            location.reload();
            });

        }
        </script> -->
        
    <!-- </div> -->

    <div class="loginClose" onclick="loginClose()">
        <div class="logCloseBtn">
        </div>
    </div>

</div>
<script src="../../js/login.js"></script>