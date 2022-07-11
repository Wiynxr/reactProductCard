import { useState } from "react";
import sneakers from "./image/sneakers.png";
import "./style.css";

function App() {



  const [buttonText, setButtonText] = useState('Добавить в корзину')
  const [buttonStatus, setButtonStatus] = useState(false)
  const [classRed, setClassRed] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [btnBut, setBtnBuy] = useState('btn-but')
  const [detaliStatus, setDetaliStatus] = useState(false)


  const handleChange = () => {
    setButtonText('Уже в корзине')
    setButtonStatus(true)
    setClassRed('divRed')
    setBtnDisabled(true)
    // setBtnBuy('btn-but-2')
  }

  const handleStatus = () => {
    setDetaliStatus(true)
  }
  
  const handleRemove = () => {
    setButtonStatus(false)
    setButtonText('Добавить в корзину')
    setBtnDisabled(false)
    // setBtnBuy('btn-but')
  }

  const handleDelete = () => {
    setDetaliStatus(false)
  }

  return (
    <div className="App">
      <div className="productCart">
        <div className="image-block">
          <img src={sneakers}></img>
        </div>
        <div className="MainContent">
          <p>Nike Sneaker</p>
          <div className="btn-block">
            {(detaliStatus) && <div className="detalsBlock"><button onClick={handleDelete}>❌</button><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dignissimos</span></div>}
            <button className="btn" onClick={handleStatus}>Детали</button>
          </div>
          <p>$120</p>
        </div>
        <div className="footer">
        <hr></hr>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dignissimos</p>
        </div>
        <div className="footer-btn">
          <button disabled={btnDisabled} className={btnBut} onClick={handleChange}>{buttonText}</button>
          {(buttonStatus) && <button onClick={handleRemove} className={classRed}>удалить из корзины</button>}
        </div>
      </div>
    </div>
  );
}

export default App;
