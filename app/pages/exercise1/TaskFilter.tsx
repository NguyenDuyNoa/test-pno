interface Props {
  onFilterChange: (status: string) => void;
  onSearchChange: (query: string) => void;
  currentFilter: string;
  searchQuery: string;
}

export function TaskFilter({
  onFilterChange,
  onSearchChange,
  currentFilter,
  searchQuery,
}: Props) {
  const handleButtonScroll = (button: HTMLButtonElement) => {
    const container = button.parentElement;
    if (container) {
      const scrollLeft =
        button.offsetLeft - (container.offsetWidth - button.offsetWidth) / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 xl:gap-6 mb-6 xl:mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Tìm kiếm công việc..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="text-gray-900 w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl 
                     focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500
                     transition-all duration-200 bg-gray-50 hover:bg-white shadow-sm
                     hover:shadow-md"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {["all", "todo", "inProgress", "done"].map((status) => (
          <button
            key={status}
            onClick={(e) => {
              onFilterChange(status);
              handleButtonScroll(e.currentTarget);
            }}
            className={`cursor-pointer px-3 py-2 xl:px-5 xl:py-3 rounded-xl font-medium whitespace-nowrap
                       transition-all duration-300 transform 
                       ${
                         currentFilter === status
                           ? "bg-indigo-600 text-white shadow-md hover:bg-indigo-700"
                           : "bg-gray-50 text-gray-700 hover:bg-gray-200 border border-gray-200"
                       }`}
          >
            {status === "all"
              ? "Tất cả"
              : status === "todo"
              ? "Cần làm"
              : status === "inProgress"
              ? "Đang làm"
              : "Hoàn thành"}
          </button>
        ))}
      </div>
    </div>
  );
}
