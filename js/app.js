/*const homeIcon = document.getElementById("home");
const aboutIcon = document.getElementById("about");
const contactIcon = document.getElementById("contact");


if (window.location.pathname === "/index.html") {
  homeIcon.classList.add("active");
} else if (window.location.pathname === "/about.html") {
  aboutIcon.classList.add("active");
} else if (window.location.pathname === "/contact.html") {
  contactIcon.classList.add("active");
} */


// Load ENV;

const token = import.meta.env.VITE_API_TOKEN;

const url = "https://api.airtable.com/v0/appMZLXTCpDmiDkTh/tblnutZCCuHLWanGx";

const movieContainer = document.querySelector(".hero-2");
const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append(
  "Cookie",
  "brw=brwArsjEAWonhZdE8; AWSALB=aM/THwF+1/j4IufjufivnVnS0aaCbjfHnQIePgCobF9H5Nv9v8GTuF18B6XJc3jTpJBwi/fGWdJicXP4U2oiVKXmjbbuM40p5rldMD/uc2uB/wSBLfP1cF7FE+fY; AWSALBCORS=aM/THwF+1/j4IufjufivnVnS0aaCbjfHnQIePgCobF9H5Nv9v8GTuF18B6XJc3jTpJBwi/fGWdJicXP4U2oiVKXmjbbuM40p5rldMD/uc2uB/wSBLfP1cF7FE+fY"
);


const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

async function getMovies() {
  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    const posts = result.records;
    console.log(posts);
    if (movieContainer) {
      let counter = 0;
      posts.forEach((post) => {
        const imageContainerClass = counter % 2 === 0 ? 'left-2' : 'right-2';
        const rightContainerClass = counter % 2 === 0 ? 'right-2' : 'left-2';
        const postReverse = counter % 2 === 0 ? 'flex-container' : 'flex-reverse';

        movieContainer.innerHTML += `
          <div class="${postReverse}">
            <div class="${imageContainerClass}">
              <div class="image-container">
                <img src="${post.fields.Attachments[0].url}" alt="Your Image" class="hero-image">
              </div>
            </div>
            <div class="text ${rightContainerClass}">
              <h1 class="h1">${post.fields["Long Text"]}</h1>
              <p class="hero-text">Last summer, advertising photographer Jason Perry traveled to Ukraine to provide supplies for civilians amidst the Russian invasion. When travel challenges left him stranded in Amsterdam, his search for ground travel led him to Zeilen Van Vrijheid—a Dutch volunteer team with convoys of ambulances equipped with medical supplies to support doctors in Ukraine.</p>
              <div class="btn-group">
                <a href="details.html" class="btn btn-secondary"><span>READ STORY</span></a>
              </div>
              <div class="date-category-container">
                <p class="date">Jan 17, 2022</p>
                <div class="categories-secondary">
                  <p>Trailers</p>
                </div>
              </div>
            </div>
          </div>
        `;

        counter++;
      });
    }
  } catch (error) {
    console.log(error);
  }
}

getMovies();

/*
<div class="flex-container">
                <div class="right-2 right-3">
                    <h1 class="h1">New Trailer for Christopher Nolan's new movie 'Oppenheimer'</h1>
                    <p class="hero-text">Last summer, advertising photographer Jason Perry traveled to Ukraine to provide supplies for civilians amidst the Russian invasion. When travel challenges left him stranded in Amsterdam, his search for ground travel led him to Zeilen Van Vrijheid—a Dutch volunteer team with convoys of ambulances equipped with medical supplies to support doctors in Ukraine.</p>
                   <div class="btn-group">
                   <a href="details.html" class="btn btn-secondary"><span>READ STORY</span></a>
                </div>
                <div class="date-category-container">
                    <p class="date">Jan 17, 2022</p>
                    <div class="categories-secondary">
                    <p>Trailers</p>
                </div>
            </div>
          </div>
          <div class="left-2">
            <div class="image-container">
              <img src="${post.fields.Attachments[0].url}" alt="Your Image" class="hero-image">
            </div>
          </div>
          </div>

/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/**
 * TODO: Create an event listener to sort the list.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L91
 */

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an array of objects from the API

/*
============================================
Helper functions
https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L154
============================================
*/

/**
 * TODO: Create a function to filter the list of item.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L135
 * @param {item} item The object with properties from the fetched JSON data.
 * @param {searchTerm} searchTerm The string used to check if the object title contains it.
 */

/**
 * TODO: Create a function to create a DOM element.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */


