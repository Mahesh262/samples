import React from "react";
import "./App.css";
const App = () => {
  const colrs = ["#73493e", "#0048ba", "#79d246"];
  const [background, setBackground] = React.useState("#0048ba");
  const [data, setData] = React.useState(true);
  console.log(background);
  return (
    <>
      <div style={{ backgroundColor: background }}>
        {data ? (
          <div style={{ backgroundColor: background }}>
            <div
              style={{
                backgroundColor: background,
                width: "200px",
                height: "200px",
              }}
            >
              Hello
            </div>
          </div>
        ) : (
          "No Colour Selected"
        )}
      </div>
      <div>
        {data ? (
          <div></div>
        ) : (
          <div
            style={{
              backgroundColor: background,
            }}
          >
            <div> Hello</div>
          </div>
        )}
      </div>
      <div style={{ display: "flex" }}>
        {colrs.map((items, index) => {
          return (
            <div
              key={index}
              style={{
                width: "200px",
                height: "100px",
                paddingTop: "20px",
              }}
            >
              <div onClick={() => setData(!data)}>
                <div
                  style={{
                    boxSizing: "border-box",
                    width: "55%",
                    height: "59px",
                    backgroundColor: items !== background ? items : background,
                  }}
                  onClick={() => setBackground(items)}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default App;
