Definizione dell'Array di Elementi:
Inizio definendo un array chiamato listaSpesa. Questo array conterrà gli elementi della lista.

Utilizzo di un Ciclo FOR per la Stampa degli Elementi
Se voglio stampare gli elementi della lista della spesa, posso utilizzare un ciclo for. Inizierò da i = 0 e continuerò fino a quando i sarà minore della lunghezza dell'array listaSpesa. Durante ogni iterazione, stamperò l'elemento corrente dell'array nella console del browser.

Conversione del Ciclo FOR in un Ciclo WHILE:
Se voglio raggiungere lo stesso risultato utilizzando un ciclo while, dovrò effettuare una conversione. Inizierò dichiarando un contatore i = 0 prima di entrare nel ciclo.
All'interno del ciclo while, verificherò se i è ancora minore della lunghezza dell'array listaSpesa. Se sì, stamperò l'elemento corrente dell'array e incrementerò manualmente i.

Visualizzazione degli Elementi nella Pagina Web:
per visualizzare la lista in pagina dovò manipolare il DOM. Creerò un documento HTML di base con un elemento <ul> dove potrò aggiungere dinamicamente gli elementi della lista della spesa come <li>.
Modificherò il mio ciclo while per creare un nuovo elemento <li> per ogni elemento dell'array e lo aggiungerò al DOM sotto l'elemento <ul>.
