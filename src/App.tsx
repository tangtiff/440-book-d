import React, { useState } from 'react';
import { Home, BookOpen, Users, User, MessageCircle, Library, ChevronRight, Bookmark, MessageSquare, Plus, UserPlus, Circle, Highlighter, Menu, Smile, ArrowLeft, Heart, Search, List, HelpCircle, Globe } from 'lucide-react';
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

const HomePage = ({ onMessageFriend, onViewBookshelf }: { onMessageFriend: () => void, onViewBookshelf: () => void }) => (
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
          onClick={onViewBookshelf}
          whileTap={{ scale: 0.98 }}
          className="flex-1 bg-[#5A5A40] text-white py-4 px-6 rounded-2xl flex items-center justify-center space-x-3 shadow-lg shadow-[#5A5A40]/10"
        >
          <Library size={20} />
          <span className="font-medium">My Bookshelf</span>
        </motion.button>
        <motion.button 
          onClick={onMessageFriend}
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
);

const CommunityPage = ({ onChat }: { onChat: (name: string) => void }) => (
  <main className="max-w-2xl mx-auto px-6 space-y-10">
    {/* Friends Section */}
    <section className="space-y-6">
      <h2 className="font-serif text-2xl italic text-[#2D2A26]">friends</h2>
      <div className="space-y-4">
        {[
          { name: "sarah", status: "online", reading: "pug life, ch 12", color: "bg-rose-100 text-rose-700" },
          { name: "Bob", status: "online", reading: null, color: "bg-sky-100 text-sky-700" },
          { name: "Bill", status: "offline", reading: null, color: "bg-stone-200 text-stone-700" }
        ].map((friend, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => onChat(friend.name)}
            className="flex items-center justify-between p-4 bg-white rounded-3xl border border-[#E8E4DE] shadow-sm cursor-pointer hover:bg-[#FDFCFB] transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-full ${friend.color} flex items-center justify-center font-bold text-lg`}>
                {friend.name[0].toUpperCase()}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-[#2D2A26]">{friend.name},</span>
                  <span className={`text-sm font-bold ${friend.status === 'online' ? 'text-[#5A5A40]' : 'text-[#8E8B82]'}`}>
                    {friend.status}
                  </span>
                </div>
                {friend.reading && (
                  <p className="text-sm text-[#6B665F] italic">{friend.reading}</p>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 text-[#8E8B82] hover:text-[#5A5A40] transition-colors">
                <MessageSquare size={20} />
              </button>
              <Circle size={12} fill={friend.status === 'online' ? '#5A5A40' : '#8E8B82'} className={friend.status === 'online' ? 'text-[#5A5A40]' : 'text-[#8E8B82]'} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Joined Bookclubs Section */}
    <section className="space-y-6">
      <h2 className="font-serif text-2xl italic text-[#2D2A26]">joined bookclubs</h2>
      <div className="space-y-4">
        {[
          { name: "Midnight Readers", members: 12, color: "bg-indigo-100 text-indigo-700" },
          { name: "Classic Souls", members: 8, color: "bg-amber-100 text-amber-700" },
          { name: "Sci-Fi Collective", members: 24, color: "bg-blue-100 text-blue-700" }
        ].map((club, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (i + 3) * 0.1 }}
            className="flex items-center justify-between p-4 bg-white rounded-3xl border border-[#E8E4DE] shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-full ${club.color} flex items-center justify-center font-bold text-lg`}>
                {club.name[0]}
              </div>
              <div>
                <p className="font-medium text-[#2D2A26]">{club.name}</p>
                <p className="text-sm text-[#6B665F]">{club.members} members</p>
              </div>
            </div>
            <button className="p-2 text-[#5A5A40] hover:bg-[#F5F2ED] rounded-full transition-colors">
              <ChevronRight size={24} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  </main>
);

const BookshelfPage = ({ onContinue, onAdd }: { onContinue: () => void, onAdd: () => void }) => (
  <main className="max-w-2xl mx-auto px-6 space-y-8 pb-24">
    <div className="space-y-6">
      {/* Add New Book Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={onAdd}
        className="flex items-center space-x-6 p-4 cursor-pointer group"
      >
        <div className="w-32 h-44 bg-white border-2 border-dashed border-[#2D2A26]/30 rounded-lg flex items-center justify-center group-hover:border-[#5A5A40] group-hover:bg-[#F5F2ED] transition-all">
          <Plus size={48} className="text-[#2D2A26]/30 group-hover:text-[#5A5A40]" />
        </div>
        <div className="space-y-3">
          <h3 className="font-serif text-2xl font-bold text-[#2D2A26]/40 group-hover:text-[#5A5A40]">Add New Book</h3>
        </div>
      </motion.div>

      {[
        { 
          title: "Fahrenheit 451", 
          action: "Continue reading", 
          icon: <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-orange-500"><Plus size={40} className="rotate-45" /></motion.div>,
          bgColor: "bg-orange-50"
        },
        { 
          title: "To Kill A Mockingbird", 
          action: "Continue reading", 
          icon: <div className="text-emerald-600"><Library size={40} /></div>,
          bgColor: "bg-emerald-50"
        },
        { 
          title: "Book Thief", 
          action: "Read Again", 
          icon: <div className="text-stone-400"><Bookmark size={40} /></div>,
          bgColor: "bg-stone-100"
        }
      ].map((book, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center space-x-6 p-4"
        >
          <div className={`w-32 h-44 ${book.bgColor} rounded-lg border-2 border-[#2D2A26] flex items-center justify-center shadow-[4px_4px_0px_0px_#2D2A26]`}>
            {book.icon}
          </div>
          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-bold text-[#2D2A26]">{book.title}</h3>
            <button 
              onClick={() => (book.action === "Continue reading" || book.action === "Read Again") && onContinue()}
              className="px-6 py-2 border-2 border-[#2D2A26] rounded-md font-medium text-sm hover:bg-[#F5F2ED] transition-colors shadow-[2px_2px_0px_0px_#2D2A26] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              {book.action}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </main>
);

const ReadingPage = () => {
  const [showComments, setShowComments] = useState(true);
  const [showVisibilityPopup, setShowVisibilityPopup] = useState(false);
  const [visibility, setVisibility] = useState('both'); // 'friends', 'bookclub', 'both'

  return (
    <main className="max-w-2xl mx-auto px-6 space-y-10 relative">
      <div className="space-y-12 py-4">
        <div className="space-y-8">
          <p className="font-serif text-3xl text-[#2D2A26] leading-relaxed">
            Once upon a time ...
          </p>
          
          {/* Wavy Lines with Highlights */}
          <div className="space-y-12">
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#2D2A26]/10 to-transparent rounded-full" />
            
            <div className="relative">
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#2D2A26]/10 to-transparent rounded-full" />
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-2 left-0 h-4 bg-yellow-200/60 -z-10 rounded-sm"
              />
            </div>

            <div className="relative pt-8">
              <motion.button 
                onClick={() => setShowComments(true)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -top-4 left-1/4 -translate-x-1/2 z-10 cursor-pointer"
              >
                <div className="bg-white p-2 rounded-xl shadow-lg border border-[#E8E4DE] flex items-center space-x-2">
                  <MessageSquare size={16} className="text-[#5A5A40]" />
                  <span className="text-[10px] font-bold text-[#5A5A40]">3 COMMENTS</span>
                </div>
              </motion.button>
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#2D2A26]/10 to-transparent rounded-full" />
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '45%' }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-4 bg-yellow-200/60 -z-10 rounded-sm"
              />
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#2D2A26]/10 to-transparent rounded-full" />
          </div>
        </div>

        {/* Page Controls */}
        <div className="flex items-center justify-between pt-12 border-t border-[#E8E4DE]">
          <button className="p-2 text-[#2D2A26] hover:bg-[#F5F2ED] rounded-full transition-colors">
            <ChevronRight size={24} className="rotate-180" />
          </button>
          <span className="font-serif italic text-[#8E8B82]">Pg. 1</span>
          <button className="p-2 text-[#2D2A26] hover:bg-[#F5F2ED] rounded-full transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Comments Overlay */}
      <AnimatePresence>
        {showComments && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowComments(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[40px] border-t-4 border-[#2D2A26] z-[70] max-h-[80vh] flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="w-12 h-1.5 bg-[#E8E4DE] rounded-full mx-auto mb-6" />
                <h3 className="font-serif text-3xl font-bold text-center mb-8 uppercase tracking-widest">Comment</h3>
                
                <div className="flex-1 overflow-y-auto no-scrollbar space-y-8 pb-24">
                  {/* Comment 1 */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex space-x-3">
                        <div className="w-10 h-10 rounded-full bg-amber-100 border-2 border-[#2D2A26] flex items-center justify-center font-bold">U1</div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#8E8B82]">USER1</p>
                          <p className="font-serif text-2xl font-medium text-[#2D2A26]">Yo Plot twist!</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center text-[#2D2A26]">
                        <motion.button whileTap={{ scale: 0.8 }}>
                          <Heart size={20} className="fill-red-400 text-red-400" />
                        </motion.button>
                        <span className="text-[10px] font-bold">1000</span>
                      </div>
                    </div>
                    
                    <div className="ml-12 space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-sky-100 border border-[#2D2A26] flex items-center justify-center text-[8px] font-bold">U2</div>
                        <span className="font-serif text-lg italic text-[#6B665F]">Insane</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 border border-[#2D2A26] flex items-center justify-center text-[8px] font-bold">U3</div>
                        <span className="font-serif text-lg italic text-[#6B665F]">O.M.G</span>
                      </div>
                      
                      <div className="flex space-x-2 pt-2">
                        <button className="px-4 py-1 border-2 border-[#2D2A26] rounded-md text-[10px] font-bold uppercase tracking-wider hover:bg-[#F5F2ED] transition-colors shadow-[2px_2px_0px_0px_#2D2A26]">Reply</button>
                        <button className="px-4 py-1 border-2 border-[#2D2A26] rounded-md text-[10px] font-bold uppercase tracking-wider hover:bg-[#F5F2ED] transition-colors shadow-[2px_2px_0px_0px_#2D2A26]">Edit</button>
                      </div>
                    </div>
                  </div>

                  {/* Comment 2 */}
                  <div className="flex justify-between items-start">
                    <div className="flex space-x-3">
                      <div className="w-10 h-10 rounded-full bg-stone-100 border-2 border-[#2D2A26] flex items-center justify-center font-bold text-stone-400">U4</div>
                      <div>
                        <p className="font-serif text-2xl font-medium text-[#2D2A26]">This book stinks</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-[#8E8B82]">
                      <Heart size={20} />
                      <span className="text-[10px] font-bold">1</span>
                    </div>
                  </div>
                </div>

                {/* Input Field */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
                      <button 
                        onClick={() => setShowVisibilityPopup(!showVisibilityPopup)}
                        className="p-1 hover:bg-[#E8E4DE] rounded-full transition-colors"
                        title="Who can see this?"
                      >
                        <Users size={20} className="text-[#5A5A40]" />
                      </button>
                    </div>
                    <input 
                      type="text" 
                      placeholder="leave a comment"
                      className="w-full bg-[#F5F2ED] border-2 border-[#2D2A26] rounded-full py-4 pl-14 pr-14 font-serif italic text-lg focus:outline-none shadow-[4px_4px_0px_0px_#2D2A26]"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#2D2A26] text-white rounded-full flex items-center justify-center">
                      <Plus className="rotate-45" size={20} />
                    </button>

                    {/* Visibility Popup */}
                    <AnimatePresence>
                      {showVisibilityPopup && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute bottom-full left-0 mb-4 bg-white border-2 border-[#2D2A26] rounded-2xl p-4 shadow-[6px_6px_0px_0px_#2D2A26] z-[80] min-w-[200px]"
                        >
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#8E8B82] mb-3">Visible to:</p>
                          <div className="space-y-2">
                            {[
                              { id: 'friends', label: 'Friends', icon: User },
                              { id: 'bookclub', label: 'Bookclub Members', icon: Users },
                              { id: 'both', label: 'Both', icon: Globe }
                            ].map((option) => (
                              <button
                                key={option.id}
                                onClick={() => {
                                  setVisibility(option.id);
                                  setShowVisibilityPopup(false);
                                }}
                                className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                                  visibility === option.id ? 'bg-[#F5F2ED] border border-[#2D2A26]' : 'hover:bg-[#FDFCFB]'
                                }`}
                              >
                                <option.icon size={16} className={visibility === option.id ? 'text-[#5A5A40]' : 'text-[#8E8B82]'} />
                                <span className={`font-serif text-sm ${visibility === option.id ? 'font-bold text-[#2D2A26]' : 'text-[#6B665F]'}`}>
                                  {option.label}
                                </span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

const ChatPage = ({ onBack, name }: { onBack: () => void, name: string }) => {
  const [messages] = useState([
    { id: 1, text: "Hey! Did you finish Chapter 12 yet?", sender: 'other' },
    { id: 2, text: "Almost! Just a few pages left. No spoilers!", sender: 'self' },
    { id: 3, text: "The twist is actually insane though...", sender: 'other' },
  ]);

  return (
    <main className="max-w-2xl mx-auto px-6 flex flex-col h-[75vh]">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar py-8 space-y-16">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex items-end space-x-3 ${msg.sender === 'self' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}
          >
            {/* Avatar - Smiley Face from sketch */}
            <div className="w-10 h-10 rounded-full border-2 border-[#2D2A26] bg-white flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_#2D2A26]">
              <Smile size={24} className="text-[#2D2A26]" />
            </div>
            
            {/* Bubble */}
            <div className={`relative max-w-[70%] p-6 border-2 border-[#2D2A26] shadow-[6px_6px_0px_0px_#2D2A26] bg-white ${
              msg.sender === 'self' 
                ? 'rounded-[28px] rounded-br-none' 
                : 'rounded-[28px] rounded-bl-none'
            }`}>
              <p className="font-serif text-2xl leading-relaxed text-[#2D2A26]">
                {msg.text}
              </p>
              
              {/* Tail - Sketchy triangle */}
              <div className={`absolute bottom-[-2px] w-8 h-8 bg-white border-[#2D2A26] ${
                msg.sender === 'self' 
                  ? 'right-[-12px] border-l-2 border-b-2 rounded-bl-[100%]' 
                  : 'left-[-12px] border-r-2 border-b-2 rounded-br-[100%]'
              }`} />
            </div>
          </div>
        ))}
      </div>

      {/* Input Area - Rectangular box from sketch */}
      <div className="py-10">
        <div className="relative border-4 border-[#2D2A26] rounded-sm bg-white shadow-[8px_8px_0px_0px_#2D2A26] flex items-center px-8 py-5">
          <input 
            type="text" 
            placeholder="Send Message"
            className="flex-1 bg-transparent font-serif italic text-3xl focus:outline-none text-[#2D2A26] placeholder-[#2D2A26]/30"
          />
          <button className="ml-6 text-[#2D2A26] hover:scale-110 transition-transform">
            <ChevronRight size={40} strokeWidth={3} />
          </button>
        </div>
      </div>
    </main>
  );
};

const ContentsPage = ({ onBack, onSearch }: { onBack: () => void, onSearch: () => void }) => {
  const items = [
    "Title", "Dedication", "Prologue", "Chapter One", "Chapter Two", 
    "Chapter Three", "Chapter Four", "Chapter Five", "Chapter Six", 
    "Chapter Seven", "Chapter Eight", "Chapter Nine", "Epilogue", 
    "About the Author", "Bookmarked Pages"
  ];

  return (
    <main className="max-w-2xl mx-auto px-6 pb-24">
      {/* Search Bar */}
      <div className="mb-10">
        <div className="relative border-2 border-[#2D2A26] rounded-full bg-white shadow-[4px_4px_0px_0px_#2D2A26] flex items-center px-6 py-3">
          <Search size={24} className="text-[#2D2A26] mr-4" />
          <input 
            type="text" 
            placeholder="Search Comments"
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            className="flex-1 bg-transparent font-serif text-2xl focus:outline-none text-[#2D2A26] placeholder-[#2D2A26]/50"
          />
        </div>
      </div>

      {/* List */}
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ x: 10 }}
            className="cursor-pointer group"
            onClick={onBack}
          >
            <span className="font-serif text-3xl text-[#2D2A26] group-hover:text-[#5A5A40] transition-colors">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

const ProfilePage = ({ onBack }: { onBack: () => void }) => {
  return (
    <main className="max-w-2xl mx-auto px-6 pb-24">
      {/* Profile Header Section */}
      <div className="flex items-start space-x-8 mb-12">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-2 border-[#2D2A26] bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_#2D2A26] overflow-hidden">
            <Smile size={60} className="text-[#2D2A26]" />
          </div>
          <div className="mt-4 text-left w-full">
            <p className="font-serif text-xl font-bold text-[#2D2A26]">Bio: ~~~</p>
            <p className="font-serif text-xl font-bold text-[#2D2A26]">~~~~~~</p>
          </div>
        </div>
        
        <div className="flex-1 flex justify-around pt-4">
          <div className="text-center">
            <p className="font-serif text-2xl text-[#2D2A26]">Friends</p>
            <p className="font-serif text-3xl font-bold text-[#2D2A26]">20</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl text-[#2D2A26]">Books Read</p>
            <p className="font-serif text-3xl font-bold text-[#2D2A26]">11</p>
          </div>
        </div>
      </div>

      {/* Favorite Books Section */}
      <div className="border-t-2 border-[#2D2A26] pt-8">
        <h3 className="font-serif text-3xl font-bold text-[#2D2A26] mb-10">Favorite Books</h3>
        
        <div className="space-y-12">
          {/* Book 1 */}
          <div className="flex items-center space-x-8">
            <div className="w-24 h-36 border-2 border-[#2D2A26] bg-white shadow-[6px_6px_0px_0px_#2D2A26] flex items-center justify-center relative">
              <div className="absolute left-2 top-0 bottom-0 w-1 border-r border-[#2D2A26]/20" />
              <Smile size={32} className="text-[#2D2A26]/20" />
            </div>
            <span className="font-serif text-3xl text-[#2D2A26] leading-tight max-w-[200px]">
              Diary of a Wimpy Kid
            </span>
          </div>

          {/* Book 2 */}
          <div className="flex items-center space-x-8">
            <div className="w-24 h-36 border-2 border-[#2D2A26] bg-white shadow-[6px_6px_0px_0px_#2D2A26] flex items-center justify-center relative">
              <div className="absolute left-2 top-0 bottom-0 w-1 border-r border-[#2D2A26]/20" />
            </div>
            <span className="font-serif text-3xl text-[#2D2A26] leading-tight">
              Book Thief
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

const AddBooksPage = ({ onBack }: { onBack: () => void }) => {
  const books = [
    { title: "Percy Jackson The Lightning Thief", cover: true },
    { title: "Percy Jackson The Sea of Monsters", cover: true },
    { title: "Percy Jackson The Titan's Curse", cover: true },
    { title: "Percy Jackson The Battle of the Labyrinth", cover: true },
  ];

  return (
    <main className="max-w-2xl mx-auto px-6 pb-24">
      {/* Search Bar */}
      <div className="mb-10">
        <div className="relative border-2 border-[#2D2A26] rounded-full bg-white shadow-[4px_4px_0px_0px_#2D2A26] flex items-center px-6 py-3">
          <Search size={24} className="text-[#2D2A26] mr-4" />
          <input 
            type="text" 
            defaultValue="Percy Jackson"
            placeholder="Search Books"
            className="flex-1 bg-transparent font-serif text-2xl focus:outline-none text-[#2D2A26] placeholder-[#2D2A26]/50"
          />
        </div>
      </div>

      {/* Book List */}
      <div className="space-y-10">
        {books.map((book, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-28 border-2 border-[#2D2A26] bg-white shadow-[4px_4px_0px_0px_#2D2A26] flex items-center justify-center relative">
                <div className="absolute left-2 top-0 bottom-0 w-1 border-r border-[#2D2A26]/20" />
              </div>
              <span className="font-serif text-2xl text-[#2D2A26] leading-tight max-w-[200px]">
                {book.title}
              </span>
            </div>
            
            <button className="px-6 py-2 border-2 border-[#2D2A26] rounded-full font-serif text-xl font-bold text-[#2D2A26] hover:bg-[#F5F2ED] transition-colors shadow-[3px_3px_0px_0px_#2D2A26] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
              + add
            </button>
          </div>
        ))}

        <div className="text-center py-4">
          <span className="font-serif text-2xl text-[#2D2A26]/50 italic">... more</span>
        </div>
      </div>
    </main>
  );
};

const HelpPage = ({ onBack }: { onBack: () => void }) => {
  const helpItems = [
    { icon: Home, text: "Go to home page" },
    { icon: Library, text: "Go to your bookshelf to view your books" },
    { icon: Users, text: "Message friend and add suggested friends" },
    { icon: User, text: "View and edit your profile" },
    { icon: Users, text: "Create a new book club" }, // Using Users for book club as well, or could use a group icon
  ];

  return (
    <main className="max-w-2xl mx-auto px-6 pb-24">
      <div className="space-y-12 mt-8">
        {helpItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-8">
            <div className="w-16 h-16 flex items-center justify-center text-[#2D2A26]">
              <item.icon size={48} strokeWidth={1.5} />
            </div>
            <p className="font-serif text-2xl text-[#2D2A26] leading-tight">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

const CommentSearchResultsPage = ({ onBack }: { onBack: () => void }) => {
  const results = [
    {
      user: "Eloise Bridgerton",
      text: "I wish to be as petty as Edmond Dantes"
    },
    {
      user: "Eloise Bridgerton",
      text: "That relatable moment when you spend 14 years in jail and plan a whole revenge plot"
    },
    {
      user: "Eloise Bridgerton",
      text: "This is epic #slay"
    }
  ];

  return (
    <main className="max-w-2xl mx-auto px-6 pb-24">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative border-2 border-[#2D2A26] rounded-full bg-white shadow-[4px_4px_0px_0px_#2D2A26] flex items-center px-6 py-3">
          <input 
            type="text" 
            defaultValue="Eloise"
            className="flex-1 bg-transparent font-serif text-2xl focus:outline-none text-[#2D2A26]"
          />
          <Search size={24} className="text-[#2D2A26] ml-4" />
        </div>
      </div>

      <p className="font-serif text-xl text-[#2D2A26] mb-8">
        Results for "<span className="bg-[#B4E391] px-1">Eloise</span>" in [book title]
      </p>

      <div className="space-y-6">
        {results.map((result, index) => (
          <div key={index} className="border-2 border-[#2D2A26] rounded-2xl p-6 bg-white shadow-[6px_6px_0px_0px_#2D2A26]">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-serif text-2xl font-bold text-[#2D2A26]">
                <span className="bg-[#B4E391] px-1">Eloise</span> Bridgerton
              </h4>
              <Heart size={24} className="text-[#2D2A26]" />
            </div>
            <p className="font-serif text-2xl text-[#2D2A26] leading-relaxed">
              {result.text}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

const JoinBookClubPage = ({ onBack, onCreateNew }: { onBack: () => void, onCreateNew: () => void }) => {
  const clubs = [
    { name: "[Club Name]", bio: "[Short Bio]", members: 17, mutuals: 5 },
    { name: "[Club Name]", bio: "[Short Bio]", members: 7, mutuals: 3 },
    { name: "[Club Name]", bio: "[Short Bio]", members: 13, mutuals: 10 },
  ];

  return (
    <main className="max-w-2xl mx-auto px-6 pb-24 space-y-6">
      {clubs.map((club, index) => (
        <div key={index} className="border-2 border-[#2D2A26] rounded-xl p-6 bg-white shadow-[6px_6px_0px_0px_#2D2A26] relative">
          <button className="absolute top-6 right-6 flex flex-col items-center text-[#2D2A26] hover:scale-105 transition-transform">
            <Plus size={24} strokeWidth={3} />
            <span className="font-serif text-xl font-bold">Join</span>
          </button>
          
          <div className="space-y-2">
            <h3 className="font-serif text-3xl font-bold text-[#2D2A26]">{club.name}</h3>
            <p className="font-serif text-2xl text-[#2D2A26]">{club.bio}</p>
            <p className="font-serif text-xl text-[#2D2A26] pt-2">
              {club.members} members . {club.mutuals} mutuals
            </p>
          </div>
        </div>
      ))}
    </main>
  );
};

const CreateBookClubPage = ({ onBack }: { onBack: () => void }) => {
  const fields = [
    { label: "Name", value: "Edit | Save" },
    { label: "Book To Discuss", value: "Edit | Save" },
    { label: "Who can Join", value: "Edit | Save" },
    { label: "People Added", value: "Edit | Save" },
  ];

  return (
    <main className="max-w-2xl mx-auto px-6 pb-24 space-y-10 pt-4">
      {fields.map((field, index) => (
        <div key={index} className="flex items-center justify-between group">
          <label className="font-serif text-3xl font-bold text-[#2D2A26] border-b-2 border-[#2D2A26] pb-1">
            {field.label}
          </label>
          <button className="border-2 border-[#2D2A26] rounded-md px-6 py-2 bg-white shadow-[4px_4px_0px_0px_#2D2A26] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2D2A26] transition-all">
            <span className="font-serif text-2xl font-bold text-[#2D2A26] italic">
              {field.value}
            </span>
          </button>
        </div>
      ))}
      
      <div className="pt-12">
        <button 
          onClick={onBack}
          className="w-full border-4 border-[#2D2A26] rounded-2xl py-6 bg-[#5A5A40] text-white shadow-[8px_8px_0px_0px_#2D2A26] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_#2D2A26] transition-all"
        >
          <span className="font-serif text-3xl font-bold uppercase tracking-widest">Create Club</span>
        </button>
      </div>
    </main>
  );
};

const Logo = () => (
  <span className="inline-flex items-center text-[#2D2A26]">
    BOOK
    <span className="relative mx-0.5 inline-flex items-center justify-center -translate-y-2">
      <Bookmark size={16} className="fill-[#5A5A40] text-[#5A5A40]" />
      {/* Tassel */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-0.5 h-7 bg-[#5A5A40] rounded-full">
        {/* Ruffles/Fringes at the end */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex space-x-[1px]">
          <div className="w-[1px] h-2 bg-[#5A5A40] rotate-[-15deg] origin-bottom rounded-full" />
          <div className="w-[1px] h-2.5 bg-[#5A5A40] rounded-full" />
          <div className="w-[1px] h-2 bg-[#5A5A40] rotate-[15deg] origin-bottom rounded-full" />
        </div>
        {/* Knot detail */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#5A5A40] rounded-full border border-[#2D2A26]/20" />
      </div>
    </span>
    D
  </span>
);

const ShowcasePage = ({ onEnterApp }: { onEnterApp: () => void }) => (
  <main className="max-w-4xl mx-auto px-6 py-20 space-y-24">
    <section className="space-y-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="font-serif text-6xl leading-tight font-medium text-[#2D2A26]">
          The Future of <span className="italic text-[#5A5A40]">Social Reading</span>
        </h2>
        <p className="text-[#6B665F] text-xl max-w-2xl mx-auto leading-relaxed">
          Read between the lines, together. The first reading app where your thoughts live inside the sentences. Join book clubs and share your journey in real-time.
        </p>
      </motion.div>
      
      <motion.button
        onClick={onEnterApp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#5A5A40] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#5A5A40]/20"
      >
        Try the Interactive Prototype
      </motion.button>
    </section>

    <div className="grid md:grid-cols-2 gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white p-10 rounded-[3rem] border border-[#E8E4DE] shadow-sm space-y-6"
      >
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center">
          <HelpCircle size={32} />
        </div>
        <h3 className="font-serif text-3xl font-bold text-[#2D2A26]">The Problem</h3>
        <p className="text-[#6B665F] text-lg leading-relaxed">
          Reading is often a deeply personal yet isolated experience. Traditional book clubs require members to reach consensus on book choice, meet at the same time, and attend in person, which limits flexibility and participation. Furthermore, digital readers bury thoughts in sidebars, making it difficult to share spontaneous reactions in the context of the story.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-[#F5F2ED] p-10 rounded-[3rem] border border-[#E8E4DE] shadow-sm space-y-6"
      >
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
          <Smile size={32} />
        </div>
        <h3 className="font-serif text-3xl font-bold text-[#2D2A26]">The Solution</h3>
        <p className="text-[#6B665F] text-lg leading-relaxed">
          BOOK'D is a mobile application that allows users to select books, engage in line-by-line book discussions with friends, and find or join book clubs to meet new people. By bringing conversations directly into the sentences and allowing users to leave "in-line" comments exactly where they were inspired, we create a living, breathing community within the pages of every book.
        </p>
      </motion.div>
    </div>

  </main>
);

const ProcessPage = () => (
  <main className="max-w-4xl mx-auto px-6 py-20 space-y-20">
    <section className="space-y-6 text-center">
      <h2 className="font-serif text-5xl font-bold text-[#2D2A26]">Peek into the Process</h2>
      <p className="text-[#6B665F] text-xl">From sketches to a living prototype.</p>
    </section>

    <section className="grid md:grid-cols-2 gap-8">
      {[
        { 
          title: "User Research Findings", 
          img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800&h=600", 
          desc: "93% of our user research group enjoy reading but 77% report having a busy schedule so they cannot allocate more time to read, let alone discuss. BOOK'D aims to remove that barrier by creating a space where you can discuss at your own time. Additionally, our interviewee participants strongly favored discussions with friends over strangers, leading us to include privacy features for comment visibility." 
        },
        { title: "Sketching Prototype", img: "/sketching.png", desc: "Going through a users experience and emotions helped us understand what tasks are needed to tackle our problem in our prototype. This helped us shape our implementation of features and designs" },
        { title: "Video Concept", img: "/video.png", desc: "We created a video concept that showcases our idea and presents the outlines of our solution within context to an outside audience. Watch here: https://youtube.com/shorts/JbPyvCZnikY?feature=share" },
        { title: "Paper Prototype", img: "/paper_prototype.png", desc: "Created low fidelity paper prototypes to initiate usability testing and heuristic evaluations. After many iterations, we concluded on this design." }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="w-full h-[500px] rounded-[2rem] overflow-hidden border-4 border-[#2D2A26] shadow-[8px_8px_0px_0px_#2D2A26]">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#2D2A26]">{item.title}</h3>
          <p className="text-[#6B665F]">
            {item.desc.includes('http') ? (
              <>
                {item.desc.split('https')[0]}
                <a 
                  href={`https${item.desc.split('https')[1]}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#5A5A40] underline hover:text-[#2D2A26] break-all"
                >
                  https{item.desc.split('https')[1]}
                </a>
              </>
            ) : item.desc}
          </p>
        </motion.div>
      ))}
    </section>

    <section className="bg-[#2D2A26] text-white p-12 rounded-[3rem] space-y-8">
      <h3 className="font-serif text-3xl font-bold text-center">The Team</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {["Tiffany Tang", "Emily Chi", "Yana Martynyuk", "Abyan Nour"].map((name, i) => (
          <div key={i} className="space-y-2">
            <div className="w-16 h-16 bg-white/10 rounded-full mx-auto flex items-center justify-center">
              <User size={32} />
            </div>
            <p className="font-medium">{name}</p>
          </div>
        ))}
      </div>
    </section>
  </main>
);

const BookApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [chatPartner, setChatPartner] = useState('sarah');

  return (
    <div className="min-h-[80vh] pb-24 bg-[#FDFCFB] rounded-[3rem] border-4 border-[#2D2A26] shadow-2xl overflow-hidden max-w-2xl mx-auto my-10 relative">
      {/* Header */}
      <header className={`px-6 py-8 flex items-center max-w-2xl mx-auto relative ${activeTab === 'chat' ? 'border-b-4 border-[#2D2A26] mb-4' : ''}`}>
        {(activeTab === 'book' || activeTab === 'chat' || activeTab === 'contents' || activeTab === 'account' || activeTab === 'add-books' || activeTab === 'help' || activeTab === 'comment-search' || activeTab === 'join-club' || activeTab === 'create-club') && (
          <button onClick={() => setActiveTab(activeTab === 'chat' ? 'friend' : activeTab === 'contents' ? 'reading' : activeTab === 'add-books' ? 'book' : activeTab === 'help' ? 'home' : activeTab === 'comment-search' ? 'contents' : activeTab === 'join-club' ? 'friend' : activeTab === 'create-club' ? 'join-club' : 'home')} className="absolute left-6 p-2 text-[#2D2A26] hover:bg-[#F5F2ED] rounded-full transition-colors">
            {activeTab === 'chat' || activeTab === 'account' || activeTab === 'add-books' || activeTab === 'help' || activeTab === 'comment-search' || activeTab === 'join-club' || activeTab === 'create-club' ? <ArrowLeft size={32} strokeWidth={3} /> : activeTab === 'contents' ? <List size={32} strokeWidth={3} /> : <ChevronRight size={24} className="rotate-180" />}
          </button>
        )}
        {activeTab === 'reading' && (
          <div className="absolute left-6 flex items-center space-x-4 text-[#2D2A26]">
            <Highlighter size={24} className="cursor-pointer hover:text-[#5A5A40]" />
            <Bookmark size={24} className="cursor-pointer hover:text-[#5A5A40]" />
          </div>
        )}
        
        <h1 className={`font-serif font-bold tracking-tight text-[#2D2A26] w-full text-center uppercase ${activeTab === 'book' ? 'text-2xl' : activeTab === 'reading' || activeTab === 'chat' || activeTab === 'contents' || activeTab === 'account' || activeTab === 'add-books' || activeTab === 'help' || activeTab === 'comment-search' || activeTab === 'join-club' || activeTab === 'create-club' ? 'text-2xl tracking-[0.3em]' : 'text-5xl'}`}>
          {activeTab === 'friend' ? 'My Community' : activeTab === 'book' ? 'Current Bookshelf' : activeTab === 'reading' ? 'Chapter 12' : activeTab === 'chat' ? chatPartner : activeTab === 'contents' ? 'Contents' : activeTab === 'account' ? 'Profile Page' : activeTab === 'add-books' ? 'Add New Books' : activeTab === 'help' ? 'Help Document' : activeTab === 'comment-search' ? 'Search Results' : activeTab === 'join-club' ? 'Join Book Club' : activeTab === 'create-club' ? 'Create New Book Club' : <Logo />}
        </h1>

        <div className="absolute right-6 flex items-center space-x-2">
          {activeTab === 'friend' ? (
            <div className="flex items-center bg-[#F5F2ED] rounded-full px-4 py-2 space-x-3 border border-[#E8E4DE]">
              <Plus size={20} className="text-[#5A5A40] cursor-pointer" onClick={() => setActiveTab('join-club')} />
              <div className="w-px h-4 bg-[#E8E4DE]" />
              <Users size={20} className="text-[#5A5A40] cursor-pointer" />
            </div>
          ) : activeTab === 'reading' ? (
            <Menu size={24} className="cursor-pointer hover:text-[#5A5A40]" onClick={() => setActiveTab('contents')} />
          ) : activeTab === 'book' ? (
            <button onClick={() => setActiveTab('add-books')} className="p-2 rounded-full bg-[#F5F2ED] text-[#5A5A40]">
              <Plus size={20} />
            </button>
          ) : activeTab === 'join-club' ? (
            <button 
              onClick={() => setActiveTab('create-club')}
              className="bg-[#4A6FA5] text-white px-4 py-1.5 rounded-lg border-2 border-[#2D2A26] shadow-[2px_2px_0px_0px_#2D2A26] font-bold flex items-center space-x-1"
            >
              <Plus size={18} strokeWidth={3} />
              <span>New</span>
            </button>
          ) : activeTab === 'chat' ? (
            <button className="p-2 rounded-full bg-[#F5F2ED] text-[#5A5A40]">
              <Plus size={24} />
            </button>
          ) : activeTab === 'contents' ? null : activeTab === 'account' ? null : activeTab === 'add-books' ? null : activeTab === 'help' ? null : (
            <button onClick={() => setActiveTab('help')} className="p-2 rounded-full bg-[#F5F2ED] text-[#5A5A40]">
              <HelpCircle size={24} />
            </button>
          )}
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'home' && <HomePage onMessageFriend={() => setActiveTab('friend')} onViewBookshelf={() => setActiveTab('book')} />}
          {activeTab === 'friend' && <CommunityPage onChat={(name) => { setChatPartner(name); setActiveTab('chat'); }} />}
          {activeTab === 'book' && <BookshelfPage onContinue={() => setActiveTab('reading')} onAdd={() => setActiveTab('add-books')} />}
          {activeTab === 'reading' && <ReadingPage />}
          {activeTab === 'chat' && <ChatPage onBack={() => setActiveTab('friend')} name={chatPartner} />}
          {activeTab === 'contents' && <ContentsPage onBack={() => setActiveTab('reading')} onSearch={() => setActiveTab('comment-search')} />}
          {activeTab === 'account' && <ProfilePage onBack={() => setActiveTab('home')} />}
          {activeTab === 'add-books' && <AddBooksPage onBack={() => setActiveTab('book')} />}
          {activeTab === 'help' && <HelpPage onBack={() => setActiveTab('home')} />}
          {activeTab === 'comment-search' && <CommentSearchResultsPage onBack={() => setActiveTab('contents')} />}
          {activeTab === 'join-club' && <JoinBookClubPage onBack={() => setActiveTab('friend')} onCreateNew={() => setActiveTab('create-club')} />}
          {activeTab === 'create-club' && <CreateBookClubPage onBack={() => setActiveTab('join-club')} />}
          {activeTab !== 'home' && activeTab !== 'friend' && activeTab !== 'book' && activeTab !== 'reading' && activeTab !== 'contents' && activeTab !== 'account' && activeTab !== 'add-books' && activeTab !== 'help' && activeTab !== 'comment-search' && activeTab !== 'join-club' && activeTab !== 'create-club' && (
            <div className="flex flex-col items-center justify-center h-[60vh] text-[#8E8B82]">
              <BookOpen size={48} className="mb-4 opacity-20" />
              <p className="font-serif text-xl italic">coming soon...</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-[#E8E4DE] px-8 py-4 z-50">
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
    </div>
  );
};

export default function App() {
  const [mainView, setMainView] = useState<'showcase' | 'app' | 'process'>('showcase');

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-[#E8E4DE] sticky top-0 z-[100] px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Logo />
            <span className="font-serif text-xl font-bold text-[#2D2A26] ml-2 hidden sm:inline">SHOWCASE</span>
          </div>
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => setMainView('showcase')}
              className={`font-medium text-sm uppercase tracking-widest transition-colors ${mainView === 'showcase' ? 'text-[#5A5A40] border-b-2 border-[#5A5A40]' : 'text-[#8E8B82] hover:text-[#2D2A26]'}`}
            >
              Showcase
            </button>
            <button 
              onClick={() => setMainView('app')}
              className={`font-medium text-sm uppercase tracking-widest transition-colors ${mainView === 'app' ? 'text-[#5A5A40] border-b-2 border-[#5A5A40]' : 'text-[#8E8B82] hover:text-[#2D2A26]'}`}
            >
              Interactive App
            </button>
            <button 
              onClick={() => setMainView('process')}
              className={`font-medium text-sm uppercase tracking-widest transition-colors ${mainView === 'process' ? 'text-[#5A5A40] border-b-2 border-[#5A5A40]' : 'text-[#8E8B82] hover:text-[#2D2A26]'}`}
            >
              Process
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={mainView}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {mainView === 'showcase' && <ShowcasePage onEnterApp={() => setMainView('app')} />}
          {mainView === 'app' && <BookApp />}
          {mainView === 'process' && <ProcessPage />}
        </motion.div>
      </AnimatePresence>

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
