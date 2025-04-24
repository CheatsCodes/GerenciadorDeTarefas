import { List } from "./shared/components/GerenciadorDeTarefas";
import GerenciadorDeTarefas from "./shared/components/GerenciadorDeTarefas";
import "./App.css";
const mock: Array<List> = [
  {
    id: 0,
    date: new Date("2025-01-20T08:30:00"),
    startTime: "08:30",
    finalTime: "09:30",
    title: "Marketing",
    description: "3 categories of rocks",
    color: "orange",
  },
  {
    id: 1,
    date: new Date("2025-01-19T09:30:00"),
    startTime: "09:30",
    finalTime: "11:45",
    title: "Strategy Planning",
    description: "Lauch day Bestbuy",
    color: "purple",
  },
  {
    id: 2,
    date: new Date("2025-01-20T11:00:00"),
    startTime: "11:00",
    finalTime: "12:15",
    title: "Discovery",
    description: "Financian project",
    color: "red",
  },
  {
    id: 3,
    date: new Date("2025-01-19T14:30:00"),
    startTime: "14:30",
    finalTime: "16:20",
    title: "Developing",
    description: "Setup Github repository",
    color: "blue",
  },
];

function App() {
  return <GerenciadorDeTarefas list={mock}></GerenciadorDeTarefas>;
}

export default App;
