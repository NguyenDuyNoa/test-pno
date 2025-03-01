import { useState } from 'react';
import { sampleTasks } from '~/data/sampleTasks';
import type { Task } from '~/types/Task';
import { TaskFilter } from './TaskFilter';
import { TaskForm } from './TaskForm';
import { TaskCard } from './TaskCard';

export function Exercise1() {
  const [tasks, setTasks] = useState<Task[]>(sampleTasks);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addTask = (newTask: Task) => {
    setTasks([newTask, ...tasks]);
    setIsFormOpen(false);
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row gap-4 xl:gap-6 justify-between items-center mb-6 xl:mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Quản Lý Công Việc</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors cursor-pointer"
        >
          Thêm Công Việc
        </button>
      </div>
      
      <TaskFilter
        onFilterChange={setFilterStatus}
        onSearchChange={setSearchQuery}
        currentFilter={filterStatus}
        searchQuery={searchQuery}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 mt-6">
        {filteredTasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
        ))}
      </div>

      {isFormOpen && (
        <TaskForm
          onSubmit={addTask}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}
