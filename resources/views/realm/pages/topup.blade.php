@extends('realm.layouts.master')

@section('title')
@endsection

@section('content')
    @livewire('realm.top-up', ['slug' => $slug])
@endsection
