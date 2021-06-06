import React from "react";
import "./TodoItem.css";


//Todoları Siliyor
const deleteTodo = (e) => {
  if (e.target.className === "btn btn-danger") {
    e.target.parentElement.parentElement.parentElement.remove();
  }

};

//Üzerine çizgi çekiyor
const clickLine = (e) => {

  if (e.target.className === "") {
    e.target.className = "todoyazi";
  } else if (e.target.className === "todoyazi") {
    e.target.className = "";
  }

}

function Todo(props) {
  const { content } = props;
  return <div className="content" onClick={clickLine}>

    <span className="">{content}</span>

    <div className="silBtn">
      <button type="button" className="btn btn-danger" onClick={deleteTodo}>Sil</button>
    </div>

  </div>;
}

export default Todo;
