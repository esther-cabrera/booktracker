El projecte utilitza dos serveis principals.
El primer és l’ElementService, que s’encarrega de comunicar-se amb l’API per obtenir les dades dels llibres. Aquest servei fa peticions HTTP amb HttpClient i carrega els elements. A més, gestiona tres estats amb signals: la llista d’elements, si està carregant i si hi ha algun error.

El segon servei és el PreferitsService, que s’encarrega de gestionar els elements marcats com a preferits. Aquest servei utilitza el localStorage del navegador. Quan s’inicialitza, carrega automàticament els preferits guardats i controla possibles errors. També utilitza senyals per mantenir la llista de preferits i el nombre total.

Amb aquest servei s'afegeixen preferits, es comprova si un element ja és preferit i es guarden notes associades a cada element. Cada vegada que es fa un canvi, es guarda automàticament al localStorage, per tal que els preferits es mantinguin encara que es recarregui la pàgina.
