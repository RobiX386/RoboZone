---
title: "Variabile si tipuri de date"
subtitle: "Arduino este bazat pe o placă de dezvoltare hardware și un mediu de programare software, care permit controlul și interacțiunea cu diferite componente electronice. Placa Arduino este de obicei compusă dintr-un microcontroler, precum ATmega328p, și un set de conectori și pini care permit conectarea și controlul altor componente, cum ar fi senzori, motoare, leduri etc."
date: "2020-12-22"
image: "arduinoUnoTransparent.png"
introduction: "true"
category: "arduino"
lessonChapter: "3"
lessonNumber: "1"
---

În programarea Arduino, variabilele sunt utilizate pentru a stoca și manipula date. Acestea pot fi utilizate pentru a stoca valori temporare, citiri de la senzori sau rezultatele unor calcule. În această lecție, veți învăța cum să declarați și să inițializați variabile în Arduino.

- Declararea variabilelor: Înainte de a utiliza o variabilă, aceasta trebuie declarată pentru a-i atribui un tip și un nume. Sintaxa generală pentru declararea unei variabile este următoarea:   tipData numeData;
- Exemple de tipuri de date comune în Arduino includ:
int: pentru numere întregi.
float: pentru numere cu zecimale.
bool: pentru valori logice (adevărat sau fals).
char: pentru caractere.
Exemplu:   int temperatura;

- Inițializarea variabilelor: După ce o variabilă este declarată, puteți atribui o valoare inițială folosind operatorul de atribuire (=). Inițializarea este opțională, iar variabilele pot fi utilizate fără a avea o valoare inițială.
Exemplu: <br>  

        int temperatura = 25;

- Utilizarea variabilelor: După ce o variabilă este declarată și inițializată, puteți utiliza valoarea stocată în cadrul programului dvs. Puteți atribui noi valori variabilelor sau puteți efectua operații cu acestea.

Exemplu:

    int temperatura = 25;
    temperatura = temperatura + 5;

Acestea sunt doar câteva exemple de utilizare a variabilelor în Arduino. Puteți combina și utiliza variabilele în funcții, condiții, bucle și alte operații pentru a crea funcționalități complexe în program.


![Arduino Data types](https://static.javatpoint.com/tutorial/arduino/images/arduino-data-types.png)