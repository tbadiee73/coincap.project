let params =new URLSearchParams(document.location.search);
let coin_name = params.get("coin");


//header

function coin_item (name){
  return `https://api.coincap.io/v2/assets/${name}`;
}

async function get_coin_item() {
  let items=coin_item(coin_name);
  let response=await fetch(res);
  let json=await response.json();

  let data=json.data;
  return data;
    
}



let coin_header =document.querySelector(".section_coin_header_items");

function render_coin_item(items) {






}




//chart


function coin_url(name) {
    return `https://api.coincap.io/v2/assets/${name}/history?interval=d1`;
}

async function get_coin() {
    
  let url = coin_url(coin_name);
  let response = await fetch(url);
  let json = await response.json();

  let data = json.data;

  let yValues = [];
  let xValues = [];

  data.forEach((item) => {
    yValues.push(item.priceUsd);
    xValues.push(item.time);
  });

  return{
    x: xValues,
    y: yValues,
  };

  }


  get_coin().then(function(values) {
    new Chart("myChart", {
        type: "line",
        data: {
          labels: values.x,
          datasets: [{
            backgroundColor: "rgba(238,130,238,0.5)",
            borderColor: "rgba(255,0,0,1)",
            data: values.y,
          }]
        },
        options:{yValues: values.y},
      });
      
  });

