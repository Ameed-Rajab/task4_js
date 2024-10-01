async function getproducts() {

    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    const recipes = data.recipes;
    console.log(recipes);
    const result = recipes.map(function (recipes) {

        return `
    <div class="products">
    <h2>${recipes.title}</h2>
    <img src='${recipes.image_url}'/>

    </div>
    
    `

    }).join(' ');
    document.querySelector(".product .row").innerHTML = result;
}
getproducts();