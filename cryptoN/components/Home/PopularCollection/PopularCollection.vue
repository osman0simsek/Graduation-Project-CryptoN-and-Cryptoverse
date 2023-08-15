<template>
  <div class="popularCollection">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="headingWh mb-4">Popular collections</h2>
          <div class="tab-sec">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link d-none d-sm-none d-md-block active"
                  data-bs-toggle="tab"
                  data-bs-target="#TabOne"
                >
                  All categories
                </button>
                <button
                  class="nav-link d-none d-sm-none d-md-block"
                  data-bs-toggle="tab"
                  data-bs-target="#TabTwo"
                >
                  Digital
                </button>
                <button
                  class="nav-link d-none d-sm-none d-md-block"
                  data-bs-toggle="tab"
                  data-bs-target="#TabThree"
                >
                  Photography
                </button>
                <button
                  class="nav-link d-none d-sm-none d-md-block"
                  data-bs-toggle="tab"
                  data-bs-target="#TabFour"
                >
                  Memes
                </button>

                <div class="more-tab">
                  <a href="javascript:void(0)" class="textbluecolor categorytab"
                    >Choose category
                    <img src="~/assets/img/bluedown.png" alt="arrow-down"
                  /></a>
                  <div
                    class="more-box nav nav-tabs"
                    id="more_tab"
                    role="tablist"
                  >
                    <button
                      class="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#TabOne"
                    >
                      All categories
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#TabTwo"
                    >
                      Digital
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#TabThree"
                    >
                      Photography
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#TabFour"
                    >
                      Memes
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tabcatg1"
                    >
                      All categories
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tabcatg2"
                    >
                      Memes
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tabcatg3"
                    >
                      Photography
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tabcatg4"
                    >
                      Digital
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tabcatg5"
                    >
                      News
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tabcatg6"
                    >
                      Music
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tabcatg7"
                    >
                      Domain names
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tabcatg8"
                    >
                      Virtual worlds
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tabcatg9"
                    >
                      Trading cards
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tabcatg10"
                    >
                      Sports
                    </button>
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tabcatg11"
                    >
                      Utility
                    </button>
                  </div>
                </div>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade active show" id="TabTwo">
    <div class="popular slider slick-initialized slick-slider">
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
            width: 2352px;
            transform: translate3d(0px, 0px, 0px);
          "
        >
          <div
            class="slick-slide slick-current slick-active"
            data-slick-index="0"
            aria-hidden="false"
            style="width: 392px"
          >
            <div>
              <div class="creators" style="width: 100%; display: inline-block">
                <div class="creatorImg">
                  <img
                    class="img-fluid"
                    src="~/assets/img/bored-ape/bored-ape-background.jpg"
                    alt="img"
                    height="174"
                    width="381"
                  />
                </div>
                <div class="creatorIcon">
                  <img
                    class="img-fluid"
                    src="~/assets/img/bored-ape/bored-ape.png"
                    alt="img"
                    height="65"
                    width="65"
                  />
                  <div class="creatorcheck">
                    <img src="~/assets/img/checkicon.svg" alt="img" />
                  </div>
                </div>
                <div class="creatorsText text-center">
                  <h2 class="textwhitecolor">RTFKT Creators</h2>
                  <h3 class="textbluecolor">by RTFKT</h3>
                  <p class="textgraycolor">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="slick-slide slick-current slick-active"
            data-slick-index="1"
            aria-hidden="false"
            style="width: 392px"
          >
            <div>
              <div class="creators" style="width: 100%; display: inline-block">
                <div class="creatorImg">
                  <img
                    class="img-fluid"
                    src="~/assets/img/crypto-punks/punk-backgrounds.jpg"
                    alt="img"
                  />
                </div>
                <div class="creatorIcon">
                  <img
                    class="img-fluid"
                    src="~/assets/img/crypto-punks/punk.png"
                    alt="img"
                  />
                  <div class="creatorcheck">
                    <img src="~/assets/img/checkicon.svg" alt="img" />
                  </div>
                </div>
                <div class="creatorsText text-center">
                  <h2 class="textwhitecolor">RTFKT Creators</h2>
                  <h3 class="textbluecolor">by RTFKT</h3>
                  <p class="textgraycolor">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="slick-slide slick-current slick-active"
            data-slick-index="2"
            aria-hidden="false"
            style="width: 392px"
          >
            <div>
              <div class="creators" style="width: 100%; display: inline-block">
                <div class="creatorImg">
                  <img
                    class="img-fluid"
                    src="~/assets/img/moar/moar-background.jpg"
                    alt="img"
                    height="174"
                    width="381"
                  />
                </div>
                <div class="creatorIcon">
                  <img
                    class="img-fluid"
                    src="~/assets/img/moar/moar.png"
                    alt="img"
                    height="65"
                    width="65"
                  />
                  <div class="creatorcheck">
                    <img src="~/assets/img/checkicon.svg" alt="img" />
                  </div>
                </div>
                <div class="creatorsText text-center">
                  <h2 class="textwhitecolor">RTFKT Creators</h2>
                  <h3 class="textbluecolor">by RTFKT</h3>
                  <p class="textgraycolor">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
    };
  },
};
</script>
<style scoped>
.creatorImg img {
  width: 100%;
}
.creators {
  position: relative;
}
.creatorIcon {
  margin: -40px auto 0;
  display: table;
  position: absolute;
  left: 0;
  right: 0;
  width: 65px;
}
.creatorsText {
  padding: 45px 10px 40px;
}
.creatorIcon h2 {
  margin: 0 0 10px;
}
.creatorsText h2 {
  font-weight: 500;
  font-size: 15px;
  margin: 0 0 15px;
}
.creatorsText h3 {
  font-weight: 300;
  font-size: 12px;
  margin: 0 0 20px;
}
.creatorsText p {
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
}
.creatorsText {
  border-radius: 0 0 10px 10px;
  background: rgba(10, 31, 58, 0.5);
}
.creatorcheck {
  position: absolute;
  top: 49px;
  left: 53px;
}
.creatorcheck img {
  width: 18px;
}
</style>
