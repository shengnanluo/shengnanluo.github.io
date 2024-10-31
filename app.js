// app.js

// 从 Skypack CDN 引入 React、Framer Motion 和 Lucide-React
import { useState } from 'https://cdn.skypack.dev/react';
import { motion } from 'https://cdn.skypack.dev/framer-motion';
import { ChevronRight, Heart, Instagram, Twitter } from 'https://cdn.skypack.dev/lucide-react';

// React 组件代码
export default function Component() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white font-sans">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold tracking-tight">一二布布</h1>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-300 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">遇见可爱的一二布布</h2>
          <p className="text-xl text-yellow-200">一只充满魅力的小猫咪，正在征服互联网</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="一二布布的特写"
              className="rounded-full w-full max-w-md mx-auto shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-xl"
          >
            <div className="flex mb-6">
              {['about', 'features', 'gallery'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-4 text-sm font-medium rounded-full transition-colors ${
                    activeTab === tab ? 'bg-white text-purple-600' : 'text-white hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {activeTab === 'about' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">关于一二布布</h3>
                <p className="text-lg mb-4">
                  一二布布是一只充满活力和魅力的小猫咪。她那柔软的橘白相间的毛发和明亮的大眼睛，总是能够吸引所有人的目光。
                </p>
                <p className="text-lg">
                  无论是在阳光下慵懒地晒太阳，还是活跃地追逐玩具，一二布布总是散发着无限的可爱魅力。
                </p>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">一二布布的特点</h3>
                <ul className="space-y-2">
                  {['毛色: 橘白相间', '性格: 活泼好动', '爱好: 追逐玩具、晒太阳', '特长: 会做各种可爱的表情'].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center text-lg"
                    >
                      <ChevronRight className="h-5 w-5 mr-2 text-yellow-300" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">一二布布的日常</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['玩耍', '睡觉', '吃饭', '撒娇'].map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="relative group"
                    >
                      <img
                        src="/placeholder.svg?height=150&width=150"
                        alt={`一二布布${activity}的照片`}
                        className="rounded-lg w-full h-auto transform transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                        <p className="text-white text-sm font-medium">{activity}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-700 font-bold py-3 px-8 rounded-full text-lg transition-colors flex items-center mx-auto">
            <Heart className="mr-2" /> 关注一二布布
          </button>
        </motion.div>
      </main>

      <footer className="mt-12 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <p>© 2024 一二布布粉丝团. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  );
}

// 渲染到页面
import { createRoot } from 'https://cdn.skypack.dev/react-dom/client';

const root = document.getElementById('root');
createRoot(root).render(<Component />);

