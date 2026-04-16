import { Step } from '../types';
import { cn } from '../lib/utils';

interface StepIndicatorProps {
  currentStep: Step;
  completedSteps: Step[];
  onStepClick: (step: Step) => void;
}

export default function StepIndicator({ currentStep, completedSteps, onStepClick }: StepIndicatorProps) {
  const steps = [
    { id: Step.Material, label: '文案素材' },
    { id: Step.Voice, label: '语音合成' },
    { id: Step.Config, label: '视频配置' },
    { id: Step.Generate, label: '视频生成' },
    { id: Step.Publish, label: '发布分享' },
  ];

  return (
    <div className="w-full py-8">
      <div className="max-w-4xl mx-auto flex items-center justify-between relative">
        {/* Background Line */}
        <div className="absolute top-5 left-0 right-0 h-[2px] bg-black/5 z-0" />
        
        {/* Progress Line */}
        <div 
          className="absolute top-5 left-0 h-[2px] bg-primary z-0 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          const isUnlocked = step.id === Step.Material || completedSteps.includes(step.id - 1);

          return (
            <button 
              key={step.id} 
              onClick={() => isUnlocked && onStepClick(step.id)}
              disabled={!isUnlocked}
              className={cn(
                "relative z-10 flex flex-col items-center group transition-all",
                !isUnlocked && "opacity-40 cursor-not-allowed"
              )}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-headline font-bold transition-all duration-300",
                  isActive 
                    ? "step-active scale-110" 
                    : isCompleted 
                      ? "bg-primary text-white" 
                      : isUnlocked
                        ? "bg-white/60 text-primary border border-primary/30"
                        : "bg-white/40 text-on-surface-variant border border-white/50"
                )}
              >
                {step.id}
              </div>
              <span
                className={cn(
                  "mt-2 text-sm transition-colors duration-300 font-medium",
                  isActive ? "text-primary" : isCompleted ? "text-primary" : "text-on-surface-variant"
                )}
              >
                {step.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
