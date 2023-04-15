const d = document;
const $quoteId = d.querySelector('.quote-id');
const $quoteText = d.querySelector('.quote-text');

function getQuote () {

    fetch('https://api.adviceslip.com/advice')
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        $quoteId.textContent = `ADVICE # ${json.slip.id}`;
        $quoteText.innerHTML = '"' + json.slip.advice + '"';
    })
    .catch( err => {
        let message = err.statusText || "Ocurrió un error";
        $quoteText.innerHTML = `Error ${err.status}: ${message}`;
    } )

}

d.addEventListener('DOMContentLoaded', getQuote);

d.addEventListener('click', e => {
    if (e.target.matches('.main-button *')) {
        getQuote();
        $quoteText.innerHTML = `<img src="images/tail-spin.svg" alt="Cargando...">`;
    }
})