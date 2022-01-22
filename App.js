const items = [
    {name: 'bike',price: 100},
    {name: 'TV',price: 200},
    {name: 'Album',price: 10},
    {name: 'Book',price: 5},
    {name: 'Phone',price: 500},
    {name: 'Computer',price: 1000},
    {name: 'Keyboard',price: 25}
];
console.log(items);
//---------------Filter Method----------------
//---------------here I want to get the products less than or equal to 100----------------

console.log("Array Filter Method below price 100");
const filterItems = items.filter((item) => {
    return item.price <= 100;
});
console.log(filterItems);

//-----------Map Method-------------------
console.log("Map Method, new array with names.");

const itemNames = items.map((item) => {
    return item.name; 
}
);
console.log(itemNames);

//------------Find Method----------------
console.log('Find Method, Find by element Book');

const findItems = items.find((item) => {
    return item.name == "Book";
}
);
console.log(findItems);

//-------------For Each Method---------------
console.log("For Each method, ");

items.forEach((item) =>
{
    console.log(item.price);
}
);

//-----------Some method-------------------
console.log("some Function, checks if some elements are less than 100 in the array.");
const hasInexpensiveItems = items.some((item) =>
{
    return item.price <= 100;
}
);
console.log(hasInexpensiveItems);

//------------every method---------------
console.log("Every Method, checks if all elements are less than 100");

const hasinexpensiveItemsAll = items.every((item) =>
{
    return item.price <=100;
}
);
console.log(hasinexpensiveItemsAll);

//-----------reduce Method-------------------
console.log("reduce method, sum of all elements")

const total = items.reduce((currentTotal, item) =>{
    return item.price +currentTotal;

},0
);
console.log(total);
//-------------------Include Method---------------
console.log("Includes method");

const array = [1,2,3,4,5];
const includesTwo = array.includes(2);
console.log(includesTwo);



