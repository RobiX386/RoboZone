---
title: "Utilizarea pinilor digitali si analogici"
subtitle: "Comunicarea cu componente externe, cum ar fi senzori, afișaje sau alte module, este esențială în proiectele Arduino. Pentru a realiza aceasta, veți utiliza pinii digitali și analogici ai plăcii Arduino. În această lecție, veți învăța despre utilizarea pinilor digitali și analogici în Arduino."
date: "2023-05-27"
image: "6-1.jpg"
introduction: "false"
category: "arduino"
lessonChapter: "6"
lessonNumber: "1"
---

Comunicarea cu componente externe, cum ar fi senzori, afișaje sau alte module, este esențială în proiectele Arduino. Pentru a realiza aceasta, veți utiliza pinii digitali și analogici ai plăcii Arduino. În această lecție, veți învăța despre utilizarea pinilor digitali și analogici în Arduino.

![modul RF arduino](https://roboticsbackend.com/wp-content/uploads/2019/01/arduino_schematics_pins.jpg)


**Pini digitali:**
Placa Arduino are un set de pini digitali care pot fi configurați în modul de intrare sau ieșire digitală. Acești pini pot fi utilizați pentru a controla și citi starea componentelor externe care acceptă semnale digitale (cum ar fi LED-uri, butoane sau senzori digitali).

Pentru a configura un pin digital ca intrare sau ieșire în Arduino, utilizați următoarea sintaxă:

        pinMode(pin, mod);

"pin" reprezintă numărul pinului digital pe care îl utilizați.
"mod" poate fi "INPUT" pentru a configura pinul ca intrare sau "OUTPUT" pentru a configura pinul ca ieșire.

Exemplu:

        const int ledPin = 13;

        void setup() {
        pinMode(ledPin, OUTPUT); // Configurăm pinul 13 ca ieșire digitală
        }

        void loop() {
        digitalWrite(ledPin, HIGH); // Aprindem LED-ul conectat la pinul 13
        delay(1000); // Pauză de 1 secundă
        digitalWrite(ledPin, LOW); // Stingem LED-ul
        delay(1000); // Pauză de 1 secundă
        }

În acest exemplu, am configurat pinul 13 ca ieșire digitală și am aprins și stins un LED conectat la acest pin cu ajutorul funcțiilor "digitalWrite()" și "delay()".

**Pini alaogici:**
Placa Arduino are, de asemenea, un set de pini analogici care pot fi utilizați pentru a citi valori analogice de la senzori sau alte componente. Acești pini permit măsurarea tensiunii sau a altor mărimi analogice.
Pentru a citi valoarea analogică de pe un pin, utilizați următoarea sintaxă:

        valoare = analogRead(pin);

"pin" reprezintă numărul pinului analogic de la care doriți să citiți valoarea.
"valoare" reprezintă valoarea analogică citită de pe pin, care este între 0 și 1023 (pentru plăcile Arduino cu rezoluție de 10 biți).

Exemplu:

        const int potentiometruPin = A0;

        void setup() {
        Serial.begin(9600); // Inițializăm comunicarea serială
        }

        void loop() {
        int valoare = analogRead(potentiometruPin); // Citim valoarea de pe pinul A0
        Serial.println(valoare)}
