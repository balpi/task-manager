import type { Task } from "./Task";

export interface Board {
  id: string;
  name: string;
  tasks: Task[];
}
