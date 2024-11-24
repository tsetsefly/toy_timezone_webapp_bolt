import React from 'react';
import { Globe } from 'lucide-react';

interface TimezoneSelectorProps {
  availableTimezones: string[];
  selectedTimezones: string[];
  onToggleTimezone: (timezone: string) => void;
}

export function TimezoneSelector({
  availableTimezones,
  selectedTimezones,
  onToggleTimezone,
}: TimezoneSelectorProps) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredTimezones = availableTimezones.filter((timezone) =>
    timezone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
      <div className="flex items-center space-x-3 mb-4">
        <Globe className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-800">Select Timezones</h2>
      </div>
      <input
        type="text"
        placeholder="Search timezones..."
        className="w-full px-4 py-2 rounded-lg border border-gray-200 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="max-h-96 overflow-y-auto space-y-2">
        {filteredTimezones.map((timezone) => (
          <label
            key={timezone}
            className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedTimezones.includes(timezone)}
              onChange={() => onToggleTimezone(timezone)}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-700">{timezone.replace('/', ' / ')}</span>
          </label>
        ))}
      </div>
    </div>
  );
}