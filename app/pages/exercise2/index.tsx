import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';
import { ArrowTrendingUpIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

// Dữ liệu doanh thu 5 năm
const revenueData = [
  { year: 2020, revenue: 2580000 },
  { year: 2021, revenue: 3150000 },
  { year: 2022, revenue: 3720000 },
  { year: 2023, revenue: 2850000 },
  { year: 2024, revenue: 3480000 },
];

// Dữ liệu nhân viên 24 tháng (từ T3/2023 đến T2/2025)
const employeeData = [
  { month: "T3/2023", employees: 115 },
  { month: "T4/2023", employees: 112 },
  { month: "T5/2023", employees: 108 },
  { month: "T6/2023", employees: 102 },
  { month: "T7/2023", employees: 95 },
  { month: "T8/2023", employees: 92 },
  { month: "T9/2023", employees: 88 },
  { month: "T10/2023", employees: 85 },
  { month: "T11/2023", employees: 85 },
  { month: "T12/2023", employees: 88 },
  { month: "T1/2024", employees: 90 },
  { month: "T2/2024", employees: 92 },
  { month: "T3/2024", employees: 95 },
  { month: "T4/2024", employees: 98 },
  { month: "T5/2024", employees: 102 },
  { month: "T6/2024", employees: 105 },
  { month: "T7/2024", employees: 108 },
  { month: "T8/2024", employees: 112 },
  { month: "T9/2024", employees: 115 },
  { month: "T10/2024", employees: 118 },
  { month: "T11/2024", employees: 122 },
  { month: "T12/2024", employees: 125 },
  { month: "T1/2025", employees: 124 },
  { month: "T2/2025", employees: 126 }
];

const StatCard = ({ title, value, icon, color }: { title: string; value: string; icon: React.ReactNode; color: string }) => (
  <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${color}`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold mt-2 text-gray-900">{value}</p>
      </div>
      <div className={`${color.replace('border', 'text')} w-12 h-12 bg-opacity-10 rounded-full p-2 ${color.replace('border', 'bg')}`}>
        {icon}
      </div>
    </div>
  </div>
);

export function Exercise2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 pb-6 xl:pb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Công ty A - Dashboard
          </span>
        </h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6 pb-6 xl:pb-8">
          <StatCard
            title="Tổng doanh thu 2024"
            value="3.48M USD"
            icon={<CurrencyDollarIcon />}
            color="border-blue-500"
          />
          <StatCard
            title="Tổng nhân viên"
            value="126"
            icon={<UserGroupIcon />}
            color="border-green-500"
          />
          <StatCard
            title="Tăng trưởng"
            value="+22.1%"
            icon={<ArrowTrendingUpIcon />}
            color="border-purple-500"
          />
        </div>

        {/* New Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 mb-6 xl:mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Top Nhân viên</h3>
            <div className="mt-4 space-y-3">
              {[
                { name: "Nguyễn Văn A", role: "Senior Dev", performance: "98%" },
                { name: "Trần Thị B", role: "Project Manager", performance: "95%" },
                { name: "Lê Văn C", role: "Designer", performance: "92%" },
              ].map((employee, index) => (
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

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Dự án đang thực hiện</h3>
            <div className="mt-4 space-y-3">
              {[
                { name: "Dự án X", progress: 75, color: "bg-blue-500" },
                { name: "Dự án Y", progress: 45, color: "bg-purple-500" },
                { name: "Dự án Z", progress: 90, color: "bg-green-500" },
              ].map((project, index) => (
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

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Thông báo gần đây</h3>
            <div className="mt-4 space-y-3">
              {[
                { title: "Họp team định kỳ", time: "09:00 AM", date: "Hôm nay" },
                { title: "Deadline dự án X", time: "05:00 PM", date: "Ngày mai" },
                { title: "Review code sprint", time: "02:00 PM", date: "20/04/2024" },
              ].map((notice, index) => (
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

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Chỉ số KPI</h3>
            <div className="mt-4 space-y-4">
              {[
                { label: "Hiệu suất", value: 92, color: "text-green-500" },
                { label: "Chất lượng", value: 88, color: "text-blue-500" },
                { label: "Đúng hạn", value: 95, color: "text-purple-500" },
              ].map((kpi, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600">{kpi.label}</span>
                  <span className={`font-bold ${kpi.color}`}>{kpi.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Chart */}
          <div className="bg-white backdrop-blur-sm bg-opacity-90 p-4 xl:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold mb-2 xl:mb-6 text-gray-900">Doanh thu qua các năm</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="year" />
                <YAxis 
                  tickFormatter={(value) => `${value/1000000}M`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '8px',
                    border: 'none',
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

          {/* Employee Chart */}
          <div className="bg-white backdrop-blur-sm bg-opacity-90 p-4 xl:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
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
