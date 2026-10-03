
fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {

        let products = data.products;
        let container = document.getElementById("products");

        products.forEach(product => {

            container.innerHTML += `
                <div class="col-md-4 col-lg-3 mb-4">
                    <div class="card h-100">

                        <img src="${product.thumbnail}"
                             class="card-img-top"
                             alt="${product.title}">

                        <div class="card-body">

                            <h5 class="card-title">
                                ${product.title}
                            </h5>

                            <p class="card-text">
                                ${product.description}
                            </p>

                            <h6>$${product.price}</h6>

                            <p> ${product.rating}</p>

                            <button class="btn btn-primary">
                                Buy Now
                            </button>

                        </div>
                    </div>
                </div>
            `;

        });

    })
    .catch(error => console.log(error));