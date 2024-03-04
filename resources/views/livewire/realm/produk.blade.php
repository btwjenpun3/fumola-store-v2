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
                <div class="modal-body">
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
                                    @if (isset($harga))
                                        @php
                                            $call = new App\Http\Controllers\GlobalController();
                                        @endphp
                                        @foreach ($harga as $h)
                                            <tr wire:key="{{ $h->id }}">
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
                                                <td>{{ $h->tipe }}</td>
                                                <td>{{ $h->kode_produk }}</td>
                                                <td>{{ $h->seller }}</td>
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
                                                            @if ($h->status === 1) value="0"
                                                        checked 
                                                        @else
                                                        value="1" 
                                                        unchecked @endif
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
        </script>
    @endscript
</div>
