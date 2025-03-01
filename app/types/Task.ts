// Định nghĩa interface cho một subtask (công việc con)
interface SubTask {
  id: string;
  title: string;
  completed: boolean;
}

// Định nghĩa các trạng thái có thể có của task
type TaskStatus = 'todo' | 'inProgress' | 'done';

// Interface chính cho Task
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  subtasks: SubTask[];
  createdAt: Date;
} 

// Định nghĩa interface cho một subtask (công việc con)
interface SubTask {
  id: string;
  title: string;
  completed: boolean;
}

// Interface chính cho Task
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  subtasks: SubTask[];
  createdAt: Date;
}