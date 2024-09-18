"use client";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { useEffect, useState } from 'react';
import Link from "next/link";
import BarChart from "./BarChart";

export default function TopicsList({ userId }) {
  const [topics, setTopics] = useState([]);
  const [totals, setTotals] = useState({ debit: 0, credit: 0, net: 0 });
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    if (userId) {
      const fetchTopics = async () => {
        try {
          const res = await fetch(`https://financemnagement.vercel.app/api/topics?userId=${userId}`);
          if (!res.ok) throw new Error('Failed to fetch topics');
          const data = await res.json();
          setTopics(data.topics);

          // Calculate totals
          const debitTotal = data.topics
            .filter(topic => topic.Voucher === 'Debit')
            .reduce((sum, topic) => sum + topic.amount, 0);

          const creditTotal = data.topics
            .filter(topic => topic.Voucher === 'Credit')
            .reduce((sum, topic) => sum + topic.amount, 0);

          const netTotal = creditTotal - debitTotal;

          setTotals({ debit: debitTotal, credit: creditTotal, net: netTotal });
        } catch (error) {
          console.log(error);
        }
      };

      fetchTopics();
    }
  }, [userId]);

  return (
    <>
      {topics.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-slate-300">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Title</th>
                <th className="py-2 px-4 text-left">Voucher</th>
                <th className="py-2 px-4 text-left">Amount</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {topics.map((t) => (
                <tr key={t._id} className="border-b">
                  <td className="py-2 px-4">{t.title}</td>
                  <td className="py-2 px-4">{t.Voucher}</td>
                  <td className="py-2 px-4">{t.amount}</td>
                  <td className="py-2 px-4 flex gap-2">
                    <RemoveBtn id={t._id} />
                    <Link href={`/editTopic/${t._id}`}>
                      <HiPencilAlt size={24} />
                    </Link>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="py-2 px-4 font-bold">Total Expense={totals.debit}</td>
                <td className="py-2 px-4 font-bold">Total Inflow={totals.credit}</td>
                <td className="py-2 px-4 font-bold">Total Net={totals.net}</td>
                <td className="py-2 px-4"></td>
              </tr>
            </tbody>
          </table>
          <div className='flex justify-center mt-4'>
            <button
              onClick={() => setShowChart(!showChart)}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              {showChart ? 'Hide Stats' : 'Show Statistics'}
            </button>
          </div>
          {showChart && <BarChart totals={totals} />}
        </div>
      )}
    </>
  );
}
