const requestURL = '../lesson14/js/temple.json';

fetch(requestURL)
.then(function (response){
    return response.json();
})

.then(function (jsonObject){
    const towns = jsonObject["towns"]
    towns.splice(1, 1);
    towns.splice(2, 3);
    towns.splice(3, 4);
    for(let i = 0; i < towns.length; i++){
        let card = document.createElement("section");
        let temple = document.createElement("h2");
        let address = document.createElement("p");
        let telephone = document.createElement("p");
        let email = document.createElement("p");
        let services = document.createElement("p");
        let history = document.createElement("p");
        let ordinanceSchedule = document.createElement("p")
        let templeClosure = document.createElement("p");


        temple.textContent = towns[i].temple;
        address .textContent = towns[i].address;
        telephone.textContent = "Year Founded: " + towns[i].telephone;
        email.textContent = "Population: " + towns[i].email;
        services.textContent = "Annual Rain Fall: " + towns[i].services[1];
        history.textContent = "Annual Rain Fall: " + towns[i].history[1];
        ordinanceSchedule.textContent = "Annual Rain Fall: " + towns[i]. ordinanceSchedule;
        templeClosure = "Annual Rain Fall: " + towns[i].templeClosure[1];

        card.appendChild(temple);
        card.appendChild(address);
        card.appendChild(telephone);
        card.appendChild(email);
        card.appendChild(services);
        card.appendChild(history);
        card.appendChild(ordinanceSchedule);
        card.appendChild(templeClosure);

        document.querySelector("div.cards").appendChild(card);
    }
})