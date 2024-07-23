import Task from "@components/admin/Task";
import User from "@components/admin/User";
import Dashboard from "@components/Dashboard";
import Header from "@components/Header";
import InfoBar from "@components/InfoBar";
import SideNavbar from "@components/SideNavbar";
import { Route, Routes } from "react-router";

export default function AdminNavigator() {
  return (
    <>
      <div className="flex h-screen">
        <SideNavbar />
        <div className="flex flex-col flex-1 h-screen">
          <Header />
          <div className="flex flex-grow">
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<User />} />
                <Route path="/tasks" element={<Task />} />
              </Routes>
            </div>
            <InfoBar />
          </div>
        </div>
      </div>
    </>
  );
}
