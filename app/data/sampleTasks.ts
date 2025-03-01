import type { Task } from "~/types/Task";

export const sampleTasks: Task[] = [
    {
      id: '1',
      title: 'Thiết lập dự án React cơ bản',
      description: 'Khởi tạo và cấu hình project với các công nghệ cần thiết',
      status: 'done',
      subtasks: [
        {
          id: '1-1',
          title: 'Tạo project với Create React App',
          completed: true
        },
        {
          id: '1-2', 
          title: 'Cài đặt các thư viện cần thiết (TypeScript, TailwindCSS)',
          completed: true
        },
        {
          id: '1-3',
          title: 'Thiết lập cấu trúc thư mục',
          completed: true
        }
      ],
      createdAt: new Date('2024-03-08')
    },
    {
      id: '2', 
      title: 'Xây dựng giao diện quản lý task',
      description: 'Phát triển các component UI chính cho ứng dụng',
      status: 'inProgress',
      subtasks: [
        {
          id: '2-1',
          title: 'Tạo component TaskList hiển thị danh sách task',
          completed: true
        },
        {
          id: '2-2',
          title: 'Tạo form thêm/sửa task',
          completed: false
        },
        {
          id: '2-3',
          title: 'Thêm tính năng kéo thả task giữa các trạng thái',
          completed: false
        }
      ],
      createdAt: new Date('2024-03-09')
    },
    {
      id: '3',
      title: 'Tích hợp quản lý state',
      description: 'Implement state management để xử lý dữ liệu task',
      status: 'todo',
      subtasks: [
        {
          id: '3-1',
          title: 'Cài đặt Redux Toolkit',
          completed: false
        },
        {
          id: '3-2',
          title: 'Tạo các slice cho task management',
          completed: false
        },
        {
          id: '3-3',
          title: 'Thêm các action và reducer cần thiết',
          completed: false
        }
      ],
      createdAt: new Date('2024-03-10')
    },
    {
      id: '4',
      title: 'Tối ưu hiệu năng ứng dụng',
      description: 'Thực hiện các biện pháp tối ưu để cải thiện performance',
      status: 'todo',
      subtasks: [
        {
          id: '4-1',
          title: 'Phân tích và đo lường hiệu năng hiện tại',
          completed: false
        },
        {
          id: '4-2',
          title: 'Tối ưu hóa render với React.memo và useMemo',
          completed: false
        },
        {
          id: '4-3',
          title: 'Implement code splitting và lazy loading',
          completed: false
        }
      ],
      createdAt: new Date('2024-03-11')
    },
    {
      id: '5',
      title: 'Thêm tính năng authentication',
      description: 'Triển khai hệ thống xác thực người dùng',
      status: 'todo',
      subtasks: [
        {
          id: '5-1',
          title: 'Tích hợp Firebase Authentication',
          completed: false
        },
        {
          id: '5-2',
          title: 'Tạo các trang đăng nhập/đăng ký',
          completed: false
        },
        {
          id: '5-3',
          title: 'Thêm route protection',
          completed: false
        }
      ],
      createdAt: new Date('2024-03-12')
    },
    {
      id: '6',
      title: 'Triển khai testing',
      description: 'Viết test để đảm bảo chất lượng code',
      status: 'todo',
      subtasks: [
        {
          id: '6-1',
          title: 'Viết unit test cho các component',
          completed: false
        },
        {
          id: '6-2',
          title: 'Thêm integration test',
          completed: false
        },
        {
          id: '6-3',
          title: 'Cấu hình CI/CD pipeline',
          completed: false
        }
      ],
      createdAt: new Date('2024-03-13')
    },
    {
      id: '7',
      title: 'Tích hợp API Backend',
      description: 'Kết nối ứng dụng với REST API',
      status: 'todo',
      subtasks: [
        {
          id: '7-1',
          title: 'Cài đặt Axios và setup API client',
          completed: false
        },
        {
          id: '7-2',
          title: 'Implement các API endpoint',
          completed: false
        },
        {
          id: '7-3',
          title: 'Xử lý loading và error states',
          completed: false
        }
      ],
      createdAt: new Date('2024-03-14')
    },
    {
      id: '8',
      title: 'Thêm tính năng notification',
      description: 'Triển khai hệ thống thông báo realtime',
      status: 'todo',
      subtasks: [
        {
          id: '8-1',
          title: 'Tích hợp WebSocket',
          completed: false
        },
        {
          id: '8-2',
          title: 'Tạo component hiển thị notification',
          completed: false
        },
        {
          id: '8-3',
          title: 'Xử lý các loại thông báo khác nhau',
          completed: false
        }
      ],
      createdAt: new Date('2024-03-15')
    },
    {
      id: '9',
      title: 'Nâng cao UI/UX',
      description: 'Cải thiện trải nghiệm người dùng',
      status: 'todo',
      subtasks: [
        {
          id: '9-1',
          title: 'Thêm animations và transitions',
          completed: false
        },
        {
          id: '9-2',
          title: 'Tối ưu responsive design',
          completed: false
        },
        {
          id: '9-3',
          title: 'Cải thiện accessibility',
          completed: false
        }
      ],
      createdAt: new Date('2024-03-16')
    }
  ];