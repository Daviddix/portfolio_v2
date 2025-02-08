interface StackChipsProps {
  color : string;
  iconPath : string;
  name : string;
}

import "./StackChips.css"

function StackChips({color, iconPath, name} : StackChipsProps) {
  return (
    <div
    style={{
      border : `1px solid ${color + "77"}`
    }}
    className="stack-chip">
      <img src={iconPath} alt={name} />
      <p
      className={name == "Figma" ? "italic" : ""}
      style={
        {color : color}
      }
      >{name}</p>
    </div>
  )
}

export default StackChips