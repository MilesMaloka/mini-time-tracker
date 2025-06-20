import React, { useState } from "react";
import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntryList from "./components/TimeEntryList";
import TotalHours from "./components/TotalHours";
import { TimeEntry } from "./types/types";

function App() {
  const [entries, setEntries] = useState<TimeEntry[]>([]);

  const addEntry = (entry: TimeEntry) => {
    setEntries([...entries, entry]);
  };

  const deleteEntry = (index: number) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mini Time Tracker</h1>
      <TimeEntryForm onAdd={addEntry} />
      <TimeEntryList entries={entries} onDelete={deleteEntry} />
      <TotalHours entries={entries} />
    </div>
  );
}

export default App;
