'use client';

import { useState, useRef, ChangeEvent } from 'react';
import { Camera, X } from 'lucide-react';

interface PhotoUploadProps {
  batchYear: string;
  onImageChange: (file: File | null, preview: string | null) => void;
  preview: string | null;
}

const PhotoUpload = ({ batchYear, onImageChange, preview }: PhotoUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(file, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    onImageChange(null, null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Photo container with batch overlay */}
        <div className="relative w-48 h-48 rounded-2xl overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 group">
          {preview ? (
            <>
              <img
                src={preview}
                alt="Profile preview"
                className="w-full h-full object-cover"
              />
              {/* Batch Year Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#1a1a2e] via-[#1a1a2e]/80 to-transparent py-4 px-3">
                <div className="flex flex-col items-center">
                  <span className="text-[#d4af37] text-xs font-semibold tracking-wider uppercase">
                    Batch of
                  </span>
                  <span className="text-white text-2xl font-bold">
                    {batchYear || '----'}
                  </span>
                </div>
              </div>
              {/* Remove button */}
              <button
                onClick={handleRemove}
                className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-600"
                type="button"
              >
                <X className="w-4 h-4" />
              </button>
            </>
          ) : (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-full flex flex-col items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors"
              type="button"
            >
              <Camera className="w-12 h-12 mb-2" />
              <span className="text-sm font-medium">Upload Photo</span>
              <span className="text-xs text-gray-400 mt-1">Max 5MB</span>
            </button>
          )}
        </div>
        
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {preview && (
        <button
          onClick={() => fileInputRef.current?.click()}
          className="mt-4 text-sm text-[#d4af37] hover:text-[#b8962f] font-medium transition-colors"
          type="button"
        >
          Change Photo
        </button>
      )}

      <p className="text-xs text-gray-500 mt-3 text-center max-w-50]">
        Your photo will be displayed with your batch year in the alumni directory
      </p>
    </div>
  );
};

export default PhotoUpload;
