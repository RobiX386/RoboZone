---
title: "Sisteme de alarma si detectarea a miscarii"
subtitle: "Proiectele practice cu Arduino care implică sisteme de alarmă și detectarea mișcării pot fi utile în domeniul securității și în proiectele de monitorizare a mediului înconjurător. În această lecție, veți învăța cum să utilizați Arduino pentru a crea un sistem de alarmă cu detectarea mișcării."
date: "2023-05-27"
image: "7-4.jpg"
introduction: "false"
category: "arduino"
lessonChapter: "7"
lessonNumber: "4"
---

Proiectele practice cu Arduino care implică sisteme de alarmă și detectarea mișcării pot fi utile în domeniul securității și în proiectele de monitorizare a mediului înconjurător. În această lecție, veți învăța cum să utilizați Arduino pentru a crea un sistem de alarmă cu detectarea mișcării.

![senzor legat la placa arduino](https://i.ytimg.com/vi/xGdsn14rzc0/maxresdefault.jpg)

**Conectarea unui senzor de mișcare la Arduino:**
Pentru a detecta mișcarea, veți avea nevoie de un senzor de mișcare (cum ar fi un senzor PIR - Passive Infrared) și un pin digital al Arduino pentru a conecta semnalul senzorului.

Conectați pinul VCC al senzorului la o sursă de alimentare de 5V a Arduino, pinul GND la masa (GND) a Arduino și pinul OUT (semnal) la un pin digital al Arduino.

**Programarea sistemului de alarmă cu detectarea mișcării:**
Exemplu:


    #define sensorPin 2   // Pinul digital la care este conectat senzorul de mișcare

    void setup() {
      pinMode(sensorPin, INPUT);  // Setăm pinul senzorului ca intrare
      Serial.begin(9600);         // Inițializăm comunicarea serială
    }

    void loop() {
      int motion = digitalRead(sensorPin);  // Citim valoarea de la senzorul de mișcare

      if (motion == HIGH) {
        Serial.println("Mișcare detectată!");
        // Aici puteți activa o alarmă sonoră sau alte acțiuni specifice sistemului dvs. de alarmă
      }

      delay(100);  // Pauză mică între citiri pentru a evita citirea rapidă repetată
    }


În acest exemplu, am utilizat un senzor de mișcare PIR conectat la pinul digital 2 al Arduino. Citim valoarea de la senzorul de mișcare și, dacă detectează mișcare (valoarea HIGH), afișăm un mesaj pe monitorul serial. În același timp, puteți activa și o alarmă sonoră sau puteți adăuga alte acțiuni specifice sistemului dvs. de alarmă.

**Proiecte practice cu sisteme de alarmă și detectarea mișcării:**
Utilizând baza acestui sistem de alarmă cu detectarea mișcării, puteți dezvolta diferite proiecte practice, cum ar fi:
- Sisteme de alarmă pentru protejarea obiectelor de valoare.
- Sisteme de securitate pentru uși și ferestre.
- Sisteme de monitorizare a spațiilor pentru detectarea intrușilor.
	
Puteți extinde funcționalitățile sistemului de alarmă prin adăugarea de componente suplimentare, cum ar fi alarme sonore, LED-uri de avertizare sau module de comunicație wireless.
