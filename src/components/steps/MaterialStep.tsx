import { useState, useRef } from 'react';
import { Video, CloudUpload, Trash2, Plus, FileText, Sparkles, RefreshCw, Bold, Italic, Underline, AlignLeft, AlignCenter } from 'lucide-react';

export default function MaterialStep() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('Selected file:', file.name);
      // Logic for handling the file would go here
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Left Column: Video Source */}
      <section className="md:col-span-5 space-y-6">
        <div className="flex items-center space-x-2">
          <Video className="text-primary" size={24} />
          <h2 className="text-xl font-headline font-bold">视频来源</h2>
        </div>

        <div className="glass-panel p-6 rounded-3xl space-y-6">
          {/* ... existing code ... */}
          {/* URL Input */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">粘贴视频链接</label>
            <div className="relative">
              <input
                className="w-full bg-white/20 border border-white/30 rounded-xl py-3 px-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors placeholder:text-on-surface-variant/50"
                placeholder="支持 Bilibili, YouTube, 抖音等链接"
                type="text"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary font-bold px-3 py-1 hover:bg-primary/10 rounded-lg transition-colors">
                提取
              </button>
            </div>
          </div>

          <div className="h-8 flex items-center justify-center">
            <div className="flex-grow h-[1px] bg-black/5" />
            <span className="px-4 text-xs text-outline font-headline">OR</span>
            <div className="flex-grow h-[1px] bg-black/5" />
          </div>

          {/* Drag & Drop */}
          <div 
            onClick={handleUploadClick}
            className="border-2 border-dashed border-black/10 rounded-2xl p-8 flex flex-col items-center justify-center space-y-4 hover:border-primary/40 hover:bg-white/40 transition-all cursor-pointer group"
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="video/*" 
              onChange={handleFileChange}
            />
            <div className="w-16 h-16 rounded-2xl bg-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CloudUpload className="text-primary" size={32} />
            </div>
            <div className="text-center">
              <p className="text-on-surface font-semibold">点击或拖拽视频文件上传</p>
              <p className="text-on-surface-variant text-xs mt-1">支持 MP4, MOV, AVI (最大 500MB)</p>
            </div>
          </div>

          {/* Preview Grid */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">已选素材</label>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-video rounded-xl overflow-hidden group shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  src="https://picsum.photos/seed/camera/400/225"
                  alt="Preview"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="text-white bg-error/80 p-2 rounded-full">
                    <Trash2 size={20} />
                  </button>
                </div>
                <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white">
                  00:45
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-black/10 flex items-center justify-center bg-white/10 group cursor-pointer hover:border-primary/50 transition-colors">
                <Plus className="text-on-surface-variant group-hover:text-primary transition-colors" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Column: Script Extraction */}
      <section className="md:col-span-7 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="text-primary" size={24} />
            <h2 className="text-xl font-headline font-bold">提取文案</h2>
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-white/30 text-xs text-primary font-semibold hover:bg-white/50 transition-colors border border-white/50">
              <Sparkles size={14} />
              <span>AI 润色</span>
            </button>
            <button className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-white/30 text-xs text-on-surface-variant font-semibold hover:bg-white/50 transition-colors border border-white/50">
              <RefreshCw size={14} />
              <span>重录提取</span>
            </button>
          </div>
        </div>

        <div className="glass-panel rounded-3xl overflow-hidden flex flex-col h-[540px] border-0">
          {/* Toolbar */}
          <div className="p-3 bg-white/30 flex items-center space-x-4 border-b border-black/5">
            <div className="flex items-center space-x-1 border-r border-black/5 pr-4">
              <button className="p-1 text-on-surface-variant hover:text-primary transition-colors">
                <Bold size={18} />
              </button>
              <button className="p-1 text-on-surface-variant hover:text-primary transition-colors">
                <Italic size={18} />
              </button>
              <button className="p-1 text-on-surface-variant hover:text-primary transition-colors">
                <Underline size={18} />
              </button>
            </div>
            <div className="flex items-center space-x-1 border-r border-black/5 pr-4">
              <button className="p-1 text-on-surface-variant hover:text-primary transition-colors">
                <AlignLeft size={18} />
              </button>
              <button className="p-1 text-on-surface-variant hover:text-primary transition-colors">
                <AlignCenter size={18} />
              </button>
            </div>
            <div className="flex-grow" />
            <span className="text-[10px] text-on-surface-variant uppercase font-headline font-bold">Characters: 1,240 / 5,000</span>
          </div>
          
          {/* Editor Body */}
          <div className="flex-grow p-8 overflow-y-auto custom-scrollbar">
            <div 
              className="font-body text-lg leading-relaxed text-on-surface/90 outline-none min-h-full" 
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              <p className="mb-6"><span className="text-primary font-bold"># 开场片段</span></p>
              <p className="mb-4">欢迎来到未来的创意工坊。在这里，我们不仅仅是在剪辑视频，而是在编织梦境。人工智能正在重新定义视觉叙事的边界。</p>
              <p className="mb-6"><span className="text-primary font-bold"># 核心内容</span></p>
              <p className="mb-4">通过 InfiniteTalk Studio 的深度神经网络，每一帧画面都将被赋予生命。我们的 AI 引擎能够精准捕捉情感波动，将其转化为震撼的视觉效果。</p>
              <p className="mb-4">在这个素材中，我们将重点展示“光影的律动”。注意看镜头在移动时的背景虚化，这是通过我们的高斯模糊算法动态生成的...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
