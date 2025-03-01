import { useState } from 'react';
import { sampleTasks } from '~/data/sampleTasks';
import type { Task } from '~/types/Task';
import { TaskList } from './TaskList';
import { TaskFilter } from './TaskFilter';
import { TaskForm } from './TaskForm';

export function Exercise1() {
  const [tasks, setTasks] = useState<Task[]>(sampleTasks);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
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
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
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
      
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onUpdate={updateTask}
      />

      {isFormOpen && (
        <TaskForm
          onSubmit={addTask}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}
