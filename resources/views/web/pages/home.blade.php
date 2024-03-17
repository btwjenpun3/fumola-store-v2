@extends('web.layouts.master')

@section('slider')
    <section id="hero" class="relative w-full overflow-visible py-8 sm:py-10 md:py-12 lg:py-14 bg-secondary-900">
        <div class="container mx-auto px-0 sm:px-4">
            <div class="swiper hero-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide lg:w-[1000px]">
                        <img src="/web/img/banner.webp" class="block h-auto w-full rounded-3xl" alt="banner" />
                    </div>
                    <div class="swiper-slide lg:w-[1000px]">
                        <img src="/web/img/banner.webp" class="block h-auto w-full rounded-3xl" alt="banner" />
                    </div>
                    <div class="swiper-slide lg:w-[1000px]">
                        <img src="/web/img/banner.webp" class="block h-auto w-full rounded-3xl" alt="banner" />
                    </div>
                    <div class="swiper-slide lg:w-[1000px]">
                        <img src="/web/img/banner.webp" class="block h-auto w-full rounded-3xl" alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@section('flash-sale')
    <section id="flash-sale" class="relative w-full overflow-hidden py-8 sm:py-10 md:py-12 lg:py-14 bg-secondary-950">
        <div class="container mx-auto">
            <div class="relative mb-6 md:mb-8 lg:mb-10">
                <div class="flex items-center gap-3 text-white">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                        class="h-6 w-6 animate-flicker md:h-8 md:w-8" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z">
                        </path>
                    </svg>
                    <span class="text-xl lg:text-2xl font-semibold uppercase leading-[26px] tracking-[0.2em]">Flash
                        Sale</span>
                </div>
            </div>
            <div class="relative bg-secondary-900 rounded-xl px-3 py-5 md:px-6 md:py-8 overflow-hidden">
                <div class="mb-3 block lg:mb-5">
                    <div class="flex items-center gap-1">
                        <h6 class="font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                            Berakhir dalam:
                        </h6>
                        <div class="tick" data-did-init="handleTickInit">
                            <div data-repeat="true" data-layout="horizontal baseline"
                                data-transform="preset(h, m, s) -> delay">
                                <div class="tick-group">
                                    <div data-key="value" data-repeat="true" data-transform="pad(00) -> split -> delay">
                                        <span data-view="flip"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tick-onended-message font-body" style="display: none">
                        <p>Time's up</p>
                    </div>
                </div>
                <div class="flash-sale-swiper swiper p-2 -mx-2 pr-16 sm:pr-0">
                    <div class="swiper-wrapper"></div>
                </div>
            </div>
        </div>
    </section>
@endsection

@section('recommendation')
    <section id="benefit" class="relative w-full overflow-hidden pb-6 md:pb-8 lg:pb-10 bg-secondary-950">
        <div class="container mx-auto">
            <!-- Heading -->
            <div class="relative mb-6 md:mb-8 lg:mb-10">
                <h3 class="mb-2 font-sans text-3xl font-bold text-white lg:mb-3">
                    Rekomendasi
                </h3>
            </div>
            <!-- Heading End -->
            <!-- Recommendation Lists -->
            <div class="recommend-swiper swiper p-2 -mx-2">
                <div class="swiper-wrapper"></div>
            </div>
            <!-- Recommendation Lists End -->
        </div>
    </section>
@endsection

@section('content')
    <section id="mobile-game" class="relative w-full overflow-hidden pb-6 md:pb-8 lg:pb-10 bg-secondary-950">
        <div class="container mx-auto">
            <div class="filter-swiper swiper mb-4 lg:mb-8">
                <ul class="swiper-wrapper" id="products" data-tabs-toggle="#filterProducts" role="tablist">
                    <li class="swiper-slide w-[67px]" role="presentation">
                        <button
                            class="inline-block text-base sm:text-lg md:text-xl bg-transparent px-0 pt-0 pb-2 font-sans border-b-[0.5px] !border-b-dark transition-all duration-200 hover:border-b-gray-300 hover:text-white delay-75 ease-in-out opacity-60 hover:opacity-100 aria-selected:!border-b-white aria-selected:!text-white aria-selected:opacity-100"
                            id="all-tab" data-tabs-target="#all" type="button" role="tab" aria-controls="all"
                            aria-selected="false">
                            <span>Semua</span>
                            <em
                                class="transition delay-75 duration-500 ease-in-out mt-2 border-b-[0.5px] border-textPrimary shadow-sm shadow-textPrimary"></em>
                        </button>
                    </li>
                    <li class="swiper-slide w-[67px]" role="presentation">
                        <button
                            class="inline-block text-base sm:text-lg md:text-xl bg-transparent px-0 pt-0 pb-2 font-sans border-b-[0.5px] !border-b-dark transition-all duration-200 hover:border-b-gray-300 hover:text-white delay-75 ease-in-out opacity-60 hover:opacity-100 aria-selected:!border-b-white aria-selected:!text-white aria-selected:opacity-100"
                            id="mlbb-tab" data-tabs-target="#mlbb" type="button" role="tab" aria-controls="games"
                            aria-selected="false">
                            Games
                        </button>
                    </li>
                    <li class="swiper-slide w-[127px]" role="presentation">
                        <button
                            class="inline-block text-base sm:text-lg md:text-xl bg-transparent px-0 pt-0 pb-2 font-sans border-b-[0.5px] !border-b-dark transition-all duration-200 hover:border-b-gray-300 hover:text-white delay-75 ease-in-out opacity-60 hover:opacity-100 aria-selected:!border-b-white aria-selected:!text-white aria-selected:opacity-100"
                            id="mobile-tab" data-tabs-target="#mobile" type="button" role="tab" aria-controls="mobile"
                            aria-selected="false">
                            Voucher
                        </button>
                    </li>
                    <li class="swiper-slide w-[127px]" role="presentation">
                        <button
                            class="inline-block text-base sm:text-lg md:text-xl bg-transparent px-0 pt-0 pb-2 font-sans border-b-[0.5px] !border-b-dark transition-all duration-200 hover:border-b-gray-300 hover:text-white delay-75 ease-in-out opacity-60 hover:opacity-100 aria-selected:!border-b-white aria-selected:!text-white aria-selected:opacity-100"
                            id="pc-tab" data-tabs-target="#pc" type="button" role="tab" aria-controls="pc"
                            aria-selected="false">
                            Pulsa / Data
                        </button>
                    </li>
                </ul>
            </div>
            <div id="filterProducts">
                <div class="hidden" id="all" role="tabpanel" aria-labelledby="all-tab">
                    <div id="allList"
                        class="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-3 lg:grid-cols-5 lg:gap-4 xl:grid-cols-6">
                    </div>
                </div>
                <div class="hidden" id="mlbb" role="tabpanel" aria-labelledby="mlbb-tab">
                    <div id="mlbbList"
                        class="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-3 lg:grid-cols-5 lg:gap-4 xl:grid-cols-6">
                    </div>
                </div>
                <div class="hidden" id="mobile" role="tabpanel" aria-labelledby="mobile-tab">
                    <div id="mobileList"
                        class="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-3 lg:grid-cols-5 lg:gap-4 xl:grid-cols-6">
                    </div>
                </div>
                <div class="hidden" id="pc" role="tabpanel" aria-labelledby="pc-tab">
                    <div id="pcList"
                        class="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-3 lg:grid-cols-5 lg:gap-4 xl:grid-cols-6">
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
