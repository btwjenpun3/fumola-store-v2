<div>
    <section class="shadow-9xl bg-secondary-900 px-4 py-5 sm:rounded-lg">
        <div class="flex w-full space-x-2 border-b border-b-white/10 pb-2">
            <div class="flex items-center space-x-2 text-lg font-extrabold text-white leading-6 md:text-xl">
                <div class="shadow-9xl rounded-b-full bg-secondary-dark px-3 pb-2 pt-1 text-white">
                    3</div>
                <span>Pilih Pembayaran</span>
            </div>
        </div>
        <div class="block my-4 space-y-4">
            <label for="promoCode" class="block text-sm font-semibold text-white">Kode
                Promo</label>
            <div class="relative rounded-md">
                <div class="relative w-full rounded-xl">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-5 w-5 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z">
                            </path>
                        </svg>
                    </div>
                    <input type="text" id="promoCode" name="promo_code" placeholder="Masukkan Kode Promo"
                        class="z-20 block h-10 w-full rounded-lg p-2.5 pl-10 text-sm uppercase text-black focus:outline-none focus:ring-2 focus:ring-primary-700" />
                    <button type="submit" disabled=""
                        class="hover:cursor-not-allowed absolute right-0 top-0 h-10 rounded-r-lg bg-primary-700 p-2.5 text-white text-sm font-semibold uppercase tracking-wider">
                        Gunakan
                    </button>
                </div>
            </div>
        </div>
        <dl id="accordion-collapse" data-accordion="collapse" class="flex w-full flex-col space-y-4" wire:ignore>
            <div
                class="flex w-full transform flex-col justify-between overflow-hidden rounded-lg text-left text-sm font-medium text-white duration-300 focus:outline-none">
                <dt id="ewallet-accordion">
                    <button type="button"
                        class="flex w-full items-center justify-between px-4 py-2.5 text-left text-base font-medium !bg-[#1c2025] text-white hover:bg-[#1c2025]"
                        data-accordion-target="#ewallet-accordion-body" aria-expanded="false"
                        aria-controls="ewallet-accordion-body">
                        <span>eWallet</span>
                        <svg data-accordion-icon class="h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div class="flex justify-end px-4 py-1.5 w-full bg-gray-200">
                        <img src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vcash/qris-e285-original-b472-original.webp"
                            class="w-auto h-8 object-contain" alt="" />
                    </div>
                </dt>
                <dd id="ewallet-accordion-body" class="hidden -mt-11" aria-labelledby="ewallet-accordion">
                    <div class="bg-gray-200 px-4 pb-4 pt-2 text-sm text-secondary-300">
                        <ul role="radiogroup"
                            class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                            @foreach ($ewallet as $e)
                                <li class="relative" role="radio" aria-checked="false" tabindex="0">
                                    <input type="radio" id="{{ $e->payment_method }}" name="payment"
                                        value="{{ $e->payment_method }}" class="peer hidden"
                                        wire:click="$dispatch('set-payment', { payment: '{{ $e->payment_method }}'})">
                                    <label for="{{ $e->payment_method }}"
                                        class="group relative flex cursor-pointer items-end overflow-hidden rounded-lg border border-transparent bg-white p-2.5 text-gray-700 outline-none peer-checked:ring-2 peer-checked:ring-primary-700 md:p-3">
                                        <span class="flex flex-1">
                                            <span class="flex flex-col items-start w-full">
                                                <img src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vcash/qris-e285-original-b472-original.webp"
                                                    class="h-4 object-contain object-bottom mb-2"
                                                    style="color: transparent" alt="Logo" />
                                                <span
                                                    class="block min-h-[32px] text-sm font-semibold text-black w-full">
                                                    <div id="{{ $e->payment_method }}_"></div>
                                                </span>
                                                <span
                                                    class="flex flex-wrap border-t-2 pt-2 text-xs font-semibold w-full">
                                                    {{ $e->name }}
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                    <div
                                        class="absolute right-0 top-0 rounded-bl-full overflow-hidden rounded-tr-[2000px] bg-primary-700 p-1 pb-2 pl-2 text-white hidden peer-checked:block">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 16 16" class="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z">
                                            </path>
                                        </svg>
                                    </div>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </dd>
            </div>
            <div
                class="flex w-full transform flex-col justify-between overflow-hidden rounded-lg text-left text-sm font-medium text-white duration-300 focus:outline-none">
                <dt id="virtual-account-accordion">
                    <button type="button"
                        class="flex w-full items-center justify-between px-4 py-2.5 text-left text-base font-medium !bg-[#1c2025] text-white hover:bg-[#1c2025]"
                        data-accordion-target="#virtual-account-accordion-body" aria-expanded="false"
                        aria-controls="virtual-account-accordion-body">
                        <span>Virtual Account</span>
                        <svg data-accordion-icon class="h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div class="flex justify-end items-center px-4 py-1.5 w-full bg-gray-200">
                        <div class="opacity-100">
                            <img src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vcash/pay-bri-saved.png"
                                class="h-8 object-contain" alt="BRI" />
                        </div>
                        <div class="opacity-100">
                            <img src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vcash/pay-bni-saved.png"
                                class="h-8 object-contain" alt="BNI" />
                        </div>
                        <div class="opacity-100">
                            <img src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vcash/pay-mandiri-saved.png"
                                class="h-8 object-contain" alt="Mandiri" />
                        </div>
                        <div class="opacity-100">
                            <img src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vcash/pay-maybank-va-saved.webp"
                                class="h-8 object-contain" alt="Maybank" />
                        </div>
                    </div>
                </dt>
                <dd id="virtual-account-accordion-body" class="hidden -mt-11"
                    aria-labelledby="virtual-account-accordion">
                    <div class="bg-gray-200 px-4 pb-4 pt-2 text-sm text-secondary-300">
                        <ul role="radiogroup"
                            class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                            @foreach ($va as $v)
                                <li class="relative" role="radio" aria-checked="false" tabindex="0">
                                    <input type="radio" id="{{ $v->payment_method }}" name="payment"
                                        value="{{ $v->payment_method }}" class="peer hidden"
                                        wire:click="$dispatch('set-payment', { payment: '{{ $v->payment_method }}'})">
                                    <label for="{{ $v->payment_method }}"
                                        class="group relative flex cursor-pointer items-end overflow-hidden rounded-lg border border-transparent bg-white p-2.5 text-gray-700 outline-none peer-checked:ring-2 peer-checked:ring-primary-700 md:p-3">
                                        <span class="flex flex-1">
                                            <span class="flex flex-col items-start w-full">
                                                <img src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vcash/pay-bri-saved.png"
                                                    class="h-4 object-contain object-bottom mb-2"
                                                    style="color: transparent" alt="Logo" />
                                                <span
                                                    class="block min-h-[32px] text-sm font-semibold text-black w-full">
                                                    <div id="{{ $v->payment_method }}_"></div>
                                                </span>
                                                <span
                                                    class="flex flex-wrap border-t-2 pt-2 text-xs font-semibold w-full">
                                                    {{ $v->name }}
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                    <div
                                        class="absolute right-0 top-0 rounded-bl-full overflow-hidden rounded-tr-[2000px] bg-primary-700 p-1 pb-2 pl-2 text-white hidden peer-checked:block">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 16 16" class="w-2.5 h-2.5"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z">
                                            </path>
                                        </svg>
                                    </div>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </dd>
            </div>
            <div
                class="flex w-full transform flex-col justify-between overflow-hidden rounded-lg text-left text-sm font-medium text-white duration-300 focus:outline-none">
                <dt id="convenience-accordion">
                    <button type="button"
                        class="flex w-full items-center justify-between px-4 py-2.5 text-left text-base font-medium !bg-[#1c2025] text-white hover:bg-[#1c2025]"
                        data-accordion-target="#convenience-accordion-body" aria-expanded="false"
                        aria-controls="convenience-accordion-body">
                        <span>Toserba</span>
                        <svg data-accordion-icon class="h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div class="flex justify-end px-4 py-1.5 w-full bg-gray-200">
                        <img src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vcash/pay-alfamart-saved.png"
                            class="w-auto h-8 object-contain" alt="" />
                    </div>
                </dt>
                <dd id="convenience-accordion-body" class="hidden -mt-11" aria-labelledby="convenience-accordion">
                    <div class="bg-gray-200 px-4 pb-4 pt-2 text-sm text-secondary-300">
                        <ul role="radiogroup"
                            class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                            <li class="relative" role="radio" aria-checked="false" tabindex="0">
                                <input type="radio" id="alfa" name="payment" value="alfa"
                                    class="peer hidden">
                                <label for="alfa"
                                    class="group relative flex cursor-pointer items-end overflow-hidden rounded-lg border border-transparent bg-white p-2.5 text-gray-700 outline-none peer-checked:ring-2 peer-checked:ring-primary-700 md:p-3">
                                    <span class="flex flex-1">
                                        <span class="flex flex-col items-start w-full">
                                            <img src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vcash/pay-alfamart-saved.png"
                                                class="h-4 object-contain object-bottom mb-2"
                                                style="color: transparent" alt="Logo" />
                                            <span class="block min-h-[32px] text-sm font-semibold text-black w-full">
                                                <div id="ALFAMART_"></div>
                                            </span>
                                            <span class="flex flex-wrap border-t-2 pt-2 text-xs font-semibold w-full">
                                                Alfamart
                                            </span>
                                        </span>
                                    </span>
                                </label>
                                <div
                                    class="absolute right-0 top-0 rounded-bl-full overflow-hidden rounded-tr-[2000px] bg-primary-700 p-1 pb-2 pl-2 text-white hidden peer-checked:block">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                        viewBox="0 0 16 16" class="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z">
                                        </path>
                                    </svg>
                                </div>
                            </li>
                        </ul>
                    </div>
                </dd>
            </div>
        </dl>
    </section>

    @script
        <script>
            $wire.on('update-qris', (data) => {
                document.getElementById('QRIS_').innerText = formatRupiah(data);
            });
            $wire.on('update-dana', (data) => {
                document.getElementById('ID_DANA_').innerText = formatRupiah(data);
            });
            $wire.on('update-shopee', (data) => {
                document.getElementById('ID_SHOPEEPAY_').innerText = formatRupiah(data);
            })
            $wire.on('update-link-aja', (data) => {
                document.getElementById('ID_LINKAJA_').innerText = formatRupiah(data);
            })
            $wire.on('update-astra-pay', (data) => {
                document.getElementById('ID_ASTRAPAY_').innerText = formatRupiah(data);
            })
            $wire.on('update-ovo', (data) => {
                document.getElementById('ID_OVO_').innerText = formatRupiah(data);
            })
            $wire.on('update-bca', (data) => {
                document.getElementById('BCA_').innerText = formatRupiah(data);
            })
            $wire.on('update-bni', (data) => {
                document.getElementById('BNI_').innerText = formatRupiah(data);
            })
            $wire.on('update-bri', (data) => {
                document.getElementById('BRI_').innerText = formatRupiah(data);
            })
            $wire.on('update-bjb', (data) => {
                document.getElementById('BJB_').innerText = formatRupiah(data);
            })
            $wire.on('update-bsi', (data) => {
                document.getElementById('BSI_').innerText = formatRupiah(data);
            })
            $wire.on('update-alfamart', (data) => {
                document.getElementById('ALFAMART_').innerText = formatRupiah(data);
            });
        </script>
    @endscript
</div>
