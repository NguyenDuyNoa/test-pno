import React from 'react';
import type { Task } from '~/types/Task';
import { TextField, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useFormik, FieldArray } from 'formik';
import * as Yup from 'yup';

interface Props {
  onSubmit: (task: Task) => void;
  onClose: () => void;
}

// Schema validation
const TaskSchema = Yup.object().shape({
  title: Yup.string()
    .required('Tiêu đề không được để trống')
    .min(3, 'Tiêu đề phải có ít nhất 3 ký tự'),
  description: Yup.string()
    .required('Mô tả không được để trống')
    .min(10, 'Mô tả phải có ít nhất 10 ký tự'),
  subtasks: Yup.array().of(
    Yup.string().required('Công việc con không được để trống')
  )
});

export function TaskForm({ onSubmit, onClose }: Props) {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      subtasks: ['']
    },
    validationSchema: TaskSchema,
    onSubmit: (values) => {
      const newTask: Task = {
        id: Date.now().toString(),
        title: values.title,
        description: values.description,
        status: 'todo',
        subtasks: values.subtasks.filter(st => st.trim()).map(st => ({
          id: Date.now().toString() + Math.random(),
          title: st,
          completed: false
        })),
        createdAt: new Date()
      };
      onSubmit(newTask);
    }
  });

  const handleAddSubtask = () => {
    formik.setFieldValue('subtasks', [...formik.values.subtasks, '']);
  };

  const handleRemoveSubtask = (index: number) => {
    const newSubtasks = [...formik.values.subtasks];
    newSubtasks.splice(index, 1);
    formik.setFieldValue('subtasks', newSubtasks);
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-white/95 rounded-2xl p-8 max-w-lg w-full shadow-[0_0_50px_0_rgba(0,0,0,0.1)] transform transition-all">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
          <span className="bg-blue-500 w-2 h-8 rounded-full block"></span>
          Thêm Công Việc Mới
        </h2>
        
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
          <div className="relative">
            <label htmlFor="title" className="block text-base font-medium text-gray-700 mb-2">
              Tiêu đề công việc
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Nhập tiêu đề công việc"
              className={`w-full text-gray-900 px-4 py-3 bg-slate-50 border rounded-xl outline-none transition-all
                ${formik.touched.title && formik.errors.title 
                  ? 'border-red-400 focus:border-red-500' 
                  : 'border-slate-200 hover:border-slate-300 focus:border-blue-500'}`}
            />
            {formik.touched.title && formik.errors.title && (
              <p className="absolute -bottom-5 left-0 text-sm text-red-500">{formik.errors.title}</p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="description" className="block text-base font-medium text-gray-700 mb-2">
              Mô tả công việc
            </label>
            <textarea
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Nhập mô tả công việc"
              rows={4}
              className={`text-gray-900 w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none transition-all resize-none
                ${formik.touched.description && formik.errors.description 
                  ? 'border-red-400 focus:border-red-500' 
                  : 'border-slate-200 hover:border-slate-300 focus:border-blue-500'}`}
            />
            {formik.touched.description && formik.errors.description && (
              <p className="absolute -bottom-5 left-0 text-sm text-red-500">{formik.errors.description}</p>
            )}
          </div>

          <div className="space-y-4">
            <label className="block text-base font-medium text-gray-700 mb-3">Công việc con</label>
            <div>
              {formik.values.subtasks.map((subtask, index) => (
                <div key={index} className="flex items-center gap-3 group mb-4">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      name={`subtasks.${index}`}
                      value={subtask}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Nhập công việc con"
                      className={`w-full text-gray-900 px-4 py-2 bg-slate-50 border rounded-lg outline-none transition-all
                        ${(formik.touched.subtasks as any)?.[index] && (formik.errors.subtasks as any)?.[index]
                          ? 'border-red-400 focus:border-red-500' 
                          : 'border-slate-200 hover:border-slate-300 focus:border-blue-500'}`}
                    />
                    {(formik.touched.subtasks as any)?.[index] && (formik.errors.subtasks as any)?.[index] && (
                      <p className="absolute -bottom-5 left-0 text-sm text-red-500">
                        {(formik.errors.subtasks as any)[index]}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleAddSubtask}
                    className="cursor-pointer p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer px-7 py-2.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="cursor-pointer px-7 py-2.5 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all shadow-[0_4px_6px_-1px_rgb(59_130_246_/_0.3)] disabled:opacity-50"
            >
              Thêm công việc
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 