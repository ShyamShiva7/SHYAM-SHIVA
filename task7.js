// ==================== TASK 1 ====================

console.log("Task 1 Started");

const apiLink = "https://fakestoreapi.com/products";

fetch(apiLink)
    .then(response => response.json())
    .then(products => {

        console.log("===== ALL PRODUCTS =====");

        products.forEach(product => {
            console.log(`Title: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Category: ${product.category}`);
            console.log("----------------------");
        });

        const titlePrice = products.map(product => ({
            title: product.title,
            price: product.price
        }));

        console.log("===== TITLE + PRICE =====");
        console.log(titlePrice);

        const expensiveProducts = products.filter(
            product => product.price > 100
        );

        console.log("===== PRODUCTS ABOVE $100 =====");
        console.log(expensiveProducts);

        const electronicsProduct = products.find(
            product => product.category === "electronics"
        );

        console.log("===== FIRST ELECTRONICS PRODUCT =====");
        console.log(electronicsProduct);

        const totalPrice = products.reduce(
            (sum, product) => sum + product.price,
            0
        );

        console.log(`Total Price: $${totalPrice.toFixed(2)}`);

        const sortedProducts = [...products].sort(
            (a, b) => b.price - a.price
        );

        console.log("===== HIGHEST TO LOWEST =====");

        sortedProducts.forEach(product => {
            console.log(`${product.title} - $${product.price}`);
        });
    })
    .catch(error => {
        console.log("API Error:", error);
    })
    .finally(() => {
        console.log("Task 1 Completed");
    });


// ==================== TASK 2 ====================

console.log("Task 2 Started");

const apiLink1 = "https://fakestoreapi.com/products";

function productDashboard(products) {

    const electronics = products.filter(
        product => product.category === "electronics"
    ).length;

    const jewelery = products.filter(
        product => product.category === "jewelery"
    ).length;

    const mensClothing = products.filter(
        product => product.category === "men's clothing"
    ).length;

    const womensClothing = products.filter(
        product => product.category === "women's clothing"
    ).length;

    const prices = products.map(
        product => product.price
    );

    const total = prices.reduce(
        (sum, price) => sum + price,
        0
    );

    const sortedPrices = [...prices].sort(
        (a, b) => b - a
    );

    const highest = sortedPrices[0];

    const lowest = sortedPrices[sortedPrices.length - 1];

    const average = total / products.length;

    console.log(`
===== PRODUCT DASHBOARD =====

Total Products: ${products.length}

Electronics: ${electronics}
Jewelery: ${jewelery}
Men's Clothing: ${mensClothing}
Women's Clothing: ${womensClothing}

Highest Price: $${highest.toFixed(2)}
Lowest Price: $${lowest.toFixed(2)}
Average Price: $${average.toFixed(2)}
`);
}

fetch(apiLink1)
    .then(response => response.json())
    .then(products => {
        productDashboard(products);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Dashboard Completed");
    });


// ==================== TASK 3 ====================

console.log("Task 3 Started");

const usersApi = "https://jsonplaceholder.typicode.com/users";
const postsApi = "https://jsonplaceholder.typicode.com/posts";

fetch(usersApi)
    .then(response => response.json())
    .then(users => {

        console.log("===== ALL USER NAMES =====");

        users.forEach(user => {
            console.log(user.name);
        });

        console.log("===== USER NAME + EMAIL =====");

        users.forEach(user => {
            console.log(`${user.name} - ${user.email}`);
        });

        const user5 = users.find(
            user => user.id === 5
        );

        console.log("===== USER ID 5 =====");
        console.log(user5);

        const cityUsers = users.filter(
            user => user.address.city === "Gwenborough"
        );

        console.log("===== USERS FROM GWENBOROUGH =====");
        console.log(cityUsers);
    })
    .catch(error => {
        console.log("User API Error:", error);
    });

fetch(postsApi)
    .then(response => response.json())
    .then(posts => {

        const user1Posts = posts.filter(
            post => post.userId === 1
        );

        console.log("===== POSTS BY USER ID 1 =====");
        console.log(user1Posts);

        console.log(
            `User ID 1 Post Count: ${user1Posts.length}`
        );

        const firstLongTitle = posts.find(
            post => post.title.length > 50
        );

        console.log("===== FIRST TITLE ABOVE 50 CHARACTERS =====");
        console.log(firstLongTitle);
    })
    .catch(error => {
        console.log("Post API Error:", error);
    })
    .finally(() => {
        console.log("Task 3 Completed");
    });


// ==================== TASK 4 ====================

console.log("Task 4 Started");

const apiLink4 = "https://fakestoreapi.com/products";

function searchProducts(category, maxPrice) {

    fetch(apiLink4)
        .then(response => response.json())
        .then(products => {

            const result = products.filter(
                product =>
                    product.category.toLowerCase() ===
                    category.toLowerCase() &&
                    product.price <= maxPrice
            );

            console.log("===== MATCHING PRODUCTS =====");

            result.forEach(product => {
                console.log(
                    `${product.title} - $${product.price}`
                );
            });

            console.log(
                `Total Matching Products: ${result.length}`
            );
        })
        .catch(error => {
            console.log("Error:", error);
        })
        .finally(() => {
            console.log("Task 4 Completed");
        });
}

const category = prompt(
    "Enter product category:"
);

const maxPrice = Number(
    prompt("Enter maximum price:")
);

searchProducts(category, maxPrice);


// ==================== TASK 5 ====================

console.log("Task 5 Started");

const apiLink5 = "https://fakestoreapi.com/products";

fetch(apiLink5)
    .then(response => response.json())
    .then(products => {

        console.log("===== AVAILABLE PRODUCTS =====");

        products.forEach(product => {
            console.log(
                `ID: ${product.id} | ${product.title} | $${product.price}`
            );
        });

        const input = prompt(
            "Enter product IDs separated by comma:"
        );

        const ids = input
            .split(",")
            .map(id => Number(id.trim()));

        const cart = products.filter(
            product => ids.includes(product.id)
        );

        console.log("===== CART =====");

        cart.forEach((product, index) => {

            console.log(
                `Product ${index + 1}: ${product.title}`
            );

            console.log(
                `Price: $${product.price}`
            );
        });

        const total = cart.reduce(
            (sum, product) => sum + product.price,
            0
        );

        let discount = 0;

        if (total > 200) {
            discount = 20;
        }
        else if (total > 100) {
            discount = 10;
        }

        const discountAmount =
            total * discount / 100;

        const finalAmount =
            total - discountAmount;

        console.log(
            `Total: $${total.toFixed(2)}`
        );

        console.log(
            `Discount: ${discount}%`
        );

        console.log(
            `Discount Amount: $${discountAmount.toFixed(2)}`
        );

        console.log(
            `Final Amount: $${finalAmount.toFixed(2)}`
        );
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Shopping Cart Completed");
    });


// ==================== TASK 6 ====================

console.log("Task 6 Started");

const apiLink6 = "https://fakestoreapi.com/products";

function productReport(products) {

    console.log("========== PRODUCT REPORT ==========");

    console.log(
        `Total Products: ${products.length}`
    );

    console.log("\n===== PRODUCT NAMES =====");

    products.forEach(product => {
        console.log(`- ${product.title}`);
    });

    const productNames = products.map(
        product => product.title
    );

    console.log("\n===== PRODUCT NAMES ARRAY =====");
    console.log(productNames);

    const expensiveProducts = products.filter(
        product => product.price > 100
    );

    console.log("\n===== PRODUCTS ABOVE $100 =====");

    expensiveProducts.forEach(product => {
        console.log(
            `${product.title} - $${product.price}`
        );
    });

    const electronicsProduct = products.find(
        product => product.category === "electronics"
    );

    console.log("\n===== ELECTRONICS PRODUCT =====");
    console.log(electronicsProduct);

    const totalPrice = products.reduce(
        (sum, product) => sum + product.price,
        0
    );

    console.log(
        `\nTotal Product Value: $${totalPrice.toFixed(2)}`
    );

    const anyAbove500 = products.some(
        product => product.price > 500
    );

    console.log(
        `Any Product Above $500: ${anyAbove500}`
    );

    const allAbove1 = products.every(
        product => product.price > 1
    );

    console.log(
        `All Products Above $1: ${allAbove1}`
    );

    const sortedProducts = [...products].sort(
        (a, b) => b.price - a.price
    );

    console.log("\n===== HIGHEST → LOWEST =====");

    sortedProducts.forEach(product => {
        console.log(
            `${product.title} - $${product.price}`
        );
    });
}

fetch(apiLink6)
    .then(response => response.json())
    .then(products => {
        productReport(products);
    })
    .catch(error => {
        console.log("API Error:", error);
    })
    .finally(() => {
        console.log("\n========== TASK 6 COMPLETED ==========");
    });