<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    @yield('title')
    <link rel="icon" type="image/x-icon" href="{{ asset(Storage::url('assets/favicon.ico')) }}">
    <!-- CSS files -->
    <link href="/realm/css/tabler.min.css?1684106062" rel="stylesheet" />
    <link href="/realm/css/tabler-flags.min.css?1684106062" rel="stylesheet" />
    <link href="/realm/css/tabler-payments.min.css?1684106062" rel="stylesheet" />
    <link href="/realm/css/tabler-vendors.min.css?1684106062" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css"
        integrity="sha512-3pIirOrwegjM6erE5gPSwkUzO+3cTjpnV9lexlNZqvupR64iZBnOOTiiLPb9M36zpMScbmUNIcHUqKD47M719g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        @import url('https://rsms.me/inter/inter.css');

        :root {
            --tblr-font-sans-serif: 'Inter Var', -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
        }

        body {
            font-feature-settings: "cv03", "cv04", "cv11";
        }
    </style>
    @livewireStyles
    @yield('css')
</head>

<body>
    <div class="page">

        <!-- Menu Partial Layout -->
        @include('realm.partials.navbar')
        <!-- Menu Partial Layout -->
        <div class="page-wrapper">

            @yield('header')

            <!-- Page body -->
            <div class="page-body">
                <div class="container-xl">

                    @yield('content')

                </div>
            </div>

            <!-- Footer Layout -->
            @include('realm.partials.footer')

        </div>
    </div>

    @livewireScripts
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"
        integrity="sha512-VEd+nq25CkR676O+pLBnDW09R7VQX9Mdiij052gVCp5yVH3jGtH70Ho/UUv4mJDsEdTvqRCFZg0NKGiojGnUCw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="/realm/js/tabler.min.js?1684106062" defer></script>
    @yield('js')

</body>

</html>
