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
                                    <h3 class="text-lg font-extrabold leading-6 text-white">{{ $game->nama }}</h3>
                                    <p class="text-xs font-medium leading-6 text-gray-200">{{ $game->brand }}</p>
                                </div>
                            </div>
                            <div class="max-h-32 transition-all">
                                <article
                                    class="h-32 overflow-hidden prose prose-headings:m-0 prose-h1:text-base prose-h2:text-base prose-h3:text-sm prose-h4:text-sm prose-p:m-0 prose-p:text-xs prose-li:m-0 prose-li:text-xs">
                                    <p class="text-white !my-2">Cara Pesan Top Up Diamond {{ $game->nama }} :</p>
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

                        @livewire('web.order.player-info-1-form')

                        @livewire('web.order.nominal', ['game' => $game])

                        @livewire('web.order.payment')

                        @livewire('web.order.confirm')
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@section('js')
    <script>
        function formatRupiah(angka) {
            var number_string = angka.toString();
            var split = number_string.split(',');
            var sisa = split[0].length % 3;
            var rupiah = split[0].substr(0, sisa);
            var ribuan = split[0].substr(sisa).match(/\d{3}/gi);

            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }

            rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
            return 'Rp ' + rupiah + ',-';
        }
    </script>
@endsection
