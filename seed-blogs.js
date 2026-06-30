const axios = require('axios');

const API = 'http://localhost:1337/api';

// Yahan apna saara blog data add karo
const blogs = [
  {
    category: "Orthopedics and Joint Replacement Blogs",
    title: "Transforming Lives with Technology: Total Knee Replacement Success Story",
    date: "2025-10-20",
    author: "Dr. Surya Udai Singh",
    authorInitial: "SU",
    imgAlt: "latest card image",
    slug: "transforming-lives-knee-replacement",
  },
  {
    category: "Cardiology Blogs",
    title: "Heart Health: Tips for a Stronger Cardiovascular System",
    date: "2025-11-05",
    author: "Dr. Anjali Mehta",
    authorInitial: "AM",
    imgAlt: "heart health blog image",
    slug: "heart-health-tips",
  },
  {
    category: "Neurology Blogs",
    title: "Understanding Migraines: Causes and Modern Treatment Options",
    date: "2025-12-01",
    author: "Dr. Rakesh Sharma",
    authorInitial: "RS",
    imgAlt: "neurology blog image",
    slug: "understanding-migraines",
  },
];

async function seedBlogs() {
  console.log('Starting blog seed...\n');

  for (const blog of blogs) {
    try {
      const res = await axios.post(`${API}/blogs`, { data: blog });
      console.log(`✅ Created: "${blog.title}"`);
    } catch (err) {
      const msg = err.response?.data?.error?.message || err.message;
      console.log(`❌ Failed: "${blog.title}" — ${msg}`);
    }
  }

  console.log('\nDone!');
}

seedBlogs();
