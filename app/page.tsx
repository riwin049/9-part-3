"use client";

import { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState<number>(0);
  const [tipPercent, setTipPercent] = useState<number>(15);
  // 1. เพิ่ม State สำหรับจำนวนคน (เริ่มต้นที่ 1 คน)
  const [people, setPeople] = useState<number>(1);

  // 2. ปรับการคำนวณ
  const tipTotal = (bill * tipPercent) / 100;
  const billTotal = bill + tipTotal;
  
  // คำนวณยอดต่อคน (เช็คไม่ให้หารด้วย 0)
  const tipPerPerson = people > 0 ? tipTotal / people : 0;
  const totalPerPerson = people > 0 ? billTotal / people : 0;

  const tipOptions = [5, 10, 15, 20, 25, 30];

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6 font-sans">
      <h1 className="text-4xl font-black text-blue-900 mb-8 uppercase tracking-tight">
        My Tip Calculator
      </h1>

      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-blue-900">
        
        {/* ฝั่งซ้าย: Input */}
        <div className="p-10 space-y-8">
          <div>
            <label className="block text-sm font-bold mb-2 text-blue-900 opacity-70">Bill Amount</label>
            <input
              type="number"
              value={bill === 0 ? "" : bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full p-4 text-xl bg-slate-500 border-2 border-transparent focus:border-blue-500 rounded-xl outline-none transition-all font-semibold"
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-3 text-blue-900 opacity-70">Tip Percentage</label>
            <div className="grid grid-cols-3 gap-3">
              {tipOptions.map((num) => (
                <button
                  key={num}
                  onClick={() => setTipPercent(num)}
                  className={`py-3 text-lg font-bold rounded-xl transition-all ${
                    tipPercent === num 
                      ? "bg-indigo-600 text-black shadow-md" 
                      : "bg-white border-2 border-slate-100 text-indigo-600 hover:border-indigo-200"
                  }`}
                >
                  {num}%
                </button>
              ))}
            </div>
          </div>

          {/* 3. ช่องกรอกจำนวนคน */}
          <div>
            <label className="block text-sm font-bold mb-2 text-blue-900 opacity-70">Number of People</label>
            <input
              type="number"
              min="1"
              value={people}
              onChange={(e) => setPeople(Math.max(1, Number(e.target.value)))}
              className="w-full p-4 text-xl bg-slate-500 border-2 border-transparent focus:border-blue-500 rounded-xl outline-none transition-all font-semibold"
              placeholder="1"
            />
          </div>

          <button 
            className="w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 rounded-xl transition-all"
          >
            Calculate
          </button>
        </div>

        {/* ฝั่งขวา: ผลลัพธ์ (Background สีม่วงอ่อนตามรูป) */}
        <div className="bg-indigo-200 p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center">
              <div>
                <p className="text-gray-500 font-bold text-sm">Tip / person</p>
              </div>
              <span className="text-3xl font-black text-slate-800">
                ${tipPerPerson.toLocaleString(undefined, {minimumFractionDigits: 2})}
              </span>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center">
              <div>
                <p className="text-gray-500 font-bold text-sm">Total / person</p>
              </div>
              <span className="text-3xl font-black text-slate-800">
                ${totalPerPerson.toLocaleString(undefined, {minimumFractionDigits: 2})}
              </span>
            </div>
          </div>
          
          <button 
            onClick={() => { setBill(0); setTipPercent(15); setPeople(1); }}
            className="w-full bg-white text-indigo-600 hover:bg-slate-50 font-black py-4 rounded-xl transition-all shadow-md"
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  );
}