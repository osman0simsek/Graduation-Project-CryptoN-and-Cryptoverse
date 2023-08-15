<template>
    <div class="activitySec mt-5">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="headingWh mb-2 mb-md-4">Activity</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-6">
        <div class="row">
          <div class="col-md-6 col-xl-4  mb-3 mt-2 mb-md-0 mt-md-0">
            <div class="btn-group">
              <button class="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Event type
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Listings</a></li>
                <li><a class="dropdown-item" href="#">Sales</a></li>
                <li><a class="dropdown-item" href="#">Bids</a></li>
                <li><a class="dropdown-item" href="#">Transfers</a></li>
              </ul>
            </div>
          </div>


          <div class="col-md-6 col-xl-4">
           <div class="btn-group">
            <button class="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              All chains
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">Ethereum</a></li>
              <li><a class="dropdown-item" href="#">Polygon</a></li>
              <li><a class="dropdown-item" href="#">Klaytn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-lg-6 activityTags 1d-flex justify-content-end d-none d-lg-flex">
      <button class="btn btndarkblue">Bids</button>
      <button class="btn btndarkblue">Listings</button>
      <button class="btn btnlightblue">Clear All <img src="~/assets/img/closeicon.svg" alt="img"></button>
    </div>
  </div>  
    <div class="row mt-3 mt-md-5">
      <div class="col-md-12">
        <div class="activityTable">
          <table>
            <tbody><tr>
              <th>EVENT TYPE</th>
              <th>ITEM</th>
              <th class=" text-end">PRICE</th>
              <th class="text-center">QUANTITY</th>
              <th class=" text-end">FROM</th>
              <th class=" text-end">TO</th>
              <th class=" text-end">TIME</th>
            </tr>

            <tr>
              <td class="textwhitecolor offericon">
                <img src="~/assets/img/handicon.svg" alt="img"> Offer
              </td>
              <td class="textwhitecolor">
                <div class="actiCollect">
                  <div class="activitItem"><img class="img-fluid" src="~/assets/img/activityItem01.svg" alt="img"></div>
                  <div class="actiCnt">
                    <span class="textgraycolor">Jungle Freaks</span>
                    Jungle Freaks by Trosley
                    <div class="actiCntSm"><img class="img-fluid" src="~/assets/img/priceicon.svg" alt="img"> 0,002</div>
                  </div>
                </div>
              </td>
              <td class="textwhitecolor text-end"><img class="img-fluid" src="~/assets/img/priceicon.svg" alt="img"> 0,002</td>
              <td class="textwhitecolor text-center">1</td>
              <td class="textbluecolor text-end">alphabet</td>
              <td class="textbluecolor text-end">barbos2021</td>
              <td class="textbluecolor text-end"><div class="offericonSm"><img src="~/assets/img/handicon.svg" alt="img"> Offer</div>20 seconds ago</td>
            </tr>

            <tr>
              <td class="textwhitecolor offericon">
                <img src="~/assets/img/cart-icon.svg" alt="img"> Sale
              </td>
              <td class="textwhitecolor">
                <div class="actiCollect">
                  <div class="activitItem"><img class="img-fluid" src="~/assets/img/activityItem01.svg" alt="img"></div>
                  <div class="actiCnt">
                    <span class="textgraycolor">Jungle Freaks</span>
                    Jungle Freaks by Trosley
                    <div class="actiCntSm"><img class="img-fluid" src="~/assets/img/priceicon.svg" alt="img"> 0,002</div>
                  </div>
                </div>
              </td>
              <td class="textwhitecolor text-end"><img class="img-fluid" src="~/assets/img/priceicon.svg" alt="img"> 0,002</td>
              <td class="textwhitecolor text-center">1</td>
              <td class="textbluecolor text-end">alphabet</td>
              <td class="textbluecolor text-end">barbos2021</td>
              <td class="textbluecolor text-end"><div class="offericonSm"><img src="~/assets/img/handicon.svg" alt="img"> Offer</div>20 seconds ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  </div>
</div>
</template>