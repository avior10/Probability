// CATCHING THE NEEDED ELEMENTS
const btn = document.querySelector("#btn_magic");
let result = document.querySelector("#result");

// API FETCH
btn.addEventListener("click", () => {
    result.innerHTML = "";
    let user_name = document.querySelector("#user_name").value;
    let url_name = `https://api.nationalize.io/?name=${user_name}`;

    fetch(url_name)
    .then(response => response.json())
    .then(message => message.country.map(obj => {
        let chance = (obj.probability).toFixed(2);
        console.log(chance);
        let country_details = `https://restcountries.com/v3.1/alpha/${obj.country_id}`;
        fetch(country_details).then(res => res.json())
        .then(data => { 
            let name_country = data[0].name.common;
            console.log(name_country);
            let flag = data[0].flags.png;
            console.log(flag);
            let name_element = document.createElement("p");
            name_element.innerHTML = name_country;
            let flag_element = document.createElement("img");
            flag_element.src = flag;
            flag_element.id = "flag_ele";
            let odd_element = document.createElement("p");
            odd_element.innerHTML = `${chance * 100}%`; 
            let hr = document.createElement("hr");
            result.append(name_element, flag_element, odd_element, hr);
        })
        console.log(country_details);
    }))
})

let h1 = document.querySelector("#h1");
 setInterval(function () {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    h1.style.color = "#" + randomColor; 
}, 500);

