import { useReducer, useRef, useState } from "react"

function HookUseReducer() {
    const inputRef = useRef<HTMLInputElement>(null); // Referência para o input

    // 3 useReducer
    const [number, dispatch] = useReducer(() : number => {
        return Math.random();
    }, 0);

    // 4 avancando em user reducer
    const [taskText, setTaskText] = useState<string>('');

    interface ITask {
        id: number,
        text: string
    }
    const inicitalTask: ITask[] = [
        {id: 1, text: "fazer uma coisa"},
        {id: 2, text: "fazer outra coisa"}
    ];    
    
    function taskReducer (state: ITask[], action: {type: string, id?: number}) {
        switch (action.type) {
            case 'add':
                if (taskText === '') return state;    
                
                const newId = 1 + state.reduce((max, task) => task.id > max ? task.id : max //first param
                                    , 0); //second param, inform that max starts at 0
                const newTask: ITask = {
                    id: newId,
                    text: taskText
                }
                setTaskText('');
                return [...state, newTask]
            case 'delete':
                
                return state.filter(task => task.id !== action.id);                
            default:
                return state;
        }
    }
    const [task, dispatchTasks] = useReducer(taskReducer, inicitalTask);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatchTasks({type: "add"});
        //! para fazer o foco voltar a imput
        if (inputRef.current) {
            inputRef.current.focus();
        }  
    };

    const handleDelete = (id: number) => {
        dispatchTasks({type: "delete", id});
    }

    return (
    <div>
        <h2>UseHeduces</h2>
        <p>Numero: {number}</p>
        <button onClick={dispatch}>Alterar Numero</button>
        <h3>Tarefas</h3>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={taskText}
                ref={inputRef /* para fazer o foco voltar a imput*/} 
                onChange={(e) => setTaskText(e.target.value)}
            />
            <input type="submit" value="enviar"/>
        </form>
        {
            task.map(task => (
                <li 
                    key={task.id}
                    onDoubleClick={() => handleDelete(task.id)}
                >{task.text}</li>
            ))
        }
        <hr />
    </div>
  )
}
export default HookUseReducer