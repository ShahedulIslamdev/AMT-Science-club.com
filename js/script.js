
  // generate a soft starfield
  const starsContainer = document.getElementById('stars');
  const STAR_COUNT = 110;
  for(let i=0;i<STAR_COUNT;i++){
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random()*2 + 0.6;
    s.style.width = size+'px';
    s.style.height = size+'px';
    s.style.top = Math.random()*100+'%';
    s.style.left = Math.random()*100+'%';
    s.style.setProperty('--dur', (Math.random()*3+2)+'s');
    s.style.setProperty('--delay', (Math.random()*4)+'s');
    s.style.setProperty('--min-op', (Math.random()*0.2+0.05).toFixed(2));
    s.style.setProperty('--max-op', (Math.random()*0.5+0.5).toFixed(2));
    starsContainer.appendChild(s);
  }


// Our Activities
const track = document.getElementById('sliderTrack');

// স্মুথ এবং ইনফিনিট লুপ তৈরির জন্য কার্ডগুলো ক্লোন (Duplicate) করা
const cards = Array.from(track.children);
cards.forEach(card => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
});

let scrollAmount = 0;
const speed = 1; // স্পিড বাড়াতে চাইলে মান বাড়াতে পারেন (যেমন: 1.5 বা 2)
let isHovered = false;

function animate() {
  if (!isHovered) {
    scrollAmount += speed;
    
    // কার্ডগুলোর অর্ধেক রাস্তা অতিক্রম করলে রিসেট করে আবার শুরুতে নিয়ে যাওয়া (Infinty Effect)
    if (scrollAmount >= track.scrollWidth / 2) {
      scrollAmount = 0;
    }
    
    track.style.transform = `translateX(-${scrollAmount}px)`;
  }
  
  requestAnimationFrame(animate);
}

// হবার করলে থেমে যাওয়া এবং মাউস সরালে আবার চালু হওয়া
track.addEventListener('mouseenter', () => {
  isHovered = true;
});

track.addEventListener('mouseleave', () => {
  isHovered = false;
});

// অ্যানিমেশন শুরু
animate();

// FAQ js
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', e => {
    if (item.open) document.querySelectorAll('.faq-item').forEach(el => el !== item && (el.open = false));
  });
});