import { Step } from '../types';
import { User, Share2, ChevronDown, FolderHeart, FileText, Settings, LogOut, PlusCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  currentStep: Step;
  onStepChange: (step: Step) => void;
  completedSteps: Step[];
}

export default function Header({ currentStep, onStepChange, completedSteps }: HeaderProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: Step.Material, label: '文案素材' },
    { id: Step.Voice, label: '语音合成' },
    { id: Step.Config, label: '视频配置' },
    { id: Step.Generate, label: '视频生成' },
    { id: Step.Publish, label: '发布分享' },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNewProject = () => {
    onStepChange(Step.Material);
    setShowUserMenu(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 glass-panel px-8 py-4 flex justify-between items-center border-b-0">
      <div className="text-xl font-bold text-primary font-headline tracking-tight">
        InfiniteTalk Studio
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => {
          const isUnlocked = item.id === Step.Material || completedSteps.includes(item.id - 1);
          return (
            <button
              key={item.id}
              onClick={() => isUnlocked && onStepChange(item.id)}
              disabled={!isUnlocked}
              className={cn(
                "relative py-1 transition-all font-headline tracking-tight font-medium",
                currentStep === item.id 
                  ? "text-primary" 
                  : isUnlocked 
                    ? "text-on-surface-variant hover:text-on-surface" 
                    : "text-on-surface-variant/30 cursor-not-allowed"
              )}
            >
              {item.label}
              {currentStep === item.id && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="flex items-center space-x-4 relative" ref={menuRef}>
        <button 
          onClick={() => setShowUserMenu(!showUserMenu)}
          className={cn(
            "flex items-center gap-2 p-1.5 pr-3 rounded-full transition-all border",
            showUserMenu 
              ? "bg-primary/10 border-primary/30 text-primary" 
              : "bg-white/10 border-white/20 text-on-surface-variant hover:bg-white/20"
          )}
        >
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary overflow-hidden border border-primary/20">
            <User size={18} />
          </div>
          <ChevronDown size={14} className={cn("transition-transform duration-200", showUserMenu && "rotate-180")} />
        </button>

        {/* User Dropdown Menu */}
        {showUserMenu && (
          <div className="absolute top-full right-0 mt-2 w-56 glass-panel rounded-2xl p-2 border-0 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="px-4 py-3 border-b border-white/10 mb-2">
              <p className="text-sm font-bold">Milton Roman</p>
              <p className="text-[10px] text-on-surface-variant truncate">miltonroman180@gmail.com</p>
            </div>
            
            <div className="space-y-1">
              <button 
                onClick={handleNewProject}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-all text-sm font-bold"
              >
                <PlusCircle size={16} />
                新建项目
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all text-sm font-medium">
                <FileText size={16} />
                我的草稿
                <span className="ml-auto bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded-md">12</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all text-sm font-medium">
                <FolderHeart size={16} />
                我的项目
                <span className="ml-auto bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded-md">5</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-all text-sm font-medium">
                <Settings size={16} />
                个人设置
              </button>
            </div>

            <div className="mt-2 pt-2 border-t border-white/10">
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-error/10 hover:text-error transition-all text-sm font-medium">
                <LogOut size={16} />
                退出登录
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
