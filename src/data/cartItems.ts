import { v4 as uuidv4 } from 'uuid';
import { Items } from "../types/item.types";

export let items: Items[] = [
    {id: uuidv4(), product: 'Cereal', price: 6.00, quantity: 1},
    {id: uuidv4(), product: 'Bell Peppers', price: 1.00, quantity: 3},
    {id: uuidv4(), product: 'Cookies', price: 2.00, quantity: 2},
];