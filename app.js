const btn = document.querySelector('.get-countries-btn');
const container = document.querySelector('.data-card');

btn.addEventListener('click', ()=>{
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true)
    xhr.onload= function(){
        if (xhr.status == 200) {
            console.log('*borat voice* great success!')
        let countries = JSON.parse(this.response)
            console.log(countries)
            countries.forEach(country => {
                const card = document.createElement('div');
                const flagCard = document.createElement('img');
                card.innerHTML = country.name.common
                flagCard.src = country.flags.svg
               container.appendChild(card)
               card.appendChild(flagCard)
            });
        }
    }
    xhr.send()
    
})