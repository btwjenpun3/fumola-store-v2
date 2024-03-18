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
                        placeholder="Masukkan User ID" type="text" wire:model.live.debounce.100ms="userId" />
                </div>
            </div>
            <div class="col-span-1 w-full">
                <div class="relative rounded-md text-black shadow-sm">
                    @switch($game->nama)
                        @case('LifeAfter')
                            <select
                                class="block h-9 w-full rounded-lg border-gray-300 text-xs shadow-sm focus:border-primary-700 focus:ring-primary-700 sm:text-sm"
                                placeholder="Masukkan Server" type="text" wire:model.live.debounce.100ms="serverId"
                                wire:model.live.debounce.100ms="serverId">
                                <option value="">-- Pilih --</option>
                                <optgroup label="SEA">
                                    <option value="520001">NancyCity (520001)</option>
                                    <option value="520002">CharlesTown (520002)</option>
                                    <option value="520003">SnowHighlands (520003)</option>
                                    <option value="520004">Santopany (520004)</option>
                                    <option value="520005">LevinCity (520005)</option>
                                    <option value="520006">MileStone (520006)</option>
                                    <option value="520007">ChaosCity (520007)</option>
                                    <option value="520008">TwinIslands (520008)</option>
                                    <option value="520009">HopeWall (520009)</option>
                                    <option value="520010">LabyrinthSea (520010)</option>
                                </optgroup>
                                <optgroup label="NA">
                                    <option value="500001">MiskaTown (500001)</option>
                                    <option value="500002">SandCastle (500002)</option>
                                    <option value="500003">MouthSwamp (500003)</option>
                                    <option value="500004">RedwoodTown (500004)</option>
                                    <option value="500005">Obelisk (500005)</option>
                                    <option value="500006">NewLand (500006)</option>
                                    <option value="500007">ChaosOutpost (500007)</option>
                                    <option value="500008">IronStride (500008)</option>
                                    <option value="500009">CrystalthornSea (500009)</option>
                                </optgroup>
                                <optgroup label="AU">
                                    <option value="510001">FallForest (510001)</option>
                                    <option value="510002">MountSnow (510002)</option>
                                </optgroup>
                            </select>
                        @break

                        @case('Genshin Impact')
                            <select
                                class="block h-9 w-full rounded-lg border-gray-300 text-xs shadow-sm focus:border-primary-700 focus:ring-primary-700 sm:text-sm"
                                placeholder="Masukkan Server" type="text" wire:model.live.debounce.100ms="serverId"
                                wire:model.live.debounce.100ms="serverId">
                                <option value="">-- Pilih --</option>
                                <option value="os_asia">Asia</option>
                                <option value="os_usa">America</option>
                                <option value="os_euro">Europe</option>
                                <option value="os_cht">TW_HK_MO</option>
                            </select>
                        @break

                        @case('Honkai Star Rail')
                            <select
                                class="block h-9 w-full rounded-lg border-gray-300 text-xs shadow-sm focus:border-primary-700 focus:ring-primary-700 sm:text-sm"
                                placeholder="Masukkan Server" type="text" wire:model.live.debounce.100ms="serverId"
                                wire:model.live.debounce.100ms="serverId">
                                <option value="">-- Pilih --</option>
                                <option value="os_asia">Asia</option>
                                <option value="os_usa">America</option>
                                <option value="os_euro">Europe</option>
                                <option value="os_cht">TW_HK_MO</option>
                            </select>
                        @break

                        @case('Tower of Fantasy')
                            <select
                                class="block h-9 w-full rounded-lg border-gray-300 text-xs shadow-sm focus:border-primary-700 focus:ring-primary-700 sm:text-sm"
                                placeholder="Masukkan Server" type="text" wire:model.live.debounce.100ms="serverId"
                                wire:model.live.debounce.100ms="serverId">
                                <option value="">-- Pilih --</option>
                                <optgroup label="Asia Pasific">
                                    <option value="11001">Asia Pasific-Eden</option>
                                    <option value="11002">Asia Pasific-Fate</option>
                                    <option value="11003">Asia Pasific-Nova</option>
                                    <option value="11004">Asia Pasific-Ruby</option>
                                    <option value="11005">Asia Pasific-Babel</option>
                                    <option value="11006">Asia Pasific-Gomap</option>
                                    <option value="11007">Asia Pasific-Pluto</option>
                                    <option value="11008">Asia Pasific-Sushi</option>
                                    <option value="11009">Asia Pasific-Venus</option>
                                    <option value="11010">Asia Pasific-Galaxy</option>
                                    <option value="11011">Asia Pasific-Memory</option>
                                    <option value="11012">Asia Pasific-Oxygen</option>
                                    <option value="11013">Asia Pasific-Sakura</option>
                                    <option value="11014">Asia Pasific-Seeker</option>
                                    <option value="11015">Asia Pasific-Shinya</option>
                                    <option value="11016">Asia Pasific-Stella</option>
                                    <option value="11017">Asia Pasific-Uranus</option>
                                    <option value="11018">Asia Pasific-Utopia</option>
                                    <option value="11019">Asia Pasific-Jupiter</option>
                                    <option value="11020">Asia Pasific-Sweetie</option>
                                    <option value="11021">Asia Pasific-Atlantis</option>
                                    <option value="11022">Asia Pasific-Daybreak</option>
                                    <option value="11023">Asia Pasific-Takoyaki</option>
                                    <option value="11024">Asia Pasific-Adventure</option>
                                    <option value="11025">Asia Pasific-Yggdrasil</option>
                                    <option value="11026">Asia Pasific-Cocoaiteruyo</option>
                                    <option value="11027">Asia Pasific-Food fighter</option>
                                    <option value="11028">Asia Pasific-Mars</option>
                                    <option value="11029">Asia Pasific-Vega</option>
                                    <option value="11030">Asia Pasific-Neptune</option>
                                    <option value="11031">Asia Pasific-Tenpura</option>
                                    <option value="11032">Asia Pasific-Moon</option>
                                    <option value="11033">Asia Pasific-Mihashira</option>
                                    <option value="11034">Asia Pasific-Cocokonderu</option>
                                </optgroup>
                                <optgroup label="Europe">
                                    <option value="13001">Europe-Aimanium</option>
                                    <option value="13002">Europe-Alintheus</option>
                                    <option value="13003">Europe-Andoes</option>
                                    <option value="13004">Europe-Anomora</option>
                                    <option value="13005">Europe-Astora</option>
                                    <option value="13006">Europe-Valstamm</option>
                                    <option value="13007">Europe-Blumous</option>
                                    <option value="13008">Europe-Celestialrise</option>
                                    <option value="13009">Europe-Cosmos</option>
                                    <option value="13010">Europe-Dyrnwyn</option>
                                    <option value="13011">Europe-Elypium</option>
                                    <option value="13012">Europe-Excalibur</option>
                                    <option value="13013">Europe-Espoir IV</option>
                                    <option value="13014">Europe-Estrela</option>
                                    <option value="13015">Europe-Ether</option>
                                    <option value="13016">Europe-Ex Nihilor</option>
                                    <option value="13017">Europe-Futuria</option>
                                    <option value="13018">Europe-Hephaestus</option>
                                    <option value="13019">Europe-Midgard</option>
                                    <option value="13020">Europe-Iter</option>
                                    <option value="13021">Europe-Kuura</option>
                                    <option value="13022">Europe-Lycoris</option>
                                    <option value="13023">Europe-Lyramiel</option>
                                    <option value="13024">Europe-Magenta</option>
                                    <option value="13025">Europe-Magia Przygoda Aida</option>
                                    <option value="13026">Europe-Olivine</option>
                                    <option value="13027">Europe-Omnium Prime</option>
                                    <option value="13028">Europe-Turmus</option>
                                    <option value="13029">Europe-Transport Hub</option>
                                    <option value="13030">Europe-The Lumina</option>
                                    <option value="13031">Europe-Seaforth Dock</option>
                                    <option value="13032">Europe-Silvercoast Lab</option>
                                    <option value="13033">Europe-Karst Cave</option>
                                </optgroup>
                                <optgroup label="North America">
                                    <option value="12001">North America-The Glades</option>
                                    <option value="12002">North America-Nightfall</option>
                                    <option value="12003">North America-Frontier</option>
                                    <option value="12004">North America-Libera</option>
                                    <option value="12005">North America-Solaris</option>
                                    <option value="12006">North America-Freedom-Oasis</option>
                                    <option value="12007">North America-The worlds between</option>
                                    <option value="12008">North America-Radiant</option>
                                    <option value="12009">North America-Tempest</option>
                                    <option value="12010">North America-New Era</option>
                                    <option value="12011">North America-Observer</option>
                                    <option value="12012">North America-Lunalite</option>
                                    <option value="12013">North America-Starlight</option>
                                    <option value="12014">North America-Myriad</option>
                                    <option value="12015">North America-Lighthouse</option>
                                    <option value="12016">North America-Oumuamua</option>
                                    <option value="12017">North America-Eternium Phantasy</option>
                                    <option value="12018">North America-Sol-III</option>
                                    <option value="12019">North America-Silver Bridge</option>
                                    <option value="12020">North America-Azure Plane</option>
                                    <option value="12021">North America-Nirvana</option>
                                    <option value="12022">North America-Ozera</option>
                                    <option value="12023">North America-Polar</option>
                                    <option value="12024">North America-Oasis</option>
                                </optgroup>
                                <optgroup label="South America">
                                    <option value="15001">South America-Orion</option>
                                    <option value="15002">South America-Luna Azul</option>
                                    <option value="15003">South America-Tiamat</option>
                                    <option value="15004">South America-Hope</option>
                                    <option value="15005">South America-Tanzanite</option>
                                    <option value="15006">South America-Calodesma Seven</option>
                                    <option value="15007">South America-Antlia</option>
                                    <option value="15008">South America-Pegasus</option>
                                    <option value="15009">South America-Phoenix</option>
                                    <option value="15010">South America-Centaurus</option>
                                    <option value="15011">South America-Cepheu</option>
                                    <option value="15012">South America-Columba</option>
                                    <option value="15013">South America-Corvus</option>
                                    <option value="15014">South America-Cygnus</option>
                                    <option value="15015">South America-Grus</option>
                                    <option value="15016">South America-Hydra</option>
                                    <option value="15017">South America-Lyra</option>
                                    <option value="15018">South America-Ophiuchus</option>
                                    <option value="15019">South America-Pyxis</option>
                                <optgroup label="Southeast Asia">
                                    <option value="16001">Southeast Asia-Phantasia</option>
                                    <option value="16002">Southeast Asia-Mechafield</option>
                                    <option value="16003">Southeast Asia-Ethereal Dream</option>
                                    <option value="16004">Southeast Asia-Odyssey</option>
                                    <option value="16005">Southeast Asia-Aestral-Noa</option>
                                    <option value="16006">Southeast Asia-Osillron</option>
                                    <option value="16007">Southeast Asia-Chandra</option>
                                    <option value="16008">Southeast Asia-Saeri</option>
                                    <option value="16009">Southeast Asia-Aeria</option>
                                    <option value="16010">Southeast Asia-Scarlet</option>
                                    <option value="16011">Southeast Asia-Gumi Gumi</option>
                                    <option value="16012">Southeast Asia-Fantasia</option>
                                    <option value="16013">Southeast Asia-Oryza</option>
                                    <option value="16014">Southeast Asia-Stardust</option>
                                    <option value="16015">Southeast Asia-Arcania</option>
                                    <option value="16016">Southeast Asia-Animus</option>
                                    <option value="16017">Southeast Asia-Mistilteinn</option>
                                    <option value="16018">Southeast Asia-Valhalla</option>
                                    <option value="16019">Southeast Asia-Illyrians</option>
                                    <option value="16020">Southeast Asia-Florione</option>
                                    <option value="16021">Southeast Asia-Oneiros</option>
                                    <option value="16022">Southeast Asia-Famtosyana</option>
                                    <option value="16023">Southeast Asia-Edenia</option>
                                    <option value="16024">Southeast Asia-Tore de Utopia</option>
                                </optgroup>
                            </select>
                        @break

                        @default
                            <input
                                class="block h-9 w-full rounded-lg border-gray-300 text-xs shadow-sm focus:border-primary-700 focus:ring-primary-700 sm:text-sm"
                                placeholder="Masukkan Server" type="text" wire:model.live.debounce.100ms="serverId" />
                    @endswitch
                </div>
            </div>
        </div>
        <p class="mt-2 text-xs text-white/70">
            Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada
            menu utama game. User ID akan terlihat dibagian bawah Nama Karakter Game Anda.
            Silakan masukkan User ID Anda untuk menyelesaikan transaksi. Contoh :
            12345678(1234).
        </p>
    </section>
</div>
