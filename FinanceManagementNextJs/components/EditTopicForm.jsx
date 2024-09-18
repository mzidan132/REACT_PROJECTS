"use client";

import { useState } from 'react';

export default function EditTopicForm({ id, title, Voucher, amount }) {
  const [formTitle, setFormTitle] = useState(title || "");
  const [formVoucher, setFormVoucher] = useState(Voucher || "");
  const [formAmount, setFormAmount] = useState(amount || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formTitle || !formVoucher || formAmount === "") {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await fetch(`https://financemnagement.vercel.app/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title: formTitle, Voucher: formVoucher, amount: formAmount }),
      });

      if (res.ok) {
        window.location.href = '/';
      } else {
        throw new Error("Failed to update topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setFormTitle(e.target.value)}
        value={formTitle}
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
            checked={formVoucher === "Debit"}
            onChange={(e) => setFormVoucher(e.target.value)}
          />
          Debit
        </label>
        <label>
          <input
            type="radio"
            name="voucher"
            value="Credit"
            checked={formVoucher === "Credit"}
            onChange={(e) => setFormVoucher(e.target.value)}
          />
          Credit
        </label>
      </div>

      <input
        onChange={(e) => setFormAmount(e.target.value)}
        value={formAmount}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Amount"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Update Topic
      </button>
    </form>
  );
}
