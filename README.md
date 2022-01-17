# Test Mooney

## Riguardo al progetto

Questo progetto è stato creato e sviluppato interamente con Angular.

Per far partire il progetto è necessario digitare `ng serve` o `npm start` nella console.

Questi sono i dati per l'account di test, se non si vuole ripetere più volte la registrazione.

```
test@mail.it
12345
```

## Informazioni sull'applicazione

Aperta l'applicazione in `localhost:4200` viene subito caricato in `lazy loading` il modulo login, il quale reindirizza direttamente al path `/login`. In questa pagina vengono richieste le credenziali di accesso o la registrazione al sito.

Se l'utente è già registrato c'è la possibilità di accedere, altrimenti viene mostrato un messaggio di errore.

Per effettuare la registrazione bisogna immettere la email nel campo richiesto sotto il titolo `Registrati` e cliccare sul pulsante corrispondente. Dopo ciò, l'utente sarà reindirizzato alla pagina `/registration-success` che informa che la registrazione è stata effettuata con successo, dando anche la password generata casualmente.

Quando il login sarà andato a buon fine, verrà mostrata la pagina `/dashboard` nella quale potrà visionare la lista di prodotti.

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
- in `list-product` invece di ciclare fino a 10 (hard coded) è possibile inserire dinamicamente anche questo parametro, che ci permetterà di visualizzare nella lista quanti prodotti vogliamo.
