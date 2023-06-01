---
title: "Definirea si apelul functiilor in Arduino"
subtitle: "Funcțiile reprezintă un mod eficient de a organiza și structura codul în Arduino. Ele permit gruparea și reutilizarea de blocuri de cod, ceea ce face programarea mai modulară și mai ușor de întreținut. În această lecție, veți învăța despre definirea și apelul funcțiilor în Arduino."
date: "2020-12-22"
image: "5-1.jpg"
introduction: "false"
category: "arduino"
lessonChapter: "5"
lessonNumber: "1"
---

Funcțiile reprezintă un mod eficient de a organiza și structura codul în Arduino. Ele permit gruparea și reutilizarea de blocuri de cod, ceea ce face programarea mai modulară și mai ușor de întreținut. În această lecție, veți învăța despre definirea și apelul funcțiilor în Arduino.

Pentru a defini o funcție în Arduino, este nevoie de două componente principale: tipul de returnare al funcției și numele funcției. Dacă funcția nu returnează nicio valoare, tipul de returnare este specificat ca "void".


Exemplu:

    void afiseazaSalut() {
      Serial.println("Salut, lume!");
    }


În acest exemplu, am definit o funcție numită "afiseazaSalut" care nu primește niciun parametru și nu returnează nicio valoare. Blocul de cod al funcției afișează un mesaj.

Pentru a apela o funcție în Arduino, trebuie să utilizați numele funcției urmat de paranteze rotunde. Dacă funcția primește parametri, aceștia trebuie specificați între parantezele rotunde. Sintaxa generală este:

Exemplu:

    void loop() {
      afiseazaSalut(); // Apelăm funcția afiseazaSalut()
    }


Funcțiile pot primi parametri, care sunt valorile transmise în funcție pentru a fi utilizate în blocul de cod al funcției. Parametrii sunt specificați între parantezele rotunde în momentul definirii funcției și pot fi utilizați în interiorul funcției ca și variabile locale. Exemplu: <br>


    void afiseazaNumar(int numar) {
      Serial.println(numar);
    }
