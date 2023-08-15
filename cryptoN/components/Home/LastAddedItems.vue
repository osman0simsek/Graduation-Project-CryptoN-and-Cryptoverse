<template>
  <div class="LastAddedItems mt-sm-0 mt-lg-1 mt-xl-5 pt-3 pt-sm-3 pt-md-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="headingWh mb-3 mb-sm-3 mb-md-4 mb-xl-5">
            Last Added Items
          </h2>
          <div class="lastAdded slider slick-initialized slick-slider">
            <button
              class="slick-prev slick-arrow slick-disabled"
              aria-label="Previous"
              type="button"
              aria-disabled="true"
              style="display: block"
            >
              Previous
            </button>
            <div class="slick-list draggable">
              <div
                class="slick-track"
                style="
                  opacity: 1;
                  width: 1764px;
                  transform: translate3d(0px, 0px, 0px);
                "
              >
                <div
                  class="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  style="width: 294px"
                >
                  <div>
                    <div
                      class="aboutitem"
                      style="width: 100%; display: inline-block"
                    >
                      <div class="aboutitemImg">
                        <img
                          class="img-fluid"
                          src="~/assets/img/last-added/2.jpg"
                          alt="img"
                        />
                      </div>
                      <div class="bgdarkbluecolor aboutitemcnt">
                        <div class="itemtitlecode">
                          <h2 class="textgraycolor">Cryptosharks</h2>
                          <h3 class="textwhitecolor">Cryptosharks #4939</h3>
                        </div>
                        <div class="itemtitlePrice">
                          <h2 class="textgraycolor">Price</h2>
                          <h3 class="textwhitecolor">
                            <img src="~/assets/img/priceicon.svg" />
                            <strong>0, 006</strong>
                          </h3>
                          <h4 class="textgraycolor">
                            <span><img src="~/assets/img/hearticon.svg" /></span> 56
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="slick-slide slick-active"
                  data-slick-index="1"
                  aria-hidden="false"
                  style="width: 294px"
                >
                  <div>
                    <div
                      class="aboutitem"
                      style="width: 100%; display: inline-block"
                    >
                      <div class="aboutitemImg">
                        <img
                          class="img-fluid"
                          src="~/assets/img/last-added/3.jpg"
                          alt="img"
                        />
                      </div>
                      <div class="bgdarkbluecolor aboutitemcnt">
                        <div class="itemtitlecode">
                          <h2 class="textgraycolor">Cryptosharks</h2>
                          <h3 class="textwhitecolor">Cryptosharks #4939</h3>
                        </div>
                        <div class="itemtitlePrice">
                          <h2 class="textgraycolor">Price</h2>
                          <h3 class="textwhitecolor">
                            <img src="~/assets/img/priceicon.svg" />
                            <strong>0, 006</strong>
                          </h3>
                          <h4 class="textgraycolor">
                            <span><img src="~/assets/img/hearticon-blue.svg" /></span> 56
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="slick-slide"
                  data-slick-index="2"
                  aria-hidden="true"
                  style="width: 294px"
                  tabindex="-1"
                >
                  <div>
                    <div
                      class="aboutitem"
                      style="width: 100%; display: inline-block"
                    >
                      <div class="aboutitemImg">
                        <img
                          class="img-fluid"
                          src="~/assets/img/last-added/5.jpg"
                          alt="img"
                        />
                      </div>
                      <div class="bgdarkbluecolor aboutitemcnt">
                        <div class="itemtitlecode">
                          <h2 class="textgraycolor">Cryptosharks</h2>
                          <h3 class="textwhitecolor">Cryptosharks #4939</h3>
                        </div>
                        <div class="itemtitlePrice">
                          <h2 class="textgraycolor">Price</h2>
                          <h3 class="textwhitecolor">
                            <img src="~/assets/img/priceicon.svg" />
                            <strong>0, 006</strong>
                          </h3>
                          <h4 class="textgraycolor">
                            <span><img src="~/assets/img/hearticon-blue.svg" /></span> 56
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="slick-slide"
                  data-slick-index="3"
                  aria-hidden="true"
                  style="width: 294px"
                  tabindex="-1"
                >
                  <div>
                    <div
                      class="aboutitem"
                      style="width: 100%; display: inline-block"
                    >
                      <div class="aboutitemImg">
                        <img
                          class="img-fluid"
                          src="~/assets/img/last-added/4.jpg"
                          alt="img"
                        />
                      </div>
                      <div class="bgdarkbluecolor aboutitemcnt">
                        <div class="itemtitlecode">
                          <h2 class="textgraycolor">Cryptosharks</h2>
                          <h3 class="textwhitecolor">Cryptosharks #4939</h3>
                        </div>
                        <div class="itemtitlePrice">
                          <h2 class="textgraycolor">Price</h2>
                          <h3 class="textwhitecolor">
                            <img src="~/assets/img/priceicon.svg" />
                            <strong>0, 006</strong>
                          </h3>
                          <h4 class="textgraycolor">
                            <span><img src="~/assets/img/hearticon-blue.svg" /></span> 56
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="slick-next slick-arrow"
              aria-label="Next"
              type="button"
              style="display: block"
              aria-disabled="false"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
