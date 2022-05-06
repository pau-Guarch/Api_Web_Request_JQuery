async function myFunction1(){
    const url = "http://localhost:3010/movies/2";
    const options = {
        method: 'GET'
    };

    const data = await fetch_function(url, options);
    console.log(data);
    // return data;
}

async function myFunction2(){
    const url = "http://localhost:3010/movies/search";
    const data = { 
        "key": "year",
        "value": 1994 
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const resp = await fetch_function(url, options);
    console.log(resp);
}

async function myFunction3(){
    const url = "http://localhost:3010/movies/add";
    const data = { 
        "id": 10,
        "title": "Dances with Wolves",
        "genres": [
            "Adventure", "Western ", "Drama"
        ],
        "year": 1990,
        "director": "Kevin Costner",
        "actors": [
            "Kevin Costner",
            "Mary McDonnell",
            "Graham Greene",
            "Rodney A. Grant"
        ]
    };
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const resp = await fetch_function(url, options);
    console.log(resp);
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

});


async function  fetch_function(url, options){
    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data);
    return data;
    
}