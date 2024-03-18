<div>
    <section class="shadow-9xl bg-secondary-900 px-4 py-5 sm:rounded-lg">
        <div class="flex w-full space-x-2 border-b border-b-white/10 pb-2">
            <div class="flex items-center space-x-2 text-lg font-extrabold text-white leading-6 md:text-xl">
                <div class="shadow-9xl rounded-b-full bg-secondary-dark px-3 pb-2 pt-1 text-white">
                    4</div>
                <span>Beli!</span>
            </div>
        </div>
        <div class="mt-4 space-y-3">
            <div class="relative rounded-md shadow-sm">
                <input min="5" type="text" name="phoneNumber" placeholder="08xxxxxxxxx"
                    class="block w-full rounded-lg border-gray-300 text-black shadow-sm focus:border-primary-700 focus:ring-primary-700 sm:text-sm"
                    wire:model="phone">
                <p class="mt-2 text-xs text-white/70">
                    Bukti pembelianmu akan kami kirimkan ke WhatsApp. Pastikan nomor
                    handphone yang di input aktif
                </p>
            </div>
        </div>
        <button type="button"
            class="inline-flex mt-4 items-center gap-2 rounded-lg border border-transparent bg-primary-700 px-6 py-3 text-sm font-medium leading-4 text-white shadow-sm hover:opacity-80 focus:outline-none disabled:cursor-not-allowed"
            data-modal-target="confirmation-modal" data-modal-toggle="confirmation-modal" wire:click="confirm"
            wire:loading.attr="disabled">
            Konfirmasi Top Up
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true"
                class="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
    </section>

    <!-- Confirmation Modal -->
    <div id="confirmation-modal" tabindex="-1"
        class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden p-4 md:inset-0"
        wire:ignore>
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
                                <h4 class="flex-1 text-right font-bold text-white">
                                    <div id="finalUserId"></div>
                                </h4>
                            </div>
                            <div class="flex justify-between break-all">
                                <h4 class="flex-1 text-white">ZONE ID :</h4>
                                <h4 class="flex-1 text-right font-bold text-white">
                                    <div id="finalServerId"></div>
                                </h4>
                            </div>
                        </div>
                        <div class="mt-2 space-y-2">
                            <div class="flex items-center gap-2">
                                <h4 class="font-semibold text-white">Ringkasan Pembelian</h4>
                                <div class="flex-1 border-t-2 border-t-white"></div>
                            </div>
                            <div class="flex justify-between break-words">
                                <h4 class="flex-1 text-white">Harga:</h4>
                                <h4 class="flex-1 text-right font-bold text-white">
                                    <div id="finalPrice"></div>
                                </h4>
                            </div>
                            <div class="flex justify-between break-words">
                                <h4 class="flex-1 text-white">Nomor WhatsApp:</h4>
                                <h4 class="flex-1 text-right font-bold text-white">
                                    <div id="phone"></div>
                                </h4>
                            </div>
                            <div class="flex justify-between break-words">
                                <h4 class="flex-1 text-white">Sistem Pembayaran:</h4>
                                <h4 class="flex-1 text-right font-bold text-white">
                                    <div id="finalPaymentMethod"></div>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                        class="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:opacity-80 focus:outline-none disabled:cursor-not-allowed sm:ml-3 sm:w-auto sm:text-sm"
                        wire:click="process" wire:loading.attr="disabled">
                        Beli Sekarang
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                            aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <button type="button" data-modal-hide="confirmation-modal"
                        class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm">
                        Batalkan
                    </button>
                </div>
            </div>
        </div>
    </div>

    @script
        <script>
            $wire.on('final-user-id-set', (data) => {
                document.getElementById('finalUserId').innerText = data;
            });
            $wire.on('final-server-id-set', (data) => {
                document.getElementById('finalServerId').innerText = data;
            });
            $wire.on('final-price-set', (data) => {
                document.getElementById('finalPrice').innerText = formatRupiah(data);
            });
            $wire.on('final-payment-method-set', (data) => {
                document.getElementById('finalPaymentMethod').innerText = data;
            });
            $wire.on('final-phone-id-set', (data) => {
                document.getElementById('phone').innerText = data;
            });
            $wire.on('success', (data) => {
                Toastify({
                    text: data,
                    close: true,
                    gravity: "top",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                        background: "green",
                    }
                }).showToast();
            });
            $wire.on('requirement-not-meet', (data) => {
                Toastify({
                    text: data,
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                        background: "red",
                    }
                }).showToast();
            });
        </script>
    @endscript
</div>
