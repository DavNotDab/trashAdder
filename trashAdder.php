<?php

$config = json_decode(file_get_contents('config.json'), true);

$filename = $config['filename'];
$trashCharacters = $config['trashCharacters'];

function trashAdder($text) {
    global $trashCharacters;
    $result = [];
    for ($i = 0; $i < strlen($text); $i += 2) {
        $result[] = substr($text, $i, 2);
        if ($i + 2 < strlen($text)) {
            $result[] = $trashCharacters[array_rand($trashCharacters)];
        }
    }
    return implode('', $result);
}

$text = file_get_contents($filename);

$newText = trashAdder($text);

echo $newText;