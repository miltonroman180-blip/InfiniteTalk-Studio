import { Step } from '../types';
import { ArrowLeft, ArrowRight, Save, Plus } from 'lucide-react';

interface FooterProps {
  currentStep: Step;
  onPrev: () => void;
  onNext: () => void;
}

export default function Footer({ currentStep, onPrev, onNext }: FooterProps) {
  const isFirst = currentStep === Step.Material;
  const isLast = currentStep === Step.Publish;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 glass-panel px-12 py-6 flex justify-between items-center border-t-0">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className={`flex items-center space-x-2 px-6 py-2 rounded-xl border transition-all font-semibold ${
          isFirst ? 'opacity-30 cursor-not-allowed border-black/5' : 'text-on-surface-variant border-black/10 hover:bg-white/40 active:scale-95'
        }`}
      >
        <ArrowLeft size={18} />
        <span>上一步</span>
      </button>

      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 px-8 py-2 rounded-xl border border-black/10 text-on-surface-variant hover:bg-white/40 transition-all font-semibold active:scale-95">
          <Save size={18} />
          <span>保存草稿</span>
        </button>
        
        <button
          onClick={onNext}
          className="flex items-center space-x-2 bg-primary text-white px-10 py-2.5 rounded-xl font-bold transition-all active:scale-95 shadow-[0_4px_12px_rgba(0,113,227,0.2)]"
        >
          <span>{isLast ? '新建项目' : '下一步'}</span>
          {isLast ? <Plus size={18} /> : <ArrowRight size={18} />}
        </button>
      </div>
    </footer>
  );
}
