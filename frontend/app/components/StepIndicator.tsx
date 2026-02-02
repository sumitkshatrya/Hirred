"use client";
export default function StepIndicator({ step }: { step: number }) {
  return <p className="text-sm text-gray-500">Step {step} of 3</p>;
}
