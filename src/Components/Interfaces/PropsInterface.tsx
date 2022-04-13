import { addableTask } from "./Interface";

export interface Props{
    task : addableTask,
    completeTask(taskToBeDeleted : string) : void
}