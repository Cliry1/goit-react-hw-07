import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"
import { selectContacts } from "../../redux/contactsSlice"
import { selectNameFilter } from "../../redux/filtersSlice"
import { useSelector } from "react-redux"
export default function ContactList() {



const contacts = useSelector(selectContacts); 
const filters = useSelector(selectNameFilter); 
const visibleContacts = contacts.filter((contact)=>contact.name.toLowerCase().includes(filters.toLowerCase()))

  return (
    <ul className={css.ul}>
      {
        visibleContacts.map((contact)=>(
          <li key={contact.id} className={css.li}>
              <Contact contact={contact}/>
          </li>
          
        ))
      }
    </ul>
  )
}

