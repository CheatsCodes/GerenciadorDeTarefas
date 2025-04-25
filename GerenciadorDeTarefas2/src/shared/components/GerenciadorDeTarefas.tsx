import { useEffect, useState } from "react";

export interface List {
  id: number;
  date: Date;
  startTime: string;
  finalTime: string;
  title: string;
  description: string;
  color: string;
}

interface ListProps {
  list: Array<List>;
}
function sortList(firstDate: List, lastDate: List) {
  if (firstDate.date.getTime() < lastDate.date.getTime()) return -1;
  if (firstDate.date.getTime() > lastDate.date.getTime()) return 1;
  return 0;
}

function compareDate(lastDate: Date, currentDate: Date): boolean {
  let yearCondition: boolean =
    lastDate.getFullYear() == currentDate.getFullYear();
  let monthCondition: boolean = lastDate.getMonth() == currentDate.getMonth();
  let dayCondition: boolean = lastDate.getDate() == currentDate.getDate();

  if (yearCondition && monthCondition && dayCondition) {
    return true;
  }

  return false;
}

function createGerenciadorDeTarefas(list: Array<List>): Array<Array<List>> {
  let newArray: Array<Array<List>> = [];
  let tempArray: Array<List> = [];

  list.forEach((element, index) => {
    if (index !== 0) {
      let checkDate = compareDate(list[index - 1].date, list[index].date);

      if (checkDate) {
        tempArray.push(element);
      } else {
        newArray.push(tempArray);
        tempArray = [];
        tempArray.push(element);
      }
    } else {
      tempArray.push(element);
    }

    if (index == list.length - 1) {
      newArray.push(tempArray);
    }
  });

  return newArray;
}

function GerenciadorDeTarefas(props: ListProps) {
  const { list } = props;

  const [GerenciadorDeTarefas, setGerenciadorDeTarefas] = useState(
    Array<Array<List>>
  );

  useEffect(() => {
    let sortedList = list.sort(sortList);

    setGerenciadorDeTarefas(createGerenciadorDeTarefas(sortedList));
  }, []);

  return <div>{JSON.stringify(GerenciadorDeTarefas)}</div>;
}

export default GerenciadorDeTarefas;
