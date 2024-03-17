<!-- Confirmation Modal -->
<div id="confirmation-modal" tabindex="-1"
    class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden p-4 md:inset-0">
    <div class="relative max-h-full w-full max-w-lg">
        <div
            class="relative rounded-xl bg-[#272b30] w-full overflow-hidden px-4 pb-4 pt-5 text-left text-textPrimary shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div class="gap-4 text-sm sm:flex sm:items-start">
                <div
                    class="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <img src="/web/img/icons/stacked.webp" alt="stacked" />
                </div>
                <div class="mt-3 w-full sm:mt-0 sm:text-left">
                    <h3 class="text-lg font-medium leading-6 text-white">
                        Detail Pesanan
                    </h3>
                    <div class="mt-2">
                        <p class="text-sm text-white">Mohon konfirmasi pesananmu sudah benar</p>
                    </div>
                    <div class="mt-2 space-y-2">
                        <div class="flex items-center gap-2">
                            <h4 class="font-semibold text-white">Data Player</h4>
                            <div class="flex-1 border-t-2 border-t-white"></div>
                        </div>
                        <div class="flex justify-between break-all">
                            <h4 class="flex-1 text-white">USER ID :</h4>
                            <h4 class="flex-1 text-right font-bold text-white">1436372992</h4>
                        </div>
                        <div class="flex justify-between break-all">
                            <h4 class="flex-1 text-white">ZONE ID :</h4>
                            <h4 class="flex-1 text-right font-bold text-white">15954</h4>
                        </div>
                        <div class="flex justify-between break-all">
                            <h4 class="flex-1 text-white">USERNAME :</h4>
                            <h4 class="flex-1 text-right font-bold text-white">tubagusco</h4>
                        </div>
                    </div>
                    <div class="mt-2 space-y-2">
                        <div class="flex items-center gap-2">
                            <h4 class="font-semibold text-white">Ringkasan Pembelian</h4>
                            <div class="flex-1 border-t-2 border-t-white"></div>
                        </div>
                        <div class="flex justify-between break-words">
                            <h4 class="flex-1 text-white">Harga:</h4>
                            <h4 class="flex-1 text-right font-bold text-white">Rp 1.562,-</h4>
                        </div>
                        <div class="flex justify-between break-words">
                            <h4 class="flex-1 text-white">Nomor WhatsApp:</h4>
                            <h4 class="flex-1 text-right font-bold text-white">081385201032</h4>
                        </div>
                        <div class="flex justify-between break-words">
                            <h4 class="flex-1 text-white">Sistem Pembayaran:</h4>
                            <h4 class="flex-1 text-right font-bold text-white">QRIS untuk semua pembayaran</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <a href="/checkout.html"
                    class="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:opacity-80 focus:outline-none disabled:cursor-not-allowed sm:ml-3 sm:w-auto sm:text-sm">
                    Beli Sekarang
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                        aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
                <button type="button" data-modal-hide="confirmation-modal"
                    class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm">
                    Batalkan
                </button>
            </div>
        </div>
    </div>
</div>
