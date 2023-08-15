<template>
<div>
    <div class="popularCollection mt-3 pt-3 mt-md-4 pt-md-4 mt-lg-5 pt-lg-5">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="headingWh mb-2 mb-md-4">Discover</h2>
        <div class="filters d-none d-md-block">
          <div class="filtertop">
            <div class="filterLeft">
              <div class="btn-group">
                <button class="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  All categories
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="">
                  <li><a class="dropdown-item" href="#">Memes</a></li>
                  <li><a class="dropdown-item" href="#">Photography</a></li>
                  <li><a class="dropdown-item" href="#">Digital</a></li>
                  <li><a class="dropdown-item" href="#">News</a></li>
                  <li><a class="dropdown-item" href="#">Music</a></li>
                  <li><a class="dropdown-item" href="#">Domain names</a></li>
                  <li><a class="dropdown-item" href="#">Virtual worlds</a></li>
                  <li><a class="dropdown-item" href="#">Trading cards</a></li>
                  <li><a class="dropdown-item" href="#">Sports</a></li>
                  <li><a class="dropdown-item" href="#">Utility</a></li>
                </ul>
              </div>

              <div class="btn-group">
                <button class="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Status
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="">
                  <li><a class="dropdown-item" href="#">By now</a></li>
                  <li><a class="dropdown-item" href="#">On auction</a></li>
                  <li><a class="dropdown-item" href="#">New</a></li>
                  <li><a class="dropdown-item" href="#">Has offers</a></li>
                </ul>
              </div>

              <div class="btn-group">
                <button class="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Currency
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="">
                  <li><a class="dropdown-item" href="#">Currency</a></li>
                  <li><a class="dropdown-item" href="#">USD</a></li>
                  <li><a class="dropdown-item" href="#">Ethereum</a></li>
                </ul>
              </div>
            </div>

            <div class="filterRight">
              <button class="btn btndarkblue">Arts</button>
              <button class="btn btndarkblue">Bids</button>
              <button class="btn btndarkblue">Photography</button>
              <button class="btn btnlightblue ms-md-auto">Clear All <img src="~/assets/img/closeicon.svg" alt="img"></button>
            </div>
          </div>
          <div class="filtertop">
            <div class="filterLeft">

              <div class="btn-group">
                <button class="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Price
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="">
                  <li><a class="dropdown-item" href="#">Price</a></li>
                  <li><a class="dropdown-item" href="#">Highest Price</a></li>
                  <li><a class="dropdown-item" href="#">Lowest Price</a></li>
                </ul>
              </div>


              <div class="btn-group">
                <button class="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Newest
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="">
                  <li><a class="dropdown-item" href="#">Newest</a></li>
                  <li><a class="dropdown-item" href="#">Oldest</a></li>
                </ul>
              </div>


              <div class="btn-group">
                <button class="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  All items
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="">
                  <li><a class="dropdown-item" href="#">Single items</a></li>
                  <li><a class="dropdown-item" href="#">Bundles</a></li>
                </ul>
              </div>
              
            </div>

            
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-3 mt-md-5">
      <div class="col-md-6 col-xl-3 mb-4">
        <div class="aboutitem">
          <div class="aboutitemImg"><img class="img-fluid" src="~/assets/img/triple/7.png" alt="img"></div>
          <div class="bgdarkbluecolor aboutitemcnt">
            <div class="itemtitlecode">
              <h2 class="textgraycolor">Cryptosharks</h2>
              <h3 class="textwhitecolor">Cryptosharks #4939</h3>
            </div>
            <div class="itemtitlePrice">
              <h2 class="textgraycolor">Price</h2>
              <h3 class="textwhitecolor"><img src="~/assets/img/priceicon.svg"> <strong>0, 006</strong></h3>
              <h4 class="textgraycolor"><span><img src="~/assets/img/hearticon.svg"></span> 56</h4>
            </div>
          </div>
        </div>
      </div>


    </div>

    <div class="row d-block d-md-none">
      <div class="col-md-12 text-center">
        <button type="button" class="btn btnlightblue filterbtnsm" data-bs-toggle="modal" data-bs-target="#filterModal">Filter</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="filterModal" tabindex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
       <div class="filters">
          <div class="filtertop">
            <div class="filterLeft">
              <div class="btn-group">
                <button class="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  All categories
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a class="dropdown-item" href="#">Memes</a></li>
                  <li><a class="dropdown-item" href="#">Photography</a></li>
                  <li><a class="dropdown-item" href="#">Digital</a></li>
                  <li><a class="dropdown-item" href="#">News</a></li>
                  <li><a class="dropdown-item" href="#">Music</a></li>
                  <li><a class="dropdown-item" href="#">Domain names</a></li>
                  <li><a class="dropdown-item" href="#">Virtual worlds</a></li>
                  <li><a class="dropdown-item" href="#">Trading cards</a></li>
                  <li><a class="dropdown-item" href="#">Sports</a></li>
                  <li><a class="dropdown-item" href="#">Utility</a></li>
                </ul>
              </div>

              <div class="btn-group">
                <button class="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Status
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a class="dropdown-item" href="#">By now</a></li>
                  <li><a class="dropdown-item" href="#">On auction</a></li>
                  <li><a class="dropdown-item" href="#">New</a></li>
                  <li><a class="dropdown-item" href="#">Has offers</a></li>
                </ul>
              </div>

              <div class="btn-group">
                <button class="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Currency
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a class="dropdown-item" href="#">Currency</a></li>
                  <li><a class="dropdown-item" href="#">USD</a></li>
                  <li><a class="dropdown-item" href="#">Ethereum</a></li>
                </ul>
              </div>
            </div>

            <div class="filterRight">
              <button class="btn btndarkblue">Arts</button>
              <button class="btn btndarkblue">Bids</button>
              <button class="btn btndarkblue">Photography</button>
              
            </div>
          </div>
          <div class="filtertop">
            <div class="filterLeft">

              <div class="btn-group">
                <button class="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Price
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a class="dropdown-item" href="#">Price</a></li>
                  <li><a class="dropdown-item" href="#">Highest Price</a></li>
                  <li><a class="dropdown-item" href="#">Lowest Price</a></li>
                </ul>
              </div>


              <div class="btn-group">
                <button class="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Newest
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a class="dropdown-item" href="#">Newest</a></li>
                  <li><a class="dropdown-item" href="#">Oldest</a></li>
                </ul>
              </div>


              <div class="btn-group">
                <button class="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  All items
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="">
                  <li><a class="dropdown-item" href="#">Single items</a></li>
                  <li><a class="dropdown-item" href="#">Bundles</a></li>
                </ul>
              </div>
              
            </div>
            <button class="btn btnlightblue mb-3">Apply</button>
            <button class="btn btndarkblue">Clear All</button>
          </div>
        </div>
    </div>
  </div>
</div>
</div>
</div>
</template>