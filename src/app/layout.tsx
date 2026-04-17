import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "InfiniteTalk Studio",
  description: "一个专业级的AI视频创作工作站，支持素材提取、配音定制、参数配置及云端渲染。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="https://picsum.photos/seed/infinite/32/32" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
