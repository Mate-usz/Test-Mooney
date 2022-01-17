# Test Mooney

## Riguardo al progetto

Questo progetto è stato creato e sviluppato interamente con Angular.

Per far partire il progetto basta semplicemente digitare `ng serve` o `npm start` nella console.

## Informazioni sull'applicazione

La prima cosa che possiamo notare una volta aperta l'applicazione in `localhost:4200` è che viene caricato in `lazy loading` il modulo login, il quale ci reindirizza direttamente al path `/login`. In questa pagina ci vengono richieste le credenziali di accesso o la registrazione al sito.

Se abbiamo già registrato un account allora abbiamo la possibilità di accedere, altrimenti ci viene mostrato un messaggio di errore.

Per registrarsi basta immettere la email nel campo richiesto sotto il titolo `Registrati` e cliccare sul pulsante corrispondente. Una volta fatto verremo reindirizzati alla pagina `/registration-success` che ci informa che la registrazione è stata effettuata con successo, dandoci anche la password generata casualmente.

Una volta fatto il login nell'applicazione, ci verrà mostrata la pagina `/dashboard` nella quale avremo una lista di prodotti.

## Informazioni sullo sviluppo

`LOGIN`: 

- per i due form ho utilizzato lo stesso componente, al quale posso passare dei parametri (secondo un'interfaccia che mi sono creato) per cambiare lo stile.

`REGISTRATION-SUCCESS`:

- in questa pagina non ho utilizzato componenti, ma ho scritto direttamente i vari elementi nel html. Forse avrei potuto riutilizzare il componente utilizzato in `login`.

`DASHBOARD`:

- ho creato un componente `product` che viene riutilizzato all'interno del componente `list-product`;
- per semplicità `product` è statico e quindi ci verrà visualizzato sempre lo stesso prodotto;
- `list-product` all'interno del `html` ho inserito un `ngFor` che cicla 10 volte per mostrarci i prodotti.

`ALTRO`:

- i moduli `dashboard` e `login` vengono caricati in `lazy loading`;
- per evitare che un utente non loggato possa accedere alla pagina `/dashboard` ho utilizzato un `guard`. Questo ci permette di decidere se una `route` può essere attivata;
- nel servizio `account` è implementata tutta la logica riguardo il login, la generazione della password casuale e la registrazione dell'account.

## Possibili migliorie

`DASHBOARD`:

- si chiedeva specificatamente di non utilizzare framework come `bootstrap`, quindi ho utilizzato `css` nativo. Per evitare ripetizioni di stili e un file più pulito si può utilizzare l'estensione di css `SCSS`;
- i prodotti possono essere dinamici creando un nuovo model `product` e passandolo al componente correlato;
- in `list-product` invece di ciclare fino a 10 (hard coded) è possibile inserire dinamicamente anche questo parametro, che ci permetterà di visualizzare nella lista quanti prodotti vogliamo;
