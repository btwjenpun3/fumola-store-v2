<div>
    <div class="card">
        <div class="table-responsive">
            <table class="table table-nowrap table-hover table-vcenter card-table">
                <thead>
                    <tr>
                        <th class="w-1"></th>
                        <th></th>
                        <th>Nama</th>
                        <th>Brand</th>
                        <th class="w-1"></th>
                        <th class="w-1"></th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($produk as $p)
                        <tr wire:key="{{ $p->id }}">
                            <td>
                                @if ($p->status === 1)
                                    <span class="badge bg-success me-1"></span>
                                @else
                                    <span class="badge bg-danger me-1"></span>
                                @endif
                            </td>
                            <td class="w-7"><img src="{{ asset(Storage::url($p->url_gambar)) }}"></td>
                            <td>{{ $p->nama }}</td>
                            <td>{{ $p->brand }}</td>
                            <td>
                                <button class="btn btn-link" data-bs-toggle="modal" data-bs-target="#update-modal"
                                    wire:click="show({{ $p->id }})">
                                    Set Harga
                                </button>
                            </td>
                            <td>
                                <label class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox"
                                        @if ($p->status === 1) value="0"
                                        checked 
                                        @else
                                        value="1" 
                                        unchecked @endif
                                        wire:click="status({{ $p->id }}, {{ $p->status === 1 ? 0 : 1 }})"
                                        wire:loading.attr="disabled">
                                </label>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>

    {{-- Modal --}}

    <div class="modal modal-blur fade" id="update-modal" tabindex="-1" style="display: none;" aria-hidden="true"
        wire:ignore.self>
        <div class="modal-dialog modal-full-width modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Set Harga Produk : {{ $nama }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div wire:loading wire:target="show">
                    <div class="progress progress-sm">
                        <div class="progress-bar progress-bar-indeterminate"></div>
                    </div>
                </div>
                <div wire:loading.remove wire:target="show">
                    <div class="modal-body">
                        <div class="d-flex justify-content-end mb-3">
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#sync-modal">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh"
                                    width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                </svg>
                                Sync
                            </button>
                        </div>
                        <div class="card">
                            <div class="table-responsive">
                                <table class="table table-nowrap table-hover table-vcenter card-table">
                                    <thead>
                                        <tr>
                                            <th class="w-1"></th>
                                            <th>Denom</th>
                                            <th>Tipe</th>
                                            <th>Kode Produk</th>
                                            <th>Seller</th>
                                            <th>Modal</th>
                                            <th>Harga Jual</th>
                                            <th>Profit</th>
                                            <th>Harga Jual ke Reseller</th>
                                            <th>Profit dari Reseller</th>
                                            <th>Start Cut Off</th>
                                            <th>End Cut Off</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @if (isset($hargas))
                                            @php
                                                $call = new App\Http\Controllers\GlobalController();
                                            @endphp
                                            @foreach ($hargas as $h)
                                                <tr wire:key="{{ $h->brand }}">
                                                    <td>
                                                        @if ($h->status === 1)
                                                            <span class="badge bg-success me-1"></span>
                                                        @elseif ($h->status === 3)
                                                            <span class="badge bg-secondary me-1"></span>
                                                        @else
                                                            <span class="badge bg-danger me-1"></span>
                                                        @endif
                                                    </td>
                                                    <td>{{ $h->nama_produk }}</td>
                                                    <td>
                                                        <select class="form-control"
                                                            wire:model="tipe.{{ $h->id }}"
                                                            wire:change="updateTipe({{ $h->id }})">
                                                            <option value="Umum">Umum</option>
                                                            <option value="Membership">Membership</option>
                                                        </select>
                                                    </td>
                                                    <td>{{ $h->kode_produk }}</td>
                                                    <td>{{ $h->seller_name }}</td>
                                                    <td>{{ $call->formatRupiah($h->modal) }}</td>
                                                    <td>
                                                        <input type="text" class="form-control"
                                                            wire:model="items.{{ $h->id }}"
                                                            wire:change="updateHargaJual({{ $h->id }})"
                                                            wire:loading.attr="disabled">
                                                    </td>
                                                    <td
                                                        @if ($profit[$h->id] > 0) class="text-success" @else class="text-danger" @endif>
                                                        {{ $call->formatRupiah($profit[$h->id]) }}</td>
                                                    <td>
                                                        <input type="text" class="form-control"
                                                            wire:model="reseller.{{ $h->id }}"
                                                            wire:change="updateHargaReseller({{ $h->id }})"
                                                            wire:loading.attr="disabled">
                                                    </td>
                                                    <td
                                                        @if ($profit_reseller[$h->id] > 0) class="text-success" @else class="text-danger" @endif>
                                                        {{ $call->formatRupiah($profit_reseller[$h->id]) }}</td>
                                                    <td>{{ $h->start_cut_off }}</td>
                                                    <td>{{ $h->end_cut_off }}</td>
                                                    <td>
                                                        <label class="form-check form-switch">
                                                            <input class="form-check-input" type="checkbox"
                                                                @switch($h->status)
                                                                    @case(1)
                                                                        value="0"
                                                                        checked
                                                                    @break
                                                                    @case(3)
                                                                        value="1" 
                                                                        unchecked   
                                                                    @break                                                            
                                                                    @default
                                                                        value="1" 
                                                                        unchecked
                                                                @endswitch
                                                                wire:click="ubahStatusHarga({{ $h->id }}, {{ $h->status === 1 ? 0 : 1 }})"
                                                                wire:loading.attr="disabled">
                                                        </label>
                                                    </td>
                                                </tr>
                                            @endforeach
                                        @endif
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- Modal Create --}}

    <div class="modal modal-blur fade" id="create-modal" tabindex="-1" role="dialog" aria-hidden="true"
        wire:ignore.self>
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Tambah Produk Baru</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <label class="form-label required">Nama Produk</label>
                            <input type="text" class="form-control @error('nama_produk') is-invalid @enderror"
                                wire:model="nama_produk" placeholder="-- Misal Call of Duty --">
                            @error('nama_produk')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="col-md-6">
                            <label class="form-label required">
                                Brand
                                <span data-bs-toggle="tooltip" data-bs-placement="right"
                                    title="Brand harus mirip dengan di Digiflazz">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                        <path d="M12 17l0 .01" />
                                        <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                    </svg>
                                </span>
                            </label>
                            <input type="text" class="form-control @error('brand_produk') is-invalid @enderror"
                                wire:model="brand_produk" placeholder="-- Misal Call of Duty --">
                            @error('brand_produk')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="form-label required">
                                Kategori
                            </label>
                            <select class="form-control @error('kategori_produk') is-invalid @enderror"
                                wire:model="kategori_produk">
                                <option value="">-- Pilih --</option>
                                <option value="Games">Games</option>
                                <option value="Pulsa">Pulsa</option>
                                <option value="Voucher">Voucher</option>
                            </select>
                            @error('kategori_produk')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="form-label required">
                                Kode
                                <span data-bs-toggle="tooltip" data-bs-placement="right"
                                    title="Singkatan dari nama produk. Misal Mobile Legend = ml">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                        <path d="M12 17l0 .01" />
                                        <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                    </svg>
                                </span>
                            </label>
                            <input type="text" class="form-control @error('kode_produk') is-invalid @enderror"
                                wire:model="kode_produk" placeholder="-- Misal. 'ml' --">
                            @error('kode_produk')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="form-label required">
                                Upload Gambar
                                <span data-bs-toggle="tooltip" data-bs-placement="right"
                                    title="Format = .webp, Ukuran Maksimum = 128 Kb">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                        <path d="M12 17l0 .01" />
                                        <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                    </svg>
                                </span>
                            </label>
                            <input type="file" class="form-control @error('gambar_produk') is-invalid @enderror"
                                wire:model="gambar_produk">
                            @error('gambar_produk')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" wire:click="save"
                        wire:loading.attr="disabled">Tambah</button>
                </div>
            </div>
        </div>
    </div>

    {{-- Modal Sync --}}

    <div class="modal modal-blur fade" id="sync-modal" tabindex="-1" role="dialog" aria-hidden="true"
        data-bs-backdrop='static' wire:ignore.self>
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
                <div wire:loading>
                    <div class="progress progress-sm">
                        <div class="progress-bar progress-bar-indeterminate"></div>
                    </div>
                </div>
                <div wire:loading.target="sinkronisasi" wire:loading.remove>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="modal-status bg-success"></div>
                    <div class="modal-body text-center py-4">
                        <!-- Download SVG icon from http://tabler-icons.io/i/circle-check -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon mb-2 text-green icon-lg" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <h3>Sync</h3>
                        <div class="text-muted">Apa kamu yakin ingin mensinkronkan Produk <b>{{ $nama }}</b>
                            dari
                            Digiflazz ?</div>
                    </div>
                    <div class="modal-footer">
                        <div class="w-100">
                            <div class="row">
                                <div class="col"><a href="#" class="btn w-100" data-bs-dismiss="modal">
                                        Batal
                                    </a></div>
                                <div class="col">
                                    <button class="btn btn-success w-100" wire:click="sinkronisasi">
                                        Sync
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    @script
        <script>
            $wire.on('berhasil', (data) => {
                toastr.options = {
                    progressBar: true,
                    "positionClass": "toast-bottom-right",
                }
                toastr.success(data);
            });
            $wire.on('gagal', (data) => {
                toastr.options = {
                    progressBar: true,
                    "positionClass": "toast-bottom-right",
                }
                toastr.error(data);
            });
            $wire.on('close-create-modal', () => {
                $('#create-modal').modal('hide');
            })
            $wire.on('close-sync-modal', () => {
                $('#sync-modal').modal('hide');
            })
            $wire.on('open-update-modal', () => {
                $('#update-modal').modal('show');
            })
        </script>
    @endscript
</div>
