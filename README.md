# Vite Yu Gi Oh

## **Descrizione:**

Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato. <br>
Al caricamento della pagina, effettuate una chiama ajax all’API di Vite Yu Gi Oh<br>
Documentazione: https://ygoprodeck.com/api-guide/<br>

## **Bonus:**

Creare un componente che mostri il numero totale di risultati ottenuti.


### Steps: 
1. Importare le dipendenze e i vari tools (bootstrap, axios)
2. Creare i componenti e importarli in app
    - Header
        - inserire logo e titolo
    - Search
        - crare un Select per filtrare le carte in base al parametro inserito (non deve funzionare per oggi)
    - Main
        - creare delle Card
        - importare l'api e utilizzarla per popolare le card con i dati
        - ciclare l'elemento card che asbbiamo importato nel main per tutti gli oggetti dell'api
    - Footer
        - inserire la lunghezza dell'array che abbiamo popolato con l'api

3. modificare il design con scss per renderlo uguale a 
<img src="public/sample-site.png" style="width:350px">