<?php

namespace App\Livewire\Auth;

use Exception;
use Livewire\Component;
use Illuminate\Support\Facades\Session;

class Login extends Component
{
    public $email, $password;

    public function logins()
    {
        $credential = $this->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        try {
            if(auth()->attempt($credential)) {
                $user = auth()->user();        
                Session::put('user_id', $user->id);
                Session::put('user_name', $user->name);            
                session()->regenerate();
                return redirect()->route('dashboard.index');
            } else {
                $this->dispatch('gagal', 'Email / Password salah!');
            }
        } catch (\Exception $e) {

        }
    }

    public function render()
    {
        return view('livewire.auth.login');
    }
}
