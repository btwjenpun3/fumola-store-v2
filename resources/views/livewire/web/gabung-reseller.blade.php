<div>
    <section id="price-list" class="relative overflow-hidden bg-custom-gd py-10 sm:py-12 md:py-16 lg:py-20">
        <div class="container mx-auto">
            <div class="relative mb-6 md:mb-8 lg:mb-10">
                <h2 class="mb-2 text-2xl lg:text-4xl font-extrabold tracking-tight text-white">
                    Keuntungan Menjadi Member / Reseller
                </h2>
                <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-white dark:text-gray-400">
                    Dengan mendaftar sebagai reseller di situs web kami, kamu akan mendapatkan manfaat eksklusif,
                    termasuk harga spesial yang tidak dapat kamu temukan di tempat lain. Kami berkomitmen untuk
                    memberikan penawaran terbaik kepada para mitra reseller kami.
                </p>
                <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-white dark:text-gray-400 mt-3">
                    Untuk memastikan transparansi dan kepercayaan, kami telah menyusun tabel perbandingan harga yang
                    memungkinkan kamu untuk melihat perbedaan antara harga reguler dan harga reseller kami. Dengan
                    demikian, kamu dapat dengan mudah membandingkan dan memahami keuntungan yang kamu dapatkan dengan
                    menjadi bagian dari jaringan reseller kami.
                </p>
                <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-white dark:text-gray-400 mt-3">
                    Jangan ragu untuk mendaftar hari ini dan mulailah menikmati keuntungan dari harga terbaik yang kami
                    tawarkan. Kami siap memberikan dukungan penuh untuk memastikan kesuksesan bisnis kamu. Bergabunglah
                    dengan kami sekarang dan rasakan perbedaannya
                </p>
                <h2 class="mb-2 text-2xl lg:text-4xl font-extrabold tracking-tight text-white mt-6">
                    Cara Mendaftar Member/ Reseller
                </h2>
                <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-white dark:text-gray-400 mt-3">
                    Cara mendaftarnya cukup mudah! Ikuti langkah di bawah ini
                <ol class="text-white mt-3">
                    <li>1. Daftar melalui link Klik <a href="{{ route('auth.login') }}"
                            class="text-primary-600">Disini</a>
                    </li>
                    <li>2. Klik Daftar atau jika kamu memiliki akun Google, maka klik "Masuk dengan Google"
                    </li>
                    <li>3. Voila, kamu telah menjadi Member / Reseller kami! </li>
                    <li>4. Lakukan Isi Saldo untuk memulai transaksi pertama kamu!</li>

                </ol>
                </p>
            </div>
            <div class="flex flex-col md:flex-row justify-between mb-8 lg:mb-10">
                <!-- Heading -->
                <div class="relative mb-4 md:mb-0">
                    <h3 class="font-sans text-2xl lg:text-4xl font-extrabold tracking-tight text-white">
                        Daftar Produk
                    </h3>
                </div>
                <!-- Heading End -->
                <!-- Search Product -->
                {{-- <label for="default-search" class="mb-2 text-sm font-medium sr-only text-white">
                    Search
                </label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                        class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Cari produk..." wire:model.live="gameSearch">
                </div> --}}
                <!-- Search Product End -->
            </div>
            <div class="price-list-swiper swiper h-auto lg:h-[580px] mb-6 md:mb-8 lg:mb-10 pt-2 pb-6 lg:pb-10 px-2 pr-20 lg:pr-0 lg:-mx-2"
                wire:ignore>
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    @foreach ($games as $game)
                        <div class="swiper-slide h-[calc((100%_-_12px)_/_2)]" wire:key="game-{{ $game->slug }}">
                            <a class="group block relative transform overflow-hidden rounded-xl duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary-500 hover:ring-offset-2 bg-gray-950 hover:ring-offset-gray-900"
                                style="outline: none" wire:click.prevent="getGameId({{ $game->id }})"
                                href="#">
                                <img alt="Top Up Game {{ $game->nama }} Murah, Cepat, dan Terpercaya"
                                    src="{{ asset(Storage::url($game->url_gambar)) }}" width="192" height="288"
                                    decoding="async" data-nimg="1"
                                    class="aspect-[4/6] w-full object-cover object-center" />
                                <article
                                    class="absolute inset-x-0 bottom-3 sm:bottom-4 z-10 flex transform flex-col px-3 transition-all duration-300 ease-in-out sm:px-4 text-center">
                                    <h2 class="truncate text-sm font-semibold text-neutral-200">{{ $game->nama }}
                                    </h2>
                                    <p class="text-xxs truncate text-neutral-400 sm:text-xs">{{ $game->brand }}</p>
                                </article>
                                <span aria-hidden="true"
                                    class="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-gray-800 opacity-100"></span>
                                <div
                                    class="absolute inset-0 transform bg-gradient-to-t rounded-xl from-transparent backdrop-blur-0 transition-none duration-300 group-hover:from-neutral-900 group-hover:backdrop-blur-sm">
                                </div>
                            </a>
                        </div>
                    @endforeach
                </div>
                <div class="swiper-scrollbar mt-3"></div>
                <!-- More slides can be added here -->
                <!-- Add scrollbar -->
            </div>
            <div class="shadow-9xl relative overflow-x-auto rounded-xl border-2 border-secondary-900">
                <table class="w-full text-left text-sm">
                    <caption class="p-3 lg:p-5 text-left text-sm sm:text-base font-bold md:text-xl text-white">
                        Daftar Harga Produk @if ($gameName)
                            - {{ $gameName }}
                        @endif
                    </caption>
                    <thead class="bg-secondary-900 font-bold uppercase">
                        <tr>
                            <th scope="col"
                                class="px-3 lg:px-6 py-1.5 lg:py-3 text-xs md:text-sm lg:text-base text-white">
                                Nama Denom
                            </th>
                            <th scope="col"
                                class="px-3 lg:px-6 py-1.5 lg:py-3 text-xs md:text-sm lg:text-base text-white">
                                Harga Publik
                            </th>
                            <th scope="col"
                                class="px-3 lg:px-6 py-1.5 lg:py-3 text-xs md:text-sm lg:text-base text-white">
                                Harga Member / Reseller
                            </th>
                            <th scope="col"
                                class="px-3 lg:px-6 py-1.5 lg:py-3 text-xs md:text-sm lg:text-base text-white">
                                Keuntungan
                            </th>
                            <th scope="col"
                                class="px-3 lg:px-6 py-1.5 lg:py-3 text-xs md:text-sm lg:text-base text-white">
                                <span class="sr-only">Beli</span>
                            </th>
                        </tr>
                    </thead>
                    @if ($hargas)
                        @php
                            $call = new App\Http\Controllers\GlobalController();
                        @endphp
                        <tbody class="divide-y divide-solid divide-secondary-900">
                            @foreach ($hargas->harga as $harga)
                                <tr>
                                    <td class="px-3 lg:px-6 py-1.5 lg:py-3 text-xs md:text-sm lg:text-base text-white">
                                        {{ $harga->nama_produk }}</td>
                                    <td class="px-3 lg:px-6 py-1.5 lg:py-3 text-xs md:text-sm lg:text-base text-white">
                                        {{ $call->formatRupiah($harga->harga_jual) }}
                                    </td>
                                    <td class="px-3 lg:px-6 py-1.5 lg:py-3 text-xs md:text-sm lg:text-base text-white">
                                        {{ $call->formatRupiah($harga->harga_jual_reseller) }}
                                    </td>
                                    <td
                                        class="px-3 lg:px-6 py-1.5 lg:py-3 text-xs md:text-sm lg:text-base text-green-600">
                                        {{ $call->formatRupiah($harga->harga_jual - $harga->harga_jual_reseller) }}
                                    </td>
                                    <td
                                        class="px-3 lg:px-6 py-1.5 lg:py-3 text-xs md:text-sm lg:text-base text-white text-right">
                                        <a href="/ace-racer?selectedPromo=339">
                                            <button class="rounded-md bg-primary-700 px-6 py-2 text-textButton">
                                                Beli
                                            </button>
                                        </a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    @else
                        <tbody>
                            <td class="px-6 py-4 text-center" colspan="5">
                                <div class="flex justify-center">
                                    <img class="flex h-40 justify-center"
                                        src="/web/img/illustrations/content-missing.gif" alt="not-found">
                                </div>
                                <p class="mt-2 text-sm text-gray-500">
                                    Pilih produk terlebih dahulu
                                </p>
                            </td>
                        </tbody>
                    @endif
                </table>
            </div>
        </div>
    </section>

    @script
        <script>
            const swiper = new Swiper('.swiper', {
                slidesPerView: 2,
                grid: {
                    rows: 1
                },
                spaceBetween: 8,
                scrollbar: {
                    el: ".swiper-scrollbar",
                    hide: !1
                },
                breakpoints: {
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 8,
                        grid: {
                            rows: 1
                        }
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                        grid: {
                            rows: 1
                        }
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 12,
                        grid: {
                            rows: 2
                        }
                    }
                }
            });
            swiper.update();
        </script>
    @endscript
</div>
