@extends('web.layouts.master')

@section('content')
    <!-- Checkout Section -->
    <section id="checkout" class="relative flex w-full items-end py-10 bg-custom-gd sm:py-12 md:py-16 lg:py-20">
        <div class="container mx-auto">
            <div class="grow gap-8 pt-4 lg:flex">
                <div>
                    <div class="h-full lg:w-80">
                        <div class="text-center">
                            @if ($data->status === 'PAID')
                                <div class="mb-4 flex w-full max-w-xs justify-center">
                                    <img class="h-full w-full object-cover"
                                        src="/web/img/illustrations/transaction-success.gif"
                                        alt="transaction success animated" />
                                </div>
                                <h5 class="text-2xl font-bold text-white">Pesanan berhasil</h5>
                            @elseif($data->status === 'EXPIRED')
                                <div class="mb-4 flex w-full max-w-xs justify-center">
                                    <img class="h-full w-full object-cover"
                                        src="/web/img/illustrations/transaction-failed.gif"
                                        alt="transaction success animated" />
                                </div>
                                <h5 class="text-2xl font-bold text-white">Pesanan berhasil</h5>
                            @else
                                <div class="text-center">
                                    <h3 class="text-lg font-bold text-white">Menunggu Pembayaran</h3>
                                    <p class="text-textPrimary text-white">Selesaikan Pembayaranmu Dalam</p>
                                </div>
                                <div class="mt-4">
                                    <div class="relative mx-auto w-72">
                                        <div class="px-4">
                                            <dl class="grid grid-cols-3 rounded-lg ring-2 ring-gray-400 text-white">
                                                <div class="flex flex-col p-6 text-center border">
                                                    <dt class="order-2 mt-2 text-sm font-medium">Jam</dt>
                                                    <dd class="order-1 text-4xl font-bold">00</dd>
                                                </div>
                                                <div class="flex flex-col p-6 text-center border">
                                                    <dt class="order-2 mt-2 text-sm font-medium">Menit</dt>
                                                    <dd class="order-1 text-4xl font-bold">48</dd>
                                                </div>
                                                <div class="flex flex-col p-6 text-center border">
                                                    <dt class="order-2 mt-2 text-sm font-medium">Detik</dt>
                                                    <dd class="order-1 text-4xl font-bold">59</dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="shadow-form mt-4 flex items-center justify-center rounded-lg bg-backgroundDetailOrder p-4 shadow-sm">
                                    <h6 class="font-semibold text-textPrimary text-white">Proses Saldo Masuk ke Akun : 1 -
                                        10 Menit
                                    </h6>
                                </div>
                                @switch($data->payment->payment_type)
                                    @case('EWALLET')
                                        @switch($data->payment->payment_method)
                                            @case('DANA')
                                            @break

                                            @default
                                        @endswitch
                                    @break

                                    @case('QRIS')
                                        <div class="shadow-form mb-4 flex justify-center rounded-lg bg-white py-4">
                                            <h6 class="font-semibold text-textPrimary text-white">
                                                <img src="data:image/png;base64, {!! base64_encode(
                                                    QrCode::format('png')->size(300)->generate($data->qr->xendit_qr_string),
                                                ) !!} ">
                                            </h6>
                                        </div>
                                    @break

                                    @case('VA')
                                        <div class="shadow-form my-4 rounded-lg bg-backgroundDetailOrder p-4 shadow-sm border">
                                            <div class="flex items-center justify-between text-white">
                                                <div>
                                                    <h5 class="font-medium text-textPrimary">Nama Virtual Account</h5>
                                                    <h5 class="font-bold text-red-600">{{ $data->va->xendit_va_name }}</h5>
                                                </div>
                                                <button>
                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        class="h-5 w-5 text-textPrimary" height="1em" width="1em"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="9" y="9" width="13" height="13" rx="2"
                                                            ry="2"></rect>
                                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="shadow-form my-4 rounded-lg bg-backgroundDetailOrder p-4 shadow-sm border">
                                            <div class="flex items-center justify-between text-white">
                                                <div>
                                                    <h5 class="font-medium text-textPrimary">Nomor Virtual Account</h5>
                                                    <h5 class="font-bold text-red-600">{{ $data->va->xendit_va_number }}</h5>
                                                </div>
                                                <button>
                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        class="h-5 w-5 text-textPrimary" height="1em" width="1em"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="9" y="9" width="13" height="13" rx="2"
                                                            ry="2"></rect>
                                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    @break

                                    @default
                                @endswitch
                            @endif
                        </div>
                    </div>
                </div>
                <div class="min-w-0 flex-1 xl:flex">
                    <div class="lg:min-w-0 lg:flex-1">
                        <div class="h-full py-4 md:py-0">
                            <div
                                class="bg-secondary-950 flex flex-wrap items-center justify-between rounded-lg px-4 sm:px-6 py-5 shadow-sm">
                                <div class="gap-8 break-all sm:flex">
                                    @livewire('simulate.qr-simulate', ['invoice' => $data->nomor_invoice])
                                    <div class="flex flex-col flex-wrap">
                                        @php
                                            use Carbon\Carbon;
                                            $originalDateTime = $data->created_at;
                                            $carbonDateTime = Carbon::parse($originalDateTime)->locale('id_ID');
                                            $formattedDateTime = $carbonDateTime->isoFormat(
                                                'dddd, D MMMM YYYY [Pukul] HH:mm:ss [WIB]',
                                            );
                                        @endphp
                                        <h5 class="font-medium text-gray-300 text-sm mb-1">Tanggal Pembelian</h5>
                                        <h5 class="font-bold text-white">{{ $formattedDateTime }}</h5>
                                    </div>
                                    <div class="flex flex-col flex-wrap">
                                        <h5 class="font-medium text-gray-300 text-sm mb-1">Nomor Invoice</h5>
                                        <div class="flex gap-3">
                                            <h5 class="font-bold text-white">{{ $data->nomor_invoice }}</h5>
                                            <button>
                                                <svg stroke="currentColor" fill="none" stroke-width="2"
                                                    viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="9" y="9" width="13" height="13" rx="2"
                                                        ry="2"></rect>
                                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 class="font-medium text-gray-300 text-sm mb-1">Metode pembayaran</h5>
                                        <div class="flex flex-wrap items-center gap-3">
                                            <h5 class="font-bold text-white">{{ $data->payment->name }}</h5>
                                            <img src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vcash/qris-e285-original-b472-original.webp"
                                                alt="QRIS untuk semua pembayaran" class="max-w-[80px] object-contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4 overflow-hidden break-all rounded-lg bg-secondary-950 shadow-sm">
                                <div class="flex flex-wrap items-center gap-4 px-4 py-5 sm:px-4">
                                    <img src="{{ asset(Storage::url($data->game->url_gambar)) }}"
                                        class="h-10 w-10 rounded-lg md:h-16 md:w-16" alt="Mobile Legends: Bang Bang" />
                                    <h3 class="text-lg font-bold leading-6 text-white">{{ $data->game->nama }}</h3>
                                </div>
                                <div class="border-t border-t-secondary-900">
                                    <dl class="border-b border-b-secondary-900 py-4 px-4 lg:px-6">
                                        <div class="pb-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-4">
                                            <h5 class="font-bold text-white">Detail</h5>
                                        </div>
                                        <div class="py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-2">
                                            <dt class="text-sm font-medium text-white">Item</dt>
                                            <dd class="mt-1 text-sm font-bold text-white sm:col-span-2 sm:mt-0">
                                                {{ $data->harga->nama_produk }}
                                            </dd>
                                        </div>
                                        <div class="py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-2">
                                            <dt class="text-sm font-medium text-white">USER ID :</dt>
                                            <dd class="mt-1 text-sm font-bold text-white sm:col-span-2 sm:mt-0">
                                                {{ $data->user_id }}
                                            </dd>
                                        </div>
                                        @if (isset($data->server_id))
                                            <div class="py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-2">
                                                <dt class="text-sm font-medium text-white">ZONE ID :</dt>
                                                <dd class="mt-1 text-sm font-bold text-white sm:col-span-2 sm:mt-0">
                                                    {{ $data->server_id }}
                                                </dd>
                                            </div>
                                        @endif
                                    </dl>
                                    <div class="flex flex-wrap justify-between py-4 px-4 lg:px-6">
                                        <h5 class="font-bold text-white">Total Pembayaran</h5>
                                        <div class="flex items-center space-x-2">
                                            <h5 class="font-bold text-red-600">
                                                {{ $call->formatRupiah($data->total) }}
                                            </h5>
                                            <button>
                                                <svg stroke="currentColor" fill="none" stroke-width="2"
                                                    viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                                    class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="9" y="9" width="13" height="13" rx="2"
                                                        ry="2"></rect>
                                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4 overflow-hidden rounded-lg bg-secondary-950 px-4 sm:px-6 py-5 shadow-sm">
                                <p class="text-base font-bold text-white md:text-lg">Pesanan belum masuk ?</p>
                                <p class="text-sm font-bold text-white">
                                    Hubungi customer service kami untuk melakukan konfirmasi pesanan
                                </p>
                                <div class="pt-5">
                                    <a target="_blank" rel="noreferrer" href="https://wa.me/6285290006649">
                                        <button type="button"
                                            class="h-full w-full rounded-lg border border-transparent bg-primary-700 px-6 py-3 text-sm font-semibold leading-4 text-white shadow-sm">
                                            Kontak kami
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@section('js')
    <script src="https://js.pusher.com/8.2.0/pusher.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/laravel-echo@1.11.2/dist/echo.iife.js"></script>
    <script>
        Pusher.logToConsole = true;
        var pusher = new Pusher('d4afa1b27ea54cbf1546', {
            cluster: 'ap1'
        });
        window.Echo = new Echo({
            broadcaster: 'pusher',
            key: 'd4afa1b27ea54cbf1546',
            cluster: 'ap1'
        });
        window.Echo.channel('topup-{{ $data->nomor_invoice }}')
            .listen('TopUpEvent', (event) => {
                Toastify({
                    text: event,
                    close: true,
                    gravity: "top",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                        background: "green",
                    }
                }).showToast();
            });
    </script>
@endsection
