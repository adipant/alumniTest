'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Check, ChevronLeft, ChevronRight, User, Briefcase, CreditCard, PartyPopper, Loader2 } from 'lucide-react';
import PhotoUpload from './PhotoUpload';
// import PaymentForm from './PaymentForm';

const practiceAreas = [
  'Corporate Law',
  'Criminal Law',
  'Family Law',
  'Civil Litigation',
  'Intellectual Property Law',
  'Tax Law',
  'Labor & Employment Law',
  'Real Estate & Property Law',
  'Environmental Law',
  'Immigration Law',
  'Constitutional Law',
  'Banking & Finance Law',
  'Healthcare & Medical Law',
  'International Law',
  'Cyber Law & Technology',
  'Human Rights Law',
  'Arbitration & Mediation',
  'Judiciary',
  'Legal Academia',
  'Government & Public Sector',
  'In-House Counsel',
  'Other',
];

// Generate batch years from 1970 to current year
const currentYear = new Date().getFullYear();
const batchYears = Array.from({ length: currentYear - 1970 + 1 }, (_, i) => (currentYear - i).toString());

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  batchYear: z.string().min(4, 'Please select your batch year'),
  briefProfile: z.string().min(50, 'Please write at least 50 characters about yourself').max(500, 'Profile must be under 500 characters'),
  practiceArea: z.string().min(1, 'Please select your practice area'),
  linkedinUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  phone: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 1, name: 'Photo & Batch', icon: User },
  { id: 2, name: 'Profile Details', icon: Briefcase },
  // { id: 3, name: 'Payment', icon: CreditCard },
];

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  // const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const batchYear = watch('batchYear');

  const handleImageChange = (file: File | null, preview: string | null) => {
    setPhotoFile(file);
    setPhotoPreview(preview);
  };

  const handleNextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    
    if (currentStep === 1) {
      fieldsToValidate = ['batchYear'];
      if (!photoFile) {
        alert('Please upload a profile photo');
        return;
      }
    } else if (currentStep === 2) {
      fieldsToValidate = ['fullName', 'briefProfile', 'practiceArea'];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      if (currentStep === 2) {
        // Submit the form
        await handleSubmitForm();
      } else {
        setCurrentStep((prev) => Math.min(prev + 1, 2));
      }
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmitForm = async () => {
    const formData = getValues();
    
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Convert photo to base64
      let imageBase64 = '';
      if (photoFile) {
        const reader = new FileReader();
        imageBase64 = await new Promise((resolve, reject) => {
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(photoFile);
        });
      }

      // Submit to API
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          imageBase64,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Registration failed');
      }

      console.log('Registration Complete!', result);
      setIsComplete(true);
    } catch (error) {
      console.error('Registration error:', error);
      setSubmitError(
        error instanceof Error ? error.message : 'Registration failed. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16 px-4">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <PartyPopper className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
          Welcome to the Alumni Network!
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Your registration has been completed successfully. You are now part of our distinguished alumni community.
        </p>
        <div className="bg-[#1a1a2e] text-white rounded-2xl p-6 inline-block">
          <div className="flex items-center gap-4">
            {photoPreview && (
              <div className="relative">
                <img
                  src={photoPreview}
                  alt="Profile"
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#d4af37] text-[#1a1a2e] text-xs font-bold px-2 py-0.5 rounded whitespace-nowrap">
                  Batch {batchYear}
                </div>
              </div>
            )}
            <div className="text-left">
              <p className="text-lg font-semibold">{getValues('fullName')}</p>
              <p className="text-gray-400 text-sm">{getValues('practiceArea')}</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <a
            href="/"
            className="inline-block px-8 py-3 bg-linear-to-r from-[#d4af37] to-[#e8c547] text-[#1a1a2e] font-semibold rounded-full hover:shadow-lg transition-all"
          >
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-center">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    currentStep > step.id
                      ? 'bg-green-500 text-white'
                      : currentStep === step.id
                      ? 'bg-linear-to-r from-[#d4af37] to-[#e8c547] text-[#1a1a2e]'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <step.icon className="w-6 h-6" />
                  )}
                </div>
                <span
                  className={`mt-2 text-sm font-medium ${
                    currentStep >= step.id ? 'text-[#1a1a2e]' : 'text-gray-400'
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-24 h-1 mx-4 rounded-full transition-all duration-300 ${
                    currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        {/* Step 1: Photo & Batch */}
        {currentStep === 1 && (
          <div className="animate-fade-in-up">
            <h2 className="text-2xl font-bold text-[#1a1a2e] text-center mb-2">
              Profile Photo & Batch Year
            </h2>
            <p className="text-gray-500 text-center mb-8">
              Upload your photo and select your graduation year
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <PhotoUpload
                batchYear={batchYear}
                onImageChange={handleImageChange}
                preview={photoPreview}
              />

              <div className="w-full md:w-64">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Batch Year <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('batchYear')}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all outline-none appearance-none bg-white ${
                    errors.batchYear ? 'border-red-500' : 'border-gray-200'
                  }`}
                >
                  <option value="">Select Year</option>
                  {batchYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {errors.batchYear && (
                  <p className="mt-1 text-sm text-red-500">{errors.batchYear.message}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Profile Details */}
        {currentStep === 2 && (
          <div className="animate-fade-in-up">
            <h2 className="text-2xl font-bold text-[#1a1a2e] text-center mb-2">
              Profile Details
            </h2>
            <p className="text-gray-500 text-center mb-8">
              Tell us about yourself and your professional journey
            </p>

            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('fullName')}
                  type="text"
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all outline-none ${
                    errors.fullName ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              {/* Brief Profile */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brief Profile <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register('briefProfile')}
                  rows={4}
                  placeholder="Share your professional journey, achievements, and what you're passionate about..."
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all outline-none resize-none ${
                    errors.briefProfile ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.briefProfile && (
                  <p className="mt-1 text-sm text-red-500">{errors.briefProfile.message}</p>
                )}
                <p className="mt-1 text-xs text-gray-400">Minimum 50 characters, maximum 500</p>
              </div>

              {/* Practice Area */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Practice Area <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('practiceArea')}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all outline-none appearance-none bg-white ${
                    errors.practiceArea ? 'border-red-500' : 'border-gray-200'
                  }`}
                >
                  <option value="">Select Practice Area</option>
                  {practiceAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
                {errors.practiceArea && (
                  <p className="mt-1 text-sm text-red-500">{errors.practiceArea.message}</p>
                )}
              </div>

              {/* LinkedIn URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn URL <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  {...register('linkedinUrl')}
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all outline-none ${
                    errors.linkedinUrl ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.linkedinUrl && (
                  <p className="mt-1 text-sm text-red-500">{errors.linkedinUrl.message}</p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all outline-none ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="+1 (234) 567-8900"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {currentStep < 2 && (
          <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
            <button
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                currentStep === 1
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
            <button
              onClick={handleNextStep}
              className="flex items-center gap-2 px-8 py-3 bg-linear-to-r from-[#d4af37] to-[#e8c547] text-[#1a1a2e] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#d4af37]/30 transform hover:scale-105 transition-all"
            >
              Continue
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
            <button
              onClick={handlePrevStep}
              className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
            <button
              onClick={handleNextStep}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-8 py-3 bg-linear-to-r from-[#d4af37] to-[#e8c547] text-[#1a1a2e] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#d4af37]/30 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Registration
                  <ChevronRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
