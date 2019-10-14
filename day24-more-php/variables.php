<?php 

$foo = 123;

function bar() 
{
    // $foo is not defined
}

$foo; //considered bad practise

$my_greeting = "Hello, world!";

echo "Hello,world!";
unset($my_greeting); // $my_greeting is no more

