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
  const [todo, setTodos] = React.useState([{title: "Lean JavaScript closure", description: "Deadline: tonight", status: "itemDone"}, {}]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDeadlineChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <div>
      <div className="limitedSizeContainer">
        <div className="marginBottom">
        <Button onClick={handleOpen} variant="contained" className="marginBottom">
          Add new todo
        </Button>
        </div>
        <TodoList className="todoListMain" />
          <div className="verticallyAlignedContainer">
          <p className="itemDone"> Done </p> <p className="itemDone"> Not started </p><p className="itemDone"> In progress </p>
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
                label="Deadline"
                value={title}
                variant="outlined"
                className="marginBottom"
                onChange={handleTitleChange}
              />
              <TextField
                id="outlined-basic"
                value={title}
                label="Title"
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
                <MenuItem value="In progress">In progress</MenuItem>
                <MenuItem value="Not started">Not started</MenuItem>
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
