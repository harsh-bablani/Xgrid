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
    <div className="flex justify-center w-full">
      <label className="relative w-full max-w-[560px] sm:max-w-[640px] block">
        <span className="sr-only">Search articles</span>
        <Search
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#98A2B3]"
          strokeWidth={1.75}
        />
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-[52px] sm:h-[56px] pl-[52px] pr-6 rounded-full bg-white font-sans text-[14px] sm:text-[15px] text-[#344054] placeholder:text-[#98A2B3] border border-[#EAECF0] shadow-[0_8px_30px_rgba(16,24,40,0.06)] outline-none focus:ring-2 focus:ring-[#FF641F]/20 focus:border-[#FF641F]/40"
        />
      </label>
    </div>
  );
}
