const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const heroContainer = document.querySelector(".hero");

const token = import.meta.env.VITE_API_TOKEN;


const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Cookie", "brw=brwArsjEAWonhZdE8; AWSALB=aM/THwF+1/j4IufjufivnVnS0aaCbjfHnQIePgCobF9H5Nv9v8GTuF18B6XJc3jTpJBwi/fGWdJicXP4U2oiVKXmjbbuM40p5rldMD/uc2uB/wSBLfP1cF7FE+fY; AWSALBCORS=aM/THwF+1/j4IufjufivnVnS0aaCbjfHnQIePgCobF9H5Nv9v8GTuF18B6XJc3jTpJBwi/fGWdJicXP4U2oiVKXmjbbuM40p5rldMD/uc2uB/wSBLfP1cF7FE+fY");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const url = await fetch('https://api.airtable.com/v0/appMZLXTCpDmiDkTh/tblnutZCCuHLWanGx', requestOptions);

async function getDetails() {
  try {
    const response = await fetch(url + `/${id}`, requestOptions);
    const result = await response.json();
    console.log(result)
    const movie = result.find(obj => obj.id == id)
    console.log(movie)

    heroContainer.innerHTML = `
    <div class="hero-container">     
              <div class="left">      
                <h1 class="h1">New Trailer for Christopher Nolans new movie 'Oppenheimer'</h1>    
              </div>
    </div>

    <div class="text-section">
            <div class="text-container">
            </div>
        </div>

        <div class="image-section">
            <div class="image-container">
                <img src="" alt="">
            </div>
        </div>

        <div class="text-section">
            <div class="text-container">
                <p>
                    The trailer showcases the exceptional performances of the cast, led by a mesmerizing portrayal of Oppenheimer by the talented actor at the center of the film. The intense and thought-provoking dialogue serves as a reminder of the weighty decisions and profound implications that Oppenheimer and his colleagues grappled with throughout their groundbreaking scientific endeavor.<br>
                </p>
            </div>
        </div>
      `;
  } catch (error) {
    heroContainer.innerHTML = `error; ${error}`;
  }
}

if (id) {
  getDetails();
}

/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

// TODO: Get the query parameter from the URL

// TODO: Get the id from the query parameter

// TODO: Create a new URL with the id @example: https://www.youtube.com/shorts/ps7EkRaRMzs

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an a single of objects from the API

/*
============================================
Helper functions
============================================
*/

/**
 * TODO: Create a function to create a DOM element.
 * @example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */
