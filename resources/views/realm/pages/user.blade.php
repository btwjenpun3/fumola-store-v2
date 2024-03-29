@extends('realm.layouts.master')

@section('title')
    <title>Fumola Realm - User</title>
@endsection

@section('header')
    <div class="page-header d-print-none text-white">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <div class="page-pretitle">
                        Overview
                    </div>
                    <h2 class="page-title">
                        User
                    </h2>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('content')
    @livewire('realm.user')
@endsection
