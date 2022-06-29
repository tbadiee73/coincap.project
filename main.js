fetch("https://api.coincap.io/v2/assets").then(function(responce){
   // console.log(responce);
    return responce.json();

}).then(function(data){
let list= data.data;

 list.forEach(function(items) {
 // console.log(items);
    rendertable(items);
});

});


let list_container =document.querySelector('.stat_table');

function rendertable(items){

  let stat_table_row =document.createElement('div');
  stat_table_row.classList.add('stat_table_row');

let rank_items=document.createElement('div');
rank_items.classList.add('table_item_row');
rank_items.classList.add('left_title');
rank_items.textContent= items.rank;


let name_items=document.createElement('a');
name_items.classList.add('table_item_row');
name_items.classList.add('second_title');
let id_name=items.id;
name_items.setAttribute("href",`./chart.html?coin=${id_name}`);

let table_icon =document.createElement('img');
let symbol_ui="";
symbol_ui= items.symbol.toLowerCase(); 
table_icon.setAttribute('src',`https://assets.coincap.io/assets/icons/${symbol_ui}@2x.png`);
table_icon.setAttribute('width','30px');
table_icon.setAttribute('height','30px');

let name_details =document.createElement('div');
name_details.classList.add('name_details');

let name_title=document.createElement('div');
name_title.classList.add('name');
name_title.textContent= items.name;

let name_symbol=document.createElement('div');
name_symbol.classList.add('symbol');
name_symbol.textContent=items.symbol;


name_items.appendChild(table_icon);
name_items.appendChild(name_details);

name_details.appendChild(name_title);
name_details.appendChild(name_symbol);


let price_items=document.createElement('div');
price_items.classList.add('table_item_row');
price_items.textContent= numeral(items.priceUsd).format('$0,0.00a');


let marketcap_items=document.createElement('div');
marketcap_items.classList.add('table_item_row');
marketcap_items.textContent=numeral(items.marketCapUsd).format('$0,0.00a');


let vwap_items=document.createElement('div');
 vwap_items.classList.add('table_item_row');
 vwap_items.textContent=numeral(items.vwap24Hr).format('$0,0.00a');


let supply_items=document.createElement('div');
supply_items.classList.add('table_item_row');
supply_items.textContent=numeral(items.supply).format('0,0.00a');


let volume_items=document.createElement('div');
volume_items.classList.add('table_item_row');
volume_items.textContent=numeral(items.volumeUsd24Hr).format('$0,0.00a');


let change_items=document.createElement('div');
change_items.classList.add('table_item_row');
let changes =items.changePercent24Hr
if (changes <= 0){
  change_items.classList.add('text-red');
}else {
  change_items.classList.add('text-green');
}

change_items.textContent=Math.round(items.changePercent24Hr*100)/100 +'%';





stat_table_row.appendChild(rank_items);
stat_table_row.appendChild(name_items);
stat_table_row.appendChild(price_items);
stat_table_row.appendChild(marketcap_items);
stat_table_row.appendChild(vwap_items);
stat_table_row.appendChild(supply_items);
stat_table_row.appendChild(volume_items);
stat_table_row.appendChild(change_items);


list_container.appendChild(stat_table_row)
};

//console.log(rendertable);
