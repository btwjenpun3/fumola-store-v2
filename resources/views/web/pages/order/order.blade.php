@extends('web.layouts.master')

@section('content')
    <!-- Order Section -->
    <section id="order" class="relative w-full bg-custom-gd py-6 md:py-8 lg:py-10">
        <div class="container mx-auto">
            <div class="relative w-full rounded-lg overflow-hidden mb-4 lg:mb-6">
                <img src="/web/img/backdrops/order.webp" class="w-auto lg:w-full h-36 object-cover object-center lg:h-auto"
                    alt="order" />
            </div>
            <div class="relative grid grid-cols-3 gap-4">
                <div class="col-span-3 md:col-span-1">
                    <aside class="lg:sticky lg:top-[128px] lg:z-10 flex flex-col justify-center">
                        <article class="shadow-9xl relative flex-1 bg-secondary-900 px-4 pb-6 pt-2 sm:rounded-lg lg:block">
                            <div class="relative flex items-center">
                                <div class="top-0 z-10 inline-block h-auto w-auto rounded-3xl py-2 px-0 lg:px-3 -mt-12">
                                    <img src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vcash/mobilelegends-4702-original-70c3-original.webp"
                                        alt="Mobile Legends: Bang Bang"
                                        class="h-auto w-32 rounded-2xl object-cover md:w-[130px]" />
                                </div>
                                <div class="ml-3 lg:ml-0">
                                    <h3 class="text-lg font-extrabold leading-6 text-white">Mobile Legends:
                                        Bang Bang</h3>
                                    <p class="text-xs font-medium leading-6 text-gray-200">Moonton</p>
                                </div>
                            </div>
                            <div class="max-h-32 transition-all">
                                <article
                                    class="h-32 overflow-hidden prose prose-headings:m-0 prose-h1:text-base prose-h2:text-base prose-h3:text-sm prose-h4:text-sm prose-p:m-0 prose-p:text-xs prose-li:m-0 prose-li:text-xs">
                                    <p class="text-white !my-2">Cara Pesan Top Up Diamond Mobile Legends :</p>
                                    <ol class="m-0">
                                        <li class="text-white">Masukkan ID &amp; Server</li>
                                        <li class="text-white">Pilih Item</li>
                                        <li class="text-white">Pilih Pembayaran</li>
                                        <li class="text-white">Masukkan No WhatsApp</li>
                                        <li class="text-white">Klik Konfirmasi Top Up &amp; lakukan Pembayaran
                                        </li>
                                        <li class="text-white">Diamonds otomatis masuk ke akun game</li>
                                    </ol>
                                </article>
                            </div>
                            <span class="cursor-pointer text-xs font-medium text-blue-600 underline">Lebih
                                banyak</span>
                        </article>
                    </aside>
                </div>
                <div class="col-span-3 flex flex-col space-y-8 md:col-span-2">
                    <div class="col-span-2 space-y-4">
                        <section class="shadow-9xl bg-secondary-900 px-4 py-5 sm:rounded-lg">
                            <div class="flex w-full space-x-2 border-b border-b-white/10 pb-2">
                                <div
                                    class="flex items-center space-x-2 text-lg font-extrabold text-white leading-6 md:text-xl">
                                    <div class="shadow-9xl rounded-b-full bg-secondary-dark px-3 pb-2 pt-1 text-white">
                                        1</div>
                                    <span>Masukkan Player ID</span>
                                </div>
                                <div class="flex cursor-pointer items-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                        class="h-5 w-5 contrast-75">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="text-sm text-white">
                                    Simpan ID dengan fitur <a class="text-base text-primary-700 underline"
                                        href="/save-id.html">Simpan ID</a>
                                </div>
                            </div>
                            <div class="mt-4 grid grid-cols-2 gap-2">
                                <div class="col-span-1 w-full">
                                    <div class="relative rounded-md text-black shadow-sm">
                                        <input
                                            class="block h-9 w-full rounded-lg border-gray-300 text-xs shadow-sm focus:border-primary-700 focus:ring-primary-700 sm:text-sm"
                                            placeholder="Masukkan User ID" type="number" name="userId" value="" />
                                    </div>
                                </div>
                                <div class="col-span-1 w-full">
                                    <div class="relative rounded-md text-black shadow-sm">
                                        <input
                                            class="block h-9 w-full rounded-lg border-gray-300 text-xs shadow-sm focus:border-primary-700 focus:ring-primary-700 sm:text-sm"
                                            placeholder="Masukkan Server" type="number" name="zoneId" value="" />
                                    </div>
                                </div>
                            </div>
                            <p class="mt-2 text-xs text-white/70">
                                Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada
                                menu utama game. User ID akan terlihat dibagian bawah Nama Karakter Game Anda.
                                Silakan masukkan User ID Anda untuk menyelesaikan transaksi. Contoh :
                                12345678(1234).
                            </p>
                        </section>
                        <section class="shadow-9xl bg-secondary-900 px-4 py-5 sm:rounded-lg">
                            <div class="flex w-full space-x-2 border-b border-b-white/10 pb-2">
                                <div
                                    class="flex items-center space-x-2 text-lg font-extrabold text-white leading-6 md:text-xl">
                                    <div class="shadow-9xl rounded-b-full bg-secondary-dark px-3 pb-2 pt-1 text-white">
                                        2</div>
                                    <span>Pilih Nominal Top Up</span>
                                </div>
                            </div>
                            <ul class="relative flex gap-3 mt-4" id="topups" data-tabs-toggle="#filterTopups"
                                role="tablist">
                                <li class="splide__slide" role="presentation">
                                    <button
                                        class="relative flex h-full w-24 cursor-pointer text-white hover:text-white flex-col bg-[#303740] items-center justify-between rounded-xl md:w-28 p-3 md:p-4 aria-selected:bg-primary-700 aria-selected:text-white"
                                        id="diamond-tab" data-tabs-target="#diamond" type="button" role="tab"
                                        aria-controls="diamond" aria-selected="false">
                                        <img src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vcash/167420385750orless_MLBB_Diamonds-2e17-original.webp"
                                            class="h-8 w-8 object-contain center" alt="Diamonds" />
                                        <div class="flex h-full flex-col items-center justify-center gap-1 pt-2">
                                            <p class="break-words text-center text-xs font-semibold">Diamonds
                                            </p>
                                        </div>
                                    </button>
                                </li>
                                <li class="splide__slide" role="presentation">
                                    <button
                                        class="relative flex h-full w-24 cursor-pointer text-white hover:text-white flex-col bg-[#303740] items-center justify-between rounded-xl md:w-28 p-3 md:p-4 aria-selected:bg-primary-700 aria-selected:text-white"
                                        id="weekly-tab" data-tabs-target="#weekly" type="button" role="tab"
                                        aria-controls="weekly" aria-selected="false">
                                        <img src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vcash/899343423888491-9cfb-original.png"
                                            class="h-8 w-8 object-contain center" alt="Weekly Diamonds Pass" />
                                        <div class="flex h-full flex-col items-center justify-center gap-1 pt-2">
                                            <p class="break-words text-center text-xs font-semibold">Weekly
                                                Diamonds Pass</p>
                                        </div>
                                </li>
                                <li class="splide__slide" role="presentation">
                                    <button
                                        class="relative flex h-full w-24 cursor-pointer text-white hover:text-white flex-col bg-[#303740] items-center justify-between rounded-xl md:w-28 p-3 md:p-4 aria-selected:bg-primary-700 aria-selected:text-white"
                                        id="twilight-tab" data-tabs-target="#twilight" type="button" role="tab"
                                        aria-controls="twilight" aria-selected="false">
                                        <img src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vcash/TwilightPass_MLBB-611d-8eb2-10452-original-68b3-original.png"
                                            class="h-8 w-8 object-contain center" alt="Twilight Pass" />
                                        <div class="flex h-full flex-col items-center justify-center gap-1 pt-2">
                                            <p class="break-words text-center text-xs font-semibold">Twilight
                                                Pass</p>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                            <div id="filterTopups">
                                <div class="hidden" id="diamond" role="tabpanel" aria-labelledby="diamond-tab">
                                    <ul id="diamondLisst"
                                        class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">

                                        BESOK MULAI DARI SINI
                                        <li class="relative" role="radio" aria-checked="false" tabindex="0">
                                            <input type="radio" id="0" name="items" value="0"
                                                class="peer hidden">
                                            <label for="0"
                                                class="group relative flex cursor-pointer overflow-hidden border border-transparent bg-[#303740] rounded-lg p-3 outline-none peer-checked:bg-primary-700 peer-checked:ring-2 peer-checked:ring-[#303740] md:p-4">
                                                <span class="flex flex-1">
                                                    <span class="flex flex-col justify-between">
                                                        <span
                                                            class="block min-h-[32px] text-sm font-semibold text-white">${e?.title}</span>
                                                        <span
                                                            class="mt-1 flex items-center text-xs font-light text-gray-200">${currency(e?.price)},-</span>
                                                    </span>
                                                </span>
                                                <div class="flex aspect-square w-8 items-center">
                                                    <img src="${e?.image}" width="300" height="300"
                                                        class="object-contain object-right" style="color: transparent"
                                                        alt="Logo">
                                                </div>
                                            </label>
                                            <div
                                                class="absolute right-0 top-0 rounded-bl-full overflow-hidden rounded-tr-[2000px] bg-[#303740] p-1 pb-2 pl-2 text-white hidden peer-checked:block">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 16 16" height="12" width="12"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </li>


                                        <li class="relative" role="radio" aria-checked="false" tabindex="0">
                                            <input type="radio" id="1" name="items" value="1"
                                                class="peer hidden">
                                            <label for="1"
                                                class="group relative flex cursor-pointer overflow-hidden border border-transparent bg-[#303740] rounded-lg p-3 outline-none peer-checked:bg-primary-700 peer-checked:ring-2 peer-checked:ring-[#303740] md:p-4">
                                                <span class="flex flex-1">
                                                    <span class="flex flex-col justify-between">
                                                        <span
                                                            class="block min-h-[32px] text-sm font-semibold text-white">${e?.title}</span>
                                                        <span
                                                            class="mt-1 flex items-center text-xs font-light text-gray-200">${currency(e?.price)},-</span>
                                                    </span>
                                                </span>
                                                <div class="flex aspect-square w-8 items-center">
                                                    <img src="${e?.image}" width="300" height="300"
                                                        class="object-contain object-right" style="color: transparent"
                                                        alt="Logo">
                                                </div>
                                            </label>
                                            <div
                                                class="absolute right-0 top-0 rounded-bl-full overflow-hidden rounded-tr-[2000px] bg-[#303740] p-1 pb-2 pl-2 text-white hidden peer-checked:block">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 16 16" height="12" width="12"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                <div class="hidden" id="weekly" role="tabpanel" aria-labelledby="weekly-tab">
                                    <ul id="weeklyLists"
                                        class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                                        <li class="relative" role="radio" aria-checked="false" tabindex="0">
                                            <input type="radio" id="${e?._id}" name="items" value="${e?._id}"
                                                class="peer hidden">
                                            <label for="${e?._id}"
                                                class="group relative flex cursor-pointer overflow-hidden border border-transparent bg-[#303740] rounded-lg p-3 outline-none peer-checked:bg-primary-700 peer-checked:ring-2 peer-checked:ring-[#303740] md:p-4">
                                                <span class="flex flex-1">
                                                    <span class="flex flex-col justify-between">
                                                        <span
                                                            class="block min-h-[32px] text-sm font-semibold text-white">asdasd</span>
                                                        <span
                                                            class="mt-1 flex items-center text-xs font-light text-gray-200">12213</span>
                                                    </span>
                                                </span>
                                                <div class="flex aspect-square w-8 items-center">
                                                    <img src="${e?.image}" width="300" height="300"
                                                        class="object-contain object-right" style="color: transparent"
                                                        alt="Logo">
                                                </div>
                                            </label>
                                            <div
                                                class="absolute right-0 top-0 rounded-bl-full overflow-hidden rounded-tr-[2000px] bg-[#303740] p-1 pb-2 pl-2 text-white hidden peer-checked:block">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 16 16" height="12" width="12"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="hidden" id="twilight" role="tabpanel" aria-labelledby="twilight-tab">
                                    <ul id="twilightList"
                                        class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                                    </ul>
                                </div>
                            </div>
                        </section>

                        @include('web.pages.order._payment')

                        <section class="shadow-9xl bg-secondary-900 px-4 py-5 sm:rounded-lg">
                            <div class="flex w-full space-x-2 border-b border-b-white/10 pb-2">
                                <div
                                    class="flex items-center space-x-2 text-lg font-extrabold text-white leading-6 md:text-xl">
                                    <div class="shadow-9xl rounded-b-full bg-secondary-dark px-3 pb-2 pt-1 text-white">
                                        4</div>
                                    <span>Beli!</span>
                                </div>
                            </div>
                            <div class="mt-4 space-y-3">
                                <div class="relative rounded-md shadow-sm">
                                    <input min="5" type="text" name="phoneNumber" placeholder="08xxxxxxxxx"
                                        class="block w-full rounded-lg border-gray-300 text-black shadow-sm focus:border-primary-700 focus:ring-primary-700 sm:text-sm"
                                        value="" />
                                    <p class="mt-2 text-xs text-white/70">
                                        Bukti pembelianmu akan kami kirimkan ke WhatsApp. Pastikan nomor
                                        handphone yang di input aktif
                                    </p>
                                </div>
                            </div>
                            <button type="button" data-modal-target="confirmation-modal"
                                data-modal-toggle="confirmation-modal"
                                class="inline-flex mt-4 items-center gap-2 rounded-lg border border-transparent bg-primary-700 px-6 py-3 text-sm font-medium leading-4 text-white shadow-sm hover:opacity-80 focus:outline-none disabled:cursor-not-allowed">
                                Konfirmasi Top Up
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                                    aria-hidden="true" class="ml-2" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>
    @include('web.pages.order._modal')
@endsection
