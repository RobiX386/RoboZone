---
title: "Utilizarea bibliotecilor standard si externe"
subtitle: "Bibliotecile reprezintă un aspect esențial al programării în Arduino, deoarece vă permit să accesați și să utilizați funcționalități suplimentare, precum senzori, module sau alte componente hardware, fără a fi nevoie să scrieți codul de la zero. În această lecție, veți învăța despre utilizarea bibliotecilor standard și externe în Arduino.
"
date: "2023-05-27"
image: "5-2.png"
introduction: "false"
category: "arduino"
lessonChapter: "5"
lessonNumber: "2"
---

Bibliotecile reprezintă un aspect esențial al programării în Arduino, deoarece vă permit să accesați și să utilizați funcționalități suplimentare, precum senzori, module sau alte componente hardware, fără a fi nevoie să scrieți codul de la zero. În această lecție, veți învăța despre utilizarea bibliotecilor standard și externe în Arduino.

**Bibliotecile standard:**
Arduino vine cu o serie de biblioteci standard încorporate, care oferă funcționalități comune și seturi de funcții utile. Aceste biblioteci pot fi incluse în codul dvs. pentru a accesa funcționalități precum citirea de la senzori, controlul motoarelor sau comunicarea prin portul serial.

Pentru a utiliza o bibliotecă standard trebuie sa adăugați o instrucțiune "#include" urmată de numele bibliotecii la începutul codului dvs. De exemplu, pentru a utiliza biblioteca "Wire" pentru comunicarea I2C, adăugați linia: 

        #include <Wire.h>.


**Bibliotecile externe:**
Pe lângă bibliotecile standard, există o varietate de biblioteci externe dezvoltate de comunitatea Arduino și de terți. Aceste biblioteci oferă funcționalități suplimentare și sunt disponibile în mod obișnuit în formatul de fișier ".zip".

Pentru a utiliza o bibliotecă externă, urmați acești pași: Accesați meniul "Sketch" în IDE-ul Arduino și selectați "Include Library" > "Add .ZIP Library". Navigați la fișierul ".zip" al bibliotecii pe care doriți să o utilizați și selectați-l. Acum puteți include biblioteca utilizând “#include” si numele acesteia.

**Utilizarea funcțiilor și metodelor din biblioteci:**
După ce ați inclus o bibliotecă în codul dvs., puteți utiliza funcțiile și metodele acesteia pentru a accesa funcționalitățile specifice. Documentația bibliotecii vă va furniza informații despre funcțiile și metodele disponibile și modul de utilizare a acestora.

De exemplu, dacă ați inclus biblioteca "Servo", puteți utiliza metode precum "attach()" pentru a atașa un servo motor și "write()" pentru a seta un unghi de poziție.

Exemplu:


        #include <Servo.h>
        Servo myservo;
        void setup() {
        myservo.attach(9)
        }
