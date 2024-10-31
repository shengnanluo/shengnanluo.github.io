document.addEventListener('DOMContentLoaded', function() {
    // 标签页切换功能
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // 初始化标签页内容
    const aboutContent = `
        <h3 class="text-2xl font-bold mb-4">关于一二布布</h3>
        <p class="text-lg mb-4">一二布布是一只充满活力和魅力的小猫咪。她那柔软的橘白相间的毛发和明亮的大眼睛，总是能够吸引所有人的目光。</p>
        <p class="text-lg">无论是在阳光下慵懒地晒太阳，还是活跃地追逐玩具，一二布布总是散发着无限的可爱魅力。</p>
    `;

    const featuresContent = `
        <h3 class="text-2xl font-bold mb-4">一二布布的特点</h3>
        <ul class="space-y-2">
            ${['毛色: 橘白相间', '性格: 活泼动', '爱好: 追逐玩具、晒太阳', '特长: 会做各种可爱的表情']
                .map((feature, index) => `
                    <li class="flex items-center text-lg fade-in" style="animation-delay: ${index * 0.1}s">
                        <svg class="h-5 w-5 mr-2 text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                        ${feature}
                    </li>
                `).join('')}
        </ul>
    `;

    const galleryContent = `
        <h3 class="text-2xl font-bold mb-4">一二布布的日常</h3>
        <div class="grid grid-cols-2 gap-4">
            ${[
                {en: 'play', zh: '玩耍'},
                {en: 'sleep', zh: '睡觉'},
                {en: 'eat', zh: '吃饭'},
                {en: 'cute', zh: '撒娇'}
            ].map((item, index) => `
                <div class="gallery-item rounded-lg" style="animation-delay: ${index * 0.1}s">
                    <img src="images/gallery-${item.en}.jpg" alt="一二布布${item.zh}的照片" class="w-full h-auto rounded-lg">
                    <div class="gallery-overlay rounded-lg">
                        <p class="text-white text-sm font-medium">${item.zh}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // 设置初始内容
    document.getElementById('about').innerHTML = aboutContent;
    document.getElementById('features').innerHTML = featuresContent;
    document.getElementById('gallery').innerHTML = galleryContent;

    // 标签页切换事件处理
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // 更新按钮状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // 更新内容显示
            tabContents.forEach(content => {
                if (content.id === tabId) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });
}); 