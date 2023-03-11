function init() {
  drawEmailSelect();
  // drawCarsSelect();
}

init();

function drawEmailSelect() {
  const onlyFirstNames = users.map((users) => {
    return {
      text: users.email,
      country: users?.location?.country,
      value: users?.picture?.large,
    };
  });

  const select = getSelect(onlyFirstNames, drawUserImage);
  document.querySelector("#selectLocation").append(select);
  
  console.log(select.value);
  console.log(select.country);
  console.log(onlyFirstNames);
  // console.log(onlyFirstNames[1].country);
  
  drawUserImage(select.value);
}

function drawUserImage(linkSrc) {
  console.log(linkSrc);
  const img = getImg(linkSrc);
  document.querySelector("#flag").innerHTML = "";
  document.querySelector("#flag").append(img);
}

// function drawFlag(linkSrc) {
//   const img = getImg(linkSrc);
//   document.querySelector("#flag").innerHTML = "";
//   document.querySelector("#flag").append(img);
// }

// function drawCountriesSelect() {
//   const onlyCountriesNames = countries.map((currentCountry) => {
//     return {
//       text: currentCountry.name.common,
//       value: currentCountry?.flags?.svg,
//     };
//   });
//   const select = getSelect(onlyCountriesNames, drawFlag);
//   document.querySelector("#selectLocation").append(select);
//   drawFlag(select.value);
// }




