<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="logo">
            <a href="#"
              ><img
                class="img-fluid"
                src="~/assets/img/cryptonlogo.svg"
                alt="img"
            /></a>
          </div>
          <div class="searchform d-none d-md-inline-flex">
            <form>
              <input
                type="text"
                name="SearchItem"
                placeholder="Search items, collections and creators"
              />
              <button>
                <img src="~/assets/img/searchicon.svg" alt="img" />
              </button>
            </form>
          </div>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
          >
            <div class="hamburger-toggle">
              <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </button>
          <nav class="navbar navbar-expand-xl">
            <div class="collapse navbar-collapse" id="navbar-content">
              <div class="logo d-md-none">
                <a href="#"
                  ><img
                    class="img-fluid"
                    src="~/assets/img/cryptonlogo.svg"
                    alt="img"
                /></a>
              </div>
              <div class="searchform d-md-none">
                <form>
                  <input
                    type="text"
                    name="SearchItem"
                    placeholder="Search items, collections and creators"
                  />
                  <button>
                    <img src="~/assets/img/searchicon.svg" alt="img" />
                  </button>
                </form>
              </div>

              <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <nuxt-link to="/"
                    ><span class="nav-link">Homepage</span></nuxt-link
                  >
                </li>

                <li class="nav-item">
                  <nuxt-link to="/discover"
                    ><span class="nav-link">Discover</span></nuxt-link
                  >
                </li>
                <li class="nav-item d-none d-sm-none d-xl-block">
                  <nuxt-link to="/activity"
                    ><span class="nav-link">Activity</span></nuxt-link
                  >
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    >Pages</a
                  >
                  <ul class="dropdown-menu shadow">
                    <li>
                      <nuxt-link to="/create"
                        ><a class="dropdown-item">Create</a></nuxt-link
                      >
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown d-xl-none">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    >Profile</a
                  >
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <nuxt-link to="/sign-in"
                        ><span class="dropdown-item">Sign in</span></nuxt-link
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="signup.html">Sign up</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Forgot password</a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    >Inform center</a
                  >
                  <ul class="dropdown-menu shadow">
                    <li>
                      <nuxt-link to="/about-us"
                        ><a class="dropdown-item">About Us</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="/article"
                        ><a class="dropdown-item">Article</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="/FAQ"
                        ><a class="dropdown-item">FAQ</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="/contact"
                        ><a class="dropdown-item">Contact</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="/privacy-policy"
                        ><a class="dropdown-item">Privacy Policy</a></nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="/404"
                        ><a class="dropdown-item">404 </a></nuxt-link
                      >
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    >RU</a
                  >
                  <ul class="dropdown-menu shadow">
                    <li><a class="dropdown-item" href="#.html">Русский</a></li>
                    <li><a class="dropdown-item" href="#.html">English</a></li>
                    <li><a class="dropdown-item" href="#.html">Español</a></li>
                    <li><a class="dropdown-item" href="#.html">Français</a></li>
                    <li><a class="dropdown-item" href="#.html">Deutsch</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <div class="loginWallet d-none d-md-inline-flex">
            <div class="dropdown me-md-3 me-lg-2 me-xl-1 me-xxl-3">
              <a
                class="btn dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="~/assets/img/usericon.svg" alt="img" />
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <nuxt-link to="/account/sign-in"
                    ><a class="dropdown-item">Sign in</a></nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/account/sign-up"
                    ><a class="dropdown-item">Sign up</a></nuxt-link
                  >
                </li>
                <li><a class="dropdown-item" href="#">Forgot password</a></li>
              </ul>
            </div>

            <nuxt-link to="/wallet"
              ><a class="btn">
                <img src="~/assets/img/walleticon.svg" alt="img" /> </a
            ></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script></script>
<style scoped></style>
