<template>
    <div class="create-items mt-3 pt-3 mt-md-4 pt-md-4 mt-lg-5 pt-lg-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 create-form-outer">
                    <div class="title-heading mb-4 pb-2 pb-lg-0 ">
                        <h2 class="headingWh ">Create collectible item</h2>
                        <p>Meet the rules of NFT-art placement in <a href="#">our help center</a></p>
                    </div>
                    <div class="create-form">
                        <form action="">
                            <div class="row">

                                <div class="col-6 pb-md-4 pb-3 ">
                                    <div class="img-choosen">
                                        <img src="~/assets/img/single.svg" class="img-fluid" alt="choose img">
                                        <label>Single Image</label>
                                    </div>
                                </div>
                                <div class="col-6 pb-md-4 pb-3 ">
                                    <div class="img-choosen">
                                        <img src="~/assets/img/multiple.svg" class="img-fluid" alt="choose img">
                                        <label>Multiple Image</label>
                                    </div>
                                </div>

                                <div class="col-lg-12 pb-md-4 pb-3">
                                    <label>Upload file</label>
                                    <div class="custom-file-upload">
                                        <div class="file-upload">
                                            <div class="image-upload-wrap">
                                                <input class="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" />
                                                <div class="drag-text">
                                                    <img src="~/assets/img/upload-icon.svg" class="img-fluid" alt="upload icon">
                                                </div>
                                            </div>
                                            <div class="file-upload-content mt-3">
                                                <div class="title-wrapouter">
                                                    <div class="uploaded-img">
                                                        <img class="file-upload-image" src="#" alt="your image" />
                                                    </div>
                                                    <div class="image-title-wrap">
                                                        <span class="image-title">Uploaded Image Title</span>
                                                        <button type="button" onclick="removeUpload()" class="remove-image"> Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7 col-6 pb-md-4 pb-3">
                                    <label>Price</label>
                                    <input type="text" placeholder="Price" class="form-control">
                                </div>
                                <div class="col-md-5 col-6 pb-md-4 pb-3">
                                    <label>Open for Bids</label>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" checked>
                                    </div>
                                </div>
                                <div class="col-md-7 pb-md-4 pb-3">
                                    <label>Choose collection</label>
                                    <div class="btn-group w-100">
                                        <button class="filterbtn dropdown-toggle text-start" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            New collection
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="">
                                            <li><a class="dropdown-item" href="#">Memes</a></li>
                                            <li><a class="dropdown-item" href="#">Photography</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xl-9 pb-md-4 pb-3">
                                    <label>Item Name</label>
                                    <input type="text" placeholder="Enter Name" class="form-control">
                                </div>
                                <div class="col-xl-9 pb-md-4 pb-3">
                                    <label>Description</label>
                                    <textarea class="form-control" placeholder="Enter the description"></textarea>
                                </div>
                                <div class="col-md-7 col-6 pb-md-4 pb-3">
                                    <label>Royalties</label>
                                    <input type="text" placeholder=" 0,10,20% or more" class="form-control">
                                </div>
                                <div class="col-md-5 col-6 pb-md-4 pb-3">
                                    <label>Unlock once purchased</label>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                                    </div>
                                </div>
                                <div class="col-lg-12 pt-3 d-none d-lg-block ">
                                    <button class="btn btnlightblue m-auto m-md-0 d-table d-md-block">Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-5 mt-5 mt-lg-0">
                    <div class="title-heading mb-4">
                        <h2 class="headingWh ">Preview of item</h2>
                    </div>
                    <div class="aboutitem">
                        <div class="aboutitemImg"><img class="img-fluid" src="~/assets/img/item-prev.png" alt="img"></div>
                        <div class="bgdarkbluecolor aboutitemcnt">
                            <div class="itemtitlecode">
                                <h2 class="textgraycolor">Cryptosharks</h2>
                                <h3 class="textwhitecolor">Cryptosharks #92991</h3>
                            </div>
                            <div class="itemtitlePrice">
                                <h2 class="textgraycolor">Price</h2>
                                <h3 class="textwhitecolor"><img src="~/assets/img/priceicon.svg"> <strong>0, 006</strong></h3>
                                <h4 class="textgraycolor"><span><img src="~/assets/img/hearticon.svg"></span> 56</h4>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 pt-1 mb-2 ">
                       <button class="btn btnlightblue savebtn d-block m-auto d-lg-none">Save</button>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>

</style>