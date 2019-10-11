import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const TaskInput = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleChange = event => setValue(event.target.value);

  const handleAdd = () => {
    onAdd(value);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  }

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Add new task..."
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={value}
      />
      <InputGroup.Append>
        <Button variant="primary" onClick={handleAdd}>+</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default TaskInput;