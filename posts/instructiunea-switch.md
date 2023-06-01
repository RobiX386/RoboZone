---
title: "Instructiunea switch"
subtitle: "Instrucțiunea switch este utilizată pentru a crea ramificații multiple în funcție de valoarea unei variabile sau a unei expresii în Arduino. Aceasta vă permite să verificați diferite cazuri și să executați acțiuni specifice pentru fiecare caz. În această lecție, veți învăța despre sintaxa și funcționalitatea instrucțiunii 
switch în Arduino."
date: "2020-12-22"
image: "arduinoIcon.png"
introduction: "false"
category: "arduino"
lessonChapter: "4"
lessonNumber: "3"
---

Instrucțiunea switch este utilizată pentru a crea ramificații multiple în funcție de valoarea unei variabile sau a unei expresii în Arduino. Aceasta vă permite să verificați diferite cazuri și să executați acțiuni specifice pentru fiecare caz. În această lecție, veți învăța despre sintaxa și funcționalitatea instrucțiunii "switch" în Arduino.

    switch (variabilă_sau_expresie) {
      case valoare_1:
        // acțiunea specifică pentru valoarea_1
        break;

      case valoare_2:
        // acțiunea specifică pentru valoarea_2
        break;

      default:
        // acțiunea implicită în cazul în care niciun caz nu corespunde
        break;
    }

Instrucțiunea "switch" începe prin evaluarea valorii variabilei sau expresiei specificate în parantezele rotunde. Apoi, acesta verifică fiecare "caz" în ordine și execută acțiunea corespunzătoare primului caz care se potrivește cu valoarea evaluată. Instrucțiunea "break" este utilizată pentru a ieși din blocul "switch" după executarea acțiunii specifice cazului.

Dacă niciunul dintre cazuri nu se potrivește cu valoarea evaluată, acțiunea din blocul "default" este executată. Blocul "default" este opțional și reprezintă acțiunea implicită în cazul în care niciun caz nu corespunde.

![Arduino Switch](https://content.instructables.com/FWU/588W/IEQY64B8/FWU588WIEQY64B8.png?auto=webp&fit=bounds&frame=1&height=1024)