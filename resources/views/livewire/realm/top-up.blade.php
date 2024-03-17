<div>
    <div class="row row-cards">
        <div class="col-12">
            <div class="card">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Top Up - {{ $game->nama }}</h3>
                        </div>
                        <div class="card-body">
                            <div class="row g-2 align-items-center">
                                <span>
                                    Jika kamu Reseller maka harap hubungi Admin jika kamu ingin menyalakan denom yang
                                    ingin kamu beli jika denom tersebut tidak bisa dipilih.
                                </span>

                                {{-- Notifikasi --}}

                                @switch($game->slug)
                                    @case('call-of-duty-mobile')
                                        <div class="alert alert-success mt-3 text-dark" role="alert">
                                            <b>Support All Bind! ✅ Facebook | ✅ Garena</b>
                                        </div>
                                    @break

                                    @case('undawn')
                                        <div class="alert alert-warning mt-3 text-dark" role="alert">
                                            <b>Produk Ini Tidak Support Bind Garena!</b>
                                            <p>
                                                Silahkan menuju halaman <a href="">DISINI</a> jika ingin membeli yang
                                                support All Bind
                                            </p>
                                        </div>
                                    @break

                                    @case('undawn-all-bind')
                                        <div class="alert alert-success mt-3 text-dark" role="alert">
                                            <b>Support All Bind! ✅ Facebook | ✅ Garena | ✅ Google</b>
                                        </div>
                                    @break

                                    @case('clash-of-clans')
                                        <div class="alert alert-warning mt-3 text-dark" role="alert">
                                            <b>Akun WAJIB terhubung ke Supercell ID!</b>
                                        </div>
                                    @break

                                    @case('hay-day')
                                        <div class="alert alert-warning mt-3 text-dark" role="alert">
                                            <b>Akun WAJIB terhubung ke Supercell ID!</b>
                                        </div>
                                    @break

                                    @default
                                @endswitch

                                {{-- Pilih Denom --}}

                                @php
                                    $call = new App\Http\Controllers\GlobalController();
                                @endphp
                                <label class="form-label required mt-3">Pilih
                                    Denom</label>
                                <select class="form-select @error('productCode') is-invalid @enderror"
                                    wire:model="productCode">
                                    <option value="" selected>-- Pilih Denom --</option>
                                    @foreach ($harga as $p)
                                        @switch(auth()->user()->role->name)
                                            @case('admin')
                                                @if ($p->status == 0 || $p->status == 3 || $p->harga_jual <= 0 || $p->harga_jual <= $p->modal)
                                                    <option disabled>
                                                        (OFFLINE)
                                                        {{ $p->nama_produk }} (
                                                        {{ $call->formatRupiah($p->harga_jual) }})
                                                    </option>
                                                @else
                                                    <option value="{{ $p->kode_produk }}">
                                                        {{ $p->nama_produk }} (
                                                        {{ $call->formatRupiah($p->harga_jual) }})
                                                    </option>
                                                @endif
                                            @break

                                            @case('reseller')
                                                @if ($p->status == 0 || $p->status == 3 || $p->harga_jual_reseller <= 0 || $p->harga_jual_reseller <= $p->modal)
                                                    <option disabled>
                                                        (OFFLINE)
                                                        {{ $p->nama_produk }} (
                                                        {{ $call->formatRupiah($p->harga_jual_reseller) }})
                                                    </option>
                                                @else
                                                    <option value="{{ $p->kode_produk }}">
                                                        {{ $p->nama_produk }} (
                                                        {{ $call->formatRupiah($p->harga_jual_reseller) }})
                                                    </option>
                                                @endif
                                            @break

                                            @default
                                        @endswitch
                                    @endforeach
                                </select>
                                @error('productCode')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror

                                {{-- Denom di Mulai Dari Sini --}}

                                @switch($game->slug)
                                    @case('mobile-legend')
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">Masukkan Server ID</div>
                                            <input type="text" class="form-control" placeholder="-- Server ID --"
                                                wire:model="serverId">
                                        </div>
                                        <div class="col-md-12 d-flex justify-content-end">
                                            <button type="button" class="btn btn-outline-success w-100"
                                                wire:click="checkId('{{ $game->slug }}')" wire:target="checkId"
                                                wire:loading.attr="disabled">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-search" width="24" height="24"
                                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                                    <path d="M21 21l-6 -6" />
                                                </svg>
                                                <span wire:loading.remove wire:target="checkId">Cek ID</span>
                                                <span wire:target="checkId" wire:loading
                                                    class="spinner-border spinner-border-sm me-2" role="status"></span>
                                            </button>
                                        </div>
                                        <div id="player-found" class="alert alert-success" role="alert" style="display: none;"
                                            wire:ignore.self>
                                            <h4 class="alert-title">Nickname : {{ $playerName }}</h4>
                                        </div>
                                        <div id="player-not-found" class="alert alert-danger" role="alert"
                                            style="display: none;" wire:ignore.self>
                                            <h4 class="alert-title">Player Tidak di Temukan!</h4>
                                        </div>
                                    @break

                                    @case('free-fire')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage"">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                        <div class="col-md-12 d-flex justify-content-end">
                                            <button type="button" class="btn btn-outline-success w-100"
                                                wire:click="checkId('{{ $game->slug }}')" wire:target="checkId"
                                                wire:loading.attr="disabled">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-search" width="24" height="24"
                                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                                    <path d="M21 21l-6 -6" />
                                                </svg>
                                                <span wire:loading.remove wire:target="checkId">Cek ID</span>
                                                <span wire:target="checkId" wire:loading
                                                    class="spinner-border spinner-border-sm me-2" role="status"></span>
                                            </button>
                                        </div>
                                        <div id="player-found" class="alert alert-success" role="alert"
                                            style="display: none;" wire:ignore.self>
                                            <h4 class="alert-title">Nickname : {{ $playerName }}</h4>
                                        </div>
                                        <div id="player-not-found" class="alert alert-danger" role="alert"
                                            style="display: none;" wire:ignore.self>
                                            <h4 class="alert-title">Player Tidak di Temukan!</h4>
                                        </div>
                                    @break

                                    @case('undawn')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" id="userid" name="userid" class="form-control"
                                                placeholder="-- User ID --" wire:model="userId">
                                        </div>
                                    @break

                                    @case('undawn-all-bind')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" id="userid" name="userid" class="form-control"
                                                placeholder="-- User ID --" wire:model="userId">
                                        </div>
                                    @break

                                    @case('lifeafter')
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">Pilih Server</div>
                                            <select class="form-select" wire:model="serverId">
                                                <option value="" selected>-- Pilih --</option>
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
                                        </div>
                                    @break

                                    @case('pubg')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('hago')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('valorant')
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">Masukkan TAG (Tanpa #)</div>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">#</span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="-- User TAG --"
                                                    wire:model="serverId">
                                            </div>
                                        </div>
                                    @break

                                    @case('clash-of-clans')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan User TAG (Tanpa #)
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">#</span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="-- User TAG --"
                                                    wire:model="userId">
                                            </div>
                                        </div>
                                    @break

                                    @case('pln')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan Nomor Pelanggan</div>
                                            <input type="text" class="form-control" placeholder="-- Nomor Pelanggan --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('bigo-live')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan ID Pengguna</div>
                                            <input type="text" class="form-control" placeholder="-- ID Pengguna --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('genshin-impact')
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">Pilih Server</div>
                                            <select class="form-select" wire:model="serverId">
                                                <option value="os_asia">Asia</option>
                                                <option value="os_usa">America</option>
                                                <option value="os_euro">Europe</option>
                                                <option value="os_cht">TW_HK_MO</option>
                                            </select>
                                        </div>
                                    @break

                                    @case('honkai-star-rail')
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">Pilih Server</div>
                                            <select class="form-select" wire:model="serverId">
                                                <option value="os_asia">Asia</option>
                                                <option value="os_usa">America</option>
                                                <option value="os_euro">Europe</option>
                                                <option value="os_cht">TW_HK_MO</option>
                                            </select>
                                        </div>
                                    @break

                                    @case('hay-day')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan User TAG (Tanpa #)
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">#</span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="-- User TAG --"
                                                    wire:model="userId">
                                            </div>
                                        </div>
                                    @break

                                    @case('sausage-man')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('league-of-legends-wild-rift')
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">Masukkan TAG (Tanpa #)</div>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">#</span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="-- User TAG --"
                                                    wire:model="serverId">
                                            </div>
                                        </div>
                                        <div class="col-md-12 d-flex justify-content-end">
                                            <button type="button" class="btn btn-outline-success w-100"
                                                wire:click="checkId('{{ $game->slug }}')" wire:target="checkId"
                                                wire:loading.attr="disabled">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-search" width="24" height="24"
                                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                                    <path d="M21 21l-6 -6" />
                                                </svg>
                                                <span wire:loading.remove wire:target="checkId">Cek ID</span>
                                                <span wire:target="checkId" wire:loading
                                                    class="spinner-border spinner-border-sm me-2" role="status"></span>
                                            </button>
                                        </div>
                                        <div id="player-found" class="alert alert-success" role="alert"
                                            style="display: none;" wire:ignore.self>
                                            <h4 class="alert-title">Nickname : {{ $playerName }}</h4>
                                        </div>
                                        <div id="player-not-found" class="alert alert-danger" role="alert"
                                            style="display: none;" wire:ignore.self>
                                            <h4 class="alert-title">Player Tidak di Temukan!</h4>
                                        </div>
                                    @break

                                    @case('ragnarok-origin')
                                        <div class="col-md-4">
                                            <div class="form-label mt-3">
                                                Masukkan Secret Code
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- Secret Code --"
                                                wire:model="userId">
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-label mt-3">Masukkan Nickname</div>
                                            <input type="text" class="form-control" placeholder="-- User Nickname --"
                                                wire:model="userNickname">
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-label mt-3">Pilih Server</div>
                                            <select class="form-select" wire:model="serverId">
                                                <option value="">-- Pilih --</option>
                                                <optgroup label="Prontera">
                                                    @for ($i = 1; $i <= 10; $i++)
                                                        <option value="{{ $i }}">Server ID : ({{ $i }})
                                                            Prontera-{{ $i }}
                                                        </option>
                                                    @endfor
                                                </optgroup>
                                                <optgroup label="Izlude">
                                                    @for ($i = 1; $i <= 10; $i++)
                                                        <option value="{{ $i + 10 }}">Server ID : ({{ $i + 10 }})
                                                            Izlude-{{ $i }}
                                                        </option>
                                                    @endfor
                                                </optgroup>
                                                <optgroup label="Morroc">
                                                    @for ($i = 1; $i <= 10; $i++)
                                                        <option value="{{ $i + 20 }}">Server ID : ({{ $i + 20 }})
                                                            Morroc-{{ $i }}
                                                        </option>
                                                    @endfor
                                                </optgroup>
                                                <optgroup label="Geffen">
                                                    @for ($i = 1; $i <= 10; $i++)
                                                        <option value="{{ $i + 30 }}">Server ID : ({{ $i + 30 }})
                                                            Geffen-{{ $i }}
                                                        </option>
                                                    @endfor
                                                </optgroup>
                                                <optgroup label="Payon">
                                                    @for ($i = 1; $i <= 10; $i++)
                                                        <option value="{{ $i + 40 }}">Server ID : ({{ $i + 40 }})
                                                            Payon-{{ $i }}
                                                        </option>
                                                    @endfor
                                                </optgroup>
                                                <optgroup label="Poring Island">
                                                    @for ($i = 1; $i <= 10; $i++)
                                                        <option value="{{ $i + 50 }}">Server ID : ({{ $i + 50 }})
                                                            Poring Island-{{ $i }}
                                                        </option>
                                                    @endfor
                                                </optgroup>
                                                <optgroup label="Orc Village">
                                                    @for ($i = 1; $i <= 10; $i++)
                                                        <option value="{{ $i + 60 }}">Server ID : ({{ $i + 60 }})
                                                            Orc Village-{{ $i }}
                                                        </option>
                                                    @endfor
                                                </optgroup>
                                                <optgroup label="Shipwreck">
                                                    @for ($i = 1; $i <= 10; $i++)
                                                        <option value="{{ $i + 70 }}">Server ID : ({{ $i + 70 }})
                                                            Shipwreck-{{ $i }}
                                                        </option>
                                                    @endfor
                                                </optgroup>
                                                <optgroup label="Ant-Hell">
                                                    @for ($i = 1; $i <= 5; $i++)
                                                        <option value="{{ $i + 80 }}">Server ID : ({{ $i + 80 }})
                                                            Ant-Hell-{{ $i }}
                                                        </option>
                                                    @endfor
                                                </optgroup>
                                            </select>
                                        </div>
                                    @break

                                    @case('call-of-duty-mobile')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan Player ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- Player ID --"
                                                wire:model="userId">
                                        </div>
                                        <div class="col-md-12 d-flex justify-content-end">
                                            <button type="button" class="btn btn-outline-success w-100"
                                                wire:click="checkId('{{ $game->slug }}')" wire:target="checkId"
                                                wire:loading.attr="disabled">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-search" width="24" height="24"
                                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                                    <path d="M21 21l-6 -6" />
                                                </svg>
                                                <span wire:loading.remove wire:target="checkId">Cek ID</span>
                                                <span wire:target="checkId" wire:loading
                                                    class="spinner-border spinner-border-sm me-2" role="status"></span>
                                            </button>
                                        </div>
                                        <div id="player-found" class="alert alert-success" role="alert"
                                            style="display: none;" wire:ignore.self>
                                            <h4 class="alert-title">Nickname : {{ $playerName }}</h4>
                                        </div>
                                        <div id="player-not-found" class="alert alert-danger" role="alert"
                                            style="display: none;" wire:ignore.self>
                                            <h4 class="alert-title">Player Tidak di Temukan!</h4>
                                        </div>
                                    @break

                                    @case('lita')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan User ID LITA
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID LITA --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('metal-slug-awakening')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('ludo-club')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('dragon-raja-sea')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('zepeto')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan Username (Tanpa @)
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">@</span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="-- Username --"
                                                    wire:model="userId">
                                            </div>
                                        </div>
                                    @break

                                    @case('love-nikki')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('eggy-party')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('stumble-guys')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('tower-of-fantasy')
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">
                                                Masukkan User ID
                                                <span>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-image"
                                                        wire:click="showImage('{{ $game->slug }}')">
                                                        (?)
                                                    </a>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">Pilih Server</div>
                                            <select class="form-select" wire:model="serverId">
                                                <option value="" selected>-- Pilih --</option>
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
                                        </div>
                                    @break

                                    @case('telkomsel')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan Nomor Telepon</div>
                                            <input type="text" class="form-control" placeholder="-- Nomor Telepon --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('indosat')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan Nomor Telepon</div>
                                            <input type="text" class="form-control" placeholder="-- Nomor Telepon --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('axis')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan Nomor Telepon</div>
                                            <input type="text" class="form-control" placeholder="-- Nomor Telepon --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('smartfren')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan Nomor Telepon</div>
                                            <input type="text" class="form-control" placeholder="-- Nomor Telepon --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('xl')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan Nomor Telepon</div>
                                            <input type="text" class="form-control" placeholder="-- Nomor Telepon --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('tri')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan Nomor Telepon</div>
                                            <input type="text" class="form-control" placeholder="-- Nomor Telepon --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('razer-gold')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan Nomor Telepon</div>
                                            <input type="text" class="form-control" placeholder="-- Nomor Telepon --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('garena-shell')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan Nomor Telepon</div>
                                            <input type="text" class="form-control" placeholder="-- Nomor Telepon --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('unipin')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan Nomor Telepon</div>
                                            <input type="text" class="form-control" placeholder="-- Nomor Telepon --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('ace-racer')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan User ID</div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('astral-guardians')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan User ID</div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('au2-mobile')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan User ID</div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('sky-children-of-the-light')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan User ID</div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('black-clover-m')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan User ID</div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('one-punch-man-the-strongest')
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">Masukkan UID</div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-label mt-3">Masukkan SID</div>
                                            <input type="text" class="form-control" placeholder="-- Server ID --"
                                                wire:model="serverId">
                                        </div>
                                    @break

                                    @case('roblox-robux')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan Nomor Telepon</div>
                                            <input type="number" class="form-control" placeholder="-- Telepon --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('love-and-deepspace')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan Hunter No.</div>
                                            <input type="text" class="form-control" placeholder="-- Hunter No. --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('laplace-m')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan User ID</div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('mangatoon')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan User ID</div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('tom-and-jerry-chase')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan User ID</div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('state-of-survival')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan User ID</div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('kings-choice')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan User ID</div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('pubg-new-state-mobile')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan User ID</div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @case('fc-mobile')
                                        <div class="col-md-12">
                                            <div class="form-label mt-3">Masukkan User ID</div>
                                            <input type="text" class="form-control" placeholder="-- User ID --"
                                                wire:model="userId">
                                        </div>
                                    @break

                                    @default
                                @endswitch

                                <div class="col-md-12">
                                    <button class="btn btn-sm btn-outline-info" data-bs-toggle="modal"
                                        data-bs-target="#modal-customer">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-list" width="24" height="24"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 6l11 0" />
                                            <path d="M9 12l11 0" />
                                            <path d="M9 18l11 0" />
                                            <path d="M5 6l0 .01" />
                                            <path d="M5 12l0 .01" />
                                            <path d="M5 18l0 .01" />
                                        </svg>
                                        Daftar Customer
                                    </button>
                                </div>

                                <div class="col-md-12 mt-3">
                                    <input type="checkbox" wire:click="$toggle('showCustomerField')">
                                    <label for="customer">Simpan Data Customer</label>
                                    @if ($showCustomerField)
                                        <div>
                                            <input type="text" class="form-control mt-3"
                                                placeholder="-- Nama Customer --" wire:model="customerField">
                                            <span>
                                                <small>
                                                    Data customer akan tersimpan saat pembelian di lakukan. Jika data
                                                    customer kamu belum muncul, harap refresh halaman ini.
                                                </small>
                                            </span>
                                        </div>
                                    @endif
                                </div>

                                <div class="col-md-12">
                                    @if (isset(auth()->user()->google_id) && auth()->user()->password_changed == 0)
                                        <label class="form-label mt-3 required">Masukkan
                                            Password Akun Realm Kamu
                                        </label>
                                        <p>
                                            <small>(Khusus untuk pengguna Google) Password kamu adalah Kode Reseller
                                                kamu.
                                                Jika kamu
                                                ingin merubah Password ini silahkan menuju ke halaman
                                                Profile.
                                            </small>
                                        </p>
                                        <p>
                                            <small>
                                                Jika kamu belum merubah password kamu, maka password di bawah ini sudah
                                                otomatis terisi dan bisa langsung melakukan Top Up
                                            </small>
                                        </p>
                                        <input type="password"
                                            class="form-control @error('password') is-invalid @enderror"
                                            placeholder="-- Password Kamu --"
                                            value="{{ auth()->user()->kode_reseller }}" wire:model="password">
                                        @error('password')
                                            <div class="invalid-feedback">{{ $message }}</div>
                                        @enderror
                                    @else
                                        <div class="form-label mt-3 required">Masukkan Password Akun Realm Kamu</div>
                                        <input type="password"
                                            class="form-control @error('password') is-invalid @enderror"
                                            placeholder="-- Password Kamu --" wire:model="password">
                                        @error('password')
                                            <div class="invalid-feedback">{{ $message }}</div>
                                        @enderror
                                    @endif

                                    <div class="col-md-12 mt-3">
                                        <button id="btn-beli" class="btn btn-primary form-control"
                                            data-bs-toggle="modal" data-bs-target="#modal-submit">
                                            <span id="btn-text">Beli</span>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- Modal --}}

    <div class="modal modal-blur fade" id="modal-image" tabindex="-1" role="dialog" aria-hidden="true"
        wire:ignore.self>
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body text-center py-4">
                    <img src="{{ asset(Storage::url('howto/' . $image)) }}">
                </div>
                <div class="modal-footer">
                    <div class="w-100">
                        <div class="row">
                            <div class="col">
                                <a href="#" class="btn w-100" data-bs-dismiss="modal">
                                    Tutup
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- Modal List Customer --}}

    <div class="modal modal-blur fade" id="modal-customer" tabindex="-1" role="dialog" aria-hidden="true"
        wire:ignore.self>
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body py-4">
                    <h3> Daftar Customer - {{ $game->nama }}</h3>
                    <div class="table-responsive">
                        <table class="table table-nowrap table-hover">
                            <thead>
                                <th>Nama</th>
                                <th class="w-1"></th>
                            </thead>
                            @foreach ($customers as $customer)
                                <tbody>
                                    <td>{{ $customer->name }}</td>
                                    <td>
                                        <button class="btn btn-sm btn-outline-success"
                                            wire:click="fillCustomer({{ $customer->id }})">
                                            Pilih
                                        </button>
                                    </td>
                                </tbody>
                            @endforeach
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- Modal Beli --}}

    <div class="modal modal-blur fade" id="modal-submit" tabindex="-1" role="dialog" aria-hidden="true"
        wire:ignore.self>
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-status bg-warning"></div>
                <div class="modal-body text-center py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon mb-2 text-danger icon-lg" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7 -2.983l-8.423 -14.06a1.989 1.989 0 0 0 -3.4 0z" />
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                    </svg>
                    <h3>Apa kamu yakin?</h3>
                    <div class="text-muted">Pastikan data yang kamu isi sudah benar, karena kami belum memiliki sistem
                        untuk
                        pengecekan UserID!</div>
                </div>
                <div class="modal-footer">
                    <div class="w-100">
                        <div class="row">
                            <div class="col">
                                <a href="#" class="btn w-100" data-bs-dismiss="modal">
                                    Batal
                                </a>
                            </div>
                            <div class="col">
                                <button id="btn-submit" class="btn btn-success w-100" wire:click="topup"
                                    data-bs-toggle="modal" data-bs-target="#process-modal"
                                    wire:loading.attr="disabled">
                                    Proses
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- Modal Process --}}

    <div class="modal modal-blur fade" id="process-modal" tabindex="-1" role="dialog" aria-hidden="true"
        wire:ignore.self>
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body text-center py-4">
                    <h4>Sedang memproses pembelian...</h4>
                    <div class="spinner-border"></div>
                </div>
            </div>
        </div>
    </div>

    {{-- Modal Berhasil --}}

    <div class="modal modal-blur fade" id="topup-success-modal" tabindex="-1" role="dialog" aria-hidden="true"
        data-bs-backdrop='static' wire:ignore.self>
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body text-center py-3">
                    <h5>Terimakasih sudah order</h5>
                    <h3 class="text-success">
                        {{ $nomorInvoice }}
                    </h3>
                    <small>Harap tunggu kami sedang memproses Top up kamu</small>
                    <br>
                    <br>
                    <div class="spinner-grow text-green" role="status"></div>
                </div>
            </div>
        </div>
    </div>

    @script
        <script>
            $wire.on('customer-fill', () => {
                $('#modal-customer').modal('hide');
            });
            $wire.on('player-found', () => {
                $('#player-found').show();
                $('#player-not-found').hide();
            });
            $wire.on('player-not-found', () => {
                $('#player-found').hide();
                $('#player-not-found').show();
            });
            $wire.on('success', (data) => {
                toastr.success(data)
            });
            $wire.on('error', (data) => {
                toastr.error(data);
            });
            $wire.on('topup-success', () => {
                $('#process-modal').modal('hide');
                $('#topup-success-modal').modal('show');
            });
            $wire.on('topup-failed', () => {
                $('#process-modal').modal('hide');
            });

            Pusher.logToConsole = true;
            var pusher = new Pusher('d4afa1b27ea54cbf1546', {
                cluster: 'ap1'
            });
            window.Echo = new Echo({
                broadcaster: 'pusher',
                key: 'd4afa1b27ea54cbf1546',
                cluster: 'ap1'
            });
            window.Echo.channel('topup-{{ auth()->id() }}')
                .listen('TopUpEvent', (event) => {
                    $('#process-modal').modal('hide');
                    $('#topup-success-modal').modal('show');
                });

            window.Echo.channel('topup-failed-{{ auth()->id() }}')
                .listen('TopUpEventFailed', (event) => {
                    $('#process-modal').modal('hide');
                    toastr.error(event.message);
                });
        </script>
    @endscript
</div>
