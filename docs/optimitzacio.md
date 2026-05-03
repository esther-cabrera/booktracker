L’OnPush s’ha aplicat als components TargetaElementComponent i DetallComponent. Aquests components només mostren informació que reben per paràmetre (@Input) i no tenen gaire lògica pròpia. Per això és útil posar OnPush, perquè Angular només actualitza la vista quan realment canvien les dades. Això fa que hi hagi menys càlculs i l’aplicació vagi més fluida.

Pel que fa a la virtualització, s’ha utilitzat cdk-virtual-scroll-viewport al catàleg. S’ha posat un itemSize aproximat de 120 píxels, que és l’alçada de cada targeta. A més, la llista té més de 50 elements. Amb això, Angular només pinta a pantalla els elements que es veuen en aquell moment, i no tota la llista sencera. Això millora molt el rendiment quan hi ha molts elements.

En conjunt, aquestes dues tècniques fan que l’aplicació sigui més eficient i ràpida, sobretot quan hi ha molta informació.
