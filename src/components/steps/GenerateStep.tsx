import { Play, SkipBack, SkipForward, Pause, Volume2, Settings, Maximize2, Monitor, Film, Image, Share2, Rocket, CloudUpload, Globe, Activity, Terminal, Download } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function GenerateStep() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Left Column: Progress & Stats */}
      <section className="lg:col-span-5 space-y-6">
        <div className="glass-panel p-10 rounded-3xl border-0 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              正在渲染
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                  className="text-black/5"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeDasharray={553}
                  strokeDashoffset={553 * (1 - 0.85)}
                  strokeLinecap="round"
                  className="text-primary transition-all duration-1000 shadow-[0_0_20px_rgba(0,113,227,0.3)]"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold font-headline text-primary">85%</span>
                <span className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mt-2">已完成</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-headline">正在合成视频帧</h3>
              <p className="text-sm text-on-surface-variant font-medium">预计剩余时间: <span className="text-primary">00:45</span></p>
            </div>

            <div className="w-full grid grid-cols-3 gap-4 pt-8 border-t border-black/5">
              <div className="text-center">
                <div className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">分辨率</div>
                <div className="text-sm font-bold">4K UHD</div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">帧率</div>
                <div className="text-sm font-bold">60 FPS</div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">引擎</div>
                <div className="text-sm font-bold">AI v3.2</div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10 flex gap-4 items-center">
          <div className="bg-primary/10 p-2 rounded-xl text-primary">
            <Rocket size={20} />
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed font-medium">
            正在使用云端 GPU 集群进行加速渲染，视频生成后将自动进入发布环节。
          </p>
        </div>
      </section>

      {/* Right Column: Logs & Preview */}
      <section className="lg:col-span-7 space-y-6">
        <div className="glass-panel rounded-3xl overflow-hidden aspect-video relative border-0 shadow-2xl bg-black/5 flex items-center justify-center">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="https://picsum.photos/seed/render/1280/720" 
              alt="Rendering Preview" 
              className="w-full h-full object-cover blur-sm"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
              <Activity size={32} className="text-white animate-pulse" />
            </div>
            <span className="text-white font-bold font-headline tracking-widest text-sm drop-shadow-md">实时渲染预览中...</span>
          </div>
        </div>

        {/* Detailed Logs */}
        <div className="glass-panel rounded-3xl p-6 border-0 h-[280px] flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold font-headline flex items-center gap-2">
              <Terminal size={16} className="text-primary" /> 渲染日志
            </h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] text-on-surface-variant font-bold uppercase">Live</span>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto custom-scrollbar font-mono text-[11px] space-y-2 pr-2">
            <p className="text-primary/80">[14:20:01] 初始化云端渲染引擎...</p>
            <p className="text-on-surface-variant">[14:20:03] 加载素材: video_source_01.mp4</p>
            <p className="text-on-surface-variant">[14:20:05] 应用 AI 对口型算法 (强度: 85%)</p>
            <p className="text-on-surface-variant">[14:20:10] 合成音频轨道: voiceover_final.wav</p>
            <p className="text-on-surface-variant">[14:20:15] 正在处理第 4500/6200 帧...</p>
            <p className="text-on-surface-variant">[14:20:20] 正在应用色彩校正与滤镜...</p>
            <p className="text-primary animate-pulse">[14:20:25] 正在进行最后的编码输出...</p>
            <p className="text-on-surface-variant/40 italic">[14:20:28] 等待并行流写入中...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
