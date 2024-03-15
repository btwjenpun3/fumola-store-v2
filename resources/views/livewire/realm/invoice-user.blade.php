<div>
    <div class="card">
        <div class="table-responsive">
            <table class="table table-nowrap table-hover table-vcenter card-table">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Produk</th>
                        <th>Nomor Invoice</th>
                        <th>Tanggal</th>
                        <th>Harga Beli</th>
                        <th class="w-1"></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $call = new App\Http\Controllers\GlobalController();
                    @endphp
                    @foreach ($data as $d)
                        <tr wire:key="{{ $d->id }}">
                            <td>
                                @switch($d->status)
                                    @case('PAID')
                                        <span class="badge bg-success me-1"></span>
                                    @break

                                    @case('PENDING')
                                        <span class="badge bg-warning me-1"></span>
                                    @break

                                    @case('EXPIRED')
                                        <span class="badge bg-danger me-1"></span>
                                    @break

                                    @default
                                @endswitch
                            </td>
                            <td>{{ $d->game->nama }}</td>
                            <td>{{ $d->harga->nama_produk }}</td>
                            <td>{{ $d->nomor_invoice }}</td>
                            <td>{{ $d->created_at }} WIB</td>
                            <td>{{ $call->formatRupiah($d->total) }}</td>
                            <td>
                                <button class="btn btn-link" data-bs-toggle="modal" data-bs-target="#modal-detail"
                                    wire:click="show({{ $d->id }})">Detail</button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <div class="mt-3 me-3 ms-auto">
            {{ $data->links() }}
        </div>
    </div>

    {{-- Modal Invoice --}}

    <div class="modal modal-blur fade" id="modal-detail" tabindex="-1" role="dialog" aria-hidden="true"
        wire:ignore.self>
        <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Detail Invoice</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div wire:loading>
                    <div class="progress progress-sm">
                        <div class="progress-bar progress-bar-indeterminate"></div>
                    </div>
                </div>
                <div class="modal-body">
                    <div wire:loading.remove wire:target="show">
                        <div id="invoice-content">
                            <div class="container-xl">
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">{{ $invoice }}</h3>
                                    </div>
                                    <div class="card-body">
                                        <div class="datagrid">
                                            <div class="datagrid-item">
                                                <div class="datagrid-title">Nama Produk</div>
                                                <div class="datagrid-content">{{ $produk }}</div>
                                            </div>
                                            <div class="datagrid-item">
                                                <div class="datagrid-title">Nama Denom</div>
                                                <div class="datagrid-content">{{ $denom }}</div>
                                            </div>
                                            <div class="datagrid-item">
                                                <div class="datagrid-title">Tipe Pembayaran</div>
                                                <div class="datagrid-content">{{ $tipe_pembayaran }}</div>
                                            </div>
                                            <div class="datagrid-item">
                                                <div class="datagrid-title">User ID</div>
                                                <div class="datagrid-content">{{ $user_id }}</div>
                                            </div>
                                            <div class="datagrid-item">
                                                <div class="datagrid-title">Server ID</div>
                                                <div class="datagrid-content">
                                                    @if (isset($server_id))
                                                        {{ $server_id }}
                                                    @else
                                                        -
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="datagrid-item">
                                                <div class="datagrid-title">Metode Pembayaran</div>
                                                <div class="datagrid-content">{{ $metode_pembayaran }}</div>
                                            </div>
                                            <div class="datagrid-item">
                                                <div class="datagrid-title">Status</div>
                                                <div class="datagrid-content">
                                                    @switch($status)
                                                        @case('PAID')
                                                            <span class="badge bg-success me-1"></span>
                                                        @break

                                                        @case('PENDING')
                                                            <span class="badge bg-warning me-1"></span>
                                                        @break

                                                        @case('EXPIRED')
                                                            <span class="badge bg-danger me-1"></span>
                                                        @break

                                                        @default
                                                    @endswitch
                                                    {{ $status }}
                                                </div>
                                            </div>
                                            <div class="datagrid-item">
                                                <div class="datagrid-title">Waktu Expired</div>
                                                <div class="datagrid-content">
                                                    @switch($status)
                                                        @case('PAID')
                                                            -
                                                        @break

                                                        @case('PENDING')
                                                            {{ $expired }}
                                                        @break

                                                        @case('EXPIRED')
                                                            {{ $expired }}
                                                        @break

                                                        @default
                                                    @endswitch
                                                </div>
                                            </div>
                                            <div class="datagrid-item">
                                                <div class="datagrid-title">Waktu di Bayar</div>
                                                <div class="datagrid-content">
                                                    @switch($status)
                                                        @case('PAID')
                                                            {{ $di_bayar }} WIB
                                                        @break

                                                        @case('PENDING')
                                                            -
                                                        @break

                                                        @case('EXPIRED')
                                                            -
                                                        @break

                                                        @default
                                                    @endswitch
                                                </div>
                                            </div>
                                            @php
                                                $call = new App\Http\Controllers\GlobalController();
                                            @endphp
                                            <div class="datagrid-item">
                                                <div class="datagrid-title">Total</div>
                                                <div class="datagrid-content">{{ $call->formatRupiah($total) }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container-xl mt-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="datagrid">
                                            <div class="datagrid-item">
                                                <div class="datagrid-title">SERIAL NUMBER</div>
                                                <div class="datagrid-content">
                                                    @if (isset($sn))
                                                        {{ $sn }}
                                                    @else
                                                        -
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer mt-4">
                            <button type="button" class="btn me-auto" data-bs-dismiss="modal">Tutup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
