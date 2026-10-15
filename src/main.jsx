import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const A = '/assets/';
const projects = [
  { no: '01', category: '品牌视觉 · 印刷设计', title: '城市与文化的视觉切片', image: 'work-image18.jpeg', size: 'wide', year: '2025' },
  { no: '02', category: 'UI / UX · 概念设计', title: '春分 — 花植生活方式', image: 'work-image9.jpeg', size: 'tall', year: '2025' },
  { no: '03', category: '数字产品 · 界面设计', title: '让日常多一点自然', image: 'work-image10.jpeg', size: 'tall', year: '2025' },
  { no: '04', category: '视觉传达 · 展览海报', title: '棱镜艺术中心', image: 'work-image19.jpeg', size: 'wide', year: '2024' },
  { no: '05', category: '视觉系统 · 主题设计', title: '夜色中的数字漫游', image: 'work-image6.png', size: 'small', year: '2024' },
  { no: '06', category: '品牌传播 · 宣传物料', title: '人工智能与未来想象', image: 'work-image1.jpeg', size: 'small', year: '2024' },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }
function Header() {
  return <header className="nav"><a className="wordmark" href="#home">LX<span>.</span></a><nav aria-label="主导航"><a href="#about">关于</a><a href="#work">作品</a><a href="#strengths">能力</a></nav><a className="nav-cta" href="mailto:2020836983@qq.com">联系我 <Arrow /></a></header>;
}
function Hero() {
  return <section className="hero" id="home">
    <video className="hero-video" autoPlay muted loop playsInline poster={`${A}work-image18.jpeg`}><source src={`${A}portfolio-reel.mp4`} type="video/mp4" /></video>
    <div className="hero-shade" /> <Header />
    <div className="hero-copy"><p className="eyebrow light"><i /> 视觉设计师 · AI 创作者 · 成都</p><h1>让想法<br/><em>成为视觉。</em></h1><div className="hero-bottom"><p>在设计与技术之间，寻找清晰、<br/>真诚且有温度的表达。</p><a href="#work" className="round-link" aria-label="浏览作品">↓</a></div></div>
    <div className="hero-index"><span>独立创作 / 2024—26</span><span>向下探索&nbsp; ↓</span></div>
  </section>;
}
function About() {
  return <section className="about section-wrap" id="about">
    <div className="section-kicker"><span>01 / 关于我</span><span>ABOUT</span></div>
    <div className="about-grid">
      <div className="portrait-wrap"><img src={`${A}resume-image1.jpeg`} alt="李想个人简历照片"/><div className="portrait-note">成都 · 中国<br/>持续创作中</div></div>
      <div className="about-text"><p className="eyebrow"><i/> 一点关于我</p><h2>你好，我是李想。<br/><em>一个用视觉思考的人。</em></h2><p className="intro">就读于数字媒体技术专业，关注平面设计、数字产品与 AI 创作。擅长将想法整理成有秩序、有情绪的视觉语言，也乐于在新的工具与媒介中持续探索。</p><div className="facts"><div><span>教育背景</span><strong>乐山师范学院 · 数字媒体技术</strong><small>2023 — 2027 · GPA 3.32 / 专业前 30%</small></div><div><span>实践经历</span><strong>平面设计 / 活动执行</strong><small>成都星合 · 2026 至今　／　成都熊猫 · 2025</small></div></div><div className="contact-line"><a href="mailto:2020836983@qq.com">2020836983@qq.com <Arrow /></a><a href="tel:+8613688327179">+86 136 8832 7179</a></div></div>
    </div>
    <div className="stats"><div><strong>06<span>+</span></strong><small>作品主题</small></div><div><strong>03<span>年</span></strong><small>设计学习与实践</small></div><div><strong>多<span>维</span></strong><small>从平面到数字体验</small></div><div className="stats-note">保持好奇，持续<br/>把想法做出来。</div></div>
  </section>;
}
function Work() {
  return <section className="work section-wrap" id="work"><div className="section-kicker"><span>02 / 精选项目</span><span>SELECTED WORKS · 2024—26</span></div><div className="work-heading"><h2>一些认真做过的<br/><em>视觉练习。</em></h2><p>平面、界面与数字内容。<br/>每个项目都是一次新的观察。</p></div><div className="project-grid">{projects.map(p=><article className={`project ${p.size}`} key={p.no}><a href={`${A}${p.image}`} target="_blank" rel="noreferrer" aria-label={`查看${p.title}`}><div className="project-image"><img src={`${A}${p.image}`} alt={p.title} loading="lazy"/><span className="project-open"><Arrow/></span></div><div className="project-meta"><span>{p.no}　/　{p.category}</span><span>{p.year}</span></div><h3>{p.title}</h3></a></article>)}</div><p className="work-footnote">作品图片来自个人作品集材料 · 点击图片可查看原图</p></section>;
}
const skills = [
  ['01', '视觉表达', '色彩、版式与图形语言', '将信息梳理成清晰、有记忆点的平面视觉。'],
  ['02', '数字体验', '界面 · 动效 · 影像', '理解从界面布局到动态叙事的多种媒介表达。'],
  ['03', 'AI 创作', '生成式工具 · 创意探索', '把 AI 工具融入灵感探索与视觉制作流程。'],
  ['04', '协作落地', '沟通 · 执行 · 细节', '有活动与实习执行经验，关注交付质量与团队协作。'],
];
function Strengths() {
  return <section className="strengths section-wrap" id="strengths"><div className="section-kicker"><span>03 / 我的方式</span><span>WHAT I BRING</span></div><div className="strength-intro"><p className="eyebrow"><i/> 能力与习惯</p><h2>从一个好问题，<br/><em>开始好的设计。</em></h2></div><div className="skill-grid">{skills.map(s=><article className="skill-card" key={s[0]}><div><span>{s[0]}</span><span className="skill-mark">✳</span></div><h3>{s[1]}</h3><p className="skill-label">{s[2]}</p><p>{s[3]}</p></article>)}</div><div className="tool-row"><span>常用工具</span><p>Photoshop　·　Illustrator　·　Figma　·　After Effects　·　Premiere　·　C4D　·　AI 工具</p></div></section>;
}
function Contact() {
  return <footer className="contact" id="contact"><div className="contact-inner"><div className="section-kicker"><span>04 / 保持联系</span><span>LET’S MAKE SOMETHING</span></div><p className="eyebrow light"><i/> 欢迎交流合作与实习机会</p><h2>下一个好想法，<br/><em>一起完成。</em></h2><a className="email-button" href="mailto:2020836983@qq.com">给我写封邮件 <Arrow /></a><div className="footer-bottom"><a href="tel:+8613688327179">+86 136 8832 7179</a><span>成都 · 中国</span><span>© 2026 李想</span><a href="#home">回到顶部 ↑</a></div></div><div className="contact-deco">LX</div></footer>;
}
function App(){return <><Hero/><main><About/><Work/><Strengths/></main><Contact/></>;}

createRoot(document.getElementById('root')).render(<App/>);
