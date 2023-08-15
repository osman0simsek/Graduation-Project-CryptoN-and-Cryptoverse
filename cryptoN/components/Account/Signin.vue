<template>
    <div class="bannerSec">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="bannercntSec signcntsec">
          <div class="bannerImg d-none d-xl-flex">
            <img class="img-fluid d-sm-block d-md-none" src="~/assets/img/patterbannerimg.png" alt="img">
           <div class="bannerimg01 d-none d-md-block">
              <img class="img-fluid" src="~/assets/img/triple/1.png" alt="img">
            </div>

            <div class="bannerimg02 d-none d-md-block">
              <img class="img-fluid" src="~/assets/img/triple/2.png" alt="img">
            </div>

            <div class="bannerimg03 d-none d-md-block">
              <img class="img-fluid" src="~/assets/img/triple/3.png" alt="img">
            </div>

            <div class="bannerbtn 1d-block d-none d-sm-none d-md-block d-xl-none">
              <button class="btn btnlightblue me-3">Discover</button>
              <button class="btn btndarkblue">Create</button>
            </div>
          </div>

          <div class="signctn">
            <h2 class="textwhitecolor signheading">Sign In for <span class="textbluecolor">Crypto</span></h2>
            <div class="sign-from">
              <form>
                <div class="input-box">
                  <input type="text" name="name" placeholder="Enter nickname" class="form-input">
                </div>
                <div class="input-box">
                  <input type="password" name="pass" placeholder="Enter password" class="form-input">
                </div>
                <div class="form-check d-none d-md-flex">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                    I agree with Privacy Policy
                  </label>
                </div>
              </form>
            </div>
            <div class="sign-btn">
              <button class="btn btnlightblue me-3">Sign In</button>
              <button class="btn btndarkblue">Forgot password</button>
            </div>
            <div class="divider">or</div>
            <div class="social-wrap">
              
              <a href="#" class="twiter">
                <img src="~/assets/img/twittericon.svg" alt="icon">
              </a>
              <a href="#" class="google">
                <img src="~/assets/img/googleicon.svg" alt="icon">
              </a>
              <a href="#" class="facebook">
                <img src="~/assets/img/facebookicon.svg" alt="icon">
              </a>
            </div>
            <div class="signup-link">
              Do not have an account? <a href="#">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>