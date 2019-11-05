<?php 

var_dump(__FILE__);

var_dump(__DIR__);

var_dump(
    pathinfo(__FILE__)    
);

$contents = scandir(__DIR__);
var_dump($contents);

$directory_handle = opendir(__DIR__);
var_dump($directory_handle);
readdir($directory_handle);
var_dump($directory_handle);
