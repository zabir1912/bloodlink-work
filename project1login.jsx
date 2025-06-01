import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function AuthPage() {
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    age: "",
    bloodgroup: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = () => {
    console.log("Signup Data:", signupData);
    // send to backend here
  };

  const handleLogin = () => {
    console.log("Login clicked");
    // login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-3xl shadow-lg p-6 rounded-2xl">
        <CardContent>
          <h1 className="text-3xl font-bold text-center mb-6 text-red-600">BloodLink</h1>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <div className="space-y-4">
                <Input placeholder="Email" type="email" />
                <Input placeholder="Password" type="password" />
                <Button onClick={handleLogin} className="w-full">Login</Button>
              </div>
            </TabsContent>

            <TabsContent value="signup">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" name="firstname" value={signupData.firstname} onChange={handleSignupChange} />
                <Input placeholder="Last Name" name="lastname" value={signupData.lastname} onChange={handleSignupChange} />
                <Input placeholder="Email" type="email" name="email" value={signupData.email} onChange={handleSignupChange} />
                <Input placeholder="Password" type="password" name="password" value={signupData.password} onChange={handleSignupChange} />
                <Input placeholder="Phone Number" name="phone" value={signupData.phone} onChange={handleSignupChange} />
                <Input placeholder="Gender" name="gender" value={signupData.gender} onChange={handleSignupChange} />
                <Input placeholder="Age" type="number" name="age" value={signupData.age} onChange={handleSignupChange} />
                <Input placeholder="Blood Group" name="bloodgroup" value={signupData.bloodgroup} onChange={handleSignupChange} />
                <Input placeholder="Address" name="address" value={signupData.address} onChange={handleSignupChange} />
                <Input placeholder="City" name="city" value={signupData.city} onChange={handleSignupChange} />
                <Input placeholder="State" name="state" value={signupData.state} onChange={handleSignupChange} />
                <Input placeholder="Country" name="country" value={signupData.country} onChange={handleSignupChange} />
              </div>
              <Button onClick={handleSignup} className="w-full mt-4">Register</Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
