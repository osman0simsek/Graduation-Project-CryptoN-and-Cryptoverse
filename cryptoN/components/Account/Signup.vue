<template>
    <div class="bannerSec">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="bannercntSec signupsec">
          <div class="bannerImg mt-5 d-none d-xl-flex">
            <img class="img-fluid d-sm-block d-md-none" src="~/assets/img/patterbannerimg.png" alt="img">
           <div class="bannerimg01 d-none d-md-block">
              <img class="img-fluid" src="~/assets/img/triple/4.png" alt="img">
            </div>

            <div class="bannerimg02 d-none d-md-block">
              <img class="img-fluid" src="~/assets/img/triple/5.png" alt="img">
            </div>

            <div class="bannerimg03 d-none d-md-block">
              <img class="img-fluid" src="~/assets/img/triple/6.png" alt="img">
            </div>

            <div class="bannerbtn 1d-block d-none d-sm-none d-md-block d-xl-none">
              <button class="btn btnlightblue me-3">Discover</button>
              <button class="btn btndarkblue">Create</button>
            </div>
          </div>

          <div class="bannercnt signctn">
            <h2 class="textwhitecolor signheading">Sign Up for <span class="textbluecolor">Crypto</span></h2>
            <p class="textwhitecolor">Sign Up with e-mail or connect with one of<br> our available <a href="#">wallet providers.</a></p>
            <div class="sign-from signup-form">
              <form>
                <div class="input-box">
                  <input type="text" name="name" placeholder="Enter nickname" class="form-input">
                </div>
                <div class="input-box">
                  <input type="email" name="email" placeholder="Enter e-mail" class="form-input">
                </div>
                <div class="row input-box">
                  <div class="col-md-6">
                    <input type="password" name="pas" placeholder="Enter password" class="form-input">
                  </div>
                  <div class="col-md-6">
                    <input type="password" name="cpass" placeholder="Confirm password" class="form-input">
                  </div>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                    I agree with Privacy Policy
                  </label>
                </div>
              </form>
            </div>
            <div class="sign-btn">
              <button class="btn btnlightblue me-3">Sign Up</button>
              <button class="btn btndarkblue">Sign In by e-mail</button>
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

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>