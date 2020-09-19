import React, {useState, useContext} from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = async event => {
    event.preventDefault();

    if (value && value.trim()) {
      try {
        await firebase.addNote(value.trim());
        alert.show('Заметка была создана: ' + value, 'success');
      } catch (err) {
        alert.show('Ошибка: ' + err, 'danger');
      }
      setValue('');
    } else {
      alert.show('Введите текст', 'warning');
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Введите значение заметки"
          onChange={e => setValue(e.target.value)}/>
      </div>
    </form>
  )
}