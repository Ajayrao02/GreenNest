import React, { useState } from 'react'
import { FaChevronUp , FaChevronDown } from "react-icons/fa";
import './CSS/Checkbox.css'

const CheckBox = ({data , btnName}) => {
  const [show, setShow] = useState(false)

  return (
    <div className="checkbox-container">
      <button onClick={() => setShow(!show)}>{btnName} {show ? <FaChevronUp /> : <FaChevronDown />}</button>

      <div className="checkbox-list-container" style={{ display: show ? 'block' : 'none' }}>
        <ul className="checkbox-list">
          {data.map((item) => (
            <li key={item.id}>
              <label className="checkbox-label">
                <input type="checkbox" />
                {item.label} ({item.count})
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CheckBox
