import React, { useState } from "react";
import { InputGroup, FormControl, Button, Spinner } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const TaskInput = ({ onAdd, isLoading }) => {
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

  const disabled = isLoading || (value || "").length === 0;

  return (
    <InputGroup>
      <FormControl
        placeholder="Add new task..."
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={value}
      />
      <InputGroup.Append>
        <Button variant="primary" disabled={disabled} onClick={handleAdd}>
          {isLoading 
            ? <Spinner animation="border" size="sm" />
            : <Icon icon={faPlus} />}
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default TaskInput;