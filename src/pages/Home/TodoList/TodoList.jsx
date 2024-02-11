import React, { useState, useEffect } from "react";
import "./TodoList.css";
import { Button, Container, Modal } from "react-bootstrap";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedItem, setEditedItem] = useState("");
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    setTotalTasks(list.length);
    setCompletedTasks(list.filter((todo) => todo.completed).length);
  }, [list]);

  const AddToList = () => {
    list.push({ task: item, completed: false });
    setList([...list]);
    setItem("");
  };

  const RemoveItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  const handleEditModalOpen = (index) => {
    setEditIndex(index);
    setEditedItem(list[index].task);
    setModalShow(true);
  };

  const handleEditItem = () => {
    list[editIndex].task = editedItem;
    setList([...list]);
    setModalShow(false);
  };

  const toggleCompleted = (index) => {
    const newList = [...list];
    newList[index].completed = !newList[index].completed;
    setList(newList);
  };

  return (
    <div className="todo-area">
      <SectionTitle
        title={"Start Planning Your Next Task "}
        subtitle={
          "Stay Organized and Efficient by Adding Your Next Todo Item Below"
        }
      />
      <Container>
        <div className="input-area">
          <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            type="text"
            placeholder="Enter item"
          />
          <button onClick={AddToList}>Add</button>
          <div className="task-count">
            <p>Total Tasks: {totalTasks}</p>
            <p>Completed Tasks: {completedTasks}</p>
          </div>
        </div>
        <div className="todo-table">
          <table className="table table-striped">
            {list.length !== 0 ? (
              <>
                <thead>
                  <tr>
                    <th>Task Name</th>
                    <th>Check if complete</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((todo, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          {todo.task}
                          {todo.completed && (
                            <span
                              style={{ marginLeft: "5px" }}
                              className="complete-msg"
                            >
                              Completed
                            </span>
                          )}
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => {
                              toggleCompleted(index);
                              setCompletedTasks((prevCount) =>
                                todo.completed ? prevCount - 1 : prevCount + 1
                              );
                            }}
                          />
                        </td>
                        <td>
                          <button
                            style={{ backgroundColor: "#5a52f8" }}
                            onClick={() => handleEditModalOpen(index)}
                          >
                            <RiPencilFill /> Edit
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => RemoveItem(index)}
                            style={{ backgroundColor: "#ef4444" }}
                          >
                            <FaRegTrashAlt /> Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}{" "}
                </tbody>
              </>
            ) : (
              <div className="empty-msg">
                <p>Todo List is empty</p>
              </div>
            )}
          </table>
        </div>
      </Container>
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={editedItem}
            onChange={(e) => setEditedItem(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleEditItem}>Save Changes</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TodoList;
