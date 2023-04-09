import "./styles/main.scss";
import React, { useState, useEffect } from "react";
import StateBar from "./components/StateBar";

import ManagementControl from "./components/ManagementControl";
import InputCommand from "./components/InputCommand";
import ActionList from "./components/ActionList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function App() {
  const [health, setHealth] = useState(50);
  const [thirst, setThirst] = useState(50);
  const [hunger, setHunger] = useState(50);
  const [fatigue, setFatigue] = useState(50);
  const [command, setCommand] = useState("");
  const [actionCatalog, setActionCatalog] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "ADD_LIST", payload: actionCatalog });
  }, [actionCatalog]);

  useEffect(() => {
    if (!command.includes(" ")) {
      console.log("ura");
      checkCommand(command);
    } else {
      let i;
      const newCommand = [];

      outer: for (i = 1; i <= command.length; i++) {
        if (command.at(-i) !== " ") {
          newCommand.unshift(command.at(-i));
        } else {
          break outer;
        }
        console.log(newCommand);
        checkCommand(newCommand.join(""));
      }
    }
  }, [command]);

  const handleOnChange = (e) => {
    setCommand(e.target.value);
    console.log(e);
  };
  const checkCommand = (action) => {
    switch (action) {
      case "есть":
        eat();
        break;
      case "пить":
        drink();
        break;
      case "отдохнуть":
        relax();
        break;
      case "работать":
        work();
        break;
    }
  };
  const check = (newState) => {
    if (newState < 0) {
      return 0;
    }
    if (newState > 100) {
      return 100;
    }

    return newState;
  };
  const eat = () => {
    setHunger(check(hunger - 10));
    setHealth(check(health - 2));
    setActionCatalog([...actionCatalog, "Вы съели яблоко"]);
  };
  const drink = () => {
    setThirst(check(thirst - 10));
    setHealth(check(health - 1));
    setActionCatalog([...actionCatalog, "Вы выпили воды"]);
  };
  const relax = () => {
    setHealth(check(health + 10));
    setHunger(check(hunger - 10));
    setFatigue(check(fatigue - 10));
    setActionCatalog([...actionCatalog, "Вы отдохнули"]);
  };
  const work = () => {
    setThirst(check(thirst + 30));
    setHunger(check(hunger + 10));
    setFatigue(check(fatigue + 10));
    setActionCatalog([...actionCatalog, "Вы поработали"]);
  };

  return (
    <div className="App">
      <div className="heading">MiniGame</div>
      <div className="fieldOfPlay">
        <div className="states">
          <StateBar
            title="Здоровье:"
            color="health"
            id="health"
            progress={health}
          ></StateBar>
          <StateBar
            title="Жажда:"
            color="thirst"
            id="thirst"
            progress={thirst}
          ></StateBar>
          <StateBar
            title="Голод:"
            color="hunger"
            id="hunger"
            progress={hunger}
          ></StateBar>
          <StateBar
            title="Усталость:"
            color="fatigue"
            id="fatigue"
            progress={fatigue}
          ></StateBar>
        </div>
        <div className="controls">
          <ManagementControl
            designation="Есть"
            color="eat"
            onClick={eat}
          ></ManagementControl>

          <ManagementControl
            designation="Пить"
            color="drink"
            onClick={drink}
          ></ManagementControl>
          <ManagementControl
            designation="Отдохнуть"
            color="relax"
            onClick={relax}
          ></ManagementControl>
          <ManagementControl
            designation="Работать"
            color="work"
            onClick={work}
          ></ManagementControl>
        </div>
        <InputCommand
          clue="Insert your command..."
          onChange={handleOnChange}
        ></InputCommand>
      </div>
      <ActionList actionCommand={actionCatalog}></ActionList>
      <Link to="/history">История</Link>
    </div>
  );
}

export default App;
