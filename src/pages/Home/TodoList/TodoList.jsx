import { useState } from "react";
import "./TodoList.css";
import { Container } from "react-bootstrap";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  console.log(item);

  const AddToList = () => {
    list.push(item);
    console.log(list);
    console.log(list.length);
    setList([...list]);
  };

  const RemoveItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div>
      <Container>
        <input
          onChange={(e) => setItem(e.target.value)}
          type="text"
          placeholder="Enter item"
        />
        {/* <p>{item}</p>*/}
        <button onClick={AddToList}>Add</button>
        <table>
          <tbody>
            {list.length !== 0 ? (
              list.map((todo, index) => {
                return (
                  <tr>
                    <td>{todo}</td>
                    <td>
                      <button
                        onClick={() => {
                          RemoveItem(index);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>Todo List is empty</tr>
            )}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default TodoList;
