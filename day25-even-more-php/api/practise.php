<?php

// ARRAYS

$cars_i_want = [];
$cars_i_want[] = 'Aston Martin';
$cars_i_want[] = 'Bugatti';
$cars_i_want[] = 'Ferrari';
$cars_i_want[] = 'Lamborghini';
$cars_i_want[] = 'Maserati';
$cars_i_want[] = 'Mercedes';
$cars_i_want[] = 'Porsche';
$cars_i_want[] = 'Skoda';

var_dump($cars_i_want);

echo 'For myself I would buy ' . $cars_i_want[1];
echo "<br>";
echo 'For my spouse I would buy ' . $cars_i_want[3];
$cars_i_want[4] = 'Smart';
echo "<br>";
echo 'Each of my kids will get a ' . $cars_i_want[4];
echo "<br>";

echo "<ul>";
foreach ($cars_i_want as $car) {
    echo "<li>$car</li>";
}
echo "<br>";

$car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche 911' => 1150000
];

echo "You can have a Porsche for just " . $car_prices['Porsche 911'];
echo "<br>";

foreach ($car_prices as $car => $price) {
    echo "The price of " . $car . " is " . $price . ". <br>";
}

// EXERCISE: functions, operators & conditions

// Variables & data types
$my_name = 'Paul';
$height = 185;
var_dump($my_name);
var_dump($height);

// Functions
$inches = 12;
function inchesToCentimeters($numOfInches)
{
    return $numOfInches * 2.54;
}
$inchesTwo = inchesToCentimeters($inches);
echo $inchesTwo;

echo "<br>";

// Functions #4

$celsius = 100;
function celsiusToFahrenheit($celsiusTemp)
{
    return (9 / 5) * $celsiusTemp + 32;
}
echo celsiusToFahrenheit($celsius);

// Ternary operator

$number = 42;

function evenOrOdd($num) {
    $num % 2 == 0 ? true : false;
}

echo evenOrOdd($number);
echo "<br>";

// Concatenation #1
$weekday = 'Saturday';
function sayWeekday($day) {
    echo 'Today is ' . $day . '.<br>';
}
echo sayWeekday($weekday);
echo "<br>";

// Concatenation #2
$year_of_birth = 1981;
function sayBirthday($year) {
    $year_of_birth = 1981;
    $this_year = 2019;
    echo "I was born in " . $year_of_birth . ' so this year I am celebrating my ' . ($this_year - $year_of_birth) . '.<br>';
}

echo sayBirthday($year_of_birth);
echo "<br>";

// classes and objects

class User 
{
    public function __construct()
    {
        $created_at->date();
    }

    public $id = null;
    public $username = null;
    public $name = null;
    public $password = null;
    public $number_of_posts = 0;
    public $created_at = null;

    public function dumpMe()
    {
        var_dump($this);
    }
}

$steve = new User();
$steve->id = 1;
$steve->username = 'steve';
$steve->name= ' Stephen';
echo 'The name of user ' . $steve->id . ' is ' . $steve->name . '.';
echo "<br>";

$bob = new User();
$steve->dumpMe();
echo "<br>";
$bob->dumpMe();
echo "<br>";

