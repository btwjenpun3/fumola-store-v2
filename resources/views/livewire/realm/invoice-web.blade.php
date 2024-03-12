<div>
    <div class="card">
        <div class="table-responsive">
            <table class="table table-nowrap table-hover table-vcenter card-table">
                <thead>
                    <tr>
                        <th class="w-1"></th>
                        <th></th>
                        <th>Produk</th>
                        <th>Nomor Invoice</th>
                        <th>Tanggal</th>
                        <th>Harga Jual + Admin</th>
                        <th>Profit</th>
                        <th class="w-1"></th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $call = new App\Http\Controllers\GlobalController();
                    @endphp
                    @foreach ($data as $d)
                        <tr wire:key="{{ $d->id }}">
                            <td></td>
                            <td>{{ $d->game->nama }}</td>
                            <td>{{ $d->harga->nama_produk }}</td>
                            <td>{{ $d->nomor_invoice }}</td>
                            <td>{{ $d->created_at }} WIB</td>
                            <td>{{ $call->formatRupiah($d->total) }}</td>
                            <td class="text-success">{{ $call->formatRupiah($d->profit) }}</td>
                            <td>
                                <button class="btn btn-link">Detail</button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <div class="mt-3 ms-auto">
            {{ $data->links() }}
        </div>
    </div>
</div>
