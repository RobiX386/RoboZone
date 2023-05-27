---
title: "Instructiuni Conditionale (if, else)"
subtitle: "În programarea Arduino, este posibil să aveți nevoie să convertiți valori între diferite tipuri de date. Acest lucru poate fi util atunci când lucrați cu senzori, afișaje sau alte componente care utilizează diferite tipuri de date. În această lecție, veți învăța despre câteva metode comune de conversie între tipuri de date în Arduino."
date: "2020-12-22"
image: "arduinoUnoTransparent.png"
introduction: "true"
category: "arduino"
lessonChapter: "4"
lessonNumber: "1"
---

Instrucțiunile conditionale permit programului dvs. Arduino să ia decizii și să execute anumite acțiuni în funcție de condițiile specificate. În această lecție, veți învăța despre instrucțiunile conditionale if, else și else if în Arduino.
- Instrucțiunea if: Instrucțiunea if este utilizată pentru a executa un bloc de cod dacă o condiție este evaluată ca fiind adevărată. Sintaxa generală este:<br>


    if (conditie) {
      // blocul de cod care se execută dacă condiția este adevărată }

- Instrucțiunea else: 
Instrucțiunea else este utilizată împreună cu instrucțiunea if pentru a executa un alt bloc de cod atunci când condiția if este evaluată ca fiind falsă. Sintaxa generală este: 


    if (conditie) {
      // blocul de cod care se execută dacă condiția este adevărată} 
    else {
      // blocul de cod care se execută dacă condiția este falsă }

- Instrucțiunea else if: Instrucțiunea else if vă permite să verificați mai multe condiții alternative în afara primei condiții if. Aceasta poate fi utilizată atunci când aveți mai multe ramuri de decizie. Sintaxa generală este: <br>




    if (conditie1) {
      // blocul de cod care se execută dacă condiția1 este adevărată} 
    else if (conditie2) {
      // blocul de cod care se execută dacă condiția2 este adevărată }

![Conditie If Else](https://ai.thestempedia.com/wp-content/uploads/2022/07/A11-e1507463546350.png)