<?php

/* $first_name = "Bruce";
$surname = "Wayne";
$my_age = 37;
$full_name = 'Bruce' . ' Wayne.';
echo $first_name;
echo "<br>";
echo $surname;
echo "<br>";

echo "<br>";
echo $my_age;
unset($my_age);
echo $my_age;
echo "<br>";
echo $full_name;
echo "<br>";

define('MY_PET', 'Jozin');
echo MY_PET;

function headline($text, $level = 1)
{
    return "<h{$level}>${text}</h{$level}>";
}
echo headline('Heading');
echo "<br>";
echo headline('Headline', 4);
echo "<br>";
var_dump(null);

echo (integer)12.64;
echo "<br>";
echo (boolean)12;
echo "<br>";
echo (string)54544;
echo "<br>";

$my_number = 20;
$my_number *= 5;
echo $my_number;
echo "<br>";

$number = 0;
$number++;
var_dump($number);
echo "<br>";

$number = 0;
var_dump($number++);
echo "<br>";

$number = 0;
var_dump(++$number);
echo "<br>"; */


$first_name = 'Paul';
$surname = 'Coltofeanu';

echo 'First name: ' . $first_name;
echo "<br>";
echo 'Surname: ' . $surname;

echo "<br>";echo "<br>";

$year_of_birth = 1981;
$height = 186;

echo 'Year of birth: ' . $year_of_birth;
echo "<br>";
echo 'Height: ' . $height . 'cm';
echo "<br>";
echo "<br>";

define('SERVER_SOFTWARE', 'Apache');
echo 'This server is running on ' . SERVER_SOFTWARE . '.';

echo "<br>";
echo "<br>";

function greet($whom)
{
    return "Hello, " . $whom . "!";
}

echo greet('Prague');

echo "<br>";
echo "<br>";

function truncateString(&$string, $size)
{
    $part = mb_substr($string, 0, $size);

    var_dump($part);
}

$sentence = 'Quick brown fox jumps over the lazy dog.';
 
truncateString($sentence, 10);
 
echo $sentence;

$time_served = 0;
echo "<br>";

// while loop
while ($time_served < 10) {
     
    $time_served++;
    
    echo "The prisoner has served " . $time_served . " years. <br>";

}

echo "<br>";
echo "<br>";

// do while loop
do {
    
    $time_served++;
    
    echo "The prisoner has served " . $time_served . " years. <br>";
} while ($time_served < 10);

echo "<br>";
echo "<br>";

for ($i = 0; $i < 5; $i++) {
    echo "The prisioner has " . (5 - $i) . " more years to serve.<br>";
}

echo "<br>";
echo "<br>";

// continue and break
for ($i = 10; $i > 0; $i--) {

    if ($i == 2) {
        echo "Paroled!";
        break;
    }

    else if ($i > 5) {
        echo "The prisioner has " . $i . " more years to serve.<br>";
    }
    
    elseif ($i < 6) {
        echo "The prisioner has " . $i . " more years to serve.<br>";
        echo "Going to a parole hearing...<br>";
        continue;

    } 
}

// ARRAYS

$cars_i_want = [];
var_dump($cars_i_want);
$cars_i_want = ['Aston Martin', 'Bugatti', 'Ferrari', 'Lamborghini', 'Maserati', 'Mercedes', 'Porsche', 'Skoda'];
var_dump($cars_i_want);
echo "<br>";
echo "For myself I would buy " . $cars_i_want[1] . ".<br>";
echo "<br>";
echo "For my spouse I would buy " . $cars_i_want[3] . ".<br>";
echo "<br>";
$cars_i_want[4] = 'Smart';
var_dump($cars_i_want[4]);
echo "Each of my kids will get a " . $cars_i_want[4] . ".<br>";

echo "<br>";

echo "<ul>";

foreach($cars_i_want as $name)
{
    echo "<li>{$name}</li>";
}
echo "</ul>";

$car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche 911' => 1150000
];
echo "<br>";

echo "You can have a Porsche for just " . $car_prices['Porsche 911'] . ".<br>";

foreach ($car_prices as $key => $value) {
    echo "The price of " . $key . ' is ' . $value . ".<br>";
}