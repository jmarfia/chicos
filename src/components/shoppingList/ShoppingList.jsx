import React from "react";
import "./shoppingList.css";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";

const ShoppingList = (props) => {
  const dispatch = useDispatch();
  let handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch({
        type: "ADD_ITEM",
        payload: { name: document.getElementById("addItem").value },
      });
    }
  };
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
          <div className="menu">
            <form className="addItemForm">
              <input
                id="addItem"
                className="addItemInput"
                type="text"
                name="addItem"
                placeholder="Agregar item"
              ></input>
              <i
                id="addItemIcon"
                className="fas fa-plus-circle"
                onKeyPress={handleKeyPress}
                onClick={() => {
                  let counterId = 1;
                  if (props.itemList.length > 0) {
                    counterId =
                      props.itemList[props.itemList.length - 1].id + 1;
                  }
                  dispatch({
                    type: "ADD_ITEM",
                    payload: {
                      id: counterId,
                      name: document.getElementById("addItem").value,
                      bought: "",
                    },
                  });
                }}
              />
            </form>
            <div className="shoppList">
              <ul className="p-0">
                {props.itemList.map(({ id, name, bought }) => {
                  return <Item key={id} id={id} name={name} bought={bought} />;
                })}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

function Item(props) {
  const dispatch = useDispatch();
  return (
    <li className="d-flex justify-content-between">
      <label className="cstmlabel">
        <span className={props.bought}>{props.name}</span>
        <input
          id={props.id}
          type="checkbox"
          onClick={() => {
            dispatch({
              type: "BUY_ITEM",
              payload: props.id,
            });
          }}
        />
        <span className="checkmark"></span>
      </label>
      <i
        id="subItemIcon"
        className="fas fa-minus-circle text-danger float-right"
        onClick={() => {
          dispatch({
            type: "DELETE_ITEM",
            payload: props.id,
          });
        }}
      />
    </li>
  );
}

export default ShoppingList;
