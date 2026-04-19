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

Exercici5:
El component PreferitsPanelComponent utilitza un FormArray per gestionar les notes dels elements preferits. Cada element preferit té un conjunt de notes, i cada una d'aquestes és un FormControl amb validacions de camp obligatori i mínim 3 caràcters. Es poden afegir noves notes amb un botó “+” i eliminar-les amb un botó “x”.

Aquest formulari és dinàmic perquè es forma en funció dels seleccionats com a preferit. A més, les notes es guarden automàticament al localStorage a través del servei de preferits, de manera que es mantenen encara que es recarregui la pàgina.
