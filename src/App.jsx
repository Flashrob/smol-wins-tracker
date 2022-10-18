import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  Container,
} from "@mui/material";
import { EmojiEvents } from "@mui/icons-material";
import TodoForm from "./winForm";
import TodoList from "./winList";
import "./App.css";


const App = () => {
  const [todos, setTodos] = useState([]);


  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <EmojiEvents />
          <Typography variant="h6">smol wins</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container>
            <Typography
              variant="h4"
              align="left"
              gutterbottom
              className="header"
            >
              Small Wins Tracker
            </Typography>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos}
            removeTodo = {removeTodo} />
          </Container>
          {/* 
          <Container>
            <Typography variant="h4" align="center" gutterbottom>
              Small Wins Tracker
            </Typography>
          </Container>

          <Container>
            <Typography variant="h5" align="center" gutterbottom>
              What's your win today?
            </Typography>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </FormControl>

            <Typography variant="h5" align="center" gutterbottom>
              Which identity did it strengthen?
            </Typography>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </FormControl>
            <Button color="primary" variant="contained" align="right">
              {" "}
              Add
            </Button>
          </Container>
          <Container>
            <Typography variant="h4" align="left" gutterbottom>
              My Wins Today
            </Typography>
            <Typography variant="body" align="left" paragraph>
              Small Win 1
            </Typography>
          </Container> */}
        </div>
      </main>
    </div>
  );
};

export default App;
