Taula de mapeig
ElementApiResponse --- ElementCataleg --- Tipus
id ------------------- id --------------- string
nom ------------------ titol ------------ string
descripcio ----------- descripcio ------- string
categoria ------------ categoria -------- string
preu ----------------- preu ------------- number
imatge --------------- imatgeUrl -------- string
popular -------------- esPopular -------- boolean
stock ---------------- unitats ---------- number

Exercici 5:
En aquest projecte es treballa amb dues interfícies. La primera és ElementApiResponse, que representa exactament la informació tal com arriba des de l’API. Inclou camps com id, nom, descripcio, categoria, preu, etc. Aquesta interfície reflecteix tota la informació disponible, encara que no tota es faci servir a l’aplicació.

La segona interfície és ElementCataleg, que és el model intern que utilitza l’aplicació. En aquest cas només es mantenen els camps que mostren la informació: id, nom, descripcio, preu i imatge. A més, s’afegeix un camp opcional anomenat notes, que no existeix a l’API però serveix per guardar informació escrita per l'usuari sobre cada element preferit.

Per passar de l’estructura de l’API al model intern es fa servir una funció adapter. Aquesta rep ElementApiResponse i retorna ElementCataleg amb els camps que interessen. D’aquesta manera es treballa amb un model més controlat.
