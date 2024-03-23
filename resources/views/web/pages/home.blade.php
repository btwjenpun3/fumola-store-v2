@extends('web.layouts.master')

@section('title')
    <title>Fumola Store: Tempat Top Up Game Termurah Tanpa Ribet</title>
@endsection

@section('description')
    <meta name="description"
        content="Tempat top up game termurah dan terpercaya di Indonesia. Kami menjamin keamanan dan kecepatan transaksi di Fumolastore.id!">
@endsection

@section('slider')
    <section id="hero" class="relative w-full overflow-visible py-8 sm:py-10 md:py-12 lg:py-14 bg-secondary-900">
        <div class="container mx-auto px-0 sm:px-4">
            <div class="swiper hero-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide lg:w-[1000px]">
                        <img src="/web/img/banner-puasa.webp" class="block h-auto w-full rounded-3xl" alt="banner" />
                    </div>
                    <div class="swiper-slide lg:w-[1000px]">
                        <img src="/web/img/banner-1.webp" class="block h-auto w-full rounded-3xl" alt="banner" />
                    </div>
                    <div class="swiper-slide lg:w-[1000px]">
                        <img src="/web/img/banner-2.webp" class="block h-auto w-full rounded-3xl" alt="banner" />
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
                            d=" M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z">
                        </path>
                    </svg>
                    <span class="text-xl lg:text-2xl font-semibold uppercase leading-[26px] tracking-[0.2em]">
                        Flash
                        Sale
                    </span>
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
                    <li class="swiper-slide w-[74px]" role="presentation">
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

@section('seo')
    <div class="container mx-auto">
        <div class="relative mb-6 md:mb-8 lg:mb-10 mt-6">
            <h2 class="mb-2 font-display text-3xl font-bold text-white lg:mb-3">
                Ingin Top Up Game Termurah? Fumola Store Jawabannya!
            </h2>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400">
                Hai, Gamer! Pernah merasa kesal karena kelewatan event menarik, karena kesulitan mendapatkan
                koin/diamond murah? Atau jangan-jangan malah merasa dompet menjerit karena harga top up yang melangit?
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Tenang, <a href="{{ route('index') }}">Fumola Store</a> hadir sebagai jawaban dari segala kerisauanmu.
                Dikenal sebagai tempat top up game
                termurah, kami siap menyalakan semangat bermainmu tanpa harus menguras kantong!
            </p>

            <h2 class="mb-2 font-display text-3xl font-bold text-white lg:mb-3 mt-3">
                Kenapa Memilih Kami untuk Top Up Game?
            </h2>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Di era digital yang serba cepat ini, top up game bukan hanya tentang mengisi saldo. Ini tentang
                kecepatan, keamanan, dan tentu saja harga yang ramah di kantong.
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Fumola Store mengerti betul akan hal itu …
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Sebagai agen top up game termurah, <b>kami menawarkan lebih dari sekedar top up!</b> Tapi, kami juga
                menawarkan pengalaman.
            </p>
            <h3 class="mb-2 font-display text-3xl font-bold text-white lg:mb-3 mt-3">
                Keuntungan Top Up Game di Fumola Store:
            </h3>
            <ol class="text-gray-500 dark:text-gray-400">
                <li>
                    <b>Harga Bersahabat:</b> Kami percaya, bermain game adalah hak semua orang. Oleh karena itu, Fumola
                    Store
                    menyediakan top up dengan harga yang tidak hanya murah, tapi juga adil.
                    Kami bekerja keras untuk memberikan penawaran terbaik, sehingga setiap gamer dapat terus bermain tanpa
                    beban.
                </li>
                <li class="mt-3">
                    <b>Kecepatan Layanan:</b> Kami mengerti, di dunia gaming, setiap detik sangatlah berharga. Keterlambatan
                    top up
                    bisa berarti kehilangan momen penting dalam game, baik kehabisan kredit, terlewatkan event menarik, dll.
                    Sebagai situs top up game termurah dan terpercaya, kami memberikan proses eksekusi yang cepat dan mudah.
                </li>
                <li class="mt-3">
                    <b>Keamanan Terjamin:</b> Dalam melakukan top up, keamanan data adalah prioritas. Fumola Store
                    menggunakan
                    sistem keamanan terkini untuk menjaga informasi pribadi dan transaksimu. Bermain game jadi lebih nyaman
                    tanpa kekhawatiran!
                </li>
            </ol>
            <h2 class="mb-2 font-display text-3xl font-bold text-white lg:mb-3 mt-3">
                Kamu Bisa Top Up dengan Harga Murah untuk Banyak Game!
            </h2>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Fumola Store tidak hanya situs top up game termurah, tapi juga terlengkap. Kami menyediakan berbagai pilihan
                game populer, seperti:
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                <b>Mobile Legends Bang Bang, PUBG Mobile Indonesia, Free Fire,
                    Call of Duty Mobile, League of Legends Wild Rift, Lifeafter, Clash of Clans, Dragon Raja (SEA), Eggy
                    Party,
                    Genshin Impact, Hay Day, Honkai Star Rail, Love Nikki, Ludo Club, Metal Slug Awakening, Ragnarok Origin,
                    Sausage Man, Stumble Guys, Tower of Fantasy, Undawn, Valorant, Zepetto, Bigo Live, Lita</b>
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Setiap game memiliki variasi top up yang bisa disesuaikan dengan kebutuhanmu, mulai dari nominal kecil
                hingga paket besar.
            </p>
            <h3 class="mb-2 font-display text-2xl font-bold text-white lg:mb-3 mt-3">
                Bagaimana Cara Mudah Top Up Game Murah di Fumola Store ?
            </h3>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Top up di Fumola Store itu gampang banget! Ikuti langkah simpel ini :
            </p>
            <ol class="text-gray-500 dark:text-gray-400 mt-3">
                <li>1. Kunjungi website Fumola Store dan pilih game yang ingin di-top up.</li>
                <li>2. Masukkan ID game dan pilih nominal top up.</li>
                <li>3. Pilih metode pembayaran yang kamu inginkan. Kami menyediakan berbagai pilihan, dari transfer bank
                    maupun
                    e-wallet.</li>
                <li>4. Konfirmasi dan selesaikan pembayaran.</li>
                <li>5. Saldo game kamu langsung terisi dan siap bertarung kembali!</li>
            </ol>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                <b>Gimana, cara top up game termurah itu gampang banget, kan?</b> Nggak nyampe 10 detik, saldo game kamu
                udah masuk.
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Jadi, tak perlu ragu lagi, karena banyak gamer telah merasakan manfaat dari layanan Fumola Store.
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Dari kecepatan transaksi hingga support yang responsif, kami selalu berusaha memberikan yang terbaik. "Top
                up game termurah dan terpercaya," itu yang mereka katakan tentang kami.
            </p>
            <h2 class="mb-2 font-display text-3xl font-bold text-white lg:mb-3 mt-3">
                Hati-Hati Penipuan!
            </h2>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Di tengah kemudahan top up game yang ditawarkan oleh agen top up game termurah, penting bagi kita semua
                untuk tetap waspada terhadap berbagai bentuk penipuan yang marak terjadi.
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Sebagai situs top up game termurah dan terpercaya, kami ingin memastikan pengalaman bermain game kamu tidak
                hanya menyenangkan, tapi juga aman.
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Berikut adalah beberapa hal yang perlu diwaspadai :
            </p>
            <h3 class="mb-2 font-display text-2xl font-bold text-white lg:mb-3 mt-3">
                1. Phishing dan Perampasan Data
            </h3>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Salah satu metode penipuan yang sering terjadi adalah phishing, di mana pelaku mencoba mendapatkan data
                sensitif seperti username, password, dan informasi pembayaran dengan menyamar sebagai entitas terpercaya.
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Ingat, Fumola Store tidak akan pernah meminta data pribadimu melalui email atau pesan tidak resmi.
            </p>
            <h3 class="mb-2 font-display text-2xl font-bold text-white lg:mb-3 mt-3">
                2. Situs Top Up Game Murah Palsu
            </h3>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Penipu seringkali membuat situs yang mirip dengan situs resmi untuk menipu pengguna. Pastikan kamu selalu
                mengakses Fumola Store melalui alamat web resmi kami.
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Periksa URL di browsermu dan pastikan tidak ada kesalahan ketik atau karakter yang mencurigakan.
            </p>
            <h3 class="mb-2 font-display text-2xl font-bold text-white lg:mb-3 mt-3">
                3. Tawaran yang Terlalu Menggiurkan
            </h3>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Waspada terhadap tawaran top up game dengan harga yang tidak realistis. Jika sebuah tawaran terdengar
                terlalu bagus untuk menjadi kenyataan, kemungkinan besar itu adalah penipuan.
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Fumola Store menawarkan harga yang kompetitif dan transparan tanpa biaya tersembunyi.
            </p>
            <h3 class="mb-2 font-display text-2xl font-bold text-white lg:mb-3 mt-3">
                4. Modus Penipuan Lainnya
            </h3>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Penipuan bisa datang dalam berbagai bentuk, termasuk namun tidak terbatas pada, penawaran eksklusif melalui
                pesan pribadi, aplikasi top up palsu, atau bahkan melalui media sosial. Selalu gunakan akal sehat dan
                lakukan verifikasi sebelum melakukan transaksi.
            </p>
            <h3 class="mb-2 font-display text-3xl font-bold text-white lg:mb-3 mt-3">
                Gimana Sih, Tips Menghindari Penipuan Agen Top Up Game Termurah di Indonesia?
            </h3>
            <ol class="text-gray-500 dark:text-gray-400 mt-3">
                <li>
                    1. <b>Gunakan Sumber Terpercaya:</b> Selalu lakukan top up melalui sumber yang terpercaya seperti Fumola
                    Store.
                    Jangan tergiur dengan tawaran dari sumber tidak dikenal.
                </li>
                <li>
                    2. <b>Periksa Keamanan Situs:</b> Pastikan website tempatmu melakukan top up menggunakan protokol HTTPS
                    untuk keamanan datamu.
                </li>
                <li>
                    3. <b>Jangan Bagikan Informasi Pribadi:</b> Jaga kerahasiaan data pribadi dan informasi pembayaranmu.
                    Fumola Store tidak akan meminta informasi sensitif melalui kanal tidak resmi.
                </li>
                <li>
                    4. <b>Gunakan Password yang Kuat:</b> Pastikan akun game dan emailmu dilindungi dengan password yang
                    kuat dan unik.
                </li>
                <li>
                    5. <b>Update Regular:</b> Pastikan software dan aplikasi game kamu selalu diperbarui untuk menghindari
                    celah keamanan.
                </li>
            </ol>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Jadi, bermain game harusnya menyenangkan dan aman. Di Fumola Store, kami berkomitmen untuk menyediakan
                layanan top up game yang tidak hanya murah dan cepat, tapi juga paling aman.
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                <mark>
                    Ingatlah selalu tips keamanan ini dan jadilah gamer yang cerdas. Jangan biarkan penipuan mengganggu
                    keseruan bermain game kamu. Bersama Fumola Store, nikmati permainan tanpa batas dan tanpa rasa khawatir!
                </mark>
            </p>
            <h2 class="mb-2 font-display text-3xl font-bold text-white lg:mb-3 mt-3">
                Keamanan dan Kepercayaan Top Up di Fumola Store Sudah Tersertifikasi!
            </h2>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Di Fumola Store, kami tidak hanya berkomitmen untuk menyediakan layanan top up game termurah dan proses yang
                cepat. Lebih dari itu, keamanan dan kepercayaan pelanggan adalah prioritas utama kami.
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Untuk itu, kami bangga mengumumkan bahwa Fumola Store memiliki sertifikasi keamanan digital yang diakui,
                menegaskan komitmen kami dalam menjaga standar keamanan tertinggi.
            </p>
            <h3 class="mb-2 font-display text-3xl font-bold text-white lg:mb-3 mt-3">
                Keamanan Transaksi Adalah Komitmen Utama Kami
            </h3>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Kami melakukan praktik keamanan yang ketat! Mulai dari enkripsi data hingga protokol keamanan terbaru.
                Pokoknya semua aspek di Fumola Store dirancang untuk menjaga keamanan informasi pribadi dan transaksi
                pelanggan.
            </p>
            <h3 class="mb-2 font-display text-3xl font-bold text-white lg:mb-3 mt-3">
                Tanggung Jawab Penuh Atas Semua Transaksi
            </h3>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Lebih jauh, <b>kami bertanggung jawab penuh atas semua transaksi yang terjadi di fumolastore.id.</b> Setiap
                transaksi top up game murah yang kamu lakukan dijamin aman, dan kami siap memberikan dukungan penuh apabila
                terjadi masalah.
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Tim dukungan pelanggan kami yang ramah dan profesional selalu siap membantumu 24/7, memastikan setiap isu
                yang muncul dapat segera diselesaikan.
            </p>
            <h3 class="mb-2 font-display text-3xl font-bold text-white lg:mb-3 mt-3">
                Kepercayaan Pelanggan adalah Modal Kami
            </h3>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Kepercayaan pelanggan adalah aset terbesar kami. Fumola Store juga memahami bahwa dalam industri top up
                game, kepercayaan pelanggan adalah kunci kesuksesan.
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Oleh karena itu, kami berkomitmen untuk terus memperbarui dan meningkatkan sistem keamanan kami, serta
                menjaga transparansi dalam setiap layanan yang kami tawarkan.
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                <mark>
                    Kesimpulannya, Fumola Store bukan hanya tentang top up game termurah atau layanan cepat. Tapi ini adalah
                    tentang membangun hubungan kepercayaan dengan setiap gamer.
                </mark>
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Dengan sertifikasi keamanan yang diakui dan komitmen kami untuk bertanggung jawab penuh atas setiap
                transaksi, kami berharap kamu bisa bertransaksi dengan penuh keyakinan.
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                Bergabunglah dengan ribuan gamer lain yang telah menjadikan Fumola Store sebagai pilihan utama mereka untuk
                top up game. Rasakan sendiri keamanan, kenyamanan, dan kepuasan bertransaksi di Fumola Store!
            </p>
            <p class="mb-0 max-w-screen-lg text-sm lg:text-base font-body text-gray-500 dark:text-gray-400 mt-3">
                <b>Fumolastore.id, website top up game termurah dan terpercaya sejagat raya!</b>
            </p>
        </div>
    </div>
@endsection
