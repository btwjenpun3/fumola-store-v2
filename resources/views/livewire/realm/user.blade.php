<div>
    <div class="card">
        <div class="table-responsive">
            <table class="table table-nowrap table-hover table-vcenter card-table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Kode Reseller</th>
                        <th>Email</th>
                        <th>Telepon</th>
                        <th>Saldo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $call = new App\Http\Controllers\GlobalController();
                    @endphp
                    @foreach ($data as $d)
                        <tr wire:key="{{ $d->kode_reseller }}">
                            <td>{{ $d->name }}</td>
                            <td>{{ $d->kode_reseller }}</td>
                            <td>{{ $d->email }}</td>
                            <td>{{ $d->phone }}</td>
                            <td class="text-info">
                                @if ($d->saldo === 0)
                                    {{ $call->formatRupiah(0) }}
                                @else
                                    {{ $call->formatRupiah($d->saldo) }}
                                @endif
                            </td>
                            <td>
                                <div class="btn-list">
                                    <button class="btn-link" data-bs-toggle="modal" data-bs-target="#tambah-saldo"
                                        wire:click="show({{ $d->id }})">Saldo</button>
                                    <button class="btn-link text-warning" data-bs-toggle="modal"
                                        data-bs-target="#password-modal"
                                        wire:click="showPassword({{ $d->id }})">Password</button>
                                </div>
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

    {{-- Modal Saldo --}}

    <div class="modal modal-blur fade" id="tambah-saldo" tabindex="-1" role="dialog" aria-hidden="true"
        wire:ignore.self>
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Tambah Saldo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row mb-3">
                        <div class="col text-center" style="">
                            <h3>{{ $name }}</h3>
                            <h3>{{ $kode_reseller }}</h3>
                        </div>
                    </div>
                    <div class="row mb-3 align-items-end">
                        <div class="col">
                            <label class="form-label">Saldo Awal</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Rp.</span>
                                </div>
                                <input type="number" class="form-control" wire:model="saldoAwal" disabled>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3 align-items-end">
                        <div class="col">
                            <label class="form-label">Tambah Saldo</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Rp.</span>
                                </div>
                                <input type="number" class="form-control @error('nominal') is-invalid @enderror"
                                    placeholder="Misal '50000'" wire:model="nominal">
                                @error('nominal')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn me-auto" data-bs-dismiss="modal">Tutup</button>
                    <button class="btn btn-primary" wire:click="update" wire:loading.attr="disabled">Tambah</button>
                </div>
            </div>
        </div>
    </div>

    {{-- Modal Saldo --}}

    <div class="modal modal-blur fade" id="password-modal" tabindex="-1" role="dialog" aria-hidden="true"
        wire:ignore.self>
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Tambah Saldo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row mb-3">
                        <div class="col text-center" style="">
                            <h3>{{ $name }}</h3>
                            <h3>{{ $kode_reseller }}</h3>
                        </div>
                    </div>
                    <div class="row mb-3 align-items-end">
                        <div class="col">
                            <label class="form-label">Masukkan Password Baru</label>
                            <div class="input-group">
                                <input type="text" class="form-control @error('password') is-invalid @enderror"
                                    wire:model="password">
                                @error('password')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn me-auto" data-bs-dismiss="modal">Tutup</button>
                    <button class="btn btn-warning" wire:click="changePassword" wire:loading.attr="disabled">Ubah
                        Password</button>
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
            $wire.on('modal-close', () => {
                $('#tambah-saldo').modal('hide');
            });
            $wire.on('modal-password-close', () => {
                $('#password-modal').modal('hide');
            });
        </script>
    @endscript

</div>
