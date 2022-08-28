let nav = document.createElement("nav");
nav.setAttribute("class", " py-5 text-center  text-white ");
document.body.append(nav);
//
let h5 = document.createElement("h1");
h5.innerHTML = "Get random  Animals Details";
nav.append(h5);
/*--------------------------------------------------------------------- */
let div = document.createElement("div");
var button = document.createElement("button");
button.setAttribute("type", "submit");
button.setAttribute("class", "btn btn-primary rounded ");
button.innerHTML = "Fetch animals Details";
button.addEventListener("click", foo);
//div.append(button);
document.body.append(button);
/*---------------------------------------------------------------- */
let a = document.createElement("div");
a.setAttribute("class", "container p-5");
let row = document.createElement("div");
row.setAttribute("class", "row");
a.append(row);
document.body.append(a);

/*---------------------------------------------------------------- */
async function foo() {
  let url = `https://zoo-animal-api.herokuapp.com/animals/rand`;
  let link = await fetch(url);
  let res1 = await link.json();
  //console.log(res1);
  row.innerHTML = `<div class="col-md-6 offset-md-3 col-lg-6 py-2">
  <div class="card  bg-info ">
  <div  ><h5 class="card-header text-center bg-warning p-2 text-uppercase" > ${res1.name}</h5></div>
    <img src="${res1.image_link}"class="card-img-top  "style="height:350px;">
    <div class="card-body  text-center">

    <p class="card-text"><span class=" text-black fw-bold">Binomail Name :<span class=" text-white fw-normal "> ${res1.latin_name}</span></p>
    <p class="card-text"><span class=" text-black fw-bold">Species :<span class="text-white fw-normal"> ${res1.animal_type}</span></p>
    <p class="card-text "><span class=" text-black fw-bold">Life Span :<span class=" text-white fw-normal"> ${res1.lifespan} Years</span></p>
    <p class="card-text"><span class=" text-black fw-bold">length: <span class=" text-white fw-normal">${res1.length_max} Meter</span></p>
    <p class="card-text"><span class=" text-black fw-bold">Weight : <span class=" text-white fw-normal"> ${res1.weight_max} Pounds</span> </p>
    <pclass="card-text"><span class=" text-black fw-bold">Location:<span class="text-white fw-normal">${res1.geo_range}</span></p>
    <p class="card-text"><span class=" text-black fw-bold">Habitat : <span class="text-white fw-normal">${res1.habitat}</span></p>
    <p class="card-text"><span class=" text-black fw-bold">Diet:<span class=" text-white fw-normal"> ${res1.diet}</span></p>

    </div>
  </div>
</div>`;
}
