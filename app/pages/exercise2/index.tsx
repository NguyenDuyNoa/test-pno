import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';
import { ArrowTrendingUpIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { employeeData, revenueData } from '~/data/dashboardData';

const topEmployees = [
  { name: "Nguyễn Văn A", role: "Senior Dev", performance: "98%" },
  { name: "Trần Thị B", role: "Project Manager", performance: "95%" },
  { name: "Lê Văn C", role: "Designer", performance: "92%" },
];

const projects = [
  { name: "Dự án X", progress: 75, color: "bg-blue-500" },
  { name: "Dự án Y", progress: 45, color: "bg-purple-500" },
  { name: "Dự án Z", progress: 90, color: "bg-green-500" },
];

const notifications = [
  { title: "Họp team định kỳ", time: "09:00 AM", date: "Hôm nay" },
  { title: "Deadline dự án X", time: "05:00 PM", date: "Ngày mai" },
  { title: "Review code", time: "02:00 PM", date: "03/03/2025" },
];

const kpiMetrics = [
  { label: "Hiệu suất", value: 92, color: "text-green-500" },
  { label: "Chất lượng", value: 88, color: "text-blue-500" },
  { label: "Đúng hạn", value: 95, color: "text-purple-500" },
];

const StatCard = ({ title, value, icon, color }: { title: string; value: string; icon: React.ReactNode; color: string }) => (
  <div className={`bg-white border rounded-2xl p-4 xl:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${color}`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold mt-2 text-gray-900">{value}</p>
      </div>
      <div className={`${color} w-12 h-12 rounded-full flex items-center justify-center`}>
        {icon}
      </div>
    </div>
  </div>
);

export function Exercise2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto">
        <h1 className="text-3xl xl:text-4xl font-bold text-gray-900 pb-6 xl:pb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Công ty A - Dashboard
          </span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6 pb-6 xl:pb-8">
          <StatCard
            title="Tổng doanh thu 2024"
            value="3.48M USD"
            icon={<CurrencyDollarIcon className="w-8 h-8" />}
            color="text-blue-500"
          />
          <StatCard
            title="Tổng nhân viên"
            value="126"
            icon={<UserGroupIcon className="w-8 h-8" />}
            color="text-green-500"
          />
          <StatCard
            title="Tăng trưởng"
            value="+10.1%"
            icon={<ArrowTrendingUpIcon className="w-8 h-8" />}
            color="text-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 mb-6">
          <div className="border border-gray-200 bg-white p-4 xl:p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Top Nhân viên</h3>
            <div className="mt-4 space-y-3">
              {topEmployees.map((employee, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{employee.name}</p>
                    <p className="text-sm text-gray-500">{employee.role}</p>
                  </div>
                  <span className="text-green-500 font-semibold">{employee.performance}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 bg-white p-4 xl:p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Dự án đang thực hiện</h3>
            <div className="mt-4 space-y-3">
              {projects.map((project, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-900">{project.name}</span>
                    <span className="text-gray-500">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`${project.color} h-2 rounded-full`} style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 bg-white p-4 xl:p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Thông báo gần đây</h3>
            <div className="mt-4 space-y-3">
              {notifications.map((notice, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div>
                    <p className="font-medium text-gray-900">{notice.title}</p>
                    <p className="text-sm text-gray-500">{notice.time} - {notice.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 bg-white p-4 xl:p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Chỉ số KPI</h3>
            <div className="mt-4 space-y-4">
              {kpiMetrics.map((kpi, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600">{kpi.label}</span>
                  <span className={`font-bold ${kpi.color}`}>{kpi.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-6">
          <div className="bg-white border border-gray-200 backdrop-blur-sm bg-opacity-90 p-4 xl:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold mb-2 xl:mb-6 text-gray-900">Doanh thu qua các năm</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="year" />
                <YAxis 
                  tickFormatter={(value) => `${value/1000000}M`}
                />
                <Tooltip 
                  cursor={false}
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    color: '#000'
                  }}
                  formatter={(value: number) => [`${(value/1000000).toFixed(2)}M USD`, 'Doanh thu']}
                />
                <Bar dataKey="revenue" fill="url(#colorRevenue)" />
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border border-gray-200 backdrop-blur-sm bg-opacity-90 p-4 xl:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold mb-2 xl:mb-6 text-gray-900">Số lượng nhân viên</h2>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={employeeData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    color: '#000'
                  }}
                  formatter={(value: number) => [`${value} nhân viên`]}
                />
                <Area 
                  type="monotone" 
                  dataKey="employees" 
                  fill="url(#colorEmployees)" 
                  stroke="#059669"
                />
                <defs>
                  <linearGradient id="colorEmployees" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
