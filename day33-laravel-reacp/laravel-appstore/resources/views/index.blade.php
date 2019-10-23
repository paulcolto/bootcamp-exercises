@extends('layout')

@section('content')

    <h1>This is the homepage</h1>

    {{-- example blade comment --}}
    <ul>
        @foreach ($apps as $app) 
            <li>
                {{ $app->title }}
            </li>

        @endforeach

    </ul>

@endsection