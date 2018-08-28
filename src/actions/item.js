let newitem =6;
export default function addIem(newItem){
    return{
        type:'Item',
        newItem,
        id:newitem++,
        product:newItem.product,
        qty:newItem.qty,
        price:newItem.price
    }
}