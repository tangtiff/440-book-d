import React, { useState } from 'react';
import { Home, BookOpen, Users, User, MessageCircle, Library, ChevronRight, Bookmark, MessageSquare, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NavItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center space-y-1 transition-colors ${active ? 'text-[#5A5A40]' : 'text-[#8E8B82]'}`}
  >
    <Icon size={24} strokeWidth={active ? 2.5 : 2} />
    <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
  </button>
);

const FeatureCard = ({ title, description, icon: Icon }: { title: string, description: string, icon: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-3xl border border-[#E8E4DE] shadow-sm"
  >
    <div className="w-12 h-12 bg-[#F5F2ED] rounded-2xl flex items-center justify-center mb-4 text-[#5A5A40]">
      <Icon size={24} />
    </div>
    <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
    <p className="text-[#6B665F] text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="px-6 py-8 flex justify-between items-center max-w-2xl mx-auto">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-[#2D2A26]">book'd</h1>
        <div className="flex space-x-4">
          <button className="p-2 rounded-full bg-[#F5F2ED] text-[#5A5A40]">
            <Plus size={20} />
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="font-serif text-5xl leading-tight font-medium">
              Read between <br />
              <span className="italic text-[#5A5A40]">the lines,</span> together.
            </h2>
            <p className="text-[#6B665F] text-lg leading-relaxed max-w-md">
              The first reading app where your thoughts live inside the sentences. Join book clubs and share your journey in real-time.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-[#5A5A40] text-white py-4 px-6 rounded-2xl flex items-center justify-center space-x-3 shadow-lg shadow-[#5A5A40]/10"
            >
              <Library size={20} />
              <span className="font-medium">My Bookshelf</span>
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-white border-2 border-[#5A5A40] text-[#5A5A40] py-4 px-6 rounded-2xl flex items-center justify-center space-x-3"
            >
              <MessageCircle size={20} />
              <span className="font-medium">Message a Friend</span>
            </motion.button>
          </div>
        </section>

        {/* Reading Preview / Feature Highlight */}
        <section className="relative">
          <div className="bg-[#F5F2ED] rounded-[32px] p-8 overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8E8B82]">
                <Bookmark size={12} />
                <span>Currently Reading: The Great Gatsby</span>
              </div>
              
              <div className="font-serif text-2xl leading-relaxed text-[#2D2A26] relative">
                "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since."
                
                {/* Simulated In-Sentence Comment */}
                <motion.div 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -right-4 top-0 translate-x-full hidden md:block"
                >
                  <div className="bg-white p-3 rounded-2xl shadow-xl border border-[#E8E4DE] w-48">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700">JD</div>
                      <span className="text-[10px] font-bold text-[#2D2A26]">Jane Doe</span>
                    </div>
                    <p className="text-[11px] text-[#6B665F]">This opening always gives me chills. So much foreshadowing!</p>
                  </div>
                </motion.div>

                {/* Mobile Comment Indicator */}
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[#5A5A40] text-white rounded-full text-[10px] ml-2 cursor-pointer shadow-sm">
                  1
                </span>
              </div>

              <div className="font-serif text-2xl leading-relaxed text-[#2D2A26]/40">
                "Whenever you feel like criticizing anyone," he told me, "just remember that all the people in this world haven't had the advantages that you've had."
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FeatureCard 
            icon={MessageSquare}
            title="Sentence-Level Chat"
            description="Highlight any sentence to start a conversation. Your friends see your thoughts exactly where they happened."
          />
          <FeatureCard 
            icon={Users}
            title="Private Book Clubs"
            description="Create exclusive spaces for your reading groups. Sync your progress and discuss chapters together."
          />
        </section>

        {/* Book Clubs Section */}
        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <h3 className="font-serif text-2xl font-semibold">Your Clubs</h3>
            <button className="text-sm font-medium text-[#5A5A40] flex items-center">
              View all <ChevronRight size={16} />
            </button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
            {[
              { name: "Midnight Readers", members: 12, color: "bg-indigo-100 text-indigo-700" },
              { name: "Classic Souls", members: 8, color: "bg-amber-100 text-amber-700" },
              { name: "Sci-Fi Collective", members: 24, color: "bg-blue-100 text-blue-700" }
            ].map((club, i) => (
              <div key={i} className="flex-shrink-0 w-40 p-5 rounded-3xl bg-white border border-[#E8E4DE] space-y-3">
                <div className={`w-10 h-10 rounded-2xl ${club.color} flex items-center justify-center font-bold`}>
                  {club.name[0]}
                </div>
                <div>
                  <h4 className="font-medium text-sm">{club.name}</h4>
                  <p className="text-[11px] text-[#8E8B82]">{club.members} members</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-[#E8E4DE] px-8 py-4 z-50">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <NavItem 
            icon={Home} 
            label="Home" 
            active={activeTab === 'home'} 
            onClick={() => setActiveTab('home')} 
          />
          <NavItem 
            icon={BookOpen} 
            label="Book" 
            active={activeTab === 'book'} 
            onClick={() => setActiveTab('book')} 
          />
          <NavItem 
            icon={Users} 
            label="Friend" 
            active={activeTab === 'friend'} 
            onClick={() => setActiveTab('friend')} 
          />
          <NavItem 
            icon={User} 
            label="Account" 
            active={activeTab === 'account'} 
            onClick={() => setActiveTab('account')} 
          />
        </div>
      </nav>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
