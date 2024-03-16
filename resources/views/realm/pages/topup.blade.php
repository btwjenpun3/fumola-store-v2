@extends('realm.layouts.master')

@section('title')
@endsection

@section('content')
    @livewire('realm.top-up', ['slug' => $slug])
@endsection

@section('js')
    <script src="https://js.pusher.com/8.2.0/pusher.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/laravel-echo@1.11.2/dist/echo.iife.js"></script>
@endsection
