<template>
    <div class="TopsellerSec pt-5 mt-5">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="headingWh mb-4">Top sellers</h2>
        <div class="tab-sec">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button class="nav-link d-none d-sm-none d-md-block active" data-bs-toggle="tab" data-bs-target="#SellerTabOne">All</button>
              <button class="nav-link d-none d-sm-none d-md-block" data-bs-toggle="tab" data-bs-target="#SellerTabTwo">24 Hours</button>
              <button class="nav-link d-none d-sm-none d-md-block" data-bs-toggle="tab" data-bs-target="#SellerTabThree">Last week</button>
              <button class="nav-link d-none d-sm-none d-md-block" data-bs-toggle="tab" data-bs-target="#SellerTabFour">Last month</button>

              <div class="more-tab d-block d-sm-block d-md-none">
                <a href="javascript:void(0)" class="textbluecolor categoryTimeTab">Choose category <img src="~/assets/img/bluedown.png" alt="arrow-down"></a>
                <div class="more-box nav nav-tabs" id="timeTab" role="tablist">
                 <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#SellerTabOne">All</button>
                 <button class="nav-link" data-bs-toggle="tab" data-bs-target="#SellerTabTwo">24 Hours</button>
                 <button class="nav-link" data-bs-toggle="tab" data-bs-target="#SellerTabThree">Last week</button>
                 <button class="nav-link" data-bs-toggle="tab" data-bs-target="#SellerTabFour">Last month</button>
               </div>
              </div>


            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="SellerTabOne">
              <div class="topSellers">
                <ul>
                  <li>
                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">1</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="~/assets/img/crypto-punks/punk.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Crypto Punks</h2>
                          <h3><img src="~/assets/img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>
                  </li>

                  <li>
                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">4</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="~/assets/img/moar/moar.png" alt="img"> 
                          <span class="bluecheckicon"><img src="~/assets/img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Moar</h2>
                          <h3><img src="~/assets/img/priceicon.svg">  6 300,42</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 19,5%</div>
                    </div>
                  </li>

                  <li>
                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">7</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="~/assets/img/bored-ape/bored-ape.png" alt="img"> 
                          <span class="bluecheckicon"><img src="~/assets/img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Bored Ape</h2>
                          <h3><img src="~/assets/img/priceicon.svg">  2 213,12</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textredcolor">- 22,5%</div>
                    </div>
                  </li>
                </ul>
                <button class="btn btnlightblue mt-3 d-sm-block d-md-none">Go to rankings</button>
              </div>
            </div>

            <div class="tab-pane fade" id="SellerTabTwo">
              <div class="topSellers">
                <ul>
                  <li>
                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">1</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/sellerimg01.svg" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">2</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/sellerimg01.svg" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">3</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/sellerimg01.svg" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>
                  </li>

                  <li>
                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">4</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/sellerimg01.svg" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">5</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/sellerimg01.svg" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">6</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/sellerimg01.svg" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>
                  </li>

                  <li>
                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">7</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/sellerimg01.svg" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">8</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/sellerimg01.svg" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">9</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/sellerimg01.svg" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tab-pane fade" id="SellerTabThree">
              <div class="topSellers">
                <ul>
                  <li>
                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">1</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg01.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">2</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg02.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">3</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg03.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>
                  </li>

                  <li>
                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">4</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg04.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">5</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg05.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">6</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg06.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>
                  </li>

                  <li>
                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">7</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg07.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">8</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg08.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">9</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg09.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tab-pane fade" id="SellerTabFour">
              <div class="topSellers">
                <ul>
                  <li>
                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">1</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg01.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">2</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg02.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">3</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg03.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>
                  </li>

                  <li>
                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">4</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg04.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">5</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg05.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">6</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg06.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>
                  </li>

                  <li>
                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">7</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg07.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">8</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg08.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>

                    <div class="seller">
                      <div class="sellerLeft">
                        <div class="sellcount">9</div>
                        <div class="sellerimg">
                          <img class="img-fluid" src="img/topsellerimg09.png" alt="img"> 
                          <span class="bluecheckicon"><img src="img/checkicon.svg" alt="img"></span>
                        </div>
                        <div class="sellertitlepr">
                          <h2>Metasaurs by Dr. DMT</h2>
                          <h3><img src="img/priceicon.svg">  8 921,77</h3>
                        </div>
                      </div>
                      <div class="sellerPrice textbluecolor">+ 69,5%</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>