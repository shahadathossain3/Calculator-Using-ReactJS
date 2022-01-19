import React from "react";
import {useState} from "react";
import "./ButtonKey.css";
function ButtonKey() {
  const [data,setData]=useState("");
  const clickdata=(e)=>{
    setData(data+(e.target.name));
    if(e.target.name==="AC")
    {
      setData("");
    }
    if(e.target.name==="=")
    {
      try{
        setData(eval(data).toString());
      } catch(err)
      {
        setData("Error");
      }

    }

    if(e.target.name==="%")
    {
      try{
        setData(eval(data/100));
      } catch(err)
      {
        setData("Error");
      }

    }
  }

  return (
    <div>

      <div>
        <form>
          <input type="text" className="input-form" readOnly disabled value={data}/>
        </form>
      </div>

      <div className="button-all-key">
        <div>
        <button className="AC" name="AC" onClick={clickdata}>AC</button>
        <button className="button-key" name="%" onClick={clickdata}>%</button>
        <button className="button-key" name="+" onClick={clickdata}>+</button>
      </div>

      <div>
        <button className="button-key" name="7" onClick={clickdata}>7</button>
        <button className="button-key" name="8" onClick={clickdata}>8</button>
        <button className="button-key" name="9" onClick={clickdata}>9</button>
        <button className="button-key" name="-" onClick={clickdata}>-</button>
      </div>
      <div>
        <button className="button-key" name="4" onClick={clickdata}>4</button>
        <button className="button-key" name="5" onClick={clickdata}>5</button>
        <button className="button-key" name="6" onClick={clickdata}>6</button>
        <button className="button-key" name="*" onClick={clickdata}>*</button>
      </div>
      <div>
        <button className="button-key" name="1" onClick={clickdata}>1</button>
        <button className="button-key" name="2" onClick={clickdata}>2</button>
        <button  className="button-key"name="3" onClick={clickdata}>3</button>
        <button className="button-key" name="/" onClick={clickdata}>/</button>
      </div>

      <div>
        <button className="AC" name="0" onClick={clickdata}>0</button>
        <button className="button-key" name="." onClick={clickdata}>.</button>
        <button className="button-key" name="=" onClick={clickdata}>=</button>

      </div>
      </div>

    </div>
  );
}

export default ButtonKey;
