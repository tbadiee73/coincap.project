let params =new URLSearchParams(document.location.search);
let coin_name = params.get("coin");


//header

function coin_item (name){
  return `https://api.coincap.io/v2/assets/${name}`;
}

async function get_coin_item() {
  let items=coin_item(coin_name);
  let response=await fetch(items);
  let json=await response.json();

  let data=json.data;
  return data;
    
}

get_coin_item().then(function (value) {
  
  let content= value;

  render_coin_item(content);

});

//let coin_header =document.querySelector(".section_coin_header_items");

function render_coin_item(items) {

let number=document.querySelector(".coin_header_items_rank h2");
number.textContent=items.rank;

let coin_name=document.querySelector(".coin_header_items h1");
coin_name.textContent=items.name + `(`+ items.symbol + `)`;

let coin_price=document.querySelector(".coin_header_items h2");
coin_price.textContent=numeral(items.priceUsd).format('$0,0.00a');


let coin_change=document.querySelector(".coin_header_items span");
let changes =items.changePercent24Hr
if (changes <= 0){
  coin_change.classList.add('text-red');
}else {
  coin_change.classList.add('text-green');
}
coin_change.textContent=Math.round(items.changePercent24Hr*100)/100 +'%';
 

let market_cap=document.querySelector(".market h4");
market_cap.textContent=numeral(items.marketCapUsd).format('$0,0.00a');

let volum =document.querySelector(".volum h4");
volum.textContent=numeral(items.volumeUsd24Hr).format('$0,0.00a');

let supply=document.querySelector(".supply h4");
supply.textContent=numeral(items.supply).format('0,0.00a')+items.symbol;

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

