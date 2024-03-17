<div>
    <section class="shadow-9xl bg-secondary-900 px-4 py-5 sm:rounded-lg">
        <div class="flex w-full space-x-2 border-b border-b-white/10 pb-2">
            <div class="flex items-center space-x-2 text-lg font-extrabold text-white leading-6 md:text-xl">
                <div class="shadow-9xl rounded-b-full bg-secondary-dark px-3 pb-2 pt-1 text-white">
                    2</div>
                <span>Pilih Nominal Top Up</span>
            </div>
        </div>
        <ul class="relative flex gap-3 mt-4" id="topups" data-tabs-toggle="#filterTopups" role="tablist" wire:ignore>
            @foreach ($tipe as $t)
                @php
                    $name = $t === 'Umum' ? 'diamond' : ($t === 'Membership' ? 'weekly' : 'twilight');
                @endphp
                <li class="splide__slide" role="presentation">
                    <button
                        class="relative flex h-full w-24 cursor-pointer text-white hover:text-white flex-col bg-[#303740] items-center justify-between rounded-xl md:w-28 p-3 md:p-4 aria-selected:bg-primary-700 aria-selected:text-white"
                        id="{{ $name }}-tab" data-tabs-target="#{{ $name }}" type="button"
                        role="tab" aria-controls="{{ $name }}" aria-selected="false">
                        <img src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vcash/167420385750orless_MLBB_Diamonds-2e17-original.webp"
                            class="h-8 w-8 object-contain center" alt="Diamonds" />
                        <div class="flex h-full flex-col items-center justify-center gap-1 pt-2">
                            <p class="break-words text-center text-xs font-semibold">{{ $t }}
                            </p>
                        </div>
                    </button>
                </li>
            @endforeach
        </ul>
        <div id="filterTopups" wire:ignore>
            <div class="hidden" id="diamond" role="tabpanel" aria-labelledby="diamond-tab">
                <ul id="diamondList" class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                    @foreach ($umum as $u)
                        <li class="relative" role="radio" aria-checked="false" tabindex="0">
                            <input type="radio" id="{{ $u->id }}" name="items" value="{{ $u->id }}"
                                class="peer hidden" wire:click="$dispatch('set-harga', { harga: {{ $u->harga_jual }}})">
                            <label for="{{ $u->id }}"
                                class="group relative flex cursor-pointer overflow-hidden border border-transparent bg-[#303740] rounded-lg p-3 outline-none peer-checked:bg-primary-700 peer-checked:ring-2 peer-checked:ring-[#303740] md:p-4">
                                <span class="flex flex-1">
                                    <span class="flex flex-col justify-between">
                                        <span
                                            class="block min-h-[32px] text-sm font-semibold text-white">{{ $u->nama_produk }}</span>
                                        <span
                                            class="mt-1 flex items-center text-xs font-light text-gray-200">{{ $call->formatRupiah($u->harga_jual) }},-</span>
                                    </span>
                                </span>
                                <div class="flex aspect-square w-8 items-center">
                                    <img src="{{ asset(Storage::url($u->gambar)) }}" width="300" height="300"
                                        class="object-contain object-right" style="color: transparent" alt="Logo">
                                </div>
                            </label>
                            <div
                                class="absolute right-0 top-0 rounded-bl-full overflow-hidden rounded-tr-[2000px] bg-[#303740] p-1 pb-2 pl-2 text-white hidden peer-checked:block">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                    height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z">
                                    </path>
                                </svg>
                            </div>
                        </li>
                    @endforeach
                </ul>
            </div>
            <div class="hidden" id="weekly" role="tabpanel" aria-labelledby="weekly-tab">
                <ul id="weeklyLists" class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                    @foreach ($membership as $m)
                        <li class="relative" role="radio" aria-checked="false" tabindex="0">
                            <input type="radio" id="{{ $m->id }}" name="items" value="{{ $m->id }}"
                                class="peer hidden"
                                wire:click="$dispatch('set-harga', { harga: {{ $m->harga_jual }}})">
                            <label for="{{ $m->id }}"
                                class="group relative flex cursor-pointer overflow-hidden border border-transparent bg-[#303740] rounded-lg p-3 outline-none peer-checked:bg-primary-700 peer-checked:ring-2 peer-checked:ring-[#303740] md:p-4">
                                <span class="flex flex-1">
                                    <span class="flex flex-col justify-between">
                                        <span
                                            class="block min-h-[32px] text-sm font-semibold text-white">{{ $m->nama_produk }}</span>
                                        <span
                                            class="mt-1 flex items-center text-xs font-light text-gray-200">{{ $call->formatRupiah($m->harga_jual) }}</span>
                                    </span>
                                </span>
                                <div class="flex aspect-square w-8 items-center">
                                    <img src="{{ asset(Storage::url($m->gambar)) }}" width="300" height="300"
                                        class="object-contain object-right" style="color: transparent" alt="Logo">
                                </div>
                            </label>
                            <div
                                class="absolute right-0 top-0 rounded-bl-full overflow-hidden rounded-tr-[2000px] bg-[#303740] p-1 pb-2 pl-2 text-white hidden peer-checked:block">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                    height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z">
                                    </path>
                                </svg>
                            </div>
                        </li>
                    @endforeach
                </ul>
            </div>
            <div class="hidden" id="twilight" role="tabpanel" aria-labelledby="twilight-tab">
                <ul id="twilightList"
                    class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                </ul>
            </div>
        </div>
    </section>
</div>
