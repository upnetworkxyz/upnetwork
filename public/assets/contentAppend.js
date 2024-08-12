﻿const str = ` <header id="site-header" class="main-header main-header-overlay">
                <div class="w-full h-full flex bg-primary pt-5 md:hidden">
                    <div class="container flex gap-15 items-center justify-center self-stretch flex-grow-1 flex-shrink-1 transition-all">
                        <!-- <div class="ld-fancy-heading relative"><span class="ld-fh-element relative mb-0/5em text-13 font-medium uppercase text-black">New!</span></div> -->
                        <div class="ld-fancy-heading relative pointer-events-auto">
                            <span class="ld-fh-element relative mb-0/5em text-13 font-normal text-black">Progressive wallets coming soon! <u class="font-bold">Stay Tuned!</u></span>
                        </div>
                    </div>
                </div>
                <div class="w-full static flex items-center px-35 md:hidden">
                    <div class="w-25percent static flex flex-col items-start pointer-events-auto p-10">
                        <div class="module-logo flex navbar-brand-plain py-30" id="size-logo">
                            <a class="navbar-brand flex p-0 relative" href="#" rel="home">
                                <span class="navbar-brand-inner post-rel"><img src="assets/images/logo/logo-01-light.svg" width="146px" alt="Dark AI" /></span>
                            </a>
                        </div>
                    </div>
                    <div class="w-50percent static flex flex-col items-center p-10 module-menu">
                        <div class="lqd-fancy-menu lqd-custom-menu lqd-menu-td-none lqd-custom-menu-has-btn flex items-center fixed bg-white-10 rounded-10 pr-10 pb-5 pl-20">
                            <ul class="reset-ul inline-ul link-white-40 link-14" data-localscroll="true" data-localscroll-options='{"itemsSelector":">li > a", "trackWindowScroll": true, "includeParentAsOffset": false}'>
                                <li class="menu-item-object-page menu-item-home current-menu-item mr-40"><a href="#banner">Home</a></li>
                                <li class="mr-40"><a href="#features">Features</a></li>
                                <li class="mr-40"><a href="#how-it-works">How It Works</a></li>
                                <li><a href="#news">News</a></li>
                            </ul>
                            <div class="lqd-custom-menu-btn-wrap ml-40">
                                <a href="#modal-subscribe" class="btn btn-solid btn-xs btn-icon-shaped text-14 rounded-6 py-5 px-10 text-black bg-primary" data-lity="modal-subscribe"><span data-text="Login" class="btn-txt">Login</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="w-25percent static flex flex-row items-center justify-end gap-15 p-10">
                        <div class="ld-dropdown-menu flex relative ld-dropdown-menu-underlined w-65" role="menubar">
                            <span
                                class="ld-module-trigger"
                                role="button"
                                data-ld-toggle="true"
                                data-bs-toggle="collapse"
                                data-bs-target="#dropdown-language"
                                aria-controls="dropdown-language"
                                aria-expanded="false"
                                data-toggle-options='{ "type":  "hoverFade" }'
                            >
                                <span class="ld-module-trigger-txt text-15 font-medium text-white"><span>En</span> <img width="48" height="48" src="assets/images/shape/Language1.png" alt="shape earth" /></span>
                            </span>
                            <div class="ld-module-dropdown left collapse absolute" id="dropdown-language" aria-expanded="false" role="menuitem">
                                <div class="ld-dropdown-menu-content">
                                    <ul class="text-14 link-black">
                                        <li><a href="#">FR</a></li>
                                        <li><a href="#">DE</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-full">
                            <a
                                href="#modal-subscribe"
                                class="btn btn-solid btn-sm btn-hover-txt-switch-change btn-hover-txt-switch btn-hover-txt-switch-y btn-icon-shaped text-15 font-500 bg-transparent border-2 border-white-10 rounded-6 text-white"
                                data-lity="modal-subscribe"
                            >
                                <span data-text="Login" class="btn-txt">Login</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="lqd-mobile-sec relative bg-black">
                    <div class="lqd-mobile-sec-inner navbar-header flex items-stretch w-full">
                        <div class="lqd-mobile-modules-container empty"></div>
                        <button
                            type="button"
                            class="navbar-toggle collapsed nav-trigger style-mobile flex relative items-center justify-end border-none bg-transparent nav-trigger-dark p-0"
                            data-ld-toggle="true"
                            data-bs-toggle="collapse"
                            data-bs-target="#lqd-mobile-sec-nav"
                            aria-expanded="false"
                            data-toggle-options='{ "changeClassnames":  {"html":  "mobile-nav-activated"} }'
                        >
                            <span class="sr-only">Menu</span>
                            <span class="bars inline-block relative z-1">
                                <span class="bars-inner flex flex-col w-full h-full"><span class="bar inline-block"></span> <span class="bar inline-block"></span> <span class="bar inline-block"></span></span>
                            </span>
                        </button>
                        <a class="navbar-brand flex relative" href="#">
                            <span class="navbar-brand-inner"><img class="logo-default" src="assets/images/logo/logo-01-light.svg" width="152px" alt="Dark AI" /></span>
                        </a>
                    </div>
                    <div class="lqd-mobile-sec-nav w-full absolute z-10">
                        <div class="mobile-navbar-collapse navbar-collapse collapse w-full bg-black text-white" id="lqd-mobile-sec-nav" aria-expanded="false" role="navigation">
                            <ul
                                id="mobile-primary-nav"
                                class="reset-ul lqd-mobile-main-nav main-nav nav"
                                data-localscroll="true"
                                data-localscroll-options='{"itemsSelector":"> li > a", "trackWindowScroll": true, "includeParentAsOffset": true}'
                            >
                                <li class="current-menu-item"><a class="text-white" href="#banner">Home</a></li>
                                <li><a class="text-white" href="#features">Features</a></li>
                                <li><a class="text-white" href="#how-it-works">How It Works</a></li>
                                <li><a class="text-white" href="#news">News</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <main class="content bg-black" id="lqd-site-content" >
                <div id="lqd-contents-wrap">
                    <section
                        class="lqd-section banner min-h-100vh flex justify-center items-center p-10 bg-black"
                        id="banner"
                        data-parallax="true"
                        data-parallax-options='{"start": "top top", "end": "bottom top"}'
                        data-parallax-from='{ "y": "0vh", "scaleX": 1,"scaleY": 1,"opacity": 1 }'
                        data-parallax-to='{ "y": "72vh", "scaleX": 1.2,"scaleY": 1.2,"opacity": 0 }'
                    >
                        <div class="module-video w-full h-full absolute top-0 left-0 overflow-hidden z-0 transotion-opacity pointer-events-none bg-before">
                            <video class="background-video-hosted max-w-full w-full h-full absolute-center object-cover" src="assets/videos/dark-ai/banner/bg-video-09.mp4" autoplay muted playsinline loop></video>
                        </div>
                        <div
                            class="container flex flex-col"
                            data-custom-animations="true"
                            data-ca-options='{"animationTarget": ".animation-element,.animation-element .split-inner", "duration" : 750, "delay" : 50, "ease": "expo.out", "initValues": {"scaleX" : 0.5, "scaleY" : 0.5, "rotationZ" : 3, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'
                        >
                            <div class="ld-fancy-heading relative max-w-full text-center animation-element">
                                <h1 class="ld-fh-element relative mb-0/15em leading-1em" data-text-rotator="true" data-split-text="true" data-split-options='{"type": "chars, words"}'>
                                    <span class="font-outfit font-bold text-white">WEB3 ON THE</span>
                                    <span class="txt-rotate-keywords text-primary font-ultrabold"><span class="txt-rotate-keyword active">MOVE</span> <span class="txt-rotate-keyword">MOVE</span> <span class="txt-rotate-keyword">MOVE</span></span>
                                </h1>
                            </div>
                            <div class="ld-fancy-heading relative text-center px-15percent animation-element">
                                <p class="ld-fh-element relative mb-0/5em leading-1/3em">Building DeMIN (Decentralized Mobile Infrastructure Networks) with the world’s most powerful Web3 smartphone: <span class="text-primary font-bold">Up Mobile</span>.</p>
                            </div>
                            <div class="flex flex-row flex-wrap justify-center mt-10 p-10">
                                <div class="max-w-full banner-btn-left animation-element">
                                    <a href="#features" class="btn btn-solid btn-md btn-hover-txt-switch btn-hover-txt-switch-y btn-icon-shaped text-17 font-medium bg-primary text-black rounded-6 rounded-right-0" data-localscroll="true">
                                        <span data-text="Up Mobile" class="btn-txt" data-transition-delay="true" data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'>
                                            Up Mobile
                                        </span>
                                    </a>
                                </div>
                                <div class="max-w-full banner-btn-right animation-element">
                                    <a href="https://www.youtube.com/watch?v=OMVpP-Zam1A" class="fresco btn btn-solid btn-md btn-icon-left btn-hover-swp text-17 font-medium bg-primary text-black rounded-6 rounded-left-0">
                                        <span data-text="Watch Video" class="btn-txt">Watch Video </span><span class="btn-icon"><i aria-hidden="true" class="lqd-icn-ess icon-ion-ios-play"></i> </span>
                                        <span class="btn-icon"><i aria-hidden="true" class="lqd-icn-ess icon-ion-ios-play"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        id="parallax-section"
                        class="lqd-section parallax-bg bg-before w-full min-h-100vh flex flex-col items-center justify-center bg-no-repeat bg-bottom-center bg-cover p-10"
                        style="background-image: url(assets/images/bg/powered-card-01-t.gif);"
                        data-parallax="true"
                        data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom+=0px top"}'
                        data-parallax-from='{"y": "0px", "scaleX" : 1, "scaleY" : 1}'
                        data-parallax-to='{"y": "-300px", "scaleX" : 0.3, "scaleY" : 0.3}'
                    ></section>
                    <section
                        class="lqd-section features py-60"
                        id="features"
                        data-custom-animations="true"
                        data-ca-options='{"animationTarget": ".animation-element", "duration" : 850, "startDelay" : 300, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.7, "scaleY" : 0.7, "rotationZ" : 2, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'
                    >

                        <div class="container">
                                <div class="row">
                                    <div class="col col-12 mb-220">
                                        <div class="mb-30 lqd-imggrp-single block relative">
                                            <div class="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                                                <figure class="w-full relative">
                                                    <img width="48" height="10" src="assets/images/logo/logo-up-yellow.svg" alt="shape">
                                                </figure>
                                            </div>
                                        </div>
                                        <h3 class="lqd-text-reveal-el mb-40 text-74 font-semibold leading-0/9em -tracking-3 text-white" data-split-text="true" data-split-options='{"type": "words, chars"}' data-parallax="true" data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top bottom", "end": "center 75%", "scrub" : 3}' data-parallax-from='{"opacity" :0.2}' data-parallax-to='{"opacity" :1, "stagger": {"from": "start", "each" : 1}}'>
                                            <span class="lqd-adv-txt-item">
                                                <span>A Web3 abstraction layer that connects mobile devices and blockchains,</span>
                                            </span>
                                            <span class="lqd-adv-txt-item">
                                                <span>simplifying blockchain technology for mobile users and enhancing</span>

                                            </span>
                                            <span class="lqd-adv-txt-item">how mobile devices leverage blockchain features.</span>
                                        </h3>

                                    </div>
                                </div>
                            </div>
                        <div class="container">
                            <div class="row justify-around self-stretch gap-60">
                                <div class="col flex-auto w-30percent sm:w-full">
                                    <div class="flex flex-col gap-30 animation-element">
                                        <div class="max-w-full flex justify-center items-center text-40 text-primary border-primary mb-10">
                                            <svg class="w-1em h-1em" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewbox="0 0 512 512" fill="currentColor">
                                                <path
                                                    d="M437.8,165.1l.7-.3c2.2-1,3.9-1.5,5.1-1.6l1.4-.2c2.9-.6,5.9-.9,8.9-.9,17.9,0,32.9-5.6,43.3-16.2,7.5-7.6,12.2-17.5,13.8-28.9h.9s0-65.7,0-65.7h-109.6v47.6c-.3,3.4-.2,6.6-.2,9.4,0,3.1,0,6-.3,8.2v.7c-1.3,9.3-5.8,17.9-12.7,24.3-7.1,6.5-10.4,8-11.5,8.3-1.1.3-2.7.2-7.3-.5-4-.5-9.4-1.3-16.1-1.3-28.4,0-52.2,21.4-55.4,49.9-.7,6.5-.3,11.3,0,14.8.3,3.9.4,5.1-.9,9-2.7,7.7-8.4,14.8-16.1,20.1-7.7,5.3-16.6,8.1-25,8.1h-.8s-.8,0-.8,0c-8.4,0-17.3-2.9-25-8.1-7.7-5.3-13.5-12.4-16.1-20-1.4-3.9-1.3-5.1-.9-9,.3-3.5.7-8.4,0-14.8-3.2-28.4-27-49.9-55.4-49.9s-12.1.7-16.1,1.3c-4.6.6-6.2.8-7.3.4-1.1-.3-4.4-1.7-11.5-8.3-6.9-6.4-11.4-15-12.6-24.3v-.7c-.3-1.1-.4-2.3-.4-3.6v-61.5H.2v55.7c-.1,15.7,4.9,29.2,14.5,38.9,10.4,10.6,25.4,16.2,43.3,16.2s6,.3,8.9.9l1.4.2c1.3.2,2.9.7,5.1,1.6l.7.3c7.4,3,13.9,7.9,18.8,14.4,12,15.8,12.1,37.9,0,53.8-3.9,5.2-9,9.5-14.7,12.6l-.5.3c-1.6.9-3,1.5-4.2,2-.6.2-1.1.4-1.6.5l-.5.2c-4.3,1.4-8.8,2.1-13.4,2.1-34.7,0-58.1,21.5-58.1,53.6s11.3,38,20.8,44.5c11.6,7.9,25.6,10.2,38.9,11.4h.9c3.5.6,6.5,1.3,10,2.6l1.7.6h.3c9,3.2,16.5,9.5,21.2,18,2.7,4.8,4.5,11,5.2,17.5.3,2.6.4,5.1.6,7.5.1,1.9.3,4,.5,6.1v48.3h109.6v-64.5h-.8c-1.8-12.4-7.6-23.8-16.9-32.6-.8-.8-1.6-1.4-2.2-1.9l-.4-.3c-11.8-10.3-27.1-10.6-38.3-10.8h-.1c-1.9,0-3.6,0-5.2-.1l-1.7-.3-3.6-.8-3.4-1.1-3.7-1.5c-3.8-1.8-7.4-4-10.6-6.8l-.7-.6c-10.1-9.1-15.2-20.4-15.4-34.4,0-10,3.2-19.5,9.2-27.5,5.8-7.8,14.1-13.5,23.3-16.3,9.3-2.8,26.6-2.8,35-.1,15.2,4.9,26,19,26.9,35.1,0,1.3,0,2.7,0,4.4-.2,4.7-.4,11.2,2.3,19.3,7.6,22.7,28.8,38,52.6,38.1,23.8,0,44.9-15.4,52.6-38.2,2.7-8.1,2.5-14.6,2.3-19.3,0-1.6-.1-3,0-4.3.8-16.1,11.7-30.2,26.9-35.1,8.4-2.7,25.7-2.6,35,.1,9.2,2.7,17.5,8.5,23.3,16.3,6,8,9.2,17.5,9.2,27.5-.2,14-5.2,25.3-15.4,34.4l-.6.6c-3.2,2.8-6.8,5.1-10.6,6.8l-3.7,1.5-3.4,1.1-2.9.7-2.3.4c-1.6,0-3.3.1-5.2.1h-.1c-11.2.2-26.5.5-38.3,10.8l-.4.4c-.6.5-1.3,1.2-2.2,2-8.9,8.5-14.6,19.4-16.6,31.3h-1v65.7h109.6v-48.3c.2-2.1.4-4.2.5-6.1.2-2.4.4-4.9.6-7.5.7-6.5,2.5-12.8,5.2-17.5,4.7-8.4,12.2-14.7,21.2-17.8l1.9-.7c3.4-1.2,6.4-2,10-2.4h.9c13.4-1.3,27.3-3.6,38.9-11.5,17.2-11.8,20.8-30.7,20.8-44.5,0-32.1-23.3-53.6-58.1-53.6s-9.1-.7-13.4-2.1l-.5-.2c-.5-.1-1-.3-1.5-.5-1.3-.5-2.7-1.1-4.3-2l-.5-.3c-5.7-3-10.8-7.3-14.7-12.5-12-15.9-11.9-38,0-53.8,4.9-6.4,11.4-11.4,18.8-14.3h0Z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div class="max-w-full text-center">
                                            <h3 class="text-20 mb-0/5em lqd-iconbox-heading text-primary">Powered By Movement</h3>
                                            <h3
                                                class="lqd-text-reveal-el text-20 leading-25 text-yellow-100 m-0"
                                                data-split-text="true"
                                                data-split-options='{"type": "words, chars"}'
                                                data-parallax="true"
                                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 50%", "end": "bottom bottom", "scrub" : 3}'
                                                data-parallax-from='{"opacity" : 0.2}'
                                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                                            >
                                                Built on Movement, the 1st parallelized MoveVM ZK layer 2 on Ethereum; delivering 160,000+ TPS, with < $0.01 gas fee.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col flex-auto w-30percent sm:w-full">
                                    <div class="flex flex-col gap-30 animation-element">
                                        <div class="max-w-full flex justify-center items-center text-40 text-primary border-primary mb-10">
                                            <svg class="w-1em h-1em" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewbox="0 0 512 512" fill="currentColor">
                                                <path class="cls-1" d="M480,305.4l32.1,28.1c-31.3,35.3-85.3,38.5-120.6,7.2-2.6-2.3-5.1-4.9-7.5-7.5-31.1,35.3-84.9,38.8-120.2,7.8-2.7-2.4-5.3-5-7.8-7.8-31.1,35.3-84.9,38.8-120.2,7.8-2.7-2.4-5.3-5-7.8-7.8-31.1,35.5-85.1,39-120.6,7.9-2.7-2.4-5.2-4.9-7.6-7.6l32.2-28.1c15.9,17.6,43,18.9,60.6,3,8.8-8,13.9-19.2,14.1-31.1h42.7c0,23.6,19.1,42.7,42.7,42.7s42.7-19.1,42.7-42.7h42.7c0,23.6,19.1,42.7,42.7,42.7s42.7-19.1,42.7-42.7h42.7c.4,23.7,19.9,42.6,43.6,42.2,11.9-.2,23.1-5.3,31.1-14.1ZM448,448c-23.6,0-42.7-19.1-42.7-42.7h-42.7c0,23.6-19.1,42.7-42.7,42.7s-42.7-19.1-42.7-42.7h-42.7c0,23.6-19.1,42.7-42.7,42.7s-42.7-19.1-42.7-42.7h-42.7c-.4,23.7-19.9,42.6-43.6,42.2-11.9-.2-23.1-5.3-31.1-14.1L-.2,461.5c31.3,35.3,85.3,38.6,120.6,7.3,2.7-2.4,5.2-4.9,7.6-7.6,31.1,35.3,84.9,38.8,120.2,7.8,2.7-2.4,5.3-5,7.8-7.8,31.1,35.3,84.9,38.8,120.2,7.8,2.7-2.4,5.3-5,7.8-7.8,31.1,35.5,85.1,39,120.6,7.8,2.7-2.4,5.2-4.9,7.6-7.6l-32.2-28.1c-8.1,9.2-19.7,14.6-32,14.6ZM448,192c-23.6,0-42.7-19.1-42.7-42.7h-42.7c0,23.6-19.1,42.7-42.7,42.7s-42.7-19.1-42.7-42.7h-42.7c0,23.6-19.1,42.7-42.7,42.7s-42.7-19.1-42.7-42.7h-42.7c-.4,23.7-19.9,42.6-43.6,42.2-11.9-.2-23.1-5.3-31.1-14.1L-.2,205.5c31.3,35.3,85.3,38.6,120.6,7.3,2.7-2.4,5.2-4.9,7.6-7.6,31.1,35.3,84.9,38.8,120.2,7.8,2.7-2.4,5.3-5,7.8-7.8,31.1,35.3,84.9,38.8,120.2,7.8,2.7-2.4,5.3-5,7.8-7.8,31.1,35.5,85.1,39,120.6,7.8,2.7-2.4,5.2-4.9,7.6-7.6l-32.2-28.1c-8.1,9.2-19.7,14.6-32,14.6ZM128,77.2c31.1,35.3,84.9,38.8,120.2,7.8,2.7-2.4,5.3-5,7.8-7.8,31.1,35.3,84.9,38.8,120.2,7.8,2.7-2.4,5.3-5,7.8-7.8,31.1,35.5,85.1,39,120.6,7.8,2.7-2.4,5.2-4.9,7.6-7.6l-32.2-28.1c-15.9,17.6-43,18.9-60.6,3-8.8-8-13.9-19.2-14.1-31.1h-42.7c0,23.6-19.1,42.7-42.7,42.7s-42.7-19.1-42.7-42.7h-42.7c0,23.6-19.1,42.7-42.7,42.7s-42.7-19.1-42.7-42.7h-42.7c-.4,23.7-19.9,42.6-43.6,42.2-11.9-.2-23.1-5.3-31.1-14.1L-.2,77.5c31.3,35.3,85.3,38.6,120.6,7.3,2.7-2.4,5.2-4.9,7.6-7.6Z"/></path>
                                            </svg>
                                        </div>
                                        <div class="max-w-full text-center">
                                            <h3 class="text-20 mb-0/5em lqd-iconbox-heading text-primary">Multi-chain</h3>
                                            <h3
                                                class="lqd-text-reveal-el text-20 leading-25 text-yellow-100 m-0"
                                                data-split-text="true"
                                                data-split-options='{"type": "words, chars"}'
                                                data-parallax="true"
                                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 60%", "end": "bottom bottom", "scrub" : 3}'
                                                data-parallax-from='{"opacity" : 0.2}'
                                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                                            >
                                                Supports MoveVM based and EVM based assets and contracts, making it the most compatible infrastructure for everyday blockchain utility.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col flex-auto w-30percent sm:w-full">
                                    <div class="flex flex-col gap-30 animation-element">
                                        <div class="max-w-full flex justify-center items-center text-40 text-primary border-primary mb-10">
                                            <svg class="w-1em h-1em" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewbox="0 0 512 512" fill="currentColor">
                                                <path class="cls-1" d="M418.1,322.1v-110.9l93.9-93.9L396.8,0l-83.2,83.2h-119.5C187.7,38.4,147.2,0,98.1,0S0,42.7,0,96s27.7,76.8,64,89.6v155.7H0v170.7h170.7v-170.7h-64v-151.5c36.3-4.3,68.3-29.9,78.9-61.9h104.5l83.2,83.2v110.9c-42.7,10.7-74.7,46.9-74.7,93.9s42.7,96,96,96,96-42.7,96-96-32-83.2-74.7-93.9h2.1Z"/></path>
                                            </svg>
                                        </div>
                                        <div class="max-w-full text-center">
                                            <h3 class="text-20 mb-0/5em lqd-iconbox-heading text-primary">Vibrant Ecosystem</h3>
                                            <h3
                                                class="lqd-text-reveal-el text-20 leading-25 text-yellow-100 m-0"
                                                data-split-text="true"
                                                data-split-options='{"type": "words, chars"}'
                                                data-parallax="true"
                                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 55%", "end": "bottom bottom", "scrub" : 3}'
                                                data-parallax-from='{"opacity" : 0.2}'
                                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                                            >
                                                45+ launch partners (and counting); coherent developer ecosystem and support.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col flex-auto w-30percent sm:w-full">
                                    <div class="flex flex-col gap-30 animation-element">
                                        <div class="max-w-full flex justify-center items-center text-40 text-primary border-primary mb-10">
                                            <svg class="w-1em h-1em" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewbox="0 0 512 512" fill="currentColor">
                                                <path class="cls-1" d="M170.7,0h-106.7C28.7,0,0,28.7,0,64v106.7h64l-.4,64,42.7.2.4-64.2h64v-64.3l64,.3.2-42.7-64.2-.3V0Z"/>
                                                <path class="cls-1" d="M448,0h-106.7v64l-63.9-.3-.2,42.7,64.1.3v64h64.3l-.3,64,42.7.2.3-64.2h63.7v-106.7c0-35.3-28.7-64-64-64Z"/>
                                                <path class="cls-1" d="M448.4,277.4l-42.7-.2-.3,64.1h-64.1v64.3l-63.9-.3v42.7c-.1,0,63.9.3,63.9.3v63.7h106.7c35.3,0,64-28.7,64-64v-106.7h-64l.4-63.9Z"/>
                                                <path class="cls-1" d="M170.7,341.3h-64.3l.3-63.9h-42.7c0-.1-.3,63.9-.3,63.9H0v106.7c0,35.3,28.7,64,64,64h106.7v-64l64,.4.2-42.7-64.2-.3v-64.1Z"/>
                                            </svg>
                                        </div>
                                        <div class="max-w-full text-center">
                                            <h3 class="text-20 mb-0/5em lqd-iconbox-heading text-primary">Distribution</h3>
                                            <h3
                                                class="lqd-text-reveal-el text-20 leading-25 text-yellow-100 m-0"
                                                data-split-text="true"
                                                data-split-options='{"type": "words, chars"}'
                                                data-parallax="true"
                                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 60%", "end": "bottom bottom", "scrub" : 3}'
                                                data-parallax-from='{"opacity" : 0.2}'
                                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                                            >
                                                Largest DeMIN node network providing Zero Knowledge Mobile compute power by the end of 2024.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col flex-auto w-30percent sm:w-full">
                                    <div class="flex flex-col gap-30 animation-element">
                                        <div class="max-w-full flex justify-center items-center text-40 text-primary border-primary mb-10">
                                            <svg class="w-1em h-1em" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewbox="0 0 512 512" fill="currentColor">
                                                    <path class="cls-1" d="M0,64v170.7h234.7V0H64C28.7,0,0,28.7,0,64Z"/>
                                                    <path class="cls-1" d="M0,448c0,35.3,28.7,64,64,64h170.7v-234.7H0v170.7Z"/>
                                                    <path class="cls-1" d="M277.3,277.3v234.7h170.7c35.3,0,64-28.7,64-64v-170.7h-234.7Z"/>
                                                    <polygon class="cls-1" points="362.7 234.7 405.3 234.7 405.3 149.3 490.7 149.3 490.7 106.7 405.3 106.7 405.3 21.3 362.7 21.3 362.7 106.7 277.3 106.7 277.3 149.3 362.7 149.3 362.7 234.7"/>
                                            </svg>
                                        </div>
                                        <div class="max-w-full text-center">
                                            <h3 class="text-20 mb-0/5em lqd-iconbox-heading text-primary">Up dApp Store</h3>
                                            <h3
                                                class="lqd-text-reveal-el text-20 leading-25 text-yellow-100 m-0"
                                                data-split-text="true"
                                                data-split-options='{"type": "words, chars"}'
                                                data-parallax="true"
                                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}'
                                                data-parallax-from='{"opacity" : 0.2}'
                                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                                            >
                                                Use all your favorite Up Network DeFi protocols, NFT marketplaces, and Web3 apps on the go.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col flex-auto w-30percent sm:w-full">
                                    <div class="flex flex-col gap-30 animation-element">
                                        <div class="max-w-full flex justify-center items-center text-40 text-primary border-primary mb-10">
                                            <svg class="w-1em h-1em" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewbox="0 0 512 512" fill="currentColor">
                                                <path class="cls-1" d="M298.7,341.3h-85.3v-85.3h85.3v85.3ZM512,214.3v297.7H0V214.3c0-19.8,9-38.2,24.6-50.4L216.6,13.6c23.2-18.2,55.7-18.2,78.9,0l192,150.3c15.6,12.2,24.6,30.6,24.6,50.4h0ZM341.3,213.3h-170.7v170.7h170.7v-170.7Z"/></path>
                                            </svg>
                                        </div>
                                        <div class="max-w-full text-center">
                                            <h3 class="text-20 mb-0/5em lqd-iconbox-heading text-primary">Seed Vault</h3>
                                            <h3
                                                class="lqd-text-reveal-el text-20 leading-25 text-yellow-100 m-0"
                                                data-split-text="true"
                                                data-split-options='{"type": "words, chars"}'
                                                data-parallax="true"
                                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 65%", "end": "bottom bottom", "scrub" : 3}'
                                                data-parallax-from='{"opacity" : 0.2}'
                                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                                            >
                                                Seamlessly onboard onto your favorite Up wallet and securely transact across dApps with ease.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="lqd-section how-it-works px-10" id="how-it-works">

                        <div class="container">
                            <div class="row h-full">
                                <div class="col col-12 p-0 min-h-100vh flex flex-row flex-wrap items-center self-stretch flex-grow-1 flex-shrink-0 module-top mb-30 lg:flex-col lg:justify-center">
                                    <div class="w-50percent flex flex-col p-10 overflow-hidden transition-bg rounded-30 flex-grow-1 flex-shrink-0 mb-30 lg:w-full">
                                        <div
                                            class="lqd-imggrp-single block relative max-w-full text-center"
                                            data-parallax="true"
                                            data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom top"}'
                                            data-parallax-from='{"y": "-120px", "z": "0px", "scaleX" : 1.2, "scaleY" : 1.2}'
                                            data-parallax-to='{"y": "0px", "z": "120px", "scaleX" : 1.1, "scaleY" : 1.1}'
                                        >
                                            <div class="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                                                <figure class="w-full relative" data-reveal="true" data-reveal-options='{"direction": "tb"}'>
                                                    <img class="rounded-30 w-560" width="1120" height="1320" src="assets/images/how-it-work/section-gif-01-bw.gif" alt="user insight" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="w-50percent flex flex-col gap-30 p-10 transition-bg text-center flex-grow-1 flex-shrink-0 lg:w-full"
                                        data-custom-animations="true"
                                        data-ca-options='{"animationTarget": ".animation-element:not([data-split-text]), .animation-element .split-inner .lqd-words", "duration" : 800, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.7, "scaleY" : 0.7, "rotationZ" : 2, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'
                                    >
                                        <div class="ld-fancy-heading relative flex items-center self-center bg-primary rounded-4 px-15 animation-element">
                                            <h6 class="ld-fh-element font-silkscreen relative m-0 text-12 font-medium uppercase leading-1em tracking-1 text-black py-5 pr-0 pl-5">Zero Knowledge</h6>
                                        </div>
                                        <div class="ld-fancy-heading relative max-w-full animation-element">
                                            <h2 class="ld-fh-element relative m-0 text-white" data-split-text="true" data-split-options='{"type": "chars, words"}'><span class="font-chakra-petch font-thin">/deMIN/</span> Device</h2>
                                        </div>
                                        <div class="max-w-full">
                                            <p
                                                class="lqd-text-reveal-el mt-0 mb-0 px-5percent text-34 leading-40 text-yellow-100 text-center animation-element"
                                                data-split-text="true"
                                                data-split-options='{"type": "words, chars"}'
                                                data-parallax="true"
                                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}'
                                                data-parallax-from='{"opacity" : 0.2}'
                                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                                            >
                                                Building DeMIN (Decentralized Mobile Infrastructure Networks) with the world’s most powerful Web3 smartphone: <span class="text-primary">Up Mobile</span>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="col col-12 p-0 min-h-100vh flex flex-row flex-wrap items-center self-stretch flex-grow-1 flex-shrink-0 lg:flex-col lg:justify-center"
                                    data-custom-animations="true"
                                    data-ca-options='{"animationTarget": ".animation-element, .animation-element .split-inner .lqd-words", "duration" : 800, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.7, "scaleY" : 0.7, "rotationZ" : 3, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'
                                >
                                    <div class="w-50percent flex flex-col gap-30 p-10 transition-bg text-center flex-grow-1 flex-shrink-0 lg:w-full">
                                        <div class="ld-fancy-heading relative flex items-center self-center bg-primary rounded-4 px-15 animation-element">
                                            <h6 class="ld-fh-element font-silkscreen relative m-0 text-12 font-medium uppercase leading-1em tracking-1 text-black py-5 pr-0 pl-5">Up Mobile dApps</h6>
                                        </div>
                                        <div class="ld-fancy-heading relative max-w-full animation-element">
                                            <h2 class="ld-fh-element relative m-0 text-white" data-split-text="true" data-split-options='{"type": "chars, words"}'><span class="font-chakra-petch font-thin">/Up-dApp/</span> Store</h2>
                                        </div>
                                        <div class="max-w-full">
                                            <p
                                                class="lqd-text-reveal-el mt-0 mb-0 px-5percent text-34 leading-40 text-yellow-100 text-center animation-element"
                                                data-split-text="true"
                                                data-split-options='{"type": "words, chars"}'
                                                data-parallax="true"
                                                data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}'
                                                data-parallax-from='{"opacity" : 0.2}'
                                                data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                                            >
                                                Up Mobile dApps in the palm of your hand, use all your favorite Up Mobile DeFi protocols, NFT marketplaces, and Web3 apps on the go.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="w-50percent flex flex-col p-10 overflow-hidden transition-bg rounded-30 flex-grow-1 flex-shrink-0 mb-30 lg:w-full lg:order-first">
                                        <div
                                            class="lqd-imggrp-single block relative max-w-full text-center"
                                            data-parallax="true"
                                            data-parallax-options='{"ease" :"linear", "start": "top bottom", "end": "bottom top"}'
                                            data-parallax-from='{"y": "-120px", "scaleX" : 1.1, "scaleY" : 1.1}'
                                            data-parallax-to='{"y": "120px", "scaleX" : 1.2, "scaleY" : 1.2}'
                                        >
                                            <div class="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                                                <figure class="w-full relative" data-reveal="true" data-reveal-options='{"direction": "tb"}'>
                                                    <img class="rounded-30 w-560" width="1120" height="1320" src="assets/images/how-it-work/section-gif-02-bw.gif" alt="api access" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="lqd-section carousel-button py-100"
                        data-custom-animations="true"
                        data-ca-options='{"animationTarget": "[data-lqd-flickity]> .flickity-viewport > .flickity-slider > .carousel-item > .carousel-item-inner", "duration" : 800, "delay" : 75, "ease": "expo.out", "direction": "random", "initValues": {"scaleX" : 0.8, "scaleY" : 0.8, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "opacity" : 1}}'
                    >
                        <div class="container-fluid p-0">
                            <div class="row m-0">
                                <div class="col col-12 p-0">
                                    <div class="carousel-container relative carousel-nav-shaped">
                                        <div
                                            class="carousel-items relative lqd-fade-sides"
                                            data-lqd-flickity='{"marquee": true, "percentPosition": false, "columnsAutoWidth": true, "marqueeTickerSpeed": "0.5", "pauseAutoPlayOnHover": false}'
                                        >
                                            <div class="flickity-viewport relative w-full overflow-hidden">
                                                <div class="flickity-slider flex w-full h-full relative items-center">
                                                    <div class="carousel-item flex flex-col justify-center has-one-child">
                                                        <div class="flex flex-row gap-30 whitespace-nowrap">
                                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                                <span
                                                                    data-text="Help me write a story"
                                                                    class="btn-txt"
                                                                    data-transition-delay="true"
                                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                                    data-split-text="true"
                                                                    data-split-options='{"type":  "chars, words"}'
                                                                >
                                                                    dApp Store
                                                                </span>
                                                                <span class="btn-icon text-1em text-primary mr-10">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                                        <path
                                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                                            transform="translate(6.434 12.674)"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                                <span
                                                                    data-text="Help me plan my trip"
                                                                    class="btn-txt"
                                                                    data-transition-delay="true"
                                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                                    data-split-text="true"
                                                                    data-split-options='{"type":  "chars, words"}'
                                                                >
                                                                    Seed Vault
                                                                </span>
                                                                <span class="btn-icon text-1em text-primary mr-10">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                                        <path
                                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                                            transform="translate(6.434 12.674)"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                                <span
                                                                    data-text="Find me a good restaurant"
                                                                    class="btn-txt"
                                                                    data-transition-delay="true"
                                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                                    data-split-text="true"
                                                                    data-split-options='{"type":  "chars, words"}'
                                                                >
                                                                    Build on SMS
                                                                </span>
                                                                <span class="btn-icon text-1em text-primary mr-10">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                                        <path
                                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                                            transform="translate(6.434 12.674)"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                                <span
                                                                    data-text="Help me get fit"
                                                                    class="btn-txt"
                                                                    data-transition-delay="true"
                                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                                    data-split-text="true"
                                                                    data-split-options='{"type":  "chars, words"}'
                                                                >
                                                                    A Premium Hardware Experience
                                                                </span>
                                                                <span class="btn-icon text-1em text-primary mr-10">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                                        <path
                                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                                            transform="translate(6.434 12.674)"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                                <span
                                                                    data-text="Write a Python Script"
                                                                    class="btn-txt"
                                                                    data-transition-delay="true"
                                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                                    data-split-text="true"
                                                                    data-split-options='{"type":  "chars, words"}'
                                                                >
                                                                    Mobile SDKs
                                                                </span>
                                                                <span class="btn-icon text-1em text-primary mr-10">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                                        <path
                                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                                            transform="translate(6.434 12.674)"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                                <span
                                                                    data-text="Create a 3 course menu"
                                                                    class="btn-txt"
                                                                    data-transition-delay="true"
                                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                                    data-split-text="true"
                                                                    data-split-options='{"type":  "chars, words"}'
                                                                >
                                                                    The Simplest
                                                                </span>
                                                                <span class="btn-icon text-1em text-primary mr-10">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                                        <path
                                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                                            transform="translate(6.434 12.674)"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="carousel-item flex flex-col justify-center has-one-child">
                                                        <div class="flex flex-row gap-30 whitespace-nowrap">
                                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                                <span
                                                                    data-text="Help me write a story"
                                                                    class="btn-txt"
                                                                    data-transition-delay="true"
                                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                                    data-split-text="true"
                                                                    data-split-options='{"type":  "chars, words"}'
                                                                >
                                                                    Onchain Mobile Apps
                                                                </span>
                                                                <span class="btn-icon text-1em text-primary mr-10">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                                        <path
                                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                                            transform="translate(6.434 12.674)"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                                <span
                                                                    data-text="Help me plan my trip"
                                                                    class="btn-txt"
                                                                    data-transition-delay="true"
                                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                                    data-split-text="true"
                                                                    data-split-options='{"type":  "chars, words"}'
                                                                >
                                                                    One Mobile-first Toolkit
                                                                </span>
                                                                <span class="btn-icon text-1em text-primary mr-10">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                                        <path
                                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                                            transform="translate(6.434 12.674)"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                                <span
                                                                    data-text="Find me a good restaurant"
                                                                    class="btn-txt"
                                                                    data-transition-delay="true"
                                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                                    data-split-text="true"
                                                                    data-split-options='{"type":  "chars, words"}'
                                                                >
                                                                    Instant Embedded Wallets
                                                                </span>
                                                                <span class="btn-icon text-1em text-primary mr-10">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                                        <path
                                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                                            transform="translate(6.434 12.674)"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                                <span
                                                                    data-text="Help me get fit"
                                                                    class="btn-txt"
                                                                    data-transition-delay="true"
                                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                                    data-split-text="true"
                                                                    data-split-options='{"type":  "chars, words"}'
                                                                >
                                                                    Gasless Transactions
                                                                </span>
                                                                <span class="btn-icon text-1em text-primary mr-10">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                                        <path
                                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                                            transform="translate(6.434 12.674)"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                                <span
                                                                    data-text="Write a Python Script"
                                                                    class="btn-txt"
                                                                    data-transition-delay="true"
                                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                                    data-split-text="true"
                                                                    data-split-options='{"type":  "chars, words"}'
                                                                >
                                                                    Your App Onchain
                                                                </span>
                                                                <span class="btn-icon text-1em text-primary mr-10">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                                        <path
                                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                                            transform="translate(6.434 12.674)"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                            <a class="btn btn-solid btn-sm btn-hover-txt-liquid-y btn-icon-left bg-white-5 shadow-sm rounded-10 text-white text-15">
                                                                <span
                                                                    data-text="Create a 3 course menu"
                                                                    class="btn-txt"
                                                                    data-transition-delay="true"
                                                                    data-delay-options='{"elements":  ".lqd-chars", "delayType":  "animation", "startDelay":  0, "delayBetween":  32.5}'
                                                                    data-split-text="true"
                                                                    data-split-options='{"type":  "chars, words"}'
                                                                >
                                                                    Progressive Wallets
                                                                </span>
                                                                <span class="btn-icon text-1em text-primary mr-10">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.885" height="12.894" viewbox="0 0 12.885 12.894">
                                                                        <path
                                                                            d="M6.451-6.047A25.07,25.07,0,0,0,3.916-4.86,6.916,6.916,0,0,0,2.443-3.814,6.718,6.718,0,0,0,1.4-2.355,25.1,25.1,0,0,0,.193.22h-.36A26.15,26.15,0,0,0-1.38-2.355,6.924,6.924,0,0,0-2.417-3.814,6.916,6.916,0,0,0-3.889-4.86,24.748,24.748,0,0,0-6.434-6.047v-.36A24.44,24.44,0,0,0-3.88-7.594,6.687,6.687,0,0,0-2.417-8.64,6.924,6.924,0,0,0-1.38-10.1,26.15,26.15,0,0,0-.167-12.674h.36A25.1,25.1,0,0,0,1.4-10.1,6.718,6.718,0,0,0,2.443-8.64,6.468,6.468,0,0,0,3.9-7.594,24.44,24.44,0,0,0,6.451-6.407Z"
                                                                            transform="translate(6.434 12.674)"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="lqd-section float-text pt-120 pb-400 bg-center bg-no-repeat bg-cover transition-bg" style="background-image: url(assets/images/float-text/bg-h.png);">
                        <div class="container">
                            <div class="row gap-120">
                                <div
                                    class="col col-12 p-0"
                                    data-parallax="true"
                                    data-parallax-options='{"ease" :"linear", "start": "top bottom", "end": "bottom+=0px top"}'
                                    data-parallax-from='{"y": "20px", "opacity" : 0.8}'
                                    data-parallax-to='{"y": "0px", "opacity" : 1}'
                                >
                                    <div class="elementor-widget-container">
                                        <h3
                                            class="lqd-text-reveal-el mt-0 mb-0 text-yellow-100 text-center"
                                            data-split-text="true"
                                            data-split-options='{"type": "words, chars"}'
                                            data-parallax="true"
                                            data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}'
                                            data-parallax-from='{"opacity" : 0.2}'
                                            data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                                        >
                                           The World’s First Mobile Blockchain Co-developed by Up Network & Movement.
                                        </h3>
                                    </div>
                                </div>
                                <div
                                    class="col col-12 p-0"
                                    data-parallax="true"
                                    data-parallax-options='{"ease" :"linear", "start": "top bottom", "end": "bottom+=0px top"}'
                                    data-parallax-from='{"y": "120px", "opacity" : 0.6}'
                                    data-parallax-to='{"y": "0px", "opacity" : 1}'
                                >
                                    <div class="elementor-widget-container">
                                        <h3
                                            class="lqd-text-reveal-el mt-0 mb-0 text-yellow-100 text-center"
                                            data-split-text="true"
                                            data-split-options='{"type": "words, chars"}'
                                            data-parallax="true"
                                            data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}'
                                            data-parallax-from='{"opacity" : 0.2}'
                                            data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                                        >
                                            A Web3 abstraction layer that connects mobile devices and blockchains.
                                        </h3>
                                    </div>
                                </div>
                                <div
                                    class="col col-12 p-0"
                                    data-parallax="true"
                                    data-parallax-options='{"ease" :"linear", "start": "top bottom", "end": "bottom+=0px top"}'
                                    data-parallax-from='{"y": "300px", "opacity" : 0.4}'
                                    data-parallax-to='{"y": "0px", "opacity" : 1}'
                                >
                                    <div class="elementor-widget-container">
                                        <h3
                                            class="lqd-text-reveal-el mt-0 mb-0 text-yellow-100 text-center"
                                            data-split-text="true"
                                            data-split-options='{"type": "words, chars"}'
                                            data-parallax="true"
                                            data-parallax-options='{"parallaxTargets": ".lqd-chars, figure", "start": "top 70%", "end": "bottom bottom", "scrub" : 3}'
                                            data-parallax-from='{"opacity" : 0.2}'
                                            data-parallax-to='{"opacity" : 1, "stagger": {"from": "start", "each" : 1}}'
                                        >
                                            Simplifying blockchain technology for mobile users and enhancing how mobile devices leverage blockchain features.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="lqd-section testimonial bg-no-repeat transition-border py-100"
                        style="background-image: url(assets/images/testimonial/testimonial-bg2.gif);"
                        data-custom-animations="true"
                        data-ca-options='{"animationTarget": ".animation-element, .animation-element .split-inner .lqd-chars", "duration" : 800, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.8, "scaleY" : 0.8, "rotationZ" : 3, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'
                    >
                        <div class="container">
                            <div class="row justify-center transition-bg">
                                <div class="col col-12 col-lg-9 flex flex-col gap-40">
                                    <div class="ld-fancy-heading relative max-w-full text-center animation-element">
                                        <h2 class="ld-fh-element relative m-0 text-white" data-split-text="true" data-split-options='{"type": "chars, words"}'><span class="font-chakra-petch font-thin">Support </span>for UP Network</h2>
                                    </div>
                                    <div class="carousel-container relative carousel-nav-shaped carousel-dots-inside carousel-dots-mobile-inside carousel-dots-mobile-center transition-all animation-element">
                                        <div
                                            class="carousel-items relative -mr-30 -ml-30"
                                            data-lqd-flickity='{"pageDots": true, "dotsIndicator": "numbers", "numbersStyle": "circle", "cellAlign": "left", "groupCells": false, "prevNextButtons": false, "dotsAppendTo": "self"}'
                                        >
                                            <div class="flickity-viewport relative w-full overflow-hidden">
                                                <div class="flickity-slider flex w-full h-full relative items-start text-center">
                                                    <div class="carousel-item flex flex-col justify-center px-30 text-24 leading-30">
                                                        <p class="mb-1/5em">Web3 is about creating a decentralized internet, free from censorship and control by a few powerful entities.</p>
                                                        <div class="lqd-testi-info flex flex-col flex-wrap justify-between">
                                                            <div class="lqd-testi-details flex items-center justify-center">
                                                                <figure class="lqd-testi-avatar rounded-full overflow-hidden">
                                                                    <img class="rounded-full" src="./assets/images/team/team-avatar-01.png" width="58px" alt="team">
                                                                </figure>
                                                                <div class="lqd-testi-np text-start pl-1/5em">
                                                                    <h3 class="uppercase tracking-0/1em font-bold text-primary">Jason Dong</h3>
                                                                    <h4>Partner & President of Hywood Capital</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="carousel-item flex flex-col justify-center px-30 text-24 leading-30">
                                                        <p class="mb-1/5em">Web3 is not just a technological shift, it's a shift in consciousness, where we prioritize ethics and social responsibility.</p>
                                                        <div class="lqd-testi-info flex flex-col flex-wrap justify-between">
                                                            <div class="lqd-testi-details flex items-center justify-center">
                                                                <figure class="lqd-testi-avatar rounded-full overflow-hidden">
                                                                    <img class="rounded-full" src="./assets/images/team/team-avatar-01.png" width="58px" alt="team">
                                                                </figure>
                                                                <div class="lqd-testi-np text-start pl-1/5em">
                                                                    <h3 class="uppercase tracking-0/1em font-bold text-primary">Cordell Broadus</h3>
                                                                    <h4>Snoop Dogg's Son</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="carousel-item flex flex-col justify-center px-30 text-24 leading-30">
                                                        <p class="mb-1/5em">The future of the internet is Web3, where users own their data, and can control who accesses it.</p>
                                                        <div class="lqd-testi-info flex flex-col flex-wrap justify-between">
                                                            <div class="lqd-testi-details flex items-center justify-center">
                                                                <figure class="lqd-testi-avatar rounded-full overflow-hidden">
                                                                    <img class="rounded-full" src="./assets/images/team/team-avatar-01.png" width="58px" alt="team">
                                                                </figure>
                                                                <div class="lqd-testi-np text-start pl-1/5em">
                                                                    <h3 class="uppercase tracking-0/1em font-bold text-primary">Tyrone Lynch</h3>
                                                                    <h4>Founder of Metadomo</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="carousel-item flex flex-col justify-center px-30 text-24 leading-30">
                                                        <p class="mb-1/5em">Web3 is about creating a new digital world, where users have control over their online identity and assets.</p>
                                                        <div class="lqd-testi-info flex flex-col flex-wrap justify-between">
                                                            <div class="lqd-testi-details flex items-center justify-center">
                                                                <figure class="lqd-testi-avatar rounded-full overflow-hidden">
                                                                    <img class="rounded-full" src="./assets/images/team/team-avatar-01.png" width="58px" alt="team">
                                                                </figure>
                                                                <div class="lqd-testi-np text-start pl-1/5em">
                                                                    <h3 class="uppercase tracking-0/1em font-bold text-primary">Dick Fong</h3>
                                                                    <h4>Ex McKinsey Partner</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-12 pt-60 flex-grow-1 flex-shrink-0 module-svg">
                                    <div class="carousel-container relative carousel-nav-shaped">
                                        <div class="carousel-items relative lqd-fade-sides" data-lqd-flickity='{"marquee": true, "marqueeTickerSpeed": "0.2", "pauseAutoPlayOnHover": false}'>
                                            <div class="flickity-viewport relative w-full overflow-hidden">
                                                <div class="flickity-slider flex w-full h-full relative items-start">
                                                    <div class="carousel-item flex flex-column items-center justify-center has-one-child w-full flex-auto">
                                                        <div class="carousel-item-inner relative w-full">
                                                            <div class="carousel-item-content relative max-w-full flex-row mx-auto p-10">
                                                                <div class="flex justify-center text-primary">
                                                                    <svg width="60" height="60" aria-hidden="true" viewbox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M165 144.7l-43.3 9.2-.2 142.4c0 26.3 19.8 43.3 46.1 43.3 14.6 0 25.3-2.7 31.2-5.9v-33.8c-5.7 2.3-33.7 10.5-33.7-15.7V221h33.7v-37.8h-33.7zm89.1 51.6l-2.7-13.1H213v153.2h44.3V233.3c10.5-13.8 28.2-11.1 33.9-9.3v-40.8c-6-2.1-26.7-6-37.1 13.1zm92.3-72.3l-44.6 9.5v36.2l44.6-9.5zM44.9 228.3c0-6.9 5.8-9.6 15.1-9.7 13.5 0 30.7 4.1 44.2 11.4v-41.8c-14.7-5.8-29.4-8.1-44.1-8.1-36 0-60 18.8-60 50.2 0 49.2 67.5 41.2 67.5 62.4 0 8.2-7.1 10.9-17 10.9-14.7 0-33.7-6.1-48.6-14.2v40c16.5 7.1 33.2 10.1 48.5 10.1 36.9 0 62.3-15.8 62.3-47.8 0-52.9-67.9-43.4-67.9-63.4zM640 261.6c0-45.5-22-81.4-64.2-81.4s-67.9 35.9-67.9 81.1c0 53.5 30.3 78.2 73.5 78.2 21.2 0 37.1-4.8 49.2-11.5v-33.4c-12.1 6.1-26 9.8-43.6 9.8-17.3 0-32.5-6.1-34.5-26.9h86.9c.2-2.3.6-11.6.6-15.9zm-87.9-16.8c0-20 12.3-28.4 23.4-28.4 10.9 0 22.5 8.4 22.5 28.4zm-112.9-64.6c-17.4 0-28.6 8.2-34.8 13.9l-2.3-11H363v204.8l44.4-9.4.1-50.2c6.4 4.7 15.9 11.2 31.4 11.2 31.8 0 60.8-23.2 60.8-79.6.1-51.6-29.3-79.7-60.5-79.7zm-10.6 122.5c-10.4 0-16.6-3.8-20.9-8.4l-.3-66c4.6-5.1 11-8.8 21.2-8.8 16.2 0 27.4 18.2 27.4 41.4.1 23.9-10.9 41.8-27.4 41.8zm-126.7 33.7h44.6V183.2h-44.6z"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="flex justify-center text-primary">
                                                                    <svg width="40" height="40" aria-hidden="true" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="flex justify-center text-primary">
                                                                    <svg width="40" height="40" aria-hidden="true" viewbox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M400 480H48c-26.4 0-48-21.6-48-48V80c0-26.4 21.6-48 48-48h352c26.4 0 48 21.6 48 48v352c0 26.4-21.6 48-48 48zM199.6 178.5c0-30.7-17.6-45.1-39.7-45.1-25.8 0-40 19.8-40 44.5v154.8c0 25.8 13.7 45.6 40.5 45.6 21.5 0 39.2-14 39.2-45.6v-41.8l60.6 75.7c12.3 14.9 39 16.8 55.8 0 14.6-15.1 14.8-36.8 4-50.4l-49.1-62.8 40.5-58.7c9.4-13.5 9.5-34.5-5.6-49.1-16.4-15.9-44.6-17.3-61.4 7l-44.8 64.7v-38.8z"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="flex justify-center text-primary">
                                                                    <svg width="40" height="40" aria-hidden="true" viewbox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="flex justify-center text-primary">
                                                                    <svg width="40" height="40" aria-hidden="true" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M81.7 172.3H0v174.4h132.7V96h-51v76.3zm0 133.4H50.9v-92.3h30.8v92.3zm297.2-133.4v174.4h81.8v28.5h-81.8V416H512V172.3H378.9zm81.8 133.4h-30.8v-92.3h30.8v92.3zm-235.6 41h82.1v28.5h-82.1V416h133.3V172.3H225.1v174.4zm51.2-133.3h30.8v92.3h-30.8v-92.3zM153.3 96h51.3v51h-51.3V96zm0 76.3h51.3v174.4h-51.3V172.3z"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="flex justify-center text-primary">
                                                                    <svg width="60" height="60" aria-hidden="true" viewbox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M606 189.5l-54.8 109.9-54.9-109.9h-37.5l10.9 20.6c-11.5-19-35.9-26-63.3-26-31.8 0-67.9 8.7-71.5 43.1h33.7c1.4-13.8 15.7-21.8 35-21.8 26 0 41 9.6 41 33v3.4c-12.7 0-28 .1-41.7.4-42.4.9-69.6 10-76.7 34.4 1-5.2 1.5-10.6 1.5-16.2 0-52.1-39.7-76.2-75.4-76.2-21.3 0-43 5.5-58.7 24.2v-80.6h-32.1v169.5c0 10.3-.6 22.9-1.1 33.1h31.5c.7-6.3 1.1-12.9 1.1-19.5 13.6 16.6 35.4 24.9 58.7 24.9 36.9 0 64.9-21.9 73.3-54.2-.5 2.8-.7 5.8-.7 9 0 24.1 21.1 45 60.6 45 26.6 0 45.8-5.7 61.9-25.5 0 6.6.3 13.3 1.1 20.2h29.8c-.7-8.2-1-17.5-1-26.8v-65.6c0-9.3-1.7-17.2-4.8-23.8l61.5 116.1-28.5 54.1h35.9L640 189.5zM243.7 313.8c-29.6 0-50.2-21.5-50.2-53.8 0-32.4 20.6-53.8 50.2-53.8 29.8 0 50.2 21.4 50.2 53.8 0 32.3-20.4 53.8-50.2 53.8zm200.9-47.3c0 30-17.9 48.4-51.6 48.4-25.1 0-35-13.4-35-25.8 0-19.1 18.1-24.4 47.2-25.3 13.1-.5 27.6-.6 39.4-.6zm-411.9 1.6h128.8v-8.5c0-51.7-33.1-75.4-78.4-75.4-56.8 0-83 30.8-83 77.6 0 42.5 25.3 74 82.5 74 31.4 0 68-11.7 74.4-46.1h-33.1c-12 35.8-87.7 36.7-91.2-21.6zm95-21.4H33.3c6.9-56.6 92.1-54.7 94.4 0z"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="flex justify-center text-primary">
                                                                    <svg width="40" height="40" aria-hidden="true" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M0 81.1h77.8v208.7c0 33.1 15 52.8 27.2 61-12.7 11.1-51.2 20.9-80.2-2.8C7.8 334 0 310.7 0 289V81.1zm485.9 173.5v-22h23.8v-76.8h-26.1c-10.1-46.3-51.2-80.7-100.3-80.7-56.6 0-102.7 46-102.7 102.7V357c16 2.3 35.4-.3 51.7-14 17.1-14 24.8-37.2 24.8-59v-6.7h38.8v-76.8h-38.8v-23.3c0-34.6 52.2-34.6 52.2 0v77.1c0 56.6 46 102.7 102.7 102.7v-76.5c-14.5 0-26.1-11.7-26.1-25.9zm-294.3-99v113c0 15.4-23.8 15.4-23.8 0v-113H91v132.7c0 23.8 8 54 45 63.9 37 9.8 58.2-10.6 58.2-10.6-2.1 13.4-14.5 23.3-34.9 25.3-15.5 1.6-35.2-3.6-45-7.8v70.3c25.1 7.5 51.5 9.8 77.6 4.7 47.1-9.1 76.8-48.4 76.8-100.8V155.1h-77.1v.5z"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="carousel-item flex flex-column items-center justify-center has-one-child w-full flex-auto">
                                                        <div class="carousel-item-inner relative w-full">
                                                            <div class="carousel-item-content relative max-w-full flex-row mx-auto p-10">
                                                                <div class="flex justify-center text-primary">
                                                                    <svg width="60" height="60" aria-hidden="true" viewbox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M165 144.7l-43.3 9.2-.2 142.4c0 26.3 19.8 43.3 46.1 43.3 14.6 0 25.3-2.7 31.2-5.9v-33.8c-5.7 2.3-33.7 10.5-33.7-15.7V221h33.7v-37.8h-33.7zm89.1 51.6l-2.7-13.1H213v153.2h44.3V233.3c10.5-13.8 28.2-11.1 33.9-9.3v-40.8c-6-2.1-26.7-6-37.1 13.1zm92.3-72.3l-44.6 9.5v36.2l44.6-9.5zM44.9 228.3c0-6.9 5.8-9.6 15.1-9.7 13.5 0 30.7 4.1 44.2 11.4v-41.8c-14.7-5.8-29.4-8.1-44.1-8.1-36 0-60 18.8-60 50.2 0 49.2 67.5 41.2 67.5 62.4 0 8.2-7.1 10.9-17 10.9-14.7 0-33.7-6.1-48.6-14.2v40c16.5 7.1 33.2 10.1 48.5 10.1 36.9 0 62.3-15.8 62.3-47.8 0-52.9-67.9-43.4-67.9-63.4zM640 261.6c0-45.5-22-81.4-64.2-81.4s-67.9 35.9-67.9 81.1c0 53.5 30.3 78.2 73.5 78.2 21.2 0 37.1-4.8 49.2-11.5v-33.4c-12.1 6.1-26 9.8-43.6 9.8-17.3 0-32.5-6.1-34.5-26.9h86.9c.2-2.3.6-11.6.6-15.9zm-87.9-16.8c0-20 12.3-28.4 23.4-28.4 10.9 0 22.5 8.4 22.5 28.4zm-112.9-64.6c-17.4 0-28.6 8.2-34.8 13.9l-2.3-11H363v204.8l44.4-9.4.1-50.2c6.4 4.7 15.9 11.2 31.4 11.2 31.8 0 60.8-23.2 60.8-79.6.1-51.6-29.3-79.7-60.5-79.7zm-10.6 122.5c-10.4 0-16.6-3.8-20.9-8.4l-.3-66c4.6-5.1 11-8.8 21.2-8.8 16.2 0 27.4 18.2 27.4 41.4.1 23.9-10.9 41.8-27.4 41.8zm-126.7 33.7h44.6V183.2h-44.6z"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="flex justify-center text-primary">
                                                                    <svg width="40" height="40" aria-hidden="true" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="flex justify-center text-primary">
                                                                    <svg width="40" height="40" aria-hidden="true" viewbox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M400 480H48c-26.4 0-48-21.6-48-48V80c0-26.4 21.6-48 48-48h352c26.4 0 48 21.6 48 48v352c0 26.4-21.6 48-48 48zM199.6 178.5c0-30.7-17.6-45.1-39.7-45.1-25.8 0-40 19.8-40 44.5v154.8c0 25.8 13.7 45.6 40.5 45.6 21.5 0 39.2-14 39.2-45.6v-41.8l60.6 75.7c12.3 14.9 39 16.8 55.8 0 14.6-15.1 14.8-36.8 4-50.4l-49.1-62.8 40.5-58.7c9.4-13.5 9.5-34.5-5.6-49.1-16.4-15.9-44.6-17.3-61.4 7l-44.8 64.7v-38.8z"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="flex justify-center text-primary">
                                                                    <svg width="40" height="40" aria-hidden="true" viewbox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="flex justify-center text-primary">
                                                                    <svg width="40" height="40" aria-hidden="true" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M81.7 172.3H0v174.4h132.7V96h-51v76.3zm0 133.4H50.9v-92.3h30.8v92.3zm297.2-133.4v174.4h81.8v28.5h-81.8V416H512V172.3H378.9zm81.8 133.4h-30.8v-92.3h30.8v92.3zm-235.6 41h82.1v28.5h-82.1V416h133.3V172.3H225.1v174.4zm51.2-133.3h30.8v92.3h-30.8v-92.3zM153.3 96h51.3v51h-51.3V96zm0 76.3h51.3v174.4h-51.3V172.3z"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="flex justify-center text-primary">
                                                                    <svg width="60" height="60" aria-hidden="true" viewbox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M606 189.5l-54.8 109.9-54.9-109.9h-37.5l10.9 20.6c-11.5-19-35.9-26-63.3-26-31.8 0-67.9 8.7-71.5 43.1h33.7c1.4-13.8 15.7-21.8 35-21.8 26 0 41 9.6 41 33v3.4c-12.7 0-28 .1-41.7.4-42.4.9-69.6 10-76.7 34.4 1-5.2 1.5-10.6 1.5-16.2 0-52.1-39.7-76.2-75.4-76.2-21.3 0-43 5.5-58.7 24.2v-80.6h-32.1v169.5c0 10.3-.6 22.9-1.1 33.1h31.5c.7-6.3 1.1-12.9 1.1-19.5 13.6 16.6 35.4 24.9 58.7 24.9 36.9 0 64.9-21.9 73.3-54.2-.5 2.8-.7 5.8-.7 9 0 24.1 21.1 45 60.6 45 26.6 0 45.8-5.7 61.9-25.5 0 6.6.3 13.3 1.1 20.2h29.8c-.7-8.2-1-17.5-1-26.8v-65.6c0-9.3-1.7-17.2-4.8-23.8l61.5 116.1-28.5 54.1h35.9L640 189.5zM243.7 313.8c-29.6 0-50.2-21.5-50.2-53.8 0-32.4 20.6-53.8 50.2-53.8 29.8 0 50.2 21.4 50.2 53.8 0 32.3-20.4 53.8-50.2 53.8zm200.9-47.3c0 30-17.9 48.4-51.6 48.4-25.1 0-35-13.4-35-25.8 0-19.1 18.1-24.4 47.2-25.3 13.1-.5 27.6-.6 39.4-.6zm-411.9 1.6h128.8v-8.5c0-51.7-33.1-75.4-78.4-75.4-56.8 0-83 30.8-83 77.6 0 42.5 25.3 74 82.5 74 31.4 0 68-11.7 74.4-46.1h-33.1c-12 35.8-87.7 36.7-91.2-21.6zm95-21.4H33.3c6.9-56.6 92.1-54.7 94.4 0z"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="flex justify-center text-primary">
                                                                    <svg width="40" height="40" aria-hidden="true" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M0 81.1h77.8v208.7c0 33.1 15 52.8 27.2 61-12.7 11.1-51.2 20.9-80.2-2.8C7.8 334 0 310.7 0 289V81.1zm485.9 173.5v-22h23.8v-76.8h-26.1c-10.1-46.3-51.2-80.7-100.3-80.7-56.6 0-102.7 46-102.7 102.7V357c16 2.3 35.4-.3 51.7-14 17.1-14 24.8-37.2 24.8-59v-6.7h38.8v-76.8h-38.8v-23.3c0-34.6 52.2-34.6 52.2 0v77.1c0 56.6 46 102.7 102.7 102.7v-76.5c-14.5 0-26.1-11.7-26.1-25.9zm-294.3-99v113c0 15.4-23.8 15.4-23.8 0v-113H91v132.7c0 23.8 8 54 45 63.9 37 9.8 58.2-10.6 58.2-10.6-2.1 13.4-14.5 23.3-34.9 25.3-15.5 1.6-35.2-3.6-45-7.8v70.3c25.1 7.5 51.5 9.8 77.6 4.7 47.1-9.1 76.8-48.4 76.8-100.8V155.1h-77.1v.5z"
                                                                            fill="currentColor"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Start Text LG -->
                    <section class="lqd-section text-lg py-90">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col col-12">
                                    <div class="whitespace-nowrap ld-fancy-heading relative" data-parallax="true" data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom+=0px top"}' data-parallax-from='{"x": "1vw"}' data-parallax-to='{"x": "-20vw"}'>
                                        <h2 class="ld-fh-element mb-0/5em inline-block relative font-ultrabold text-white" style="font-size: 320px;">{Latest News}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- End Text LG -->


                    <!-- Start Blog -->
                    <section class="lqd-section blog py-90 bg-transparent transition-all" id="news" style="background-image: linear-gradient(180deg, #000 0%, #000 100%);" data-custom-animations="true" data-ca-options='{"animationTarget": ".animation-element", "ease": "power4.out", "initValues": {"y": "35px", "opacity" : 0} , "animations": {"y": "0px", "opacity" : 1}}'>
                        <div class="container">
                            <div class="row items-center">
                                <div class="col col-12 col-md-6 animation-element">
                                    <div class="mb-15 ld-fancy-heading relative">
                                        <h6 class="ld-fh-element m-0 inline-block font-silkscreen relative label text-10 tracking-1 uppercase font-normal text-white bg-white-10  trackink-1px py-5 px-15 rounded-100">Latest Event</h6>
                                    </div>
                                    <div class="ld-fancy-heading relative">
                                        <h2 class="ld-fh-element mb-0/5em inline-block relative text-40 text-white font-bold">We’re Showing Up.</h2>
                                    </div>
                                </div>
                                <div class="col col-12 col-md-6 animation-element">
                                    <div class="ld-fancy-heading relative">
                                        <p class="ld-fh-element mb-0/5em inline-block relative leading-1/6em text-18 text-gray-500">Stay updated on our latest activities and witness our growth and progress together!</p>
                                    </div>
                                </div>
                                <div class="col col-12 animation-element">
                                    <div class="flex flex-wrap -mr-30 -ml-30 module-blog">
                                        <div class="w-33percent flex px-30 mb-30 md:w-50percent sm:w-full module-col">
                                            <article class="lqd-lp relative lqd-lp-style-6 lqd-lp-style-6-alt lqd-lp-hover-img-zoom lqd-lp-hover-img-zoom-out lqd-lp-animate-onhover rounded-10 overflow-hidden text-start post-5561 post type-post status-publish format-standard has-post-thumbnail hentry category-business category-culture tag-beauty tag-travel hover:inner-text-primary">
                                                <div class="lqd-lp-img overflow-hidden">
                                                    <figure>
                                                        <img class="w-full" width="640" height="364" src="./assets/images/blog/news-gif-01.gif" alt="5 reasons to purchase desktop computers">
                                                    </figure>
                                                    <div class="lqd-lp-meta uppercase font-bold relative z-3">
                                                        <span class="screen-reader-text">Tags </span>
                                                        <ul class="lqd-lp-cat lqd-lp-cat-shaped lqd-lp-cat-solid reset-ul inline-ul font-bold uppercase tracking-0/1em">
                                                            <li><a class="rounded-full" href="#" rel="category">Token 2049</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <header class="lqd-lp-header pt-1/5em px-1em">
                                                    <div class="lqd-lp-meta lqd-lp-meta-dot-between flex flex-wrap items-center">
                                                        <div class="lqd-lp-author relative z-3">
                                                            <div class="lqd-lp-author-info">
                                                                <h3 class="mt-0 mb-0">
                                                                    <a href="#">Philip Reyes</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <time class="lqd-lp-date" datetime="2021-06-02T13:40:12+00:00">1 year ago</time>
                                                    </div>
                                                    <h2 class="entry-title lqd-lp-title mt-0/5em mb-0 h5 text-black font-bold">5 reasons to purchase desktop computers</h2>
                                                </header>
                                                <div class="lqd-lp-excerpt pt-1em pb-1/5em px-1em">
                                                    <p class="text-14 text-black-40">Hustle and Cashflow is a blog that aims to educate millennials on personal finance. Hustle and Cashflow is a blog that aims to educate millennials on personal finance.</p>
                                                </div>
                                            </article>
                                        </div>
                                        <div class="w-33percent flex px-30 mb-30 md:w-50percent sm:w-full module-col">
                                            <article class="lqd-lp relative lqd-lp-style-6 lqd-lp-style-6-alt lqd-lp-hover-img-zoom lqd-lp-hover-img-zoom-out lqd-lp-animate-onhover rounded-10 overflow-hidden text-start post-5561 post type-post status-publish format-standard has-post-thumbnail hentry category-business category-culture tag-beauty tag-travel hover:inner-text-primary">
                                                <div class="lqd-lp-img overflow-hidden">
                                                    <figure>
                                                        <img class="w-full" width="640" height="364" src="./assets/images/blog/news-gif-02.gif" alt="5 reasons to purchase desktop computers">
                                                    </figure>
                                                    <div class="lqd-lp-meta uppercase font-bold relative z-3">
                                                        <span class="screen-reader-text">Tags </span>
                                                        <ul class="lqd-lp-cat lqd-lp-cat-shaped lqd-lp-cat-solid reset-ul inline-ul font-bold uppercase tracking-0/1em">
                                                            <li><a class="rounded-full" href="#" rel="category">Token 2049</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <header class="lqd-lp-header pt-1/5em px-1em">
                                                    <div class="lqd-lp-meta lqd-lp-meta-dot-between flex flex-wrap items-center">
                                                        <div class="lqd-lp-author relative z-3">
                                                            <div class="lqd-lp-author-info">
                                                                <h3 class="mt-0 mb-0">
                                                                    <a href="#">Philip Reyes</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <time class="lqd-lp-date" datetime="2021-06-02T13:40:12+00:00">1 year ago</time>
                                                    </div>
                                                    <h2 class="entry-title lqd-lp-title mt-0/5em mb-0 h5 text-black font-bold">5 reasons to purchase desktop computers</h2>
                                                </header>
                                                <div class="lqd-lp-excerpt pt-1em pb-1/5em px-1em">
                                                    <p class="text-14 text-black-40">Hustle and Cashflow is a blog that aims to educate millennials on personal finance. Hustle and Cashflow is a blog that aims to educate millennials on personal finance.</p>
                                                </div>
                                            </article>
                                        </div>
                                        <div class="w-33percent flex px-30 mb-30 md:w-50percent sm:w-full module-col">
                                            <article class="lqd-lp relative lqd-lp-style-6 lqd-lp-style-6-alt lqd-lp-hover-img-zoom lqd-lp-hover-img-zoom-out lqd-lp-animate-onhover rounded-10 overflow-hidden text-start post-5561 post type-post status-publish format-standard has-post-thumbnail hentry category-business category-culture tag-beauty tag-travel hover:inner-text-primary">
                                                <div class="lqd-lp-img overflow-hidden">
                                                    <figure>
                                                        <img class="w-full" width="640" height="364" src="./assets/images/blog/news-gif-03.gif" alt="5 reasons to purchase desktop computers">
                                                    </figure>
                                                    <div class="lqd-lp-meta uppercase font-bold relative z-3">
                                                        <span class="screen-reader-text">Tags </span>
                                                        <ul class="lqd-lp-cat lqd-lp-cat-shaped lqd-lp-cat-solid reset-ul inline-ul font-bold uppercase tracking-0/1em">
                                                            <li><a class="rounded-full" href="#" rel="category">Token 2049</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <header class="lqd-lp-header pt-1/5em px-1em">
                                                    <div class="lqd-lp-meta lqd-lp-meta-dot-between flex flex-wrap items-center">
                                                        <div class="lqd-lp-author relative z-3">
                                                            <div class="lqd-lp-author-info">
                                                                <h3 class="mt-0 mb-0">
                                                                    <a href="#">Philip Reyes</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <time class="lqd-lp-date" datetime="2021-06-02T13:40:12+00:00">1 year ago</time>
                                                    </div>
                                                    <h2 class="entry-title lqd-lp-title mt-0/5em mb-0 h5 text-black font-bold">5 reasons to purchase desktop computers</h2>
                                                </header>
                                                <div class="lqd-lp-excerpt pt-1em pb-1/5em px-1em">
                                                    <p class="text-14 text-black-40">Hustle and Cashflow is a blog that aims to educate millennials on personal finance. Hustle and Cashflow is a blog that aims to educate millennials on personal finance.</p>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-12 text-center">
                                    <a href="#" class="btn btn-naked btn-icon-right btn-icon-circle btn-icon-custom-size btn-icon-solid btn-icon-ripple text-white" target="_blank">
                                        <span class="btn-txt" data-text="See more events">More Events</span>
                                        <span class="btn-icon w-30 h-30 text-white bg-white-10">
                                            <i aria-hidden="true" class="lqd-icn-ess icon-ion-ios-add"></i>
                                        </span>
                                    </a>
                                </div>

                                <div class="col col-12 mt-5 p-30">
                                    <span class="divider w-full flex border-top border-white-20"></span>
                                </div>

                                <div class="col col-12 col-md-6 animation-element">
                                    <div class="mb-15 ld-fancy-heading relative">
                                        <h6 class="ld-fh-element m-0 inline-block font-silkscreen relative label text-10 tracking-1 uppercase font-normal text-white bg-white-10  trackink-1px py-5 px-15 rounded-100">Latest News</h6>
                                    </div>
                                    <div class="ld-fancy-heading relative">
                                        <h2 class="ld-fh-element mb-0/5em inline-block relative text-40 text-white font-bold">Up In The Press.</h2>
                                    </div>
                                </div>
                                <div class="col col-12 col-md-6 animation-element">
                                    <div class="ld-fancy-heading relative">
                                        <p class="ld-fh-element mb-0/5em inline-block relative leading-1/6em text-18 text-gray-500">The latest stories of Up Network updates, community, announcements and sneak peeks.</p>
                                    </div>
                                </div>
                                <div class="col col-12 animation-element">
                                    <div class="flex flex-wrap -mr-30 -ml-30 module-blog">
                                        <div class="w-33percent flex px-30 mb-30 md:w-50percent sm:w-full module-col">
                                            <article class="lqd-lp relative lqd-lp-style-6 lqd-lp-style-6-alt lqd-lp-hover-img-zoom lqd-lp-hover-img-zoom-out lqd-lp-animate-onhover rounded-10 overflow-hidden text-start post-5561 post type-post status-publish format-standard has-post-thumbnail hentry category-business category-culture tag-beauty tag-travel hover:inner-text-primary">
                                                <div class="lqd-lp-img overflow-hidden">
                                                    <figure>
                                                        <img class="w-full" width="640" height="364" src="./assets/images/blog/news-gif-04.gif" alt="5 reasons to purchase desktop computers">
                                                    </figure>
                                                    <div class="lqd-lp-meta uppercase font-bold relative z-3">
                                                        <span class="screen-reader-text">Tags </span>
                                                        <ul class="lqd-lp-cat lqd-lp-cat-shaped lqd-lp-cat-solid reset-ul inline-ul font-bold uppercase tracking-0/1em">
                                                            <li><a class="rounded-full" href="#" rel="category">Award</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <header class="lqd-lp-header pt-1/5em px-1em">
                                                    <div class="lqd-lp-meta lqd-lp-meta-dot-between flex flex-wrap items-center">
                                                        <div class="lqd-lp-author relative z-3">
                                                            <div class="lqd-lp-author-info">
                                                                <h3 class="mt-0 mb-0">
                                                                    <a href="#">Philip Reyes</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <time class="lqd-lp-date" datetime="2021-06-02T13:40:12+00:00">1 year ago</time>
                                                    </div>
                                                    <h2 class="entry-title lqd-lp-title mt-0/5em mb-0 h5 text-black font-bold">5 reasons to purchase desktop computers</h2>
                                                </header>
                                                <div class="lqd-lp-excerpt pt-1em pb-1/5em px-1em">
                                                    <p class="text-14 text-black-40">Hustle and Cashflow is a blog that aims to educate millennials on personal finance. Hustle and Cashflow is a blog that aims to educate millennials on personal finance.</p>
                                                </div>
                                            </article>
                                        </div>
                                        <div class="w-33percent flex px-30 mb-30 md:w-50percent sm:w-full module-col">
                                            <article class="lqd-lp relative lqd-lp-style-6 lqd-lp-style-6-alt lqd-lp-hover-img-zoom lqd-lp-hover-img-zoom-out lqd-lp-animate-onhover rounded-10 overflow-hidden text-start post-5561 post type-post status-publish format-standard has-post-thumbnail hentry category-business category-culture tag-beauty tag-travel hover:inner-text-primary">
                                                <div class="lqd-lp-img overflow-hidden">
                                                    <figure>
                                                        <img class="w-full" width="640" height="364" src="./assets/images/blog/news-gif-05.gif" alt="5 reasons to purchase desktop computers">
                                                    </figure>
                                                    <div class="lqd-lp-meta uppercase font-bold relative z-3">
                                                        <span class="screen-reader-text">Tags </span>
                                                        <ul class="lqd-lp-cat lqd-lp-cat-shaped lqd-lp-cat-solid reset-ul inline-ul font-bold uppercase tracking-0/1em">
                                                            <li><a class="rounded-full" href="#" rel="category">Award</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <header class="lqd-lp-header pt-1/5em px-1em">
                                                    <div class="lqd-lp-meta lqd-lp-meta-dot-between flex flex-wrap items-center">
                                                        <div class="lqd-lp-author relative z-3">
                                                            <div class="lqd-lp-author-info">
                                                                <h3 class="mt-0 mb-0">
                                                                    <a href="#">Philip Reyes</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <time class="lqd-lp-date" datetime="2021-06-02T13:40:12+00:00">1 year ago</time>
                                                    </div>
                                                    <h2 class="entry-title lqd-lp-title mt-0/5em mb-0 h5 text-black font-bold">5 reasons to purchase desktop computers</h2>
                                                </header>
                                                <div class="lqd-lp-excerpt pt-1em pb-1/5em px-1em">
                                                    <p class="text-14 text-black-40">Hustle and Cashflow is a blog that aims to educate millennials on personal finance. Hustle and Cashflow is a blog that aims to educate millennials on personal finance.</p>
                                                </div>
                                            </article>
                                        </div>
                                        <div class="w-33percent flex px-30 mb-30 md:w-50percent sm:w-full module-col">
                                            <article class="lqd-lp relative lqd-lp-style-6 lqd-lp-style-6-alt lqd-lp-hover-img-zoom lqd-lp-hover-img-zoom-out lqd-lp-animate-onhover rounded-10 overflow-hidden text-start post-5561 post type-post status-publish format-standard has-post-thumbnail hentry category-business category-culture tag-beauty tag-travel hover:inner-text-primary">
                                                <div class="lqd-lp-img overflow-hidden">
                                                    <figure>
                                                        <img class="w-full" width="640" height="364" src="./assets/images/blog/news-gif-06.gif" alt="5 reasons to purchase desktop computers">
                                                    </figure>
                                                    <div class="lqd-lp-meta uppercase font-bold relative z-3">
                                                        <span class="screen-reader-text">Tags </span>
                                                        <ul class="lqd-lp-cat lqd-lp-cat-shaped lqd-lp-cat-solid reset-ul inline-ul font-bold uppercase tracking-0/1em">
                                                            <li><a class="rounded-full" href="#" rel="category">Award</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <header class="lqd-lp-header pt-1/5em px-1em">
                                                    <div class="lqd-lp-meta lqd-lp-meta-dot-between flex flex-wrap items-center">
                                                        <div class="lqd-lp-author relative z-3">
                                                            <div class="lqd-lp-author-info">
                                                                <h3 class="mt-0 mb-0">
                                                                    <a href="#">Philip Reyes</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <time class="lqd-lp-date" datetime="2021-06-02T13:40:12+00:00">1 year ago</time>
                                                    </div>
                                                    <h2 class="entry-title lqd-lp-title mt-0/5em mb-0 h5 text-black font-bold">5 reasons to purchase desktop computers</h2>
                                                </header>
                                                <div class="lqd-lp-excerpt pt-1em pb-1/5em px-1em">
                                                    <p class="text-14 text-black-40">Hustle and Cashflow is a blog that aims to educate millennials on personal finance. Hustle and Cashflow is a blog that aims to educate millennials on personal finance.</p>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-12 text-center">
                                    <a href="#" class="btn btn-naked btn-icon-right btn-icon-circle btn-icon-custom-size btn-icon-solid btn-icon-ripple text-white" target="_blank">
                                        <span class="btn-txt" data-text="See more news">More News</span>
                                        <span class="btn-icon w-30 h-30 text-white bg-white-10">
                                            <i aria-hidden="true" class="lqd-icn-ess icon-ion-ios-add"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- End Blog -->



                    <section
                        class="lqd-section faq py-80"
                        id="faq"
                        data-custom-animations="true"
                        data-ca-options='{"animationTarget": ".animation-element, .animation-element .split-inner .lqd-chars", "duration" : 1000, "delay" : 70, "ease": "expo.out", "initValues": {"y": "30px", "scaleX" : 0.8, "scaleY" : 0.8, "opacity" : 0} , "animations": {"y": "0px", "scaleX" : 1, "scaleY" : 1, "opacity" : 1}}'
                    >
                        <div class="container">
                            <div class="row">
                                <div class="col col-12 p-0">
                                    <div class="accordion accordion-xl animation-element" id="accordion-faq" role="tablist" aria-multiselectable="true">
                                        <div class="accordion-item panel">
                                            <div class="accordion-heading" role="tab" id="heading-item-1">
                                                <h4 class="accordion-title text-yellow-200">
                                                    <a class="collapsed text-22" role="button" data-bs-toggle="collapse" data-bs-parent="#accordion-faq" href="#collapse-item-1" aria-expanded="false" aria-controls="collapse-item-1">
                                                        <span class="accordion-title-txt">How does it generate responses? </span>
                                                        <span class="accordion-expander text-24 pl-1em"><i class="lqd-icn-ess icon-ion-ios-add"></i> <i class="lqd-icn-ess icon-ion-ios-remove"></i></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapse-item-1" class="accordion-collapse collapse" role="tabpanel" aria-labelledby="heading-item-1" data-bs-parent="#accordion-faq">
                                                <div class="accordion-content">
                                                    <p>
                                                        As an AI language model, I generate responses by analyzing and processing large amounts of text data. I use deep learning algorithms and natural language processing techniques to
                                                        understand the context and meaning of a given prompt and generate a response that is relevant and coherent. My responses are generated based on patterns and relationships in the data I
                                                        was trained on, and I continually learn and improve my responses as I am exposed to more data.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item panel">
                                            <div class="accordion-heading" role="tab" id="heading-item-2">
                                                <h4 class="accordion-title text-yellow-200">
                                                    <a class="collapsed text-22" role="button" data-bs-toggle="collapse" data-bs-parent="#accordion-faq" href="#collapse-item-2" aria-expanded="false" aria-controls="collapse-item-2">
                                                        <span class="accordion-title-txt">Is AI copywriting more cost-effective than hiring human writers?</span>
                                                        <span class="accordion-expander text-24 pl-1em"><i class="lqd-icn-ess icon-ion-ios-add"></i> <i class="lqd-icn-ess icon-ion-ios-remove"></i></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapse-item-2" class="accordion-collapse collapse" role="tabpanel" aria-labelledby="heading-item-2" data-bs-parent="#accordion-faq">
                                                <div class="accordion-content">
                                                    <p>
                                                        AI copywriting can be more cost-effective than hiring human writers in certain cases. AI can generate a large amount of content quickly and efficiently, which can save time and money
                                                        compared to hiring multiple human writers. However, the quality of the content generated by AI may vary, and it may not be suitable for all types of content or audiences. In some
                                                        cases, it may be more cost-effective to hire a human writer who can produce higher-quality content tailored to your specific needs.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item panel">
                                            <div class="accordion-heading" role="tab" id="heading-item-3">
                                                <h4 class="accordion-title text-yellow-200">
                                                    <a class="collapsed text-22" role="button" data-bs-toggle="collapse" data-bs-parent="#accordion-faq" href="#collapse-item-3" aria-expanded="false" aria-controls="collapse-item-3">
                                                        <span class="accordion-title-txt">Can AI really write as well as a human?</span>
                                                        <span class="accordion-expander text-24 pl-1em"><i class="lqd-icn-ess icon-ion-ios-add"></i> <i class="lqd-icn-ess icon-ion-ios-remove"></i></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapse-item-3" class="accordion-collapse collapse" role="tabpanel" aria-labelledby="heading-item-3" data-bs-parent="#accordion-faq">
                                                <div class="accordion-content">
                                                    <p>
                                                        AI has made significant advances in natural language processing and can generate text that is often indistinguishable from text written by a human. However, AI still has limitations
                                                        and may struggle with more complex or creative forms of writing. In addition, AI may lack the emotional and social intelligence of a human writer, which can be important for certain
                                                        types of content. Ultimately, whether AI can write as well as a human depends on the specific use case and context.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item panel">
                                            <div class="accordion-heading" role="tab" id="heading-item-4">
                                                <h4 class="accordion-title text-yellow-200">
                                                    <a class="collapsed text-22" role="button" data-bs-toggle="collapse" data-bs-parent="#accordion-faq" href="#collapse-item-4" aria-expanded="false" aria-controls="collapse-item-4">
                                                        <span class="accordion-title-txt">How do you handle my data?</span>
                                                        <span class="accordion-expander text-24 pl-1em"><i class="lqd-icn-ess icon-ion-ios-add"></i> <i class="lqd-icn-ess icon-ion-ios-remove"></i></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapse-item-4" class="accordion-collapse collapse" role="tabpanel" aria-labelledby="heading-item-4" data-bs-parent="#accordion-faq">
                                                <div class="accordion-content">
                                                    At our organization, we take data privacy very seriously. Any personal information you provide to us will be used only for the purpose of providing our services to you and will be kept
                                                    confidential. We have strict data security measures in place to protect your data from unauthorized access, use, or disclosure. Additionally, we adhere to all applicable data protection
                                                    laws and regulations. You can trust that your data is in good hands with us.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item panel">
                                            <div class="accordion-heading" role="tab" id="heading-item-5">
                                                <h4 class="accordion-title text-yellow-200">
                                                    <a class="collapsed text-22" role="button" data-bs-toggle="collapse" data-bs-parent="#accordion-faq" href="#collapse-item-5" aria-expanded="false" aria-controls="collapse-item-5">
                                                        <span class="accordion-title-txt">Can AI copywriting be customized to my brand and audience?</span>
                                                        <span class="accordion-expander text-24 pl-1em"><i class="lqd-icn-ess icon-ion-ios-add"></i> <i class="lqd-icn-ess icon-ion-ios-remove"></i></span>
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapse-item-5" class="accordion-collapse collapse" role="tabpanel" aria-labelledby="heading-item-5" data-bs-parent="#accordion-faq">
                                                <div class="accordion-content">
                                                    <p>
                                                        AI copywriting can be customized to your brand and audience to a certain extent. By training an AI model on your specific brand and audience data, it can learn to generate content that
                                                        aligns with your brand voice and resonates with your target audience. However, AI may not be able to replicate the nuanced and subjective aspects of branding and audience targeting
                                                        that a human writer can provide. It is important to consider the strengths and limitations of AI when deciding whether to use it for copywriting.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="lqd-section newsletter w-full flex flex-col items-center justify-center transition-all pt-200 pb-200 bg-black bg-center"
                        id="newsletter"
                        style="background-image: url(assets/images/bg/n-bg-02.jpg);"
                    >
                        <div
                            class="container flex flex-col justify-center gap-40 p-10"
                            data-custom-animations="true"
                            data-ca-options='{"animationTarget": ".animation-element, .animation-element .split-inner .lqd-chars", "duration" : 800, "startDelay" : 400, "delay" : 70, "ease": "expo.out", "initValues": {"scaleX" : 0.6, "scaleY" : 0.6, "rotationZ" : 1, "opacity" : 0} , "animations": {"scaleX" : 1, "scaleY" : 1, "rotationZ" : 0, "opacity" : 1}}'
                        >
                            <div class="w-full text-center">
                                <div class="ld-fancy-heading relative animation-element">
                                    <h2 class="ld-fh-element relative m-0 text-white" data-split-text="true" data-split-options='{"type": "chars, words"}'><span class="font-chakra-petch font-thin">Join the</span>community</h2>
                                </div>
                            </div>
                            <div class="w-full text-center">
                                <div class="ld-fancy-heading relative animation-element"><p class="ld-fh-element relative mb-0/5em text-20 leading-26">Take part in the conversation! Stay in the know & be the first to hear about any new updates.</p></div>
                            </div>
                            <div class="w-full text-center">
                                <div class="ld-sf relative ld-sf--input-solid ld-sf--button-solid ld-sf--size-xs ld-sf--round ld-sf--border-none ld-sf--button-show ld-sf--button-inline animation-element">
                                    <ul class="social-icon social-icon-border-none text-28">
                                        <li>
                                            <a class="text-white-70" href="#" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
                                                    <path class="cls-1" d="M477,43.86,13.32,223.29a5.86,5.86,0,0,0-.8.38c-3.76,2.13-30,18.18,7,32.57l.38.14,110.41,35.67a6.08,6.08,0,0,0,5.09-.62L409.25,120.57a6,6,0,0,1,2.2-.83c3.81-.63,14.78-1.81,7.84,7-7.85,10-194.9,177.62-215.66,196.21a6.3,6.3,0,0,0-2.07,4.17l-9.06,108a7.08,7.08,0,0,0,2.83,5.67,6.88,6.88,0,0,0,8.17-.62l65.6-58.63a6.09,6.09,0,0,1,7.63-.39l114.45,83.1.37.25c2.77,1.71,32.69,19.12,41.33-19.76l79-375.65c.11-1.19,1.18-14.27-8.17-22-9.82-8.08-23.72-4-25.81-3.56A6,6,0,0,0,477,43.86Z" id="Telegram"/></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="text-white-70" href="#" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 300 300">
                                                    <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="text-white-70" href="#" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 -28.5 256 256">
                                                    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="ld_sf_response"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer id="site-footer" class="main-footer pt-120 px-5percent bg-black" data-sticky-footer="true" data-sticky-footer-options='{"shadow": "1"}'>
                <div class="container-fluid flex flex-wrap p-0">
                    <div class="w-20percent flex flex-col gap-20 p-10 transition-bg module-logo lg:w-full lg:flex-row">
                        <div class="lqd-imggrp-single block relative">
                            <div class="lqd-imggrp-img-container inline-flex relative items-center justify-center">
                                <figure class="w-full relative"><img width="60" src="assets/images/logo/logo-up-yellow.svg" alt="Dark AI" /></figure>
                            </div>
                        </div>
                        <div class="max-w-full self-start">
                            <a href="#" class="btn btn-solid btn-icon-shaped text-10 bg-white-10 rounded-100 px-10 text-white"><span data-text="EN" class="btn-txt">EN</span></a>
                        </div>
                    </div>
                    <div class="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
                        <div class="ld-fancy-heading relative"><h6 class="ld-fh-element relative mb-0/5em text-15 font-medium">Up Mobile</h6></div>
                        <div class="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none">
                            <ul class="reset-ul link-white-50 text-15">
                                <li class="mb-15"><a href="#">Up Mobile</a></li>
                                <li class="mb-15">
                                    <a href="#">Store <span class="link-badge" style="--lqd-badge-color: #747474;">Soon</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
                        <div id="ld-fancy-heading-6447b46bcde9f" class="ld-fancy-heading relative"><h6 class="ld-fh-element relative mb-0/5em text-15 font-medium">Contact</h6></div>
                        <div class="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none">
                            <ul class="reset-ul link-white-50 text-15">
                                <li class="mb-15"><a href="#">Media</a></li>
                                <li class="mb-15"><a href="#">Help Center</a></li>
                                <li class="mb-15"><a href="#">Terms of service</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
                        <div id="ld-fancy-heading-6447b46bd5918" class="ld-fancy-heading relative"><h6 class="ld-fh-element relative mb-0/5em text-15 font-medium">Developers</h6></div>
                        <div class="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none">
                            <ul class="reset-ul link-white-50 text-15">
                                <li class="mb-15"><a href="#">Up Mobile Stack</a></li>
                                <li class="mb-15"><a href="#">SDK</a></li>
                                <li class="mb-15"><a href="#">dApp Store</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-20percent flex flex-col gap-25 p-10 transition-bg lg:w-25percent sm:w-50percent">
                        <div id="ld-fancy-heading-6447b46bdd7a2" class="ld-fancy-heading relative"><h6 class="ld-fh-element relative mb-0/5em text-15 font-medium">Up Network</h6></div>
                        <div class="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none">
                            <ul class="reset-ul link-white-50 text-15">
                                <li class="mb-15"><a href="#">Account</a></li>
                                <li class="mb-15"><a href="#">About</a></li>
                                <li class="mb-15">
                                    <a href="#">Careers <span class="link-badge" style="--lqd-badge-color: #747474;">2</span></a>
                                </li>
                                <li><a href="#">Returns</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full flex justify-between items-center p-10 mt-70 mb-40 transition-bg lg:flex-wrap">
                        <div class="ld-fancy-heading relative w-25percent lg:w-full lg:text-center">
                            <p class="ld-fh-element relative mb-0/5em text-12 leading-20 tracking-0/1 text-white-30">Copyright © 2024 Up Network Company. All rights reserved.</p>
                        </div>
                        <div class="lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none module-social lg:w-full lg:text-center">
                            <ul class="reset-ul inline-ul">
                                <li class="mr-25">
                                    <a class="text-white-40 text-15" href="#">
                                        <span class="link-icon inline-flex hide-if-empty left-icon icon-next-to-label text-slate-300">
                                            <svg aria-hidden="true" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <path class="cls-1" d="M477,43.86,13.32,223.29a5.86,5.86,0,0,0-.8.38c-3.76,2.13-30,18.18,7,32.57l.38.14,110.41,35.67a6.08,6.08,0,0,0,5.09-.62L409.25,120.57a6,6,0,0,1,2.2-.83c3.81-.63,14.78-1.81,7.84,7-7.85,10-194.9,177.62-215.66,196.21a6.3,6.3,0,0,0-2.07,4.17l-9.06,108a7.08,7.08,0,0,0,2.83,5.67,6.88,6.88,0,0,0,8.17-.62l65.6-58.63a6.09,6.09,0,0,1,7.63-.39l114.45,83.1.37.25c2.77,1.71,32.69,19.12,41.33-19.76l79-375.65c.11-1.19,1.18-14.27-8.17-22-9.82-8.08-23.72-4-25.81-3.56A6,6,0,0,0,477,43.86Z" id="Telegram"/></path>
                                            </svg>
                                        </span>
                                        <span>Telegram</span>
                                    </a>
                                </li>
                                <li class="mr-25">
                                    <a class="text-white-40 text-15" href="#">
                                        <span class="link-icon inline-flex hide-if-empty left-icon icon-next-to-label text-slate-300">
                                            <svg aria-hidden="true" viewbox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
                                            </svg>
                                        </span>
                                        <span>X / Twitter</span>
                                    </a>
                                </li>
                                <li class="mr-25">
                                    <a class="text-white-40 text-15" href="#">
                                        <span class="link-icon inline-flex hide-if-empty left-icon icon-next-to-label text-slate-300">
                                            <svg aria-hidden="true" viewbox="0 -28.5 256 256" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" fill-rule="nonzero"></path>
                                            </svg>
                                        </span>
                                        <span>Discord</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-white-40 text-15" href="#"><span>Privacy Policy</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>`
var parentElement = document.getElementById("wrap");
parentElement.innerHTML = str