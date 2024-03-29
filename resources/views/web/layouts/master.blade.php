<!DOCTYPE html>
<html class="no-js" lang="en">

<head>
    <!-- Meta Tags -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    @yield('description')
    <meta name="keywords"
        content="top up game, top up, top up cepat, top up murah, top up termurah, mobile legends, free fire, pubg mobile, honkai, genshin, dragon nest" />
    <meta name="robots" content="index,follow" />
    <!-- Meta Tags End -->
    <!-- Web Title -->
    @yield('title')
    <!-- Web Title End -->
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" />
    <!-- Google Fonts End -->
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="https://fumolastore.id/storage/assets/favicon.ico">
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
        <main class="relative">
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

            @yield('seo')

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
    <!-- Scripts -->
    <script src="/web/js/scripts.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
    @yield('js')
    @livewireScripts
    <!-- Scripts End -->
</body>

</html>
