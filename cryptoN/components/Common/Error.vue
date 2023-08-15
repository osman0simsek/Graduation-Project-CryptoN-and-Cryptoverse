<template>
    <section id="main-container" class="main-container">
  <div class="container">

    <div class="row">

      <div class="col-12">
        <div class="error-page text-center">
          <div class="error-code">
            <h2><strong>404</strong></h2>
          </div>
          <div class="error-message">
            <h3>Oops... Page Not Found!</h3>
          </div>
          <div class="error-body">
            Try using the button below to go to main page of the site <br>
            <a href="index.html" class="btn btn-primary">Back to Home Page</a>
          </div>
        </div>
      </div>

    </div><!-- Content row -->
  </div><!-- Conatiner end -->
</section>
</template>
<script></script>
<style scoped>
.error-page .error-code h2 {
  display: block;
  font-size: 200px;
  line-height: 200px;
  color: #fff;
  margin-bottom: 20px;
}

.error-page .error-body .btn {
  margin-top: 30px;
  font-weight: 700;
}
</style>