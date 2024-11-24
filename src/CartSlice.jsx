import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalItems: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload; // Extract the plant data
      const existingItem = state.items.find(item => item.name === newItem.name);
      if (existingItem) {
          // If the item already exists, you might want to increase the quantity or something else
          existingItem.quantity += 1;
      } else {
          state.items.push({...newItem, quantity: 1}); // Add the plant with a default quantity of 1
      }
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    removeItem: (state, action) => {
      const itemName = action.payload; // Get the name of the item to remove
      state.items = state.items.filter(item => item.name !== itemName); // Remove item by name
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Get ID and new quantity from the action payload
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity = quantity; // Update the quantity of the item
      }
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
