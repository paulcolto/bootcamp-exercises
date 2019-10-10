<?php 

function assess_number($a)
{
    return $a > 10;
}

function headline($text, $level = 1)
{
    return "<h{$level}>${text}</h{$level}>";
}
// second parameter gets default value 1
echo headline('Main headline');

// second parameter gets given value 2
echo headline('Secondary headline', 2);