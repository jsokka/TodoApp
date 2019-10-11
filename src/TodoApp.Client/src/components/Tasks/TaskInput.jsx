import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const TaskInput = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleChange = event => setValue(event.target.value);

  const handleAdd = () => {
    if (value.trim().length === 0) {
      return;
    }

    onAdd(value.trim());
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
        <Button variant="primary" onClick={handleAdd}><Icon icon={faPlus} /></Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default TaskInput;