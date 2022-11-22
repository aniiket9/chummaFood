import React from "react";
import "./styles.css";
import { useState } from "react";

const foodMenu = {
  Starters: [
    { name: "Paneer Pakoras", Price: "270/-" },
    { name: "Corn Cheese Rolls", Price: "250/-" },
    { name: "Lijjat Roasted Masala Papad", Price: "50/-" }
  ],

  PunjabiBreakfast: [
    { name: "Pindi Chole Bhature", Price: "180/-" },
    { name: "Puri Chole", Price: "140/-" },
    { name: "Bedmi Kachori Aloo", Price: "100/-" }
  ],
  Sabji: [
    { name: "Butter Paneer", Price: "220/-" },
    { name: "Kadhai Paneer", Price: "239/-" },
    { name: "Aaloo Gobhi", Price: "230/-" }
  ],
  Bread: [
    { name: "Naan", Price: "50/-" },
    { name: "Tandoori Roti", Price: "40/-" },
    { name: "Ghee Paratha", Price: "80/-" }
  ]
};

export default function App() {
  const [selectedfood, setfood] = useState(" FOOD-MENU");
  function DishClickHandler(food) {
    setfood(food);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "40px", color: "#4ade80" }}>Chumma Food</h1>
      <p>
        {" "}
        For the <strong>Foodie</strong> in You!
      </p>

      <div>
        {Object.keys(foodMenu).map((food) => (
          <button
            onClick={() => DishClickHandler(food)}
            style={{
              cursor: "pointer",
              background: "#fda4af",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {food}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodMenu[selectedfood] &&
            foodMenu[selectedfood].map((dish) => (
              <li
                key={dish.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  backgroundColor: "#5eead4",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                {" "}
                <div
                  style={{
                    fontSize: "larger"
                  }}
                >
                  {" "}
                  {dish.name}{" "}
                </div>
                <div style={{ fontSize: "smaller" }}> {dish.Price} </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
