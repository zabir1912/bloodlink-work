import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { UserPlus, List, CheckCircle, Building2 } from "lucide-react";

export default function SuperAdminDashboard() {
  const [subAdmins, setSubAdmins] = useState([]);
  const [newSubAdmin, setNewSubAdmin] = useState({ name: "", email: "" });
  const [requestedCamps, setRequestedCamps] = useState([
    { name: "Camp Alpha", status: "Requested" },
    { name: "Camp Beta", status: "Approved" },
  ]);
  const [activeCamps, setActiveCamps] = useState([
    { name: "Camp Gamma", date: "2025-06-01" },
  ]);
  const [bloodCentres, setBloodCentres] = useState([
    { name: "City Blood Bank" },
    { name: "Red Cross Centre" },
  ]);

  const handleRegisterSubAdmin = () => {
    setSubAdmins([...subAdmins, newSubAdmin]);
    setNewSubAdmin({ name: "", email: "" });
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold text-red-700 mb-8">
          BloodLink <span className="text-sm bg-red-100 text-red-700 rounded px-2 py-0.5 ml-1">Super Admin</span>
        </h2>
        <ul className="space-y-4">
          <li className="font-semibold text-red-600">Dashboard</li>
          <li>Sub Admins</li>
          <li>Donation Camps</li>
          <li>Blood Centres</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Super Admin Dashboard</h1>
          <div className="text-right">
            <p className="font-semibold">Super Admin</p>
            <p className="text-sm text-gray-500">admin@bloodlink.com</p>
          </div>
        </div>

        {/* Dashboard Panels */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          <Card className="p-6 flex items-center justify-between bg-white shadow rounded-lg">
            <div>
              <p className="text-sm text-gray-500">Sub Admins</p>
              <p className="text-lg font-semibold text-red-600">{subAdmins.length}</p>
            </div>
            <UserPlus className="text-red-600 w-6 h-6" />
          </Card>

          <Card className="p-6 flex items-center justify-between bg-white shadow rounded-lg">
            <div>
              <p className="text-sm text-gray-500">Requested/Approved Camps</p>
              <p className="text-lg font-semibold text-green-600">{requestedCamps.length}</p>
            </div>
            <CheckCircle className="text-green-600 w-6 h-6" />
          </Card>

          <Card className="p-6 flex items-center justify-between bg-white shadow rounded-lg">
            <div>
              <p className="text-sm text-gray-500">Active Camps</p>
              <p className="text-lg font-semibold text-yellow-600">{activeCamps.length}</p>
            </div>
            <List className="text-yellow-600 w-6 h-6" />
          </Card>

          <Card className="p-6 flex items-center justify-between bg-white shadow rounded-lg">
            <div>
              <p className="text-sm text-gray-500">Blood Centres</p>
              <p className="text-lg font-semibold text-purple-600">{bloodCentres.length}</p>
            </div>
            <Building2 className="text-purple-600 w-6 h-6" />
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="register" className="bg-white p-6 rounded-lg shadow">
          <TabsList className="mb-6">
            <TabsTrigger value="register">Register Sub Admin</TabsTrigger>
            <TabsTrigger value="list">Sub Admins List</TabsTrigger>
            <TabsTrigger value="camps">Requested/Approved Camps</TabsTrigger>
            <TabsTrigger value="active">Active Camps</TabsTrigger>
            <TabsTrigger value="centres">Blood Centres</TabsTrigger>
          </TabsList>

          <TabsContent value="register">
            <div className="grid gap-4">
              <Input placeholder="Name" value={newSubAdmin.name} onChange={(e) => setNewSubAdmin({ ...newSubAdmin, name: e.target.value })} />
              <Input placeholder="Email" value={newSubAdmin.email} onChange={(e) => setNewSubAdmin({ ...newSubAdmin, email: e.target.value })} />
              <Button onClick={handleRegisterSubAdmin}>Register Sub Admin</Button>
            </div>
          </TabsContent>

          <TabsContent value="list">
            <ul className="space-y-2">
              {subAdmins.map((admin, index) => (
                <li key={index} className="bg-gray-100 p-2 rounded">{admin.name} - {admin.email}</li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="camps">
            <ul className="space-y-2">
              {requestedCamps.map((camp, index) => (
                <li key={index} className="bg-green-100 p-2 rounded">{camp.name} - {camp.status}</li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="active">
            <ul className="space-y-2">
              {activeCamps.map((camp, index) => (
                <li key={index} className="bg-yellow-100 p-2 rounded">{camp.name} - {camp.date}</li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="centres">
            <ul className="space-y-2">
              {bloodCentres.map((centre, index) => (
                <li key={index} className="bg-purple-100 p-2 rounded">{centre.name}</li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
