<template>
     <!-- item-detail -->
    <div class="item-detail  mt-2 mt-md-4 pt-3">
        <div class="circlebg3 d-none d-lg-block "><img class="img-fluid" src="~/assets/img/circlebg21.svg" alt="img"></div>
        <div class="container mt-3 mt-md-5">
            <h2 class="prev-title d-block d-lg-none pb-4 pb-md-5">Ringers by Dmitri Cherniak</h2>
            <div class="row">
                <div class="col-lg-7 pr-80">
                    <div class="tab-prev d-block d-md-flex d-lg-block">
                        <div class="item-detail-prev">
                            <img src="~/assets/img/large-item-prev.png" class="img-fluid" alt="image">
                        </div>
                        <div class="tab-prev-right d-block d-lg-none">
                            <div class="wishlist d-none d-md-block mb-3">
                                <img src="~/assets/img/wishlist.svg" class="img-fluid" alt="wishlist"> 358
                            </div>
                            <div class="dt-spec mt-3 mt-md-0">
                                <ul class="row d-flex flex-wrap">
                                    <li class="col-6 col-sm-6 col-md-12  mb-3 mb-lg-4 mt-lg-2 mt-0">
                                        <label class="mt-3 mt-lg-0 mb-2">Creator</label>
                                        <div class="mentionperson d-flex  align-items-center">
                                            <img src="~/assets/img/mension-1.png" class="img-fluid" alt="image">
                                            <p><a href="#">@misha9292</a></p>
                                        </div>
                                    </li>
                                    <li class="col-6 col-sm-6 col-md-12  mb-3 mb-lg-4 mt-lg-2 mt-0">
                                        <label class="mt-3 mb-2">Collection</label>
                                        <div class="mentionperson d-flex  align-items-center">
                                            <img src="~/assets/img/mension-2.png" class="img-fluid" alt="image">
                                            <p><a href="#">@Crazysharks</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="bottombad d-flex flex-wrap align-items-center justify-content-between">
                        <div class="shareBadges py-3 py-lg-4 ">
                            <ul class="d-flex flex-wrap">
                                <li><a href="#" class="badge badge-tweet me-3 me-lg-4  mb-1 mt-1 mb-md-2 mt-md-3"><img src="~/assets/img/twitter1.svg" class="img-fluid" alt="icon"> tweet</a></li>
                                <li><a href="#" class="badge badge-fb me-3 me-lg-4  mb-1 mt-1 mb-md-2 mt-md-3"><img src="~/assets/img/Facebook_logo.svg" class="img-fluid" alt="icon"> share</a></li>
                                <li><a href="#" class="badge badge-vk me-3 me-lg-4  mb-1 mt-1 mb-md-2 mt-md-3"><img src="~/assets/img/share-icon.svg" class="img-fluid" alt="icon"> share</a></li>
                                <li class="d-none d-md-block"><a href="#" class="badge badge-share me-3 me-lg-4  mb-1 mt-1 mb-md-2 mt-md-3"><img src="~/assets/img/share-Vector.svg" class="img-fluid" alt="icon"> share</a></li>
                            </ul>
                        </div>
                        <div class="wishlist d-block d-md-none d-lg-block">
                            <img src="~/assets/img/wishlist.svg" class="img-fluid" alt="wishlist"> 358
                        </div>
                    </div>
                    <div class="prev-des">
                        <p><strong>Created by <a href="#">aaajj67</a></strong></p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div class="col-lg-5 pt-0 pt-lg-4">
                    <div class="prevItemData d-flex d-md-block flex-wrap">
                        <h2 class="prev-title d-none d-lg-block"> Ringers by Dmitri Cherniak</h2>
                        <div class=" w-100 dt-spec mt-2 mb-3 m-lg-0 order-2">
                            <ul class="row d-flex flex-wrap">
                                <li class="col-6 d-none d-lg-block  mb-4 mt-2">
                                    <label class="mt-3 mb-2">Creator</label>
                                    <div class="mentionperson d-flex  align-items-center">
                                        <img src="~/assets/img/mension-1.png" class="img-fluid" alt="image">
                                        <p><a href="#">@misha9292</a></p>
                                    </div>
                                </li>
                                <li class="col-6 d-none d-lg-block  mb-4 mt-2">
                                    <label class="mt-3 mb-2">Collection</label>
                                    <div class="mentionperson d-flex align-items-center">
                                        <img src="~/assets/img/mension-2.png" class="img-fluid" alt="image">
                                        <p><a href="#">@Crazysharks</a></p>
                                    </div>
                                </li>
                                <li class="col-6 mb-4 mt-2">
                                    <label class="mt-3 mb-2">Current Price</label>
                                    <h3 class="textwhitecolor"><img src="~/assets/img/priceicon.svg"> <strong>0, 006</strong></h3>
                                </li>
                                <li class="col-6 mb-4 mt-2">
                                    <label class="mt-3 mb-2">Auction ends in</label>
                                    <h4>26 days 11:06</h4>
                                </li>
                            </ul>
                        </div>
                        <div class=" w-100 prevActions order-3 d-block d-md-flex mb-3 mb-lg-0">
                            <button class="btn btnlightblue mb-3 mb-md-4 me-0 me-md-4  ">Buy Now</button>
                            <button class="btn btndarkblue mb-3 mb-md-4 ">Price a Bid</button>
                        </div>
                        <div class=" w-100 mt-3 mt-md-0 tab-sec auTabing order-1">
                            <nav>
                                <div class="nav nav-tabs" role="tablist">
                                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#TabOne1">History</button>
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#TabTwo2">Bids</button>
                                </div>
                            </nav>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="TabOne1">
                                    <div class="b-list">
                                        <ul class="blueScroll ">
                                            <li class="d-flex mb-4 align-items-center">
                                                <div class="bimg">
                                                    <img src="~/assets/img/mension-2.png" class="img-fluid" alt="images">
                                                </div>
                                                <div class="bcontent ps-4 textwhitecolor">
                                                    <p>Bid placed for <strong>11.00 ETH</strong> 4 hours ago by <a href="#">@erikkk</a></p>
                                                </div>
                                            </li>
                                            <li class="d-flex mb-4 align-items-center">
                                                <div class="bimg">
                                                    <img src="~/assets/img/mension-2.png" class="img-fluid" alt="images">
                                                </div>
                                                <div class="bcontent ps-4 textwhitecolor">
                                                    <p>Bid placed for <strong>11.00 ETH</strong> 4 hours ago by <a href="#">@erikkk</a></p>
                                                </div>
                                            </li>
                                            <li class="d-flex mb-4 align-items-center">
                                                <div class="bimg">
                                                    <img src="~/assets/img/mension-2.png" class="img-fluid" alt="images">
                                                </div>
                                                <div class="bcontent ps-4 textwhitecolor">
                                                    <p>Bid placed for <strong>11.00 ETH</strong> 4 hours ago by <a href="#">@erikkk</a></p>
                                                </div>
                                            </li>
                                            <li class="d-flex mb-4 align-items-center">
                                                <div class="bimg">
                                                    <img src="~/assets/img/mension-2.png" class="img-fluid" alt="images">
                                                </div>
                                                <div class="bcontent ps-4 textwhitecolor">
                                                    <p>Bid placed for <strong>11.00 ETH</strong> 4 hours ago by <a href="#">@erikkk</a></p>
                                                </div>
                                            </li>
                                            <li class="d-flex mb-4 align-items-center">
                                                <div class="bimg">
                                                    <img src="~/assets/img/mension-2.png" class="img-fluid" alt="images">
                                                </div>
                                                <div class="bcontent ps-4 textwhitecolor">
                                                    <p>Bid placed for <strong>11.00 ETH</strong> 4 hours ago by <a href="#">@erikkk</a></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-pane fade " id="TabTwo2">
                                    <div class="b-list">
                                        <ul class="blueScroll ">
                                            <li class="d-flex mb-4 align-items-center">
                                                <div class="bimg">
                                                    <img src="~/assets/img/mension-2.png" class="img-fluid" alt="images">
                                                </div>
                                                <div class="bcontent ps-4 textwhitecolor">
                                                    <p>Bid placed for <strong>11.00 ETH</strong> 4 hours ago by <a href="#">@erikkk</a></p>
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
    </div>
</template>