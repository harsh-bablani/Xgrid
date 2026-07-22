import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search articles, guides, and resources...',
}: SearchBarProps) {
  return (
    <div className="flex justify-center">
      <div className="relative w-[95%] sm:w-[90%] max-w-[700px]">
        <div className="flex items-center h-16 w-full bg-white rounded-2xl shadow-lg px-5">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full h-full ml-3 bg-transparent border-none outline-none ring-0 focus:ring-0 focus:outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

