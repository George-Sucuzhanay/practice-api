import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.API_KEY

const dropdown = document.querySelector("select");
const button = document.querySelector("#try-me");
const picDisplay = document.querySelector("#catpic")

let response = async function() {
    await axios.get(`${BASE_URL}categories`,
    {
        "x-api-key": API_KEY
    }).then(res => {
        const catCategories = res.data
        for(let i = 0; i < catCategories.length; i++){
            dropdown.innerHTML += `<option id=${catCategories[i].id}>${catCategories[i].name} <option/>`
            console.log(catCategories)
        }
    }).catch(err => {
        console.log(err)
    })
}

button.addEventListener('click', async() => {
    const categoryId = dropdown[dropdown.selectedIndex].id
    // when we work with dom, specifically with dropdown, with a select
    // element, we are to use the selectedIndex
    

})
response()
// Axios calls will need to be formatted like this:
// axios.get("your endpoint url",
//     {
//       "x-api-key": "your API Key
//     })

// 2 API CALLS:
// 1. Directly populate the dropdown for us
// 2. Render the image of the cat based on dropdown selection


