import express from 'express';
import { Items } from '../types/item.types';
import { items } from '../data/cartItems';
import { v4 as uuidv4 } from 'uuid';

export const cartRouter = express.Router();


cartRouter.get('/cart-items', (req, res) => {
   res.json(items);
});

cartRouter.get('/cart-items/:id', (req, res) => {
    const item = items.find((itemObject) => itemObject.id === req.params.id);
    res.json(item);
});

cartRouter.post('/cart-items', (req, res) => {
    const newItem: Items = {id: uuidv4(), ...req.body};
    items.push(newItem);
    res.json(newItem);
});

cartRouter.put('/cart-items/:id', (req, res) => {
    const item = items.find((itemObject) => itemObject.id === req.params.id) as Items;
    const itemIndex = items.findIndex((item) => item.id === req.params.id);
    const updatedItem = {...item, ...req.body};
    items.splice(itemIndex, 1, updatedItem);
    res.json(updatedItem);
});

cartRouter.delete('/cart-items/:id', (req, res) => {
    const itemIndex = items.findIndex((item) => item.id === req.params.id);
    items.splice(itemIndex, 1);
    res.json({ message: 'item deleted'});
});