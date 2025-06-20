import React from "react";
import { TimeEntry } from "../types/types";

type Props = {
  entries: TimeEntry[];
  onDelete: (index: number) => void;
};

const TimeEntryList: React.FC<Props> = ({ entries, onDelete }) => {
  return (
    <ul className="mb-4">
      {entries.map((entry, index) => (
        <li key={index} className="flex justify-between items-center border-b py-2">
          <div>
            <strong>{entry.taskName}</strong> - {entry.hoursWorked} hours
          </div>
          <button
            onClick={() => onDelete(index)}
            className="text-red-500 hover:underline text-sm"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TimeEntryList;