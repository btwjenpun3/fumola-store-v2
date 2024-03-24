<div>
    <section class="shadow-9xl bg-secondary-900 px-4 py-5 sm:rounded-lg">
        <div class="flex w-full space-x-2 border-b border-b-white/10 pb-2">
            <div class="flex items-center space-x-2 text-lg font-extrabold text-white leading-6 md:text-xl">
                <div class="shadow-9xl rounded-b-full bg-secondary-dark px-3 pb-2 pt-1 text-white">
                    1</div>
                <span>Masukkan Player ID</span>
            </div>
            <div class="flex cursor-pointer items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true" class="h-5 w-5 contrast-75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z">
                    </path>
                </svg>
            </div>
        </div>
        <div class="mt-4">
            <div class="text-sm text-white">
                Simpan ID dengan fitur <a class="text-base text-primary-700 underline" href="/save-id.html">Simpan
                    ID</a>
            </div>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-2" wire:ignore>
            <div class="col-span-1 w-full">
                <div class="relative rounded-md text-black shadow-sm">
                    <input
                        class="block h-9 w-full rounded-lg border-gray-300 text-xs shadow-sm focus:border-primary-700 focus:ring-primary-700 sm:text-sm"
                        @if ($game->kategori === 'Pulsa' || $game->kategori === 'Voucher' || $game->kategori === 'Listrik') placeholder="Masukkan Nomor Telepon" @else placeholder="Masukkan User ID" @endif
                        type="text" wire:model.live.debounce.250ms="userId" />
                </div>
            </div>
        </div>
        <p class="mt-2 text-xs text-white/70">
            {{ isset($game->miniInstruction->mini_instruction) ? $game->miniInstruction->mini_instruction : '' }}
        </p>
    </section>
</div>
