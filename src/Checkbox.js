import { useState } from "react";

const Checkbox=()=> {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(event.target.checked)
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          value="myValue"
        />
        My Checkbox
      </label>
      <p>Checkbox is {isChecked ? "checked" : "unchecked"}</p>
    </div>
  );
}


export default Checkbox