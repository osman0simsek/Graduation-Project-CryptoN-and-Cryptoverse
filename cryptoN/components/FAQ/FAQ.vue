<template>
  <div class="faq mt-3 pt-3 mt-md-4 pt-md-4 mt-lg-5 pt-lg-5">
    <div class="circlebg3">
      <img class="img-fluid" src="~/assets/img/circlebg21.svg" alt="img" />
    </div>
    <div class="container">
      <h2 class="headingWh mb-2 mb-md-2 mb-lg-4">
        <span class="textbluecolor">FAQ</span>
      </h2>

      <div class="faq-ques">
        <ul class="nav nav-tabs blueScroll" id="myTab" role="tablist">
          <!-- tab toogle -->
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="tab1-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab1"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              What is an NFT?
            </button>
          </li>

          <!-- tab toogle -->
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="tab2-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab2"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              How much does it cost to create an NFT?
            </button>
          </li>

          <!-- tab toogle -->
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="tab3-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab3"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              What is a floor price?
            </button>
          </li>

          <!-- tab toogle -->
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="tab4-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab4"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              What is an Offer Balance?
            </button>
          </li>

          <!-- tab toogle -->
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="tab5-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab5"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              How do I transfer ETH from Ethereum to Polygon?
            </button>
          </li>
        </ul>

        <div class="tab-content accordion" id="accordionExample">
          <!-- tab item -->
          <div
            class="tab-pane fade accordion-item show active"
            id="tab1"
            role="tabpanel"
            aria-labelledby="tab1-tab"
          >
            <h2 class="accordion-header" id="collapsehead1">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                What is an NFT?
              </button>
            </h2>
            <div
              id="collapse1"
              class="accordion-collapse collapse show"
              aria-labelledby="collapsehead1"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  NFTs prove ownership of a unique digital asset like art,
                  music, collectibles, videos or anything else with blockchain
                  technology.
                </p>
              </div>
            </div>
          </div>

          <!-- tab item -->
          <div
            class="tab-pane fade accordion-item"
            id="tab2"
            role="tabpanel"
            aria-labelledby="tab2-tab"
          >
            <h2 class="accordion-header" id="collapsehead2">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="true"
                aria-controls="collapse2"
              >
                How much does it cost to create an NFT?
              </button>
            </h2>
            <div
              id="collapse2"
              class="accordion-collapse collapse"
              aria-labelledby="collapsehead2"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  When you first create an NFT, you “mint” it with a few clicks
                  — which might mean you have to pay a fee to the network. Fees
                  depend on the blockchain and minting option. Blockchains
                  charge a fee for minting, buying and selling. Imagine it like
                  highways on a road trip. Some are free. Others charge you a
                  toll, which can be cheap or expensive.
                </p>
              </div>
            </div>
          </div>

          <!-- tab item -->
          <div
            class="tab-pane fade accordion-item"
            id="tab3"
            role="tabpanel"
            aria-labelledby="tab3-tab"
          >
            <h2 class="accordion-header" id="collapsehead3">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="true"
                aria-controls="collapse3"
              >
                What is a floor price?
              </button>
            </h2>
            <div
              id="collapse3"
              class="accordion-collapse collapse"
              aria-labelledby="collapsehead3"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Floor price is the lowest price for collection items, rather
                  than the average item price, and is updated in real-time.
                  Dutch auctions are not included in floor price calculations.
                </p>
              </div>
            </div>
          </div>

          <!-- tab item -->
          <div
            class="tab-pane fade accordion-item"
            id="tab4"
            role="tabpanel"
            aria-labelledby="tab4-tab"
          >
            <h2 class="accordion-header" id="collapsehead4">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="true"
                aria-controls="collapse4"
              >
                What is an Offer Balance?
              </button>
            </h2>
            <div
              id="collapse4"
              class="accordion-collapse collapse"
              aria-labelledby="collapsehead2"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  On CryptoN, your Offer Balance is used to keep track of the
                  funds available to make an Offer. When your Offer expires or a
                  higher Offer is made, you are automatically refunded to your
                  Offer Balance. Once you have funds in your Offer Balance, you
                  can make another Offer, or you can opt to convert your funds
                  to ETH.
                </p>
              </div>
            </div>
          </div>

          <!-- tab item -->
          <div
            class="tab-pane fade accordion-item"
            id="tab5"
            role="tabpanel"
            aria-labelledby="tab5-tab"
          >
            <h2 class="accordion-header" id="collapsehead5">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse5"
                aria-expanded="true"
                aria-controls="collapse5"
              >
                How do I transfer ETH from Ethereum to Polygon?
              </button>
            </h2>
            <div
              id="collapse5"
              class="accordion-collapse collapse"
              aria-labelledby="collapsehead5"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Polygon is a blockchain that provides scalable, secure and
                  instant transactions with Ethereum currencies like ETH, USDC,
                  DAI. In order to spend your Ethereum currencies on Polygon,
                  you must first bridge them from the Ethereum network to the
                  Polygon network. This guide explains how to transfer
                  currencies from the Ethereum network to the Polygon (PoS)
                  network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
