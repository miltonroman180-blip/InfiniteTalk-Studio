'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StepIndicator from '../components/StepIndicator';
import MaterialStep from '../components/steps/MaterialStep';
import VoiceStep from '../components/steps/VoiceStep';
import ConfigStep from '../components/steps/ConfigStep';
import GenerateStep from '../components/steps/GenerateStep';
import PublishStep from '../components/steps/PublishStep';
import { motion, AnimatePresence } from 'motion/react';
import { Step } from '../types';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>(Step.Material);
  const [completedSteps, setCompletedSteps] = useState<Step[]>([]);

  const handleNext = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    
    if (currentStep < Step.Publish) {
      setCurrentStep(currentStep + 1);
    } else {
      // Reset or New Project logic
      setCurrentStep(Step.Material);
      setCompletedSteps([]);
    }
  };

  const handlePrev = () => {
    if (currentStep > Step.Material) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepChange = (step: Step) => {
    // Allow going back to any step, or forward to a step that is "unlocked"
    // A step is unlocked if it's the first step OR the previous step is completed
    const isUnlocked = step === Step.Material || completedSteps.includes(step - 1);
    if (isUnlocked) {
      setCurrentStep(step);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case Step.Material:
        return <MaterialStep />;
      case Step.Voice:
        return <VoiceStep />;
      case Step.Config:
        return <ConfigStep />;
      case Step.Generate:
        return <GenerateStep />;
      case Step.Publish:
        return <PublishStep />;
      default:
        return <MaterialStep />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      <Header 
        currentStep={currentStep} 
        onStepChange={handleStepChange} 
        completedSteps={completedSteps}
      />
      
      <StepIndicator 
        currentStep={currentStep} 
        completedSteps={completedSteps}
        onStepClick={handleStepChange}
      />

      <main className="flex-grow w-full max-w-7xl mx-auto px-8 py-6 mb-32 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer 
        currentStep={currentStep} 
        onPrev={handlePrev} 
        onNext={handleNext} 
      />
    </div>
  );
}
