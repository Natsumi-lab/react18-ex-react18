import { memo, useDeferredValue } from "react";
import { Task } from "./Transition";

type Props = {
    taskList: Task[];
};

export const TaskList = memo(({ taskList }: Props) => {
    const deferredTaskList = useDeferredValue(taskList);

    return (
        <>
            {deferredTaskList.map((task) => (
                <div key={task.id} style={{ width: '300px', margin: 'auto', background: 'lavender'}}>
                    <p>タイトル:{task.title}</p>
                    <p>担当:{task.assignee}</p>
                </div>
            ))}
        </>
    );
});