export interface Product{
    id:number;                 //id:1,
    title:string;             //title:"laptop",
    price:number;           //price:40$,
    image:string;           //image:"laptop.png",
    category:string;       //category:"electronics"
}

export interface CarItem extends Product{
    quantity:number;
}