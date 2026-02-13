"use client";

import { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState<number>(0);
  const [tipPercent, setTipPercent] = useState<number>(15);

  const tipTotal = (bill * tipPercent) / 100;
  const billTotal = bill + tipTotal;

  const tipOptions = [5, 10, 15, 20];

  return (
  
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-6 font-sans">
      <h1 className="text-4xl font-black text-blue-600 mb-8 uppercase tracking-tight">
        Tip Calculator
      </h1>

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 border border-red-100">
        
   
        <div className="space-y-6">
          <div>
            <label className="block text-xl font-bold mb-2 text-gray-700">ค่าอาหาร (Bill)</label>
            <input
              type="number"
              value={bill === 0 ? "" : bill}
              onChange={(e) => setBill(Number(e.target.value))}
            
              className="w-full p-4 text-2xl bg-red-50 border-2 border-transparent focus:border-blue-500 rounded-xl outline-none transition-all text-red-700 font-semibold"
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block text-xl font-bold mb-3 text-gray-700">เลือก % ทิป</label>
            <div className="grid grid-cols-2 gap-4">
              {tipOptions.map((num) => (
                <button
                  key={num}
                  onClick={() => setTipPercent(num)}
           
                  className={`py-4 text-xl font-bold rounded-xl transition-all transform active:scale-95 ${
                    tipPercent === num 
                      ? "bg-blue-600 text-white shadow-lg ring-4 ring-red-200" 
                      : "bg-red-100 text-blue-600 hover:bg-red-200"
                  }`}
                >
                  {num}%
                </button>
              ))}
            </div>
          </div>
        </div>

   
        <div className="bg-blue-900 rounded-2xl p-8 flex flex-col justify-center space-y-8 text-white shadow-inner">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium opacity-90">ค่าทิป</span>
            <span className="text-4xl font-bold text-orange-300">฿{tipTotal.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
          </div>

          <div className="flex justify-between items-center border-t border-blue-800 pt-6">
            <span className="text-lg font-medium opacity-90">ยอดรวมทั้งหมด</span>
            <span className="text-5xl font-black text-orange-400">฿{billTotal.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
          </div>
          
          <button 
            onClick={() => { setBill(0); setTipPercent(15); }}
    
            className="w-full bg-orange-400 hover:bg-orange-300 text-red-950 font-black py-4 rounded-xl transition-all shadow-lg active:translate-y-1"
          >
            Calculate
          </button>
        </div>

      </div>
    </div>
  );
}