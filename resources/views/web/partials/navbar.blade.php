<nav class="hidden lg:block relative bg-secondary-950">
    <ul class="container mx-auto flex gap-4">
        <li>
            <a href="/" class="text-sm text-white inline-flex items-center py-4">
                <svg aria-hidden="true" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                    stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                </svg>
                <span class="ml-1">Beranda</span>
            </a>
        </li>
        <li>
            <a href="/history.html" class="text-sm text-white inline-flex items-center py-4">
                <svg aria-hidden="true" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                    stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M21 21l-6 -6"></path>
                </svg>
                <span class="ml-1">Lacak Pesanan</span>
            </a>
        </li>
        <li>
            <a href="/products.html" class="text-sm text-white inline-flex items-center py-4">
                <svg aria-hidden="true" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                    stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z">
                    </path>
                    <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232"></path>
                    <path d="M8 9v2"></path>
                    <path d="M7 10h2"></path>
                    <path d="M14 10h2"></path>
                </svg>
                <span class="ml-1">Semua Game</span>
            </a>
        </li>
        <li>
            <button id="mlbbCalcLink" data-dropdown-toggle="mlbbCalcDropdown"
                class="inline-flex items-center justify-between text-sm w-full py-4 text-white bg-transparent md:border-0 md:w-auto">
                <svg aria-hidden="true" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                    stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z">
                    </path>
                    <path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z">
                    </path>
                    <path d="M8 14l0 .01"></path>
                    <path d="M12 14l0 .01"></path>
                    <path d="M16 14l0 .01"></path>
                    <path d="M8 17l0 .01"></path>
                    <path d="M12 17l0 .01"></path>
                    <path d="M16 17l0 .01"></path>
                </svg>
                <span class="ml-1">Kalkulator MLBB</span>
                <svg class="w-2 h-2 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                </svg>
            </button>
            <div id="mlbbCalcDropdown" class="z-10 hidden font-normal rounded-lg w-40 bg-dark shadow-lg">
                <ul class="p-2 text-sm text-gray-200 divide-y divide-gray-600" aria-labelledby="mlbbCalcButton">
                    <li>
                        <a href="/win-rate.html" class="flex items-center px-4 py-2 hover:text-white">
                            <svg aria-hidden="true" stroke="currentColor" fill="none" stroke-width="2"
                                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M17 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                <path d="M7 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                <path d="M6 18l12 -12"></path>
                            </svg>
                            <span class="ml-1">Win Rate</span>
                        </a>
                    </li>
                    <li>
                        <a href="/magic-wheel.html" class="flex items-center px-4 py-2 hover:text-white">
                            <svg aria-hidden="true" stroke="currentColor" fill="currentColor" stroke-width="0"
                                viewBox="0 0 512 512" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M263.563 19.063l-53.875 59.562v90.063l-34.75-60.188-35.563-17.594-9.344 43.53 48.376 83.783-19.97-5.345-28.75 10.5 19.658 23.5 30.28 8.125-59.155 15.844-23.407 27.97 34.25 12.498 66.875-17.937-27.875 48.28 5.562 62.72 33.813-15.72v33.126l46.812 66.626 46.78-66.625v-72.81l21.626 68.092 35.875 27.344 13.564-43.03-32.688-102.97 42.875 11.5 26.876-13.78-17.78-20.22-64.595-17.312-.092-.25 82.25-22.03 21.125-24.064-31.97-16.406-73.656 19.75 39-67.594-3.562-55.25-58.844 18.97V78.624l-39.717-59.563zm-5.72 109.562l22.438 115.03 39.876 12.032-39.875 12.032-22.436 115.03-22.375-114.53-41.595-12.533 41.594-12.53 22.374-114.532z">
                                </path>
                            </svg>
                            <span class="ml-1">Magic Wheel</span>
                        </a>
                    </li>
                    <li>
                        <a href="/zodiac.html" class="flex items-center px-4 py-2 hover:text-white">
                            <svg aria-hidden="true" stroke="currentColor" fill="none" stroke-width="2"
                                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                <path d="M18 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                <path d="M3 12a10 6.5 0 0 1 14 -6.5"></path>
                                <path d="M21 12a10 6.5 0 0 1 -14 6.5"></path>
                            </svg>
                            <span class="ml-1">Zodiak</span>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li>
            <a href="/pb-calculator.html" class="text-sm text-white inline-flex items-center py-4">
                <svg aria-hidden="true" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                    stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z">
                    </path>
                    <path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z">
                    </path>
                    <path d="M8 14l0 .01"></path>
                    <path d="M12 14l0 .01"></path>
                    <path d="M16 14l0 .01"></path>
                    <path d="M8 17l0 .01"></path>
                    <path d="M12 17l0 .01"></path>
                    <path d="M16 17l0 .01"></path>
                </svg>
                <span class="ml-1">Kalkulator PB</span>
            </a>
        </li>
        <li>
            <a href="/price-list.html" class="text-sm text-white inline-flex items-center py-4">
                <svg aria-hidden="true" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                    stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 6l11 0"></path>
                    <path d="M9 12l11 0"></path>
                    <path d="M9 18l11 0"></path>
                    <path d="M5 6l0 .01"></path>
                    <path d="M5 12l0 .01"></path>
                    <path d="M5 18l0 .01"></path>
                </svg>
                <span class="ml-1">Daftar Harga</span>
            </a>
        </li>
    </ul>
</nav>
