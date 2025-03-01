import React from "react";
import type { Task } from "~/types/Task";

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onUpdate: (task: Task) => void;
}

export function TaskCard({ task, onDelete, onUpdate }: Props) {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  const statusColors = {
    todo: "bg-yellow-100 text-yellow-800",
    inProgress: "bg-blue-100 text-blue-800",
    done: "bg-green-100 text-green-800",
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-4 xl:p-5 hover:shadow-lg transition-shadow border border-gray-200 flex flex-col h-full justify-between">
        <div className="flex flex-col">
          <div className="flex gap-1 justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {task.title}
            </h3>
            <span
              className={`px-3 py-1 whitespace-nowrap rounded-full text-sm ${
                statusColors[task.status]
              }`}
            >
              {task.status === "todo"
                ? "Cần làm"
                : task.status === "inProgress"
                ? "Đang làm"
                : "Hoàn thành"}
            </span>
          </div>

          <p className="text-gray-600 mb-4">{task.description}</p>
          <div className="space-y-1">
            {task.subtasks.map((subtask) => (
              <div key={subtask.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={subtask.completed}
                  onChange={() => {
                    const updatedSubtasks = task.subtasks.map((st) =>
                      st.id === subtask.id
                        ? { ...st, completed: !st.completed }
                        : st
                    );
                    
                    const allCompleted = updatedSubtasks.every((st) => st.completed);
                    const hasCompleted = updatedSubtasks.some((st) => st.completed);
                    const updatedTask = {
                      ...task,
                      subtasks: updatedSubtasks,
                      status: allCompleted ? "done" : hasCompleted ? "inProgress" : "todo",
                    };
                    onUpdate(updatedTask as Task);
                  }}
                  className="h-4 w-4 flex-shrink-0 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">
                  {subtask.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={() => setShowDeleteModal(true)}
            className="cursor-pointer px-6 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Xóa
          </button>
        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full transform transition-all scale-100 animate-fadeIn">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Xác nhận xóa
              </h3>
              <p className="mb-6 text-gray-600">
                Bạn có chắc chắn muốn xóa task này không? Hành động này không thể hoàn tác.
              </p>
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="cursor-pointer flex-1 px-4 py-2.5 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Hủy bỏ
                </button>
                <button
                  onClick={() => {
                    onDelete(task.id);
                    setShowDeleteModal(false);
                  }}
                  className="cursor-pointer flex-1 px-4 py-2.5 text-white font-medium bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Xóa task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
