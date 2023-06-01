---
title: "Structura unui program Arduino: Functile ‘setup()’ si ‘loop()’"
subtitle: "Pentru a programa cu succes placa Arduino, este important să înțelegeți structura de bază a unui program Arduino. Un program Arduino este alcătuit din mai multe părți esențiale. "
date: "2023-05-27"
image: "arduinoIcon.png"
introduction: "true"
category: "arduino"
lessonChapter: "2"
lessonNumber: "1"
---


Pentru a programa cu succes placa Arduino, este important să înțelegeți structura de bază a unui program Arduino. Un program Arduino este alcătuit din mai multe părți esențiale. 

- Funcția setup(): Aceasta este prima funcție definită într-un program Arduino și este apelată o singură dată la pornirea plăcii Arduino. În cadrul funcției setup(), puteți inițializa diferite setări, cum ar fi configurarea pinilor de intrare/ieșire, setarea vitezei de comunicație serială, inițializarea bibliotecilor etc.

- Funcția loop(): Aceasta este funcția principală într-un program Arduino și este apelată în mod repetat după ce funcția setup() se încheie. În cadrul funcției loop(), puteți scrie codul care controlează comportamentul plăcii Arduino. Acest cod va fi executat într-un ciclu continuu, până când placa Arduino este oprită sau resetată.

Aceasta este structura de bază a unui program Arduino. Funcția setup() este utilizată pentru a face inițializări și configurații la începutul programului, în timp ce funcția loop() este utilizată pentru a controla comportamentul plăcii Arduino într-un ciclu continuu. În cadrul acestor funcții, puteți utiliza declarații de variabile globale și puteți defini funcții personalizate pentru a organiza și structura codul dvs.

![Arduino IDE](https://cdn.sparkfun.com/assets/a/b/a/f/5/51363844ce395f9922000001.png)