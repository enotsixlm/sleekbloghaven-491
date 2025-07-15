import { useState } from "react";
import { motion } from "framer-motion";
import { Tag, Filter, Clock } from "lucide-react";
const categories = ["All", "Design", "Technology", "Innovation"];
const posts = [{
  id: 1,
  title: "The Future of Minimal Design",
  description: "Exploring how minimalism continues to shape modern interfaces",
  category: "Design",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
}, {
  id: 2,
  title: "Innovation in Simplicity",
  description: "Why the simplest solution is often the most innovative",
  category: "Innovation",
  readTime: "4 min read",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
}, {
  id: 3,
  title: "The Power of White Space",
  description: "Understanding the impact of negative space in UI design",
  category: "Design",
  readTime: "6 min read",
  image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80"
}, {
  id: 4,
  title: "AI in Modern Technology",
  description: "How artificial intelligence is reshaping our digital landscape",
  category: "Technology",
  readTime: "7 min read",
  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
}, {
  id: 5,
  title: "Typography Trends 2024",
  description: "Latest developments in digital typography and font design",
  category: "Design",
  readTime: "4 min read",
  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
}, {
  id: 6,
  title: "Blockchain Revolution",
  description: "Understanding the impact of blockchain on modern technology",
  category: "Technology",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80"
}, {
  id: 7,
  title: "Design Systems at Scale",
  description: "Building and maintaining design systems for large organizations",
  category: "Design",
  readTime: "6 min read",
  image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
}, {
  id: 8,
  title: "The Rise of No-Code",
  description: "How no-code platforms are democratizing software development",
  category: "Innovation",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
}, {
  id: 9,
  title: "Future of Web3",
  description: "Exploring the next generation of internet technologies",
  category: "Technology",
  readTime: "7 min read",
  image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80"
}, {
  id: 10,
  title: "Sustainable Design",
  description: "Creating eco-friendly digital products and experiences",
  category: "Innovation",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
}];
const BlogPosts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredPosts = posts.filter(post => selectedCategory === "All" || post.category === selectedCategory);
  return;
};
export default BlogPosts;