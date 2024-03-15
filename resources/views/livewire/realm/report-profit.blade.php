<div>
    <div class="row row-cards">
        <div class="col-12">
            <div class="card">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Tampilkan Report Profit</h3>
                        </div>
                        <div class="card-body">
                            <div class="row g-2 align-items-center">
                                <div class="col-12 col-xl-2 font-weight-semibold">Pilih Range Tanggal</div>
                                <div class="col-12">
                                    <input name="range-tanggal" type="text"
                                        class="form-control @error('date') is-invalid @enderror"
                                        placeholder="-- Select Date Range --" wire:model="date"
                                        data-provide="datepicker" data-date-autoclose="true"
                                        data-date-format="mm/dd/yyyy" data-date-today-highlight="true">
                                    @error('date')
                                        <div class="invalid-feedback">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100" wire:click="generate"
                                        wire:loading.attr="disabled">
                                        <span id="btn-text">Generate</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="table-responsive">
                                <table class="table table-nowrap table-hover table-vcenter card-table">
                                    <thead>
                                        <tr>
                                            <th>Pembelian dari Reseller ?</th>
                                            <th>Nomor Invoice</th>
                                            <th>Produk</th>
                                            <th>Profit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @php
                                            $call = new App\Http\Controllers\GlobalController();
                                        @endphp
                                        @if (count($rows) > 0)
                                            @foreach ($rows as $row)
                                                <tr>
                                                    @if (isset($row['realm_user_id']))
                                                        <td>
                                                            Ya
                                                        </td>
                                                    @else
                                                        <td>
                                                            -
                                                        </td>
                                                    @endif
                                                    <td>{{ $row['nomor_invoice'] }}</td>
                                                    <td>{{ $row['harga']['nama_produk'] }}</td>
                                                    <td>{{ $call->formatRupiah($row['profit']) }}</td>
                                                </tr>
                                            @endforeach
                                        @endif
                                    </tbody>
                                    @if (count($rows) > 0)
                                        <tfoot>
                                            <tr>
                                                <td><b>Total Profit</b></td>
                                                <td></td>
                                                <td></td>
                                                <td class="text-info">
                                                    <b> {{ $call->formatRupiah($total_profit) }}</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><b>Total Profit / 2</b></td>
                                                <td></td>
                                                <td></td>
                                                <td class="text-success">
                                                    <b>{{ $call->formatRupiah($total_profit / 2) }}</b>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    @endif
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    @script
        <script>
            $('input[name="range-tanggal"]').daterangepicker({
                timePicker: true,
                timePickerIncrement: 1,
                locale: {
                    format: 'YYYY-MM-DD HH:mm:ss'
                },
                startDate: moment().startOf('day'),
                endDate: moment().endOf('day')
            }).on('apply.daterangepicker', function(ev, picker) {
                @this.set('date', picker.startDate.format('YYYY-MM-DD HH:mm:ss') + ' - ' + picker.endDate.format(
                    'YYYY-MM-DD HH:mm:ss'));
            });
            $wire.on('error', (data) => {
                toastr.error(data)
            });
        </script>
    @endscript
</div>
