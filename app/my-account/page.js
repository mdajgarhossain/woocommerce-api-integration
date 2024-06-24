"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function AccountDetails() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-6 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-800">
                <strong>Username:</strong> {user.username}
              </p>
              <p className="text-gray-800 mt-2">
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
