NAVEGACIÓ
En aquesta aplicació s’ha configurat un sistema de rutes per permetre la navegació entre diferents vistes sense recarregar la pàgina.

El mapa de rutes és el següent:

---RUTA---- | ----COMPONENT---------- | -ACCÉS-
/---------- | Redirecció → /cataleg-- | Públic
/cataleg--- | CatalegComponent------- | Públic  
/cerca----- | CercaComponent--------- | Públic
/detall/:id | DetallComponent-------- | Públic
/preferits- | PreferitsPanelComponent | Públic (es protegirà amb guard)
/login----- | LoginComponent ---------| Públic
`**`------- | Redirecció → /cataleg --| Públic

La configuració del routing es fa al fitxer app.routes.ts, on es defineix un array de rutes de tipus Routes. Aquestes rutes s’activen a l’aplicació mitjançant provideRouter(routes) dins del fitxer app.config.ts, que inicialitza el sistema de navegació d’Angular.

Per poder mostrar les diferents vistes, s’utilitza el component router-outlet dins del AppComponent, que permet carregar el component corresponent segons la ruta activa.

La navegació entre pàgines es realitza amb routerLink, que permet canviar de vista sense recarregar la pàgina. A més, s’utilitza routerLinkActive per aplicar un estil visual a l’enllaç actiu, indicant a l’usuari en quina secció es troba.

També s’ha configurat una redirecció inicial des de la ruta buida ('') cap a /cataleg amb pathMatch: 'full', i una ruta comodí (`**`) per redirigir qualsevol URL no reconeguda cap a la pàgina principal.
