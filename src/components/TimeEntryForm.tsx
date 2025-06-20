import React, { useState } from "react";
import { TimeEntry } from "../types/types";

type Props = {
  onAdd: (entry: TimeEntry) => void;
};

const TimeEntryForm: React.FC<Props> = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  const [hoursWorked, setHoursWorked] = useState<number>(0);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskName.trim()) {
      setError("Task name is required.");
      return;
    }
    if (hoursWorked <= 0) {
      setError("Hours must be greater than 0.");
      return;
    }
    onAdd({ taskName, hoursWorked });
    setTaskName("");
    setHoursWorked(0);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
          className="border px-2 py-1 w-full"
        />
      </div>
      <div className="mb-2">
        <input
          type="number"
          value={hoursWorked}
          onChange={(e) => setHoursWorked(Number(e.target.value))}
          placeholder="Hours Worked"
          className="border px-2 py-1 w-full"
        />
      </div>
      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
      <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">
        Add Entry
      </button>
    </form>
  );
};

export default TimeEntryForm;