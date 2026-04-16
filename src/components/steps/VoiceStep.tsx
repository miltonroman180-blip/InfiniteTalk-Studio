import { AudioLines, Languages, Timer, Lock, Mic, Download, FileEdit, RotateCcw, PlayCircle, FastForward, Rewind, Gauge, Music, Upload, X, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useState } from 'react';

const VOICES = [
  { id: '1', name: '云晓', desc: '自然叙事 · 男声', avatar: 'https://picsum.photos/seed/voice1/100/100' },
  { id: '2', name: '紫涵', desc: '多变情感 · 女声', avatar: 'https://picsum.photos/seed/voice2/100/100', active: true },
  { id: '3', name: '雷蒙', desc: '浑厚磁性 · 男声', avatar: 'https://picsum.photos/seed/voice3/100/100' },
  { id: '4', name: '悦悦', desc: '清脆灵动 · 女声', avatar: 'https://picsum.photos/seed/voice4/100/100' },
];

export default function VoiceStep() {
  const [selectedVoice, setSelectedVoice] = useState('2');
  const [showCloneModal, setShowCloneModal] = useState(false);
  const [cloningStep, setCloningStep] = useState<'upload' | 'processing' | 'success'>('upload');

  const handleStartClone = () => {
    setCloningStep('processing');
    setTimeout(() => setCloningStep('success'), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Voice Library */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-headline font-bold tracking-tight">音色库</h2>
            <p className="text-on-surface-variant text-sm mt-1">选择最适合您内容的AI声线</p>
          </div>
          <div className="flex gap-2">
            {['全部', '叙事', '激情', '温柔'].map((tag) => (
              <button key={tag} className="px-3 py-1 bg-surface-container-high rounded-lg text-xs text-on-surface-variant hover:bg-surface-variant transition-colors">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {/* Voice Cloning Card */}
          <div 
            onClick={() => {
              setShowCloneModal(true);
              setCloningStep('upload');
            }}
            className="bg-primary/10 border border-primary/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-primary/20 transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-3 shadow-[0_4px_12px_rgba(0,113,227,0.2)]">
              <AudioLines className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-primary">声音克隆</h3>
            <p className="text-[10px] text-on-surface-variant mt-1 leading-relaxed">上传30秒音频<br />还原真实人声</p>
          </div>

          {VOICES.map((voice) => (
            <div
              key={voice.id}
              onClick={() => setSelectedVoice(voice.id)}
              className={cn(
                "p-4 rounded-2xl border transition-all cursor-pointer group relative overflow-hidden",
                selectedVoice === voice.id 
                  ? "bg-white/50 border-primary shadow-sm" 
                  : "bg-white/20 border-white/30 hover:bg-white/40"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={voice.avatar} alt={voice.name} className="w-10 h-10 rounded-full object-cover border border-white/50" referrerPolicy="no-referrer" />
                <div className="flex-grow">
                  <p className="text-sm font-bold">{voice.name}</p>
                  <p className="text-[10px] text-on-surface-variant">{voice.desc}</p>
                </div>
              </div>
              <button className={cn(
                "w-full py-1.5 rounded-xl flex items-center justify-center gap-2 transition-all font-semibold",
                selectedVoice === voice.id ? "bg-primary text-white" : "bg-white/30 group-hover:bg-primary group-hover:text-white"
              )}>
                <PlayCircle size={14} />
                <span className="text-xs">{selectedVoice === voice.id ? '正在播放' : '试听'}</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Voice Cloning Modal */}
      {showCloneModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowCloneModal(false)} />
          <div className="glass-panel w-full max-w-md rounded-3xl p-8 relative z-10 border-0 shadow-2xl animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowCloneModal(false)}
              className="absolute top-4 right-4 p-2 text-on-surface-variant hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {cloningStep === 'upload' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold font-headline mb-2">声音克隆</h3>
                  <p className="text-sm text-on-surface-variant">上传一段 30-60 秒的清晰人声音频</p>
                </div>

                <div className="border-2 border-dashed border-black/10 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 hover:bg-white/40 hover:border-primary/30 transition-all cursor-pointer group">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Upload size={32} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold">点击或拖拽上传音频</p>
                    <p className="text-[10px] text-on-surface-variant mt-1">支持 MP3, WAV, M4A (最大 20MB)</p>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
                  <p className="text-[11px] text-on-surface-variant leading-relaxed">
                    <span className="font-bold text-primary">提示：</span>
                    请确保音频中没有背景音乐或杂音，说话清晰且语速平稳，以获得最佳的克隆效果。
                  </p>
                </div>

                <button 
                  onClick={handleStartClone}
                  className="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-lg hover:opacity-90 active:scale-95 transition-all"
                >
                  开始提取音色
                </button>
              </div>
            )}

            {cloningStep === 'processing' && (
              <div className="py-12 flex flex-col items-center text-center space-y-6">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                  <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AudioLines className="text-primary" size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">正在提取音色特征...</h3>
                  <p className="text-sm text-on-surface-variant mt-2">AI 正在深度学习您的声音特征，请稍候</p>
                </div>
              </div>
            )}

            {cloningStep === 'success' && (
              <div className="py-8 flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={48} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">音色克隆成功！</h3>
                  <p className="text-sm text-on-surface-variant mt-2">“我的专属音色”已加入您的音色库</p>
                </div>
                <button 
                  onClick={() => setShowCloneModal(false)}
                  className="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-lg hover:opacity-90 active:scale-95 transition-all"
                >
                  立即使用
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Voice Generation */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-headline font-bold tracking-tight">配音生成</h2>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-on-surface-variant font-medium">
              <Languages size={14} />
              <span>目标语言: 中文 (普通话)</span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface-variant font-medium">
              <Timer size={14} />
              <span>预估时长: 02:45</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Script Preview */}
          <div className="lg:col-span-1 glass-panel rounded-3xl p-6 relative overflow-hidden border-0">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">脚本预览 (只读)</span>
              <Lock className="text-on-surface-variant" size={16} />
            </div>
            <div className="h-64 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              <p className="text-sm leading-relaxed text-on-surface/80 bg-white/30 p-3 rounded-xl border-l-4 border-primary">
                “在瞬息万变的数字化时代，每一个灵感都值得被精准表达。InfiniteTalk Studio 采用顶尖AI算法...”
              </p>
              <p className="text-sm leading-relaxed text-on-surface/60 p-3">
                “我们打破了创作的边界，让视频生成变得像说话一样简单。不论是商业展示还是个人表达...”
              </p>
              <p className="text-sm leading-relaxed text-on-surface/60 p-3">
                “紫涵的音色能够完美捕捉您情感中的细微波动，让每一帧画面都拥有灵魂。”
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
          </div>

          {/* Operation Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel rounded-3xl p-8 flex flex-col items-center justify-center border-0 relative group overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-8 text-center relative z-10">
                <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-4 cursor-pointer shadow-[0_8px_24px_rgba(0,113,227,0.3)] active:scale-90 transition-transform">
                  <Mic className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">一键生成配音</h3>
                <p className="text-sm text-on-surface-variant max-w-xs mx-auto font-medium">AI将根据选定的“紫涵”音色与脚本内容，为您合成高保真音频轨道</p>
              </div>

              {/* Waveform Mockup */}
              <div className="w-full bg-white/20 rounded-2xl p-6 border border-white/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <AudioLines className="text-primary" size={18} />
                    <span className="text-xs font-bold font-headline tracking-tighter">PREVIEW_VOICEOVER_V1.WAV</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-1.5 hover:bg-white/40 rounded-lg transition-colors"><Download size={14} /></button>
                    <button className="p-1.5 hover:bg-white/40 rounded-lg transition-colors"><FileEdit size={14} /></button>
                  </div>
                </div>
                
                <div className="h-16 flex items-center justify-between gap-[2px] px-2 overflow-hidden">
                  {[3, 6, 10, 4, 8, 12, 14, 10, 6, 12, 16, 8, 4, 10, 12, 5, 8, 10, 14, 6, 4].map((h, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "flex-grow rounded-full transition-all duration-300",
                        h > 12 ? "bg-primary" : "bg-primary/40",
                      )}
                      style={{ height: `${h * 4}px` }}
                    />
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-headline text-on-surface-variant font-bold">00:00.0</span>
                  <div className="flex items-center gap-6">
                    <RotateCcw className="text-on-surface-variant cursor-pointer hover:text-primary" size={18} />
                    <PlayCircle className="text-primary cursor-pointer hover:scale-110 transition-transform" size={40} />
                    <FastForward className="text-on-surface-variant cursor-pointer hover:text-primary" size={18} />
                  </div>
                  <span className="text-[10px] font-headline text-on-surface-variant font-bold">02:45.3</span>
                </div>
              </div>
            </div>

            {/* Fine-tuning */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-2xl space-y-3 border-0">
                <label className="text-xs font-bold text-on-surface-variant flex items-center gap-2">
                  <Gauge size={14} /> 语速控制
                </label>
                <div className="flex items-center gap-4">
                  <input className="flex-grow accent-primary h-1 bg-black/5 rounded-full appearance-none cursor-pointer" type="range" defaultValue={50} />
                  <span className="text-xs font-headline font-bold text-primary">1.0x</span>
                </div>
              </div>
              <div className="glass-panel p-4 rounded-2xl space-y-3 border-0">
                <label className="text-xs font-bold text-on-surface-variant flex items-center gap-2">
                  <Music size={14} /> 语调起伏
                </label>
                <div className="flex items-center gap-4">
                  <input className="flex-grow accent-primary h-1 bg-black/5 rounded-full appearance-none cursor-pointer" type="range" defaultValue={50} />
                  <span className="text-xs font-headline font-bold text-primary">50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
