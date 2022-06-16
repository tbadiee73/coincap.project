

fetch("https://api.coincap.io/v2/exchanges").then(function(responce){
    return responce.json();

}).then(function(data){
let list= data.data;

 list.forEach(function(items) {
  rendertable(items);
});
});

let list_container =document.querySelector('.stat_table');

function rendertable(items){

  let table_row=document.createElement('div');
  table_row.classList.add('stat_table_row');

    let rank_items=document.createElement('div');
    rank_items.classList.add('table_item_row');
    rank_items.classList.add('left_title');
    rank_items.textContent=items.rank;

    let name_items=document.createElement('div');
    name_items.classList.add('table_item_row');
    name_items.classList.add('second_title');
    name_items.textContent=items.name;

    let Trading_items=document.createElement('div');
    Trading_items.classList.add('table_item_row');
    Trading_items.textContent= numeral(items.tradingPairs).format(0,0)


    let volume_items=document.createElement('div');
    volume_items.classList.add('table_item_row');
    volume_items.textContent=numeral(items.volumeUsd).format('$0,0.00a');

    let Total__items =document.createElement('div');
    Total__items.classList.add('table_item_row');
    Total__items.textContent=Math.round(items.percentTotalVolume*100)/100 + '%';

    let status__items =document.createElement('div');
    status__items.classList.add('table_item_row');
    status__items.classList.add('Status')
    status__items.innerHTML="&#11044";

     table_row.appendChild(rank_items);
     table_row.appendChild(name_items);
     table_row.appendChild(Trading_items);
     table_row.appendChild(volume_items);
     table_row.appendChild(Total__items);
     table_row.appendChild(status__items);

    list_container.appendChild( table_row);
};