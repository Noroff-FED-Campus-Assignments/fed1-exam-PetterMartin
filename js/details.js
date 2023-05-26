const token = import.meta.env.VITE_API_TOKEN;


const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Cookie", "brw=brwArsjEAWonhZdE8; AWSALB=aM/THwF+1/j4IufjufivnVnS0aaCbjfHnQIePgCobF9H5Nv9v8GTuF18B6XJc3jTpJBwi/fGWdJicXP4U2oiVKXmjbbuM40p5rldMD/uc2uB/wSBLfP1cF7FE+fY; AWSALBCORS=aM/THwF+1/j4IufjufivnVnS0aaCbjfHnQIePgCobF9H5Nv9v8GTuF18B6XJc3jTpJBwi/fGWdJicXP4U2oiVKXmjbbuM40p5rldMD/uc2uB/wSBLfP1cF7FE+fY");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const url = 'https://api.airtable.com/v0/appMZLXTCpDmiDkTh/tblnutZCCuHLWanGx';
const queryString = document.location.search;
const detailsContainer = document.querySelector(".details");
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function getPost() {
  try {
    const response = await fetch(url + `/${id}`, requestOptions);
    const result = await response.json();
    console.log(result);

    if (detailsContainer) {
      const details = document.querySelector('.details');
      details.innerHTML = `
        <div class="hero" style="background: url(${result.fields.Attachments[0].url}); background-repeat: no-repeat; background-size: cover;">
          <div class="details-hero">     
            <div class="details-left">       
            </div>
          </div>
        </div>

        <div class="text-section">
          <div class="text-container">${result.fields["Long Text"]}</div>
        </div>

        <div class="image-section">
          <div class="image-container">
            <img src="${result.fields.Attachments[1].url}" alt="">
          </div>
        </div>

        <div class="text-section">
          <div class="text-container">${result.fields["Longer Text"]}</div>
        </div>
      `;
    }
  } catch (error) {
    console.log(error);
    const errorContainer = document.querySelector('.error-container');
    errorContainer.innerHTML = 'An error occurred while loading the details. Please try again later.';
  }
}

if (detailsContainer) {
  await getPost();
  const imageModal = document.querySelector(".click-image");
  const postImages = document.querySelectorAll(".image-container");
  postImages.forEach((image) => {
    image.addEventListener("click", function () {
      imageModal.innerHTML = this.innerHTML;
      imageModal.showModal();
      imageModal.addEventListener("click", () => {
        imageModal.close();
      });
    });
  });
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
