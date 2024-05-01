import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const contactsSlice = createSlice({
  name:"contacts",
  initialState: {
    items:[]
  },
  reducers:{
    addContact:{
      reducer(state,action){
        state.items.push(action.payload);
      },
      prepare(item){
        return {
          payload:{
            name:item.name,
            number:item.number,
            id:nanoid()
          },
        };
      }
    },
    deleteContacts(state,action){
      const index = state.items.findIndex(contact=>contact.id===action.payload);
      state.items.splice(index,1);
    }
  }
})

export const {deleteContacts,addContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state=> state.contacts.items;
