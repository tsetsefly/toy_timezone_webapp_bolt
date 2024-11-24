import React from 'react';
import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { Clock } from 'lucide-react';

interface TimeCardProps {
  timezone: string;
  onRemove: (timezone: string) => void;
}

export function TimeCard({ timezone, onRemove }: TimeCardProps) {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = formatInTimeZone(time, timezone, 'HH:mm:ss');
  const formattedDate = formatInTimeZone(time, timezone, 'EEEE, MMMM d, yyyy');
  const cityName = timezone.split('/')[1].replace(/_/g, ' ');

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <Clock className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-800">{cityName}</h2>
        </div>
        <button
          onClick={() => onRemove(timezone)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          ×
        </button>
      </div>
      <div className="space-y-1">
        <p className="text-3xl font-bold text-gray-900">{formattedTime}</p>
        <p className="text-sm text-gray-500">{formattedDate}</p>
        <p className="text-xs text-gray-400">{timezone}</p>
      </div>
    </div>
  );
}