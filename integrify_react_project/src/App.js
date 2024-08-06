import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import TodoList from "./components/TodoList";

function App() {
  const [open, setOpen] = React.useState(false);
  const [deadline, setDeadline] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [status, setStatus] = React.useState("In progress");
  const [todos, setTodos] = React.useState([{title: "Lean JavaScript closure", deadline: "Tonight", status: "Done"}]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };

  const handleSubmit = (event) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { title: title,  status: status, deadline: deadline},
    ]);
  };

  return (
    <div>
      <div className="limitedSizeContainer">
        <div className="marginBottom">
        <Button onClick={handleOpen} variant="contained" className="marginBottom">
          Add new todo
        </Button>
        </div>
        <TodoList className="todoListMain" todos={todos} />
          <div className="verticallyAlignedContainer">
          <p className="itemNotStarted"> Not started </p> <p className="itemInProgress"> In progress </p><p className="itemDone"> Done </p>
          </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalStyle">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new todo
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="horizontallyAlignedContainer">
              <TextField
                id="outlined-basic"
                label="Title"
                value={title}
                variant="outlined"
                className="marginBottom"
                onChange={handleTitleChange}
              />
              <TextField
                id="outlined-basic"
                value={deadline}
                label="Deadline"
                variant="outlined"
                className="marginBottom"
                onChange={handleDeadlineChange}
              />
              <Select
                className="marginBottom"
                labelId="status"
                id="status"
                value={status}
                label="Status"
                onChange={handleStatusChange}
              >
                <MenuItem value="Not started">Not started</MenuItem>
                <MenuItem value="In progress">In progress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </Select>
              <Button variant="contained" onClick={() => setOpen(false)}>
                Cancel
              </Button>{" "}
              <Button variant="contained" onClick={() => handleSubmit()}>
                Add
              </Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
