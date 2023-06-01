---
title: "Controlul unui motor cu Arduino"
subtitle: "Proiectele practice cu Arduino care implică controlul unui motor sunt foarte interesante și pot fi aplicate într-o varietate de domenii, cum ar fi robotică, automatizare și mecatronică. În această lecție, veți învăța cum să utilizați Arduino pentru a controla un motor."
date: "2023-05-27"
image: "7-3.png"
introduction: "false"
category: "arduino"
lessonChapter: "7"
lessonNumber: "3"
---

Proiectele practice cu Arduino care implică controlul unui motor sunt foarte interesante și pot fi aplicate într-o varietate de domenii, cum ar fi robotică, automatizare și mecatronică. În această lecție, veți învăța cum să utilizați Arduino pentru a controla un motor.

**Conectarea unui motor la Arduino:**
Pentru a controla un motor cu Arduino, veți avea nevoie de un motor, un driver de motor (cum ar fi un driver de motor pas cu pas sau un driver de motor de curent continuu), o sursă de alimentare externă și fire de conexiune.

Conectați sursa de alimentare externă la driverul de motor pentru a alimenta motorul și asigurați-vă că măsuța GND a sursului de alimentare este conectată la masa (GND) a Arduino. Apoi, conectați pinii de control ai driverului de motor la pini digitali ai Arduino.

**Controlul unui motor de curent continuu:**
Pentru a controla un motor de curent continuu cu Arduino, puteți utiliza modulul L298N ca driver de motor. Acesta permite controlul direcției și vitezei motorului.
![motor DC](https://cdn.shopify.com/s/files/1/0300/6424/6919/products/SingleshaftBOMotor_1200x1200.jpg?v=1653553120)
Exemplu:


    #define enA 9
    #define in1 8
    #define in2 7

    void setup() {
      pinMode(enA, OUTPUT);
      pinMode(in1, OUTPUT);
      pinMode(in2, OUTPUT);
    }

    void loop() {
      digitalWrite(in1, HIGH);
      digitalWrite(in2, LOW);
      analogWrite(enA, 200); // Setăm viteza motorului la 200 (0-255)

      delay(2000);

      digitalWrite(in1, LOW);
      digitalWrite(in2, HIGH);
      analogWrite(enA, 200);

      delay(2000);
    }

În acest exemplu, am utilizat pini digitali ai Arduino (8, 7) pentru controlul direcției motorului și pinul 9 pentru controlul vitezei motorului. Am stabilit direcția motorului prin setarea pinilor in1 și in2 la HIGH sau LOW și am stabilit viteza motorului utilizând funcția "analogWrite()" pe pinul enA.

**Controlul unui motor pas cu pas:**
Pentru a controla un motor pas cu pas cu Arduino, puteți utiliza un driver de motor pas cu pas, cum ar fi driverul A4988. Aveți nevoie și de biblioteca AccelStepper pentru a simplifica controlul motorului pas cu pas.
![motor stepper](https://www.astrosyn.com/wp-content/uploads/2015/09/ML23HS1-5.png)
Exemplu:

    #include <AccelStepper.h>

    #define dirPin 2
    #define stepPin 3

    AccelStepper stepper(1, stepPin, dirPin); // 1 - modul de control (FULL_STEP)

    void setup() {
      stepper.setMaxSpeed(1000); // Viteza maximă a motorului în pași pe secundă
      stepper.setSpeed(500); // Viteza inițială a motorului în pași pe secundă
    }

    void loop() {
      stepper.runSpeed();
    }


În acest exemplu, am utilizat biblioteca AccelStepper pentru a controla un motor pas cu pas conectat la pini digitali ai Arduino (2, 3). Am setat viteza maximă și viteza inițială a motorului, iar funcția "stepper.runSpeed()" este utilizată pentru a menține motorul în mișcare.

Experimentați cu diferite configurări și funcționalități ale driverului de motor și ale bibliotecii AccelStepper pentru a controla și monitoriza motorul în moduri diferite, cum ar fi rotație controlată, accelerație și decelerare etc.

