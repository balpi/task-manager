export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: string;
  name: string;
  boardName: string;
  content: string;
  boardId: string;
  status: TaskStatus;
  createdAt: Date;
}
