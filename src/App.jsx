import { useRef, useState } from 'react';
import './App.scss';

function App() {
  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const pswRef = useRef(null);
  const [Users, setUsers] = useState([]);

  const send = () => {
    const name = nameRef.current?.value;
    const mail = mailRef.current?.value;
    const psw = pswRef.current?.value;

    const data = {
      name: name,
      mail: mail,
      psw: psw
    };
    setUsers([...Users, data]);
  };

  const removeUser = (indexToRemove) => {
    const newUsers = Users.filter((user, index) => index !== indexToRemove);
    setUsers(newUsers);
  };

  return (
    <section className='hero'>
      <div className="add">
        <div className="container">
          <input ref={nameRef} type="text" placeholder="Введите имя" />
          <input ref={mailRef} type="email" placeholder="Введите @mail" />
          <input ref={pswRef} type="password" placeholder="Введите пароль" />
          <button type="button" onClick={send}>Добавить</button>
        </div>
      </div>
      <p>Пользователи</p>
      <table>
        <tbody>
          {Users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.mail}</td>
              <td>{user.psw}</td>
              <td>
                <button onClick={() => removeUser(index)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default App;
