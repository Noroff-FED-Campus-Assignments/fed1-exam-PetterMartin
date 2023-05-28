
// Load ENV;

const token = import.meta.env.VITE_API_TOKEN;

const url = "https://api.airtable.com/v0/appMZLXTCpDmiDkTh/tblnutZCCuHLWanGx";

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



const categoryButtons = document.querySelectorAll('.categories-primary p');
const movieContainer = document.querySelector('.hero-2');
const heroSection = document.querySelector('.hero');
const magnifyingGlass = document.querySelector('.fa-magnifying-glass');

magnifyingGlass.addEventListener('click', () => {
  const searchResultsDiv = document.createElement('div');
  searchResultsDiv.classList.add('search-results');

  const searchBarDiv = document.createElement('div');
  searchBarDiv.classList.add('search-bar');
  
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search...';

  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';

  const sortSelect = document.createElement('select');
  sortSelect.classList.add('search-bar-input'); // Apply same styling as search bar input

  const optionAsc = document.createElement('option');
  optionAsc.value = 'asc';
  optionAsc.textContent = 'A-Z';

  const optionDesc = document.createElement('option');
  optionDesc.value = 'desc';
  optionDesc.textContent = 'Z-A';

  sortSelect.appendChild(optionAsc);
  sortSelect.appendChild(optionDesc);

  searchBarDiv.appendChild(searchInput);
  searchBarDiv.appendChild(sortSelect);
  searchBarDiv.appendChild(searchButton);

  searchResultsDiv.appendChild(searchBarDiv);

  heroSection.parentNode.insertBefore(searchResultsDiv, heroSection.nextSibling);

  heroSection.remove();

  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    filterPostsBySearchTerm(searchTerm);
  });

  sortSelect.addEventListener('change', () => {
    const selectedOption = sortSelect.value;
    filterPostsBySearchTerm(searchInput.value.trim()); // Trigger search with current search term
    sortPostsByName(selectedOption);
  });
});






categoryButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const selectedCategory = event.target.textContent;
    filterPostsByCategory(selectedCategory);
  });
});

function filterPostsByCategory(category) {
  const blogItems = movieContainer.children;

  for (let i = 0; i < blogItems.length; i++) {
    const blogItem = blogItems[i];
    const postCategory = blogItem.querySelector('.categories-secondary p').textContent;

    if (postCategory === category || category === 'All') {
      blogItem.style.display = 'block';
    } else {
      blogItem.style.display = 'none';
    }
  }

  // Remove the active class from all category buttons
  categoryButtons.forEach((button) => {
    button.classList.remove('active');
  });

  // Add the active class to the selected category button
  const selectedButton = document.querySelector(`.categories-primary p[data-category="${category}"]`);
  if (selectedButton) {
    selectedButton.classList.add('active');
  }

  if (category === 'All') {
    heroSection.style.display = 'block';
  } else {
    heroSection.style.display = 'none';
  }
}


async function getMovies() {
  const errorContainer = document.querySelector('.error-container');
  errorContainer.innerHTML = '';
  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    const posts = result.records;

    movieContainer.innerHTML = '';

    let counter = 0;
    posts.forEach((post) => {
      const imageContainerClass = counter % 2 === 0 ? 'left-2' : 'right-2';
      const rightContainerClass = counter % 2 === 0 ? 'right-2' : 'left-2';
      const postReverse = counter % 2 === 0 ? 'flex-container' : 'flex-reverse';

      const blogItem = document.createElement('div');
      blogItem.className = `${postReverse} text`;

      blogItem.innerHTML = `
      <div class="${postReverse} text">
      <div class="${imageContainerClass}">
        <div class="image-container">
          <img src="${post.fields.Attachments[0].url}" alt="${post.fields["Title"]}" class="hero-image">
        </div>
      </div>
      <div class="text ${rightContainerClass}">
        <h1 class="h1">${post.fields["Single line"]}</h1>
        <p class="hero-text">${post.fields["Long Text"]}</p>
        <div class="btn-group">
          <a href="details.html?id=${post.id}" class="btn btn-secondary"><span>READ STORY</span></a>
        </div>
        <div class="date-category-container">
          <p class="date">${post.fields.Date}</p>
          <div class="categories-secondary">
            <p>${post.fields.Category}</p>
          </div>
        </div>
      </div>
      <dialog closed class="click-image"></dialog> 
    </div>
  `;

  const h3Elements = document.querySelectorAll(".blog-card .h3");
  const blogTextElements = document.querySelectorAll(".blog-card .blog-text");

  h3Elements.forEach((h3Element, index) => {
  h3Element.textContent = posts[index].fields["Single line"];
  });

  blogTextElements.forEach((blogTextElement, index) => {
  blogTextElement.textContent = posts[index].fields["Long Text"];
  });

  const blogCardElements = document.querySelectorAll(".blog-card");

  blogCardElements.forEach((blogCardElement, index) => {
  const { fields } = posts[index];

  const imgElement = blogCardElement.querySelector(".blog-banner-img");
  imgElement.src = fields.Attachments[0].url;

  blogCardElement.querySelector(".date").textContent = fields["Date"];
  blogCardElement.querySelector(".categories-secondary").textContent = fields["Category"];

  const btnElement = blogCardElement.querySelector(".btn-group a");
  btnElement.href = `details.html?id=${posts[index].id}`;

});


      movieContainer.appendChild(blogItem);

      counter++;
    });

    // After adding new posts, filter them based on the current selected category
    const activeCategory = document.querySelector('.categories-primary p.active');
    const selectedCategory = activeCategory ? activeCategory.textContent : 'All';

    // Add the active class to the selected category button
    categoryButtons.forEach((button) => {
      if (button.textContent === selectedCategory) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });

    filterPostsByCategory(selectedCategory);
  } catch (error) {
    errorContainer.innerHTML = 'An error occurred while loading the movies. Please try again later.';
  }
}

function filterPostsBySearchTerm(searchTerm) {
  const blogItems = movieContainer.children;

  for (let i = 0; i < blogItems.length; i++) {
    const blogItem = blogItems[i];
    const postTitle = blogItem.querySelector('.h1').textContent.toLowerCase();

    if (postTitle.includes(searchTerm.toLowerCase())) {
      blogItem.style.display = 'block';
    } else {
      blogItem.style.display = 'none';
    }
  }
}

function sortPostsByName(sortOrder) {
  const sortedBlogItems = Array.from(movieContainer.children).sort((a, b) => {
    const titleA = a.querySelector('.h1').textContent.toLowerCase();
    const titleB = b.querySelector('.h1').textContent.toLowerCase();
    
    if (sortOrder === 'asc') {
      return titleA.localeCompare(titleB);
    } else if (sortOrder === 'desc') {
      return titleB.localeCompare(titleA);
    }
  });

  // Remove existing blog items
  while (movieContainer.firstChild) {
    movieContainer.firstChild.remove();
  }

  // Append sorted blog items
  sortedBlogItems.forEach((blogItem) => {
    movieContainer.appendChild(blogItem);
  });
}



if (movieContainer) {
  getMovies().then(() => {
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
  });
}

