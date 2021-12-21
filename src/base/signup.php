<div class="sigin-container" style="display: none">
    <div class="sigin-content">
        <form action="src/include/user.inc.php" method="post">
            <img src="../../img/undraw_profile_pic_ic5t.png">
            <h2 class="title">Welcome</h2>
            <div class="input-div one">
                <div class="i">
                    <i class="fas fa-user"></i>
                </div>
                <div class="div">
                    <h5>Name</h5>
                    <input type="text" name="username" class="input">
                </div>
            </div>

            <div class="input-div pass">
                <div class="i"> 
                    <i class="fas fa-solid fa-envelope"></i>
                </div>
                <div class="div">
                    <h5>Email</h5>
                    <input type="email" name="email" class="input">
                </div>
            </div>

            <div class="input-div pass">
                <div class="i"> 
                    <i class="fas fa-solid fa-envelope"></i>
                </div>
                <div class="div">
                    <h5>User Name</h5>
                    <input type="text" name="userid" class="input">
                </div>
            </div>
            
            <div class="input-div pass">
                <div class="i"> 
                    <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                    <h5>Password</h5>
                    <input type="password" name="passwd" class="input">
                </div>
            </div>
            
            <div class="input-div pass">
                <div class="i"> 
                    <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                    <h5>Confirm Password</h5>
                    <input type="password" name="passwd_confirm" class="input">
                </div>
            </div>

            <a href="#">Forgot Password?</a>
            <a href="./signup.html">Signup</a>
            <input type="hidden" name="submit_signup" value="true"/>
            <button type="submit" name="submit">sigin</button>
        </form>
    </div>

    <!-- <div class="separator"></div> -->

    <!-- <div class="social">

        <div class="g-signin2" data-onsuccess="onSignIn" 
        data-scope="https://www.googleapis.com/auth/plus.sigin" data-accesstype="offline"
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

    <div class="siginClose" onclick="signinClose()">
        <div class="signinCloseBtn">
        </div>
    </div>

</div>
<script src="../../js/sigin.js"></script>