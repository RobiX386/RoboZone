---
title: "Led-uri si semnale luminoase"
subtitle: "Senzorii și modulele externe reprezintă o parte importantă a proiectelor Arduino, deoarece oferă capacitatea de a interacționa cu mediul înconjurător și de a colecta date relevante. În această lecție, veți învăța cum să utilizați senzori și module externe în proiectele Arduino."
date: "2023-05-27"
image: "7-1.png"
introduction: "false"
category: "arduino"
lessonChapter: "7"
lessonNumber: "1"
---

Senzorii și modulele externe reprezintă o parte importantă a proiectelor Arduino, deoarece oferă capacitatea de a interacționa cu mediul înconjurător și de a colecta date relevante. În această lecție, veți învăța cum să utilizați senzori și module externe în proiectele Arduino.

**Conectarea unui Led la Arduino:**
Pentru a conecta un Led la Arduino, veți avea nevoie de un Led (de exemplu, un Led roșu sau verde), o rezistență de 220 ohmi și două fire de conexiune. Conectați un capăt al rezistenței la pinul digital al Arduino, iar celălalt capăt al rezistenței la unul dintre capetele Led-ului. Apoi, conectați celălalt capăt al Led-ului la masă (GND) a Arduino. În final, conectați un fir de conexiune de la pinul digital la celălalt capăt al Led-ului.

![modul RF arduino](https://docs.arduino.cc/static/079b1bab3758603a56c5d98e1f59a88e/29114/circuit.png)

**Aprinderea și stingerea unui Led:**
Pentru a aprinde și stinge un Led conectat la Arduino, puteți utiliza funcțiile "digitalWrite()" și "delay()".
Exemplu:

    const int ledPin = 13;

    void setup() {
    pinMode(ledPin, OUTPUT); // Configurăm pinul 13 ca ieșire digitală
    }

    void loop() {
    digitalWrite(ledPin, HIGH); // Aprindem Led-ul
    delay(1000); // Pauză de 1 secundă
    digitalWrite(ledPin, LOW); // Stingem Led-ul
    delay(1000); // Pauză de 1 secundă
    }


În acest exemplu, am utilizat pinul 13 al Arduino ca ieșire digitală și am aprins și stins Led-ul conectat la acest pin utilizând funcțiile "digitalWrite()" și "delay()".

**Efecte luminoase cu Led-uri:**
Utilizând Led-uri și temporizatoare, puteți crea diverse efecte luminoase interesante. De exemplu, puteți crea un efect de clipire rapidă, un efect de lumină care palpitează sau un efect de curgere a luminii. Aceste efecte pot fi obținute prin controlul secvențial al pinilor digitali și utilizarea funcțiilor "digitalWrite()" și "delay()".
Exemplu - Efect de clipire rapidă:

    const int ledPin = 13;

    void setup() {
      pinMode(ledPin, OUTPUT); // Configurăm pinul 13 ca ieșire digitală
    }

    void loop() {
      digitalWrite(ledPin, HIGH); // Aprindem Led-ul
      delay(100); // Pauză scurtă
      digitalWrite(ledPin, LOW); // Stingem Led-ul
      delay(100); // Pauză scurtă
    }

În acest exemplu, am creat un efect de clipire rapidă a Led-ului conectat la pinul 13 al Arduino.

Experimentați cu diferite combinații și secvențe de aprindere și stingere a Led-urilor pentru a obține diferite efecte luminoase. Puteți adăuga și mai multe Led-uri și le puteți controla individual sau simultan utilizând mai mulți pini digitali.

Acestea sunt doar câteva dintre proiectele practice pe care le puteți realiza cu Arduino și Led-uri. Puteți explora și alte concepte și tehnici pentru a crea efecte luminoase unice și captivante utilizând Arduino și componentele disponibile.
