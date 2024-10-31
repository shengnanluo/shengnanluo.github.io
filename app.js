// app.js (使用 React.createElement)
const { useState } = React;

function Component() {
  const [activeTab, setActiveTab] = useState('about');

  return React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white font-sans" },
    React.createElement("header", { className: "py-6 px-4 sm:px-6 lg:px-8" },
      React.createElement("nav", { className: "flex justify-between items-center max-w-7xl mx-auto" },
        React.createElement("h1", { className: "text-3xl font-extrabold tracking-tight" }, "一二布布"),
        React.createElement("div", { className: "flex space-x-4" },
          React.createElement("a", { href: "#", className: "hover:text-yellow-300 transition-colors" },
            React.createElement(Instagram, { className: "h-6 w-6" })
          ),
          React.createElement("a", { href: "#", className: "hover:text-yellow-300 transition-colors" },
            React.createElement(Twitter, { className: "h-6 w-6" })
          )
        )
      )
    ),

    React.createElement("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" },
      React.createElement(motion.div, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "text-center mb-12"
      },
        React.createElement("h2", { className: "text-5xl font-bold mb-4" }, "遇见可爱的一二布布"),
        React.createElement("p", { className: "text-xl text-yellow-200" }, "一只充满魅力的小猫咪，正在征服互联网")
      ),

      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center" },
        React.createElement(motion.div, {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.2 }
        },
          React.createElement("img", {
            src: "/placeholder.svg?height=400&width=400",
            alt: "一二布布的特写",
            className: "rounded-full w-full max-w-md mx-auto shadow-2xl"
          })
        ),

        React.createElement(motion.div, {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.4 },
          className: "bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-xl"
        },
          React.createElement("div", { className: "flex mb-6" },
            ['about', 'features', 'gallery'].map((tab) =>
              React.createElement("button", {
                key: tab,
                onClick: () => setActiveTab(tab),
                className: `flex-1 py-2 px-4 text-sm font-medium rounded-full transition-colors ${
                  activeTab === tab ? 'bg-white text-purple-600' : 'text-white hover:bg-white hover:bg-opacity-10'
                }`
              }, tab.charAt(0).toUpperCase() + tab.slice(1))
            )
          ),

          activeTab === 'about' && React.createElement("div", null,
            React.createElement("h3", { className: "text-2xl font-bold mb-4" }, "关于一二布布"),
            React.createElement("p", { className: "text-lg mb-4" }, "一二布布是一只充满活力和魅力的小猫咪。她那柔软的橘白相间的毛发和明亮的大眼睛，总是能够吸引所有人的目光。"),
            React.createElement("p", { className: "text-lg" }, "无论是在阳光下慵懒地晒太阳，还是活跃地追逐玩具，一二布布总是散发着无限的可爱魅力。")
          ),

          activeTab === 'features' && React.createElement("div", null,
            React.createElement("h3", { className: "text-2xl font-bold mb-4" }, "一二布布的特点"),
            React.createElement("ul", { className: "space-y-2" },
              ['毛色: 橘白相间', '性格: 活泼好动', '爱好: 追逐玩具、晒太阳', '特长: 会做各种可爱的表情'].map((feature, index) =>
                React.createElement(motion.li, {
                  key: index,
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.3, delay: index * 0.1 },
                  className: "flex items-center text-lg"
                },
                  React.createElement(ChevronRight, { className: "h-5 w-5 mr-2 text-yellow-300" }),
                  feature
                )
              )
            )
          )
        )
      )
    ),

    React.createElement("footer", { className: "mt-12 py-6 px-4 sm:px-6 lg:px-8" },
      React.createElement("div", { className: "max-w-7xl mx-auto text-center text-sm" },
        React.createElement("p", null, "© 2024 一二布布粉丝团. 保留所有权利.")
      )
    )
  );
}

ReactDOM.render(React.createElement(Component), document.getElementById('root'));
