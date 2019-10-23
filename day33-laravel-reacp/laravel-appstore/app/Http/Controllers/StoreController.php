<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\App;

class StoreController extends Controller
{
    public function index()
    {
        $apps = App::orderBy('title', 'asc')
        ->limit(100)
        ->get();
        
        $index_view = view('index', compact('apps'));

        return $index_view;
    }
}
