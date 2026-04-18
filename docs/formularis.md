Formulari de Cerca

Validacions síncrones
El camp 'termeCerca' inclou les següents validacions síncrones:

- required: el camp és obligatori.
- minLength (2): el text ha de tenir com a mínim 2 caràcters.
- maxLength (50): el text no pot superar els 50 caràcters.

Aquestes validacions es mostren a l'usuari només quan el camp ha estat clicat amb el ratolí ('touched'), per evitar mostrar errors abans d'interactuar amb el formulari.

Validació asíncrona
S'ha implementat un validador asíncron anomenat 'codiDisponibleValidator'.

Aquest validaor simula una crida a una API amb un retard de 500 ms ('delay'). Si el text introduït és "zzz", considera que no hi ha resultats i retorna l'error { sensResultats: true }. Si el text és vàlid, retorna 'null'.

Mentre s'executa el validador, el formulari entra en estat 'PENDING', i es mostra un missatge visual "Validant...".

Debounce
S'ha implementat un 'debounceTime' de 400 ms sobre els canvis del camp. Això significa que el sistema espera 400 ms després de l'última tecla abans d'executar la cerca i millora el rendiment i l'experiència d'usuari.

Comportament general
La cerca es realitza automàticament mentre l'usuari escriu (sense necessitat de botó). Si el camp és invàlid, no es fa cap cerca. Si el camp està buit, es mostren els elements populars.
