<div id="drawer-navigation"
    class="fixed top-0 overflow-y-auto right-0 z-50 h-screen transition-transform translate-x-full w-full" tabindex="-1"
    aria-labelledby="drawer-navigation-label">
    <div class="absolute right-[324px] top-4 rounded-full bg-white p-0.5 opacity-100">
        <button type="button" data-drawer-hide="drawer-navigation"
            class="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="drawer-navigation">
            <span class="sr-only">Close sidebar</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-textButton">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    </div>
    <div class="flex flex-1 flex-col pb-4 pt-5 bg-dark w-[312px] h-screen ml-auto">
        <div class="px-4 pb-4">
            <img src="/web/img/logo-header.webp" class="h-16" alt="FumolaStore.ID" />
        </div>
        <div class="flex-1 overflow-y-auto">
            <nav class="space-y-1 px-2">
                <a class="group flex items-center gap-2 p-2 font-medium text-white" href="/">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                        stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                    </svg>
                    <span>Beranda</span>
                </a>
                <a class="group flex items-center gap-2 p-2 font-medium text-white" href="/history.html">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                        stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                        <path d="M21 21l-6 -6"></path>
                    </svg>
                    <span>Lacak Pesanan</span>
                </a>
                <a class="group flex items-center gap-2 p-2 font-medium text-white" href="/price-list.html">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                        stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 6l11 0"></path>
                        <path d="M9 12l11 0"></path>
                        <path d="M9 18l11 0"></path>
                        <path d="M5 6l0 .01"></path>
                        <path d="M5 12l0 .01"></path>
                        <path d="M5 18l0 .01"></path>
                    </svg>
                    <span>Gabung Reseller</span>
                </a>
            </nav>
        </div>
        <div class="flex shrink-0 border-t border-gray-200 p-4">
            <div class="inline-flex w-full space-x-1" role="group"><a href="/account/auth/register">
                    <button type="button"
                        class="h-full w-full rounded-xl border border-transparent bg-primary-700 text-white px-6 py-3 text-sm font-semibold leading-4 text-textButton shadow-sm">
                        Daftar Sekarang
                    </button>
                </a>
                <a href="{{ route('auth.login') }}">
                    <button type="button"
                        class="h-full w-full rounded-xl border border-transparent bg-green-200 text-white px-6 py-3 text-sm font-semibold leading-4 text-textButton shadow-sm">
                        Masuk
                    </button>
                </a>
            </div>
        </div>
    </div>
</div>
