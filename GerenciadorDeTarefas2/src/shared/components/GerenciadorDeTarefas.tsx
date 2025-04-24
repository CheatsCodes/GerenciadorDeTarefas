import { useEffect } from "react";

export interface List {
    id: number;
    date: Date;
    startTime: string;
    finalTime: string;
    title: string;
    description: string;
    color: string
  }

interface ListProps {
    list: Array<List>
}
function sortList(firstDate: List, lastDate: List){
    if (firstDate.date.getTime() < lastDate.date.getTime())
        return -1;
    if (firstDate.date.getTime() > lastDate.date.getTime())
        return 1;
    return 0;
    
}

function GerenciadorDeTarefas(props: ListProps) {
    const { list } = props;

    useEffect(() => {
        let sortedList =list.sort(sortList)

        console.log(sortedList);
    }, [])


    return(
        <div>{JSON.stringify(list)}</div>
    )
}

export default GerenciadorDeTarefas