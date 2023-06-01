---
title: "Instructiunea de bucle (for, while)"
subtitle: "Instrucțiunile de bucle vă permit să executați repetitiv anumite blocuri de cod în Arduino. Acestea vă permit să iterați prin valori, să verificați condiții și să repetați o acțiune până când condiția devine falsă. În această lecție, veți învăța despre instrucțiunile de bucle for și while în Arduino."
date: "2020-12-22"
image: "arduinoIcon.png"
introduction: "true"
category: "arduino"
lessonChapter: "4"
lessonNumber: "2"
---

Instrucțiunile de bucle vă permit să executați repetitiv anumite blocuri de cod în Arduino. Acestea vă permit să iterați prin valori, să verificați condiții și să repetați o acțiune până când condiția devine falsă. În această lecție, veți învăța despre instrucțiunile de bucle for și while în Arduino.

- Instrucțiunea for: Instrucțiunea for este utilizată pentru a itera prin valori și a executa un bloc de cod de mai multe ori. Aceasta constă dintr-un inițializator, o condiție și o instrucțiune de incrementare. Sintaxa generală este: <br>

    for (inițializator; condiție; incrementare) {
      // blocul de cod care se repetă
    }



Exemplu:<br>

    for (int i = 0; i < 5; i++) {
      // Execută acțiunea specifică de 5 ori
    }

În acest exemplu, inițializăm o variabilă i cu valoarea 0, specificăm că bucla trebuie să se execute atât timp cât i este mai mică decât 5 și incrementăm i la fiecare iterație.

![Bucla Arduino](https://europe1.discourse-cdn.com/arduino/original/4X/c/7/9/c799db64978802d52c87d8607da4fc0ad43398ea.png)

- Instrucțiunea while: Instrucțiunea while este utilizată pentru a executa un bloc de cod atât timp cât o anumită condiție este adevărată. Sintaxa generală este:


    while (condiție) {
      // blocul de cod care se repetă
    }
Exemplu:

    int temperatura = 0;
    while (temperatura < 100) {
    // Execută acțiunea specifică atât timp cât temperatura este mai mică decât 100
    }

În acest exemplu, bucla while se execută atât timp cât valoarea variabilei temperatura este mai mică decât 100. În fiecare iterație, verificați condiția și, dacă este adevărată, executați acțiunea specifică.
