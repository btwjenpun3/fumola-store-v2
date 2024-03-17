<header class="fixed left-0 top-0 z-20 w-full bg-secondary-950">
    <div class="container mx-auto flex gap-3 flex-wrap items-center py-2 md:py-3">
        <div class="inline-flex items-center">
            <!-- Brand -->
            <a href="/" class="inline-block">
                <img src="/web/img/vcash-logo.webp" class="w-12 h-10 object-contain object-center" width="50"
                    height="40" alt="VCASH.ID LOGO" />
            </a>
            <!-- Brand End -->
        </div>
        <!-- Search Bar -->
        <form class="flex-1">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-4 h-4 text-gray-400" stroke="currentColor" fill="currentColor"
                        stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z">
                        </path>
                    </svg>
                </div>
                <input type="search" id="default-search"
                    class="block w-full p-1.5 md:p-3 !pl-10 text-sm text-gray-900 border border-gray-100 rounded-full bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Cari game..." required />
            </div>
        </form>
        <!-- Search Bar End -->
        <!-- Toggle Menu -->
        <button
            class="ml-1 inline-flex items-center rounded-lg py-2 text-gray-400 hover:bg-secondary-950 md:hidden !outline-none !ring-0"
            type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation"
            data-drawer-placement="right" aria-controls="drawer-navigation">
            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="h-6 w-6 rotate-180"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z"
                    fill="currentColor"></path>
                <path
                    d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z"
                    fill="currentColor"></path>
                <path
                    d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z"
                    fill="currentColor"></path>
            </svg>
            <span class="sr-only">Open menu</span>
        </button>
        <!-- Toggle Menu End -->
        <!-- Auth Buttons -->
        <div class="hidden md:flex gap-3">
            <a href="/register.html"
                class="h-full w-full rounded-full whitespace-nowrap border border-transparent bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-primary-600 to-primary-800 px-6 py-3.5 text-sm font-semibold leading-4 text-white shadow-sm">
                Daftar Sekarang
            </a>
            <a href="/login.html"
                class="h-full w-full rounded-full whitespace-nowrap border border-transparent bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-secondary-500 to-secondary-800 px-6 py-3.5 text-sm font-semibold leading-4 text-white shadow-sm">
                Masuk
            </a>
        </div>
        <!-- Auth Buttons End -->
    </div>
</header>
