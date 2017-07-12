# Pig Latin Converter

#### Convert text to pig latin, July 12, 2017

#### By Esti Shay, Maria Thomas, Collin Person

##Description

Translates user input to pig latin.

## Specifications

* Program will recognize when word begins with vowel
  * Input: apple
  * Output: apple
* Words beginning w/vowels: add way to the end
  * Input: apple
  * Output: appleway
* Program will recognize when word begins with consonant
  * Input: shazam
  * Output: shazam
* Remove all consonants at beginning and append to end of word, adding "ay"
  * Input: shazam
  * Output: azamshay
* If beginning consonant string ends with "qu", slice off u with q
  * Input: squeal
  * Output: ealsquay
* Recognize y as a vowel only if it's not the first letter
  * Input: system
  * Output: ystemsay
* Recognize nonalphabetical characters and return without modification
  * Input: %
  * Output: %

## Technologies used
JavaScript, jQuery

### License

This software is licensed under GPL.

Copyright (c) 2017 Esti Shay, Maria Thomas, Collin Person
