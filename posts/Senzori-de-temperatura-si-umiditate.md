---
title: "Senzori de temperatura si umiditate"
subtitle: "Proiectele practice cu senzori de temperatură și umiditate reprezintă o modalitate excelentă de a utiliza Arduino pentru a măsura și monitoriza condițiile de mediu. În această lecție, veți învăța cum să utilizați senzori de temperatură și umiditate pentru a crea proiecte interesante cu Arduino."
date: "2023-05-27"
image: "7-2.jpg"
introduction: "false"
category: "arduino"
lessonChapter: "7"
lessonNumber: "2"
---

Proiectele practice cu senzori de temperatură și umiditate reprezintă o modalitate excelentă de a utiliza Arduino pentru a măsura și monitoriza condițiile de mediu. În această lecție, veți învăța cum să utilizați senzori de temperatură și umiditate pentru a crea proiecte interesante cu Arduino.

![modul RF arduino](https://gomagcdn.ro/domains/iqelectric.ro/files/product/original/senzor-temperatura-si-umiditate-dht11-oky3068-1-27812-1847.jpg)

**Conectarea unui senzor de temperatură și umiditate la Arduino:**
Unul dintre cei mai utilizați senzori de temperatură și umiditate este DHT11 sau DHT22. Acești senzori necesită doar câțiva pini pentru conexiune: un pin de alimentare (VCC), un pin de masă (GND) și un pin de semnal (DATA).

Conectați pinul VCC al senzorului la o sursă de alimentare de 5V a Arduino, pinul GND la masa (GND) a Arduino și pinul DATA la un pin digital al Arduino.

**Citirea valorilor de temperatură și umiditate:**
Pentru a citi valorile de temperatură și umiditate de la senzorul DHT, veți avea nevoie de biblioteca DHT, pe care o puteți descărca și instala în IDE-ul Arduino.
Exemplu:


    include <DHT.h>

    #define DHTPIN 2          // Pinul digital la care este conectat senzorul
    #define DHTTYPE DHT11     // Tipul de senzor (DHT11 sau DHT22)

    DHT dht(DHTPIN, DHTTYPE);

    void setup() {
      Serial.begin(9600);    // Inițializarea comunicării seriale
      dht.begin();           // Inițializarea senzorului
    }

    void loop() {
      float temperatura = dht.readTemperature();       // Citirea valorii de temperatură
      float umiditate = dht.readHumidity();            // Citirea valorii de umiditate

      Serial.print("Temperatura: ");
      Serial.print(temperatura);
      Serial.print(" °C, Umiditate: ");
      Serial.print(umiditate);
      Serial.println(" %");

      delay(2000);          // Pauză de 2 secunde între citiri
    }


În acest exemplu, am utilizat biblioteca DHT pentru a citi valorile de temperatură și umiditate de la senzorul DHT11. Valorile citite sunt afișate pe monitorul serial.

**Proiecte practice cu senzori de temperatură și umiditate:**
Utilizând datele citite de la senzorii de temperatură și umiditate, puteți crea diverse proiecte practice. De exemplu, puteți:
- Construi un termometru digital pentru a afișa temperatura în timp real.
- Crea un sistem de monitorizare a umidității într-o seră sau într-un spațiu de cultivare.
- Controla un sistem de climatizare sau ventilație în funcție de valorile de temperatură și umiditate.

Experimentați cu diferite proiecte și utilizați valorile citite de la senzori pentru a controla și monitoriza diferite aspecte legate de temperatură și umiditate.
