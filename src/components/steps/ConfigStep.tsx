import { Maximize, Music, Sliders, UserCheck, Subtitles, Info, Trash2, Lock, Plus, Video, Upload, FileVideo, Rocket } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useState } from 'react';

const RESOLUTIONS = [
  { id: '1', label: '480P 标清', res: '854 × 480', ratio: '16:9 / 9:16' },
  { id: '2', label: '720P 高清', res: '1280 × 720', ratio: '16:9 / 9:16' },
  { id: '3', label: '1080P 全高清', res: '1920 × 1080', ratio: '16:9 / 9:16', recommended: true },
];

const ASPECT_RATIOS = [
  { id: 'landscape', label: '横屏 16:9', desc: '适合视频号、B站、网页' },
  { id: 'portrait', label: '竖屏 9:16', desc: '适合抖音、快手、小红书' },
];

const FPS_OPTIONS = ['24 FPS', '30 FPS', '60 FPS'];

const SUBTITLE_STYLES = [
  { id: '1', label: '简约白', active: true },
  { id: '2', label: '经典黄' },
  { id: '3', label: '描边黑' },
  { id: '4', label: '动态霓虹' },
];

export default function ConfigStep() {
  const [selectedRes, setSelectedRes] = useState('3');
  const [selectedRatio, setSelectedRatio] = useState('landscape');
  const [selectedFps, setSelectedFps] = useState('30 FPS');
  const [hasUploadedVideo, setHasUploadedVideo] = useState(false);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Left: Settings Panel */}
      <div className="lg:col-span-7 space-y-6">
        {/* Original Video Upload */}
        <section className="glass-panel p-6 rounded-3xl border-0">
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2 font-headline">
            <Video className="text-primary" size={20} /> 原始视频上传
          </h2>
          
          {!hasUploadedVideo ? (
            <div 
              onClick={() => setHasUploadedVideo(true)}
              className="border-2 border-dashed border-black/10 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 hover:bg-white/40 hover:border-primary/30 transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Upload size={32} />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold">点击或拖拽上传原始视频</p>
                <p className="text-[10px] text-on-surface-variant mt-1">支持 MP4, MOV, AVI (最大 500MB)</p>
              </div>
            </div>
          ) : (
            <div className="bg-white/30 p-4 rounded-2xl border border-white/50 flex items-center gap-4">
              <div className="w-20 aspect-video bg-black rounded-lg flex items-center justify-center overflow-hidden">
                <FileVideo className="text-white/50" size={24} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold truncate">original_video_source.mp4</div>
                <div className="text-[10px] text-on-surface-variant">12.5 MB • 00:45</div>
              </div>
              <button 
                onClick={() => setHasUploadedVideo(false)}
                className="p-2 text-on-surface-variant hover:text-error transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          )}
        </section>

        {/* Video Specs */}
        <section className="glass-panel p-6 rounded-3xl border-0">
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2 font-headline">
            <Maximize className="text-primary" size={20} /> 视频规格
          </h2>
          
          <div className="space-y-6">
            {/* Aspect Ratio Selection */}
            <div>
              <label className="text-xs font-bold text-on-surface-variant mb-3 block uppercase tracking-wider">画幅比例</label>
              <div className="grid grid-cols-2 gap-4">
                {ASPECT_RATIOS.map((ratio) => (
                  <button
                    key={ratio.id}
                    onClick={() => setSelectedRatio(ratio.id)}
                    className={cn(
                      "p-4 rounded-2xl border transition-all text-left group",
                      selectedRatio === ratio.id 
                        ? "bg-primary text-white border-transparent shadow-lg" 
                        : "bg-white/30 border-white/50 hover:bg-white/50 text-on-surface"
                    )}
                  >
                    <div className="font-bold text-sm mb-1">{ratio.label}</div>
                    <div className={cn("text-[10px]", selectedRatio === ratio.id ? "text-white/80" : "text-on-surface-variant")}>
                      {ratio.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Resolution Selection */}
            <div>
              <label className="text-xs font-bold text-on-surface-variant mb-3 block uppercase tracking-wider">输出分辨率</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {RESOLUTIONS.map((res) => (
                  <button
                    key={res.id}
                    onClick={() => setSelectedRes(res.id)}
                    className={cn(
                      "p-4 rounded-2xl border transition-all text-left relative overflow-hidden group",
                      selectedRes === res.id 
                        ? "bg-white/50 border-primary shadow-sm" 
                        : "bg-white/20 border-white/30 hover:bg-white/40"
                    )}
                  >
                    {res.recommended && (
                      <div className="absolute top-0 right-0 bg-primary text-white text-[8px] px-2 py-0.5 rounded-bl-lg font-bold">
                        推荐
                      </div>
                    )}
                    <div className="font-bold text-sm">{res.label}</div>
                    <div className="text-[10px] text-on-surface-variant mt-1">{res.res}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* FPS Selection */}
            <div>
              <label className="text-xs font-bold text-on-surface-variant mb-3 block uppercase tracking-wider">输出帧率</label>
              <div className="flex gap-3">
                {FPS_OPTIONS.map((fps) => (
                  <button
                    key={fps}
                    onClick={() => setSelectedFps(fps)}
                    className={cn(
                      "px-6 py-2 rounded-xl border text-xs font-bold transition-all",
                      selectedFps === fps 
                        ? "bg-primary text-white border-transparent shadow-md" 
                        : "bg-white/30 border-white/50 hover:bg-white/50 text-on-surface"
                    )}
                  >
                    {fps}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Audio Mixing */}
        <section className="glass-panel p-6 rounded-3xl border-0">
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2 font-headline">
            <Music className="text-primary" size={20} /> 背景音乐与混音
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white/30 p-4 rounded-2xl border border-white/50">
              <Music className="text-primary" size={18} />
              <div className="flex-1">
                <div className="text-xs text-on-surface-variant font-bold mb-1">轨道 1: 环境音乐 (Cyberpunk Ambient)</div>
                <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4" />
                </div>
              </div>
              <span className="text-xs font-headline font-bold text-primary">75%</span>
              <button className="text-on-surface-variant hover:text-error transition-colors"><Trash2 size={14} /></button>
            </div>
            <div className="flex items-center gap-4 bg-white/30 p-4 rounded-2xl border border-white/50">
              <Sliders className="text-primary" size={18} />
              <div className="flex-1">
                <div className="text-xs text-on-surface-variant font-bold mb-1">轨道 2: 人声音轨 (Voiceover)</div>
                <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-full" />
                </div>
              </div>
              <span className="text-xs font-headline font-bold text-primary">100%</span>
              <button className="text-on-surface-variant"><Lock size={14} /></button>
            </div>
            <button className="w-full py-3 border-2 border-dashed border-black/10 rounded-2xl text-sm text-on-surface-variant font-bold hover:bg-white/40 transition-all flex items-center justify-center gap-2">
              <Plus size={16} /> 添加新的音轨
            </button>
          </div>
        </section>

        {/* Lipsync Algorithm */}
        <section className="glass-panel p-6 rounded-3xl border-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold flex items-center gap-2 font-headline">
              <UserCheck className="text-primary" size={20} /> 对口型算法强度
            </h2>
            <span className="text-primary font-headline font-bold">85%</span>
          </div>
          <div className="bg-white/30 p-6 rounded-2xl border border-white/50">
            <input className="w-full h-1 bg-black/5 rounded-full appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" defaultValue={85} />
            <div className="flex justify-between mt-4">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">自然 (Natural)</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">精准 (Precise)</span>
            </div>
          </div>
        </section>
      </div>

      {/* Right: Preview Panel */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="glass-panel p-6 rounded-3xl border-0">
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2 font-headline">
            <Subtitles className="text-primary" size={20} /> 字幕预览
          </h2>
          <div className="relative group aspect-video bg-white/10 rounded-2xl overflow-hidden flex items-center justify-center shadow-inner">
            <img
              className="w-full h-full object-cover"
              src="https://picsum.photos/seed/future/800/450"
              alt="Preview"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-10 left-0 right-0 px-8 text-center">
              <p className="text-xl font-bold text-white drop-shadow-lg tracking-wide bg-black/30 backdrop-blur-md py-2 px-4 rounded-xl border border-white/10">
                欢迎来到 AI 视频创作的未来。
              </p>
            </div>
            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-lg text-[10px] font-bold font-headline shadow-lg">
              PREVIEW
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">字幕样式预设</label>
            <div className="grid grid-cols-2 gap-3">
              {SUBTITLE_STYLES.map((style) => (
                <button
                  key={style.id}
                  className={cn(
                    "py-3 rounded-xl border text-xs font-bold transition-all",
                    style.active 
                      ? "bg-primary text-white border-primary shadow-sm" 
                      : "bg-white/30 border-white/50 text-on-surface-variant hover:bg-white/50"
                  )}
                >
                  {style.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-primary/10 p-6 rounded-3xl border border-primary/20 flex gap-4 items-start">
          <div className="bg-primary/20 p-2 rounded-xl">
            <Info className="text-primary" size={20} />
          </div>
          <div>
            <div className="text-sm font-bold text-primary mb-1">预计渲染时间: 2分30秒</div>
            <p className="text-xs text-on-surface-variant leading-relaxed font-medium">您的配置将采用 GPU 硬件加速，生成后的视频将自动保存至“创作历史”中。</p>
          </div>
        </div>

        {/* Generate Now Button */}
        <button className="w-full py-4 rounded-2xl bg-primary text-white font-bold text-lg shadow-[0_8px_24px_rgba(0,113,227,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group">
          <Rocket size={24} className="group-hover:animate-bounce" />
          立即生成视频
        </button>
      </div>
    </div>
  );
}
