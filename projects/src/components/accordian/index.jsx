//single selection

import { useState } from "react";
import data from "./data";
import "./styles.css";

//multiple selsection
export default function Accordian() {
  const [selectd, setSelectd] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(getCurrentId) {
    setSelectd(getCurrentId === selectd ? null : getCurrentId);
  }
  function handlaMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const foundIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    console.log(foundIndexOfCurrentId);
    if (foundIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(foundIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  }
  console.log(selectd, multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handlaMultiSelection(dataitem.id)
                    : () => handleSingleSelection(dataitem.id)
                }
                className="title"
              >
                <h3>{dataitem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataitem.id) !== -1 && (
                    <div className="content">{dataitem.answer}</div>
                  )
                : selectd === dataitem.id && (
                    <div className="content">{dataitem.answer}</div>
                  )}

              {/* {selectd === dataitem.id ? (
                <div className="content">{dataitem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>data not found</div>
        )}
      </div>
    </div>
  );
}
