'use client';

import { useState } from 'react';
import { CreditCard, Lock, CheckCircle2 } from 'lucide-react';

interface PaymentFormProps {
  onPaymentSuccess: () => void;
  amount: number;
  isProcessing: boolean;
  setIsProcessing: (value: boolean) => void;
}

const PaymentForm = ({ onPaymentSuccess, amount, isProcessing, setIsProcessing }: PaymentFormProps) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate Stripe payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock successful payment
    console.log('Payment processed successfully!');
    setIsProcessing(false);
    onPaymentSuccess();
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#d4af37]/10 rounded-xl flex items-center justify-center">
          <CreditCard className="w-6 h-6 text-[#d4af37]" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1a1a2e]">Payment Details</h3>
          <p className="text-sm text-gray-500">Secure payment powered by Stripe</p>
        </div>
      </div>

      {/* Amount Display */}
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#2d2d4a] rounded-xl p-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Registration Fee</span>
          <span className="text-2xl font-bold text-[#d4af37]">₹{amount.toFixed(2)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Card Holder Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Holder Name
          </label>
          <input
            type="text"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all outline-none"
            required
          />
        </div>

        {/* Card Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <div className="relative">
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all outline-none"
              required
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
              <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-400 rounded text-white text-[8px] flex items-center justify-center font-bold">
                VISA
              </div>
              <div className="w-8 h-5 bg-gradient-to-r from-red-500 to-orange-400 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-red-500 rounded-full opacity-80 -mr-1" />
                <div className="w-3 h-3 bg-orange-400 rounded-full opacity-80" />
              </div>
            </div>
          </div>
        </div>

        {/* Expiry and CVC */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              placeholder="MM/YY"
              maxLength={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVC
            </label>
            <input
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder="123"
              maxLength={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all outline-none"
              required
            />
          </div>
        </div>

        {/* Security Note */}
        <div className="flex items-center gap-2 text-xs text-gray-500 py-2">
          <Lock className="w-4 h-4" />
          <span>Your payment information is encrypted and secure</span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isProcessing}
          className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
            isProcessing
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#d4af37] to-[#e8c547] text-[#1a1a2e] hover:shadow-lg hover:shadow-[#d4af37]/30 transform hover:scale-[1.02]'
          }`}
        >
          {isProcessing ? (
            <>
              <div className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Complete Payment
            </>
          )}
        </button>
      </form>

      {/* Test Card Info */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-xs text-blue-600 text-center">
          <strong>Test Mode:</strong> Use card 4242 4242 4242 4242, any future expiry, and any CVC
        </p>
      </div>
    </div>
  );
};

export default PaymentForm;
