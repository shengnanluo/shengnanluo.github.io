import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Heart, Instagram, Twitter } from 'lucide-react';

function Component() {
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
                  className={flex-1 py-2 px-4 text-sm font-medium rounded-full transition-colors ${
                    activeTab === tab ? 'bg-white text-purple-600' : 'text-white hover:bg-white hover:bg-opacity-10'
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {active
