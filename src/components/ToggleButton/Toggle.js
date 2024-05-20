import React from 'react'
import { ThemeContext } from '../Theme/Dark'
import './toggle.css'
function Toggle() {
    
  const context = useContext(ThemeContext);
  return (
    <div className="toggle">
    Dark Mode
    <input className="toggle" id="modedark" type="checkbox" onClick={context.toggleThemeMode} />
    <label htmlFor="modedark"></label>
  </div>
  )
}

export default Toggle