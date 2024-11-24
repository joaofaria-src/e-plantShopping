import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
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
    },
    removeItem: (state, action) => {
      const itemId = action.payload; // Get the ID of the item to remove
      state.items = state.items.filter(item => item.name !== itemId); // Remove item by ID
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Get ID and new quantity from the action payload
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity = quantity; // Update the quantity of the item
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
