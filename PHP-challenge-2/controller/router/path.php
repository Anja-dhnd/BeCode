<?php

$uri = $_SERVER['REQUEST_URI'];
$uri = explode("/", $uri);

echo $uri[0];
print_r ($uri);