"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import TopicsList from './TopicsList';

export default function Navbar() {
  const [userId, setUserId] = useState("");
  const [submittedUserId, setSubmittedUserId] = useState("");

  // Retrieve userId from localStorage on component mount
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
      setSubmittedUserId(storedUserId);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUserId(userId); // Update submittedUserId to fetch topics for the entered user ID
    localStorage.setItem('userId', userId); // Save userId to localStorage
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
        <Link className="text-white font-bold" href={"/"}>
          Personal Finance Management
        </Link>
        {submittedUserId && (
          <Link className="bg-white p-2" href={"/addTopic"}>
            Add Topic
          </Link>
        )}
      </nav>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setUserId(e.target.value)}
            value={userId}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Enter User ID"
          />
          <button
            type="submit"
            className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
          >
            Show Topics
          </button>
        </form>

        {submittedUserId && <TopicsList userId={submittedUserId} />}
      </div>
    </>
  );
}
