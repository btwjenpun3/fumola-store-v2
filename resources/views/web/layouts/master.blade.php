<!DOCTYPE html>
<html class="no-js" lang="en">

<head>
    <!-- Meta Tags -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description"
        content="VCASH merupakan platform layanan Top Up Game termurah dan terpercaya di Indonesia yang direkomendasikan Influencer Game &amp; Pro Player. Tersedia berbagai macam game untuk mempermudah transaksi pembelian. Pembelian instan langsung masuk tanpa registrasi." />
    <meta name="keywords"
        content="top up game, top up, top up cepat, top up murah, top up termurah, mobile legends, free fire, pubg mobile, honkai, genshin, dragon nest" />
    <meta name="robots" content="index,follow" />
    <!-- Meta Tags End -->
    <!-- Web Title -->
    <title>Topup Game Termurah, Cepat, dan Dijamin Aman | VCASH.ID</title>
    <!-- Web Title End -->
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" />
    <!-- Google Fonts End -->
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/web/img/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/web/img/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/web/img/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/web/img/favicon/site.webmanifest" />
    <!-- Favicon End -->
    <!-- Styles -->
    <link rel="stylesheet" href="/web/css/style.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
    @yield('css')
    <!-- Styles End -->
    @livewireStyles
</head>

<body class="antialiased">
    <div class="block bg-dark pt-14 md:pt-[70px]">

        <!-- Header -->
        @include('web.partials.header')
        <!-- Header End -->

        <!-- Navigation -->
        @include('web.partials.navbar')
        <!-- Navigation End -->

        <!-- Main Content -->

        <!-- Hero Section -->
        @yield('slider')
        <!-- Hero Section End -->

        <!-- Flash Sale Section -->
        @yield('flash-sale')
        <!-- Flash Sale Section End -->

        <!-- Recommendation Section -->
        @yield('recommendation')
        <!-- Recommendation Section End -->

        <!-- Content Product -->
        @yield('content')
        <!-- Content Product End -->

        <!-- Social Media Section -->
        @include('web.partials.social-media')
        <!-- Social Media Section End -->

        </main>
        <!-- Main Content End -->

        <!-- Footer -->
        @include('web.partials.footer')
        <!-- End Footer -->
    </div>

    <!-- Drawer -->
    @include('web.partials.drawer')
    <!-- Drawer End -->

    <!-- Search Modal -->
    @include('web.partials.search-modal')
    <!-- Search Modal End -->

    <!-- Call Center -->
    @include('web.partials.call-center')
    <!-- Call Center End -->
    @livewireScripts
    <!-- Scripts -->
    <script src="/web/js/scripts.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
    @yield('js')
    <!-- Scripts End -->
</body>

</html>
