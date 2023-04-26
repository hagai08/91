const DOM = {
  content: document.querySelector("#content"),
  controllers: document.querySelector("#controllers"),
  createProductButton: document.querySelector("#createProduct"),
};

function init() {

getProductsHandler();

}

init();

async function getProductsHandler() {
  try {
    showLoader();
    const result = await getProducts();
    // const products = result.products;
    // if (!Array.isArray(products)) throw new Error("Api error");
    // currentProductsLength = products.length;
    draw(result);
  } catch (error) {
    swal({
      title: "Something went wrong!",
      text: "Contact admin",
      icon: "error",
    });
  } finally {
    removeLoader();
  }
}

// async function addNewProductHandler(product) {
//   try {
//     const result = await addProduct(product);
//     swal({
//       title: "Product created!",
//       text: result.success,
//       icon: "success",
//     });
//   } catch (error) {
//     swal({
//       title: "Something went wrong!",
//       text: "Contact admin",
//       icon: "error",
//     });
//   } finally {
//   }
// }

function draw(result) {
  DOM.content.innerHTML = "";
  if (Array.isArray(result)) {
    for (let index = 0; index < result.length; index++) {
      drawProduct(result[index]);
    }
  } else {
    drawProduct(result);
  }
}
function drawProduct(product) {
  const div = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.innerText = product.obj.name;

  const h1 = document.createElement("h1");
  h1.innerText = product.obj.symbol;

  div.classList.add("cardi");
  div.append(h1, h2);
  DOM.content.append(div);
}
// async function addProduct(product) {
//   const result = await fetch(`https://reqbin.com/echo/post/json`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(product),
//   });
//   const json = await result.json();
//   return json;
// }
async function getProducts() {
  const result = await fetch(
    `https://api.coingecko.com/api/v3/coins/list`
  );
  const json = await result.json();
  
  const counts = json.reduce((a, obj) => {
    const string = JSON.stringify(obj);
    a[string] = (a[string] || 0) + 1
    return a;
  }, {});
  
  const resultTop100 = Object.entries(counts)
  .slice(0, 100)
  .map(([string, count]) => ({ count, obj: JSON.parse(string) }));

  return resultTop100;
}
{
  /* <div class="spinner-border" role="status"> */
}
function showLoader() {
  DOM.content.innerHTML = "";
  const loader = document.createElement("div");
  loader.id = "searchLoader";
  loader.classList.add("spinner-border");
  DOM.content.append(loader);
}

function removeLoader() {
  const loader = document.querySelector("#searchLoader");
  if (loader) {
    loader.remove();
  }
}

function getButton(innerText) {
  const button = document.createElement("button");
  button.innerText = innerText;
  button.classList.add("btn", "btn-secondary");
  return button;
}
