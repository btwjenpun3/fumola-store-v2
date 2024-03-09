<div>
    <div class="card card-md">
        <div class="card-body">
            <h2 class="h2 text-center mb-4">Login ke akun kamu.</h2>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control @error('email') is-invalid @enderror" placeholder="-- Email --"
                    wire:model="email">
                @error('email')
                    <div class="invalid-feedback">{{ $message }}</div>
                @enderror
            </div>
            <div class="mb-2">
                <label class="form-label">
                    Password
                </label>
                <div class="input-group input-group-flat">
                    <input type="password" class="form-control @error('password') is-invalid @enderror"
                        placeholder="-- Password --" wire:model="password">
                    @error('password')
                        <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>
            </div>
            <div class="mb-2">
                <label class="form-check">
                    <input type="checkbox" class="form-check-input" />
                    <span class="form-check-label">Ingat saya</span>
                </label>
            </div>
            <div class="form-footer">
                <button class="btn btn-primary w-100" wire:click="logins" wire:loading.attr="disabled">Masuk</button>
            </div>
        </div>
        <div class="hr-text">Atau</div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <a href="#" class="btn w-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon text-twitter" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg>
                        Masuk dengan Google
                    </a>
                </div>
            </div>
        </div>
    </div>

    @script
        <script>
            $wire.on('gagal', (data) => {
                toastr.error(data);
            });
        </script>
    @endscript
</div>
