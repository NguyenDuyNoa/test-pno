import React from 'react';
import type { Task } from '~/types/Task';
import { TaskCard } from './TaskCard';

interface Props {
  tasks: Task[];
  onDelete: (id: string) => void;
  onUpdate: (task: Task) => void;
}

export function TaskList({ tasks, onDelete, onUpdate }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 mt-6">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
} 