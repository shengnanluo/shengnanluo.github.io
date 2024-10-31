import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ChevronRight, Heart, Instagram, Twitter } from 'lucide-react';

function Component() {
  const [activeTab, setActiveTab] = useState('about');

  const tabContent = {
    about: (
      <>
        <h3 className="text-2xl font-bold mb-4">关于一二布布</h3>
        <p>一二布布是一只充满活力的小猫咪...</p>
      </>
    ),
    features: (
      <>
        <h3 className="text-2xl font-bold mb-4">一二布布的特点</h3>
        <ul>
          {['毛色: 橘白相间', '性格: 活泼好动', '爱好: 追逐玩具、晒太阳'].map((feature, i) => (
            <motion.li key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <ChevronRight /> {feature}
            </motion.li>
          ))}
        </ul>
      </>
    ),
    gallery: (
      <>
        <h3 className="text-2xl font-bold mb-4">一二布布的日常</h3>
        <div className="gallery">
          {['玩耍', '睡觉', '吃饭'].map((activity, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="gallery-item">
              <img src="/placeholder.svg" alt={`${activity}`} />
              <p>{activity}</p>
            </motion.div>
          ))}
        </div>
      </>
    ),
  };

  return (
    <div className="min-h-screen">
      <header className="header">
        <h1>一二布布</h1>
        <div>
          <a href="#" className="icon-link"><Instagram /></a>
          <a href="#" className="icon-link"><Twitter /></a>
        </div>
      </header>
      <main className="main">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2>遇见可爱的一二布布</h2>
          <p>一只充满魅力的小猫咪，正在征服互联网</p>
        </motion.div>
        <div className="tab-content">
          <img src="/placeholder.svg" alt="一二布布" />
          <div>
            {['about', 'features', 'gallery'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}>{tab}</button>
            ))}
            {tabContent[activeTab]}
          </div>
        </div>
        <motion.button className="follow-button">
          <Heart /> 关注一二布布
        </motion.button>
      </main>
      <footer className="footer">
        <p>© 2024 一二布布粉丝团. 保留所有权利.</p>
      </footer>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Component />);
