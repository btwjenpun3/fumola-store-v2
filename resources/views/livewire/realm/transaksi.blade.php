<div>
    <div class="card">
        <div class="table-responsive">
            <table class="table table-nowrap table-hover table-vcenter card-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Invoice</th>
                        <th>Denom</th>
                        <th>Kode</th>
                        <th>Saldo Terakhir</th>
                        <th>Saldo Terpotong</th>
                        <th>Serial Number</th>
                        <th>Seller Telegram</th>
                        <th>Seller WhatsApp</th>
                        <th>Waktu</th>
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
                                @if (isset($d->digiflazz))
                                    @switch($d->digiflazz->status)
                                        @case('Pending')
                                            <span class="badge bg-warning me-1"></span>
                                        @break

                                        @case('Sukses')
                                            <span class="badge bg-success me-1"></span>
                                        @break

                                        @case('Gagal')
                                            <span class="badge bg-danger me-1"></span>
                                        @break

                                        @default
                                    @endswitch
                                @else
                                    <span class="badge bg-secondary me-1"></span>
                                @endif
                            </td>
                            <td>{{ $d->nomor_invoice }}</td>
                            <td>{{ $d->harga->nama_produk }}</td>
                            <td>{{ $d->harga->kode_produk }}</td>
                            <td class="text-danger">
                                @if (isset($d->digiflazz->saldo_terakhir))
                                    {{ $call->formatRupiah($d->digiflazz->saldo_terakhir) }}
                                @else
                                    -
                                @endif
                            </td>
                            <td class="text-success">
                                @if (isset($d->digiflazz->saldo_terpotong))
                                    {{ $call->formatRupiah($d->digiflazz->saldo_terpotong) }}
                                @else
                                    -
                                @endif
                            </td>
                            <td>
                                @if (isset($d->digiflazz->sn))
                                    {{ $d->digiflazz->sn }}
                                @else
                                    -
                                @endif
                            </td>
                            <td>
                                @if (isset($d->digiflazz->seller_telegram))
                                    {{ $d->digiflazz->seller_telegram }}
                                @else
                                    -
                                @endif
                            </td>
                            <td>
                                @if (isset($d->digiflazz->seller_whatsapp))
                                    {{ $d->digiflazz->seller_whatsapp }}
                                @else
                                    -
                                @endif
                            </td>
                            <td>
                                @if (isset($d->digiflazz->created_at))
                                    {{ $d->digiflazz->created_at }} WIB
                                @else
                                    -
                                @endif
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
</div>
