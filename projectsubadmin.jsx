import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { UserPlus, CalendarCheck, ClipboardList, Users } from "lucide-react";

export default function SubAdminDashboard() {
  const [bloodBanks, setBloodBanks] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([
    { name: "Camp A", date: "2025-06-03", location: "City Hall" },
  ]);
  const [activeCamps, setActiveCamps] = useState([
    { name: "College Blood Camp", date: "2025-06-01" },
    { name: "Community Hall Drive", date: "2025-06-10" },
  ]);
  const [personnel, setPersonnel] = useState([]);

  const [newBank, setNewBank] = useState({ name: "", location: "" });
  const [newCamp, setNewCamp] = useState({ name: "", date: "", location: "", description: "" });
  const [newPerson, setNewPerson] = useState({ name: "", role: "" });

  const handleRegisterBank = () => {
    setBloodBanks([...bloodBanks, newBank]);
    setNewBank({ name: "", location: "" });
  };

  const handleRequestCamp = () => {
    setPendingRequests([...pendingRequests, newCamp]);
    setNewCamp({ name: "", date: "", location: "", description: "" });
  };

  const handleAddPersonnel = () => {
    setPersonnel([...personnel, newPerson]);
    setNewPerson({ name: "", role: "" });
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold text-red-700 mb-8">BloodLink <span className="text-sm bg-red-100 text-red-700 rounded px-2 py-0.5 ml-1">Sub Admin</span></h2>
        <ul className="space-y-4">
          <li className="font-semibold text-red-600">Dashboard</li>
          <li>Blood Bank</li>
          <li>Camp Requests</li>
          <li>Personnel</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Sub Admin Dashboard</h1>
          <div className="text-right">
            <p className="font-semibold">Sub Admin</p>
            <p className="text-sm text-gray-500">subadmin@bloodlink.com</p>
          </div>
        </div>

        {/* Dashboard Panels */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          <Card className="p-6 flex items-center justify-between bg-white shadow rounded-lg">
            <div>
              <p className="text-sm text-gray-500">Register Blood Bank</p>
              <p className="text-lg font-semibold text-red-600">{bloodBanks.length}</p>
            </div>
            <UserPlus className="text-red-600 w-6 h-6" />
          </Card>

          <Card className="p-6 flex items-center justify-between bg-white shadow rounded-lg">
            <div>
              <p className="text-sm text-gray-500">Pending Requests</p>
              <p className="text-lg font-semibold text-green-600">{pendingRequests.length}</p>
            </div>
            <CalendarCheck className="text-green-600 w-6 h-6" />
          </Card>

          <Card className="p-6 flex items-center justify-between bg-white shadow rounded-lg">
            <div>
              <p className="text-sm text-gray-500">Active Camps</p>
              <p className="text-lg font-semibold text-yellow-600">{activeCamps.length}</p>
            </div>
            <ClipboardList className="text-yellow-600 w-6 h-6" />
          </Card>

          <Card className="p-6 flex items-center justify-between bg-white shadow rounded-lg">
            <div>
              <p className="text-sm text-gray-500">Personnel</p>
              <p className="text-lg font-semibold text-purple-600">{personnel.length}</p>
            </div>
            <Users className="text-purple-600 w-6 h-6" />
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="register" className="bg-white p-6 rounded-lg shadow">
          <TabsList className="mb-6">
            <TabsTrigger value="register">Register Blood Bank</TabsTrigger>
            <TabsTrigger value="request">Request Donation Camp</TabsTrigger>
            <TabsTrigger value="active">Active Camps</TabsTrigger>
            <TabsTrigger value="pending">Pending Requests</TabsTrigger>
            <TabsTrigger value="personnel">Add Personnel</TabsTrigger>
          </TabsList>

          <TabsContent value="register">
            <div className="grid gap-4">
              <Input placeholder="Blood Bank Name" value={newBank.name} onChange={(e) => setNewBank({ ...newBank, name: e.target.value })} />
              <Input placeholder="Location" value={newBank.location} onChange={(e) => setNewBank({ ...newBank, location: e.target.value })} />
              <Button onClick={handleRegisterBank}>Register</Button>
              <ul className="mt-4 space-y-2">
                {bloodBanks.map((bank, index) => (
                  <li key={index} className="bg-gray-100 p-2 rounded">{bank.name} - {bank.location}</li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="request">
            <div className="grid gap-4">
              <Input placeholder="Camp Name" value={newCamp.name} onChange={(e) => setNewCamp({ ...newCamp, name: e.target.value })} />
              <Input type="date" value={newCamp.date} onChange={(e) => setNewCamp({ ...newCamp, date: e.target.value })} />
              <Input placeholder="Location" value={newCamp.location} onChange={(e) => setNewCamp({ ...newCamp, location: e.target.value })} />
              <Textarea placeholder="Description" value={newCamp.description} onChange={(e) => setNewCamp({ ...newCamp, description: e.target.value })} />
              <Button onClick={handleRequestCamp}>Request Camp</Button>
            </div>
          </TabsContent>

          <TabsContent value="active">
            <ul className="space-y-2">
              {activeCamps.map((camp, index) => (
                <li key={index} className="p-4 bg-gray-100 rounded">{camp.name} – {camp.date}</li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="pending">
            <ul className="space-y-2">
              {pendingRequests.map((req, index) => (
                <li key={index} className="p-4 bg-yellow-100 rounded">{req.name} – {req.date} @ {req.location}</li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="personnel">
            <div className="grid gap-4">
              <Input placeholder="Personnel Name" value={newPerson.name} onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })} />
              <Input placeholder="Role" value={newPerson.role} onChange={(e) => setNewPerson({ ...newPerson, role: e.target.value })} />
              <Button onClick={handleAddPersonnel}>Add to Inventory</Button>
              <ul className="mt-4 space-y-2">
                {personnel.map((p, index) => (
                  <li key={index} className="bg-purple-100 p-2 rounded">{p.name} - {p.role}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
