import React from 'react';
import { TimeCard } from './components/TimeCard';
import { TimezoneSelector } from './components/TimezoneSelector';
import { Clock } from 'lucide-react';

// Common timezone list
const COMMON_TIMEZONES = [
  'America/New_York',
  'America/Los_Angeles',
  'America/Chicago',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tokyo',
  'Asia/Dubai',
  'Asia/Singapore',
  'Australia/Sydney',
  'Pacific/Auckland',
];

function App() {
  const [selectedTimezones, setSelectedTimezones] = React.useState<string[]>([]);

  const handleToggleTimezone = (timezone: string) => {
    setSelectedTimezones((prev) =>
      prev.includes(timezone)
        ? prev.filter((t) => t !== timezone)
        : [...prev, timezone]
    );
  };

  const handleRemoveTimezone = (timezone: string) => {
    setSelectedTimezones((prev) => prev.filter((t) => t !== timezone));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Clock className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">World Time Viewer</h1>
          </div>
          <p className="text-gray-600">Select timezones to view their current time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Timezone Selector */}
          <div className="lg:col-span-1">
            <TimezoneSelector
              availableTimezones={COMMON_TIMEZONES}
              selectedTimezones={selectedTimezones}
              onToggleTimezone={handleToggleTimezone}
            />
          </div>

          {/* Time Cards */}
          <div className="lg:col-span-2">
            {selectedTimezones.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">
                  Select timezones from the list to view their current time
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedTimezones.map((timezone) => (
                  <TimeCard
                    key={timezone}
                    timezone={timezone}
                    onRemove={handleRemoveTimezone}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;