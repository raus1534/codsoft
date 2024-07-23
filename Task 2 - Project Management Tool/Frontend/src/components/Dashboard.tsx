import { getOngoingTask } from "@api/task";
import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import { useNotification } from "@hooks/index";

export default function Dashboard() {
  const [tasks, setTasks] = useState<any[]>([]);
  const { updateNotification } = useNotification();

  const getOngoing = async () => {
    const { tasks, error } = await getOngoingTask();
    if (error) return updateNotification("error", error);
    setTasks([...tasks]);
  };

  useEffect(() => {
    getOngoing();
  }, []);

  return (
    <div className="p-2 -space-y-4">
      <div>
        <div className="flex flex-col justify-between px-3">
          <h1 className="text-3xl font-bold">Ongoing Tasks</h1>
          <div className="flex flex-wrap space-x-3">
            {tasks.map(({ title, description, assignedTo, dueDate }) => {
              return (
                <TaskCard
                  title={title}
                  description={description}
                  users={assignedTo}
                  dueDate={dueDate}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
