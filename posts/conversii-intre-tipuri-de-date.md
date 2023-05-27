---
title: "Conversii intre tipuri de date"
subtitle: "În programarea Arduino, este posibil să aveți nevoie să convertiți valori între diferite tipuri de date. Acest lucru poate fi util atunci când lucrați cu senzori, afișaje sau alte componente care utilizează diferite tipuri de date. În această lecție, veți învăța despre câteva metode comune de conversie între tipuri de date în Arduino."
date: "2020-12-22"
image: "3-2.jpg"
introduction: "true"
category: "arduino"
lessonChapter: "3"
lessonNumber: "2"
---

În programarea Arduino, este posibil să aveți nevoie să convertiți valori între diferite tipuri de date. Acest lucru poate fi util atunci când lucrați cu senzori, afișaje sau alte componente care utilizează diferite tipuri de date. În această lecție, veți învăța despre câteva metode comune de conversie între tipuri de date în Arduino.

## Conversia între întregi și zecimale:
- Pentru a converti un număr întreg (int) într-un număr zecimal cu zecimale (float), puteți utiliza funcția float(). 

Exemplu:

        int temperatura1 = 10;
        float temperatura2 = float(temperatura1);

- Pentru a converti un număr zecimal cu zecimale (float) într-un număr întreg (int), puteți utiliza funcția int() sau round() pentru a aproxima la cel mai apropiat întreg. 

Exemplu: 

        float temperatura1 = 25.6;
        int temperatura2 = round(temperatura1);

## Conversia între șiruri de caractere (char) și numere:
- Pentru a converti un caracter într-un număr întreg reprezentând codul ASCII, puteți utiliza operatorul de conversie int(). 

Exemplu:

        char litera = ‘A’;
        int cod = int(litera);

- Pentru a converti un număr întreg într-un caracter ASCII, puteți utiliza operatorul de conversie char(). 
Exemplu:

        int cod = 65;
        char litera = char(cod);

## Conversia între șiruri de caractere (String) și numere:
- Pentru a converti o valoare numerică într-un șir de caractere, puteți utiliza metoda String(). 

Exemplu:

        int temperatura = 25;
        String tempString = String(temperatura);

- Pentru a converti un șir de caractere într-o valoare numerică, puteți utiliza metoda toInt() pentru numere întregi și metoda toFloat() pentru numere cu zecimale. 

Exemplu:

        String tempString = “25”;
        int temperatura = tempString.toInt();

Acestea sunt doar câteva exemple de conversii între tipuri de date comune în Arduino. În funcție de necesitățile dvs., pot exista și alte metode de conversie disponibile. Asigurați-vă că verificați documentația Arduino sau resurse suplimentare pentru a afla mai multe despre conversii între tipuri de date.
