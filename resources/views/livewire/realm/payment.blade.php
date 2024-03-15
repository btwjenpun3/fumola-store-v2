<div>
    <div class="card">
        <div class="table-responsive">
            <table class="table table-nowrap table-hover table-vcenter card-table">
                <thead>
                    <tr>
                        <th></th>
                        <th class="w-7"></th>
                        <th>Nama</th>
                        <th>Tipe Pembayaran</th>
                        <th>Metode Pembayaran</th>
                        <th>Biaya Admin (%)</th>
                        <th>Biaya Admin (Fixed)</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($data as $d)
                        <tr wire:key="{{ $d->id }}">
                            <td>
                                @switch($d->status)
                                    @case(0)
                                        <span class="badge bg-danger me-1"></span>
                                    @break

                                    @case(1)
                                        <span class="badge bg-success me-1"></span>
                                    @break
                                @endswitch
                            </td>
                            <td>
                                <img src="{{ asset(Storage::url($d->image)) }}">
                            </td>
                            <td>{{ $d->name }}</td>
                            <td>{{ $d->payment_type }}</td>
                            <td>{{ $d->payment_method }}</td>
                            <td>
                                @if (isset($d->admin_fee))
                                    {{ $d->admin_fee }}
                                @else
                                    -
                                @endif
                            </td>
                            <td>
                                @if (isset($d->admin_fee_fixed))
                                    {{ $d->admin_fee_fixed }}
                                @elseif($d->admin_fee_fixed === 0)
                                    -
                                @else
                                    -
                                @endif
                            </td>
                            <td>
                                <label class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox"
                                        @switch($d->status)
                                            @case(1)
                                                value="0"
                                                checked
                                            @break
                                            @case(0)
                                                value="1" 
                                                unchecked   
                                            @break  
                                        @endswitch
                                        wire:click="ubahStatus({{ $d->id }}, {{ $d->status === 1 ? 0 : 1 }})"
                                        wire:loading.attr="disabled">
                                </label>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
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
