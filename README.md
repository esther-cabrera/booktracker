BOOKTRACKER

Descripció
Aquesta aplicació permet veure un catàleg de llibres, cercar-los i marcar-los com a preferits. També inclou un sistema de login per accedir a la secció de preferits.

Mapa de rutes
| Ruta ------ | Component ------------- | Accés |
| ----------- | ----------------------- | ------ |
| / ----------| redirecció a cataleg ---| públic |
| /cataleg -- | CatalegComponent -------| públic |
| /cerca -----| CercaComponent ---------| públic |
| /detall/:id | DetallComponent --------| públic |
| /preferits -| PreferitsPanelComponent | privat |
| /login -----| LoginComponent ---------| públic |

Execució en local
git clone https://github.com/esther-cabrera/booktracker
cd booktracker
npm install
ng serve

Obrir: http://localhost:4200

Build de producció
ng build --configuration production

El build genera els fitxers a la carpeta dist/ i mostra la mida dels fitxers a la terminal. També es pot veure que la ruta de preferits es carrega com a chunk separat (lazy loading).

Credencials de prova
Email: admin@test.com
Password: 1234
