"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [Voucher, setVoucher] = useState("");
  const [amount, setAmount] = useState("");
  const [userId, setUserId] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !Voucher || !amount || !userId) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await fetch('https://financemnagement.vercel.app/api/topics', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, Voucher, amount, userId }),
      });

      if (res.ok) {
        window.location.href = '/';
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Name"
      />

      <div className="flex gap-4">
        <label>
          <input
            type="radio"
            name="voucher"
            value="Debit"
            checked={Voucher === "Debit"}
            onChange={(e) => setVoucher(e.target.value)}
          />
          Debit
        </label>
        <label>
          <input
            type="radio"
            name="voucher"
            value="Credit"
            checked={Voucher === "Credit"}
            onChange={(e) => setVoucher(e.target.value)}
          />
          Credit
        </label>
      </div>

      <input
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Amount"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
