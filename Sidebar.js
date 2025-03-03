import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (option) => {
    setSelectedFilters((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } min-h-screen bg-gray-900 text-white p-4 transition-all duration-300 ease-in-out`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-5 right-[-16px] bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700"
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>

        {isOpen && (
          <>
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="space-y-2">
              {filters.map((filter) => (
                <label key={filter} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(filter)}
                    onChange={() => handleCheckboxChange(filter)}
                    className="w-5 h-5 text-blue-500 accent-blue-600"
                  />
                  <span>{filter}</span>
                </label>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        <p className="mt-2 text-gray-600">Selected Filters: {selectedFilters.join(", ") || "None"}</p>
      </div>
    </div>
  );
}
