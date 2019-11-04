@extends('layouts.app')

@section('content')

<input type="hidden" id="user_id" value="{{ auth()->id() }}"/>    
<input type="hidden" id="user" value="{{ auth()->user() }}"/>

<div id="my-react"></div>

@endsection
