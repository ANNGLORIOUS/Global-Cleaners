// import React, { useState } from 'react';
// import { Search, Calendar, User, Tag } from 'lucide-react';

// const Blog = () => {
//   const [searchTerm, setSearchTerm] = useState('');
  
//   // Sample blog posts data
//   const blogPosts = [
//     {
//       id: 1,
//       title: 'The Ultimate Guide to Deep Cleaning Your Home',
//       excerpt: 'Learn the professional techniques for a thorough deep cleaning that will leave your home spotless and refreshed.',
//       image: '/api/placeholder/800/500',
//       category: 'Residential',
//       author: 'Emma Johnson',
//       date: 'April 15, 2025',
//       tags: ['Deep Cleaning', 'Residential', 'Tips']
//     },
//     {
//       id: 2,
//       title: 'Commercial Cleaning: Best Practices for Office Spaces',
//       excerpt: 'Discover how proper office cleaning can improve employee productivity and create a healthier work environment.',
//       image: '/api/placeholder/800/500',
//       category: 'Commercial',
//       author: 'Michael Chen',
//       date: 'April 10, 2025',
//       tags: ['Office Cleaning', 'Commercial', 'Workplace']
//     },
//     {
//       id: 3,
//       title: 'Eco-Friendly Cleaning Products: Better for Your Home and the Planet',
//       excerpt: 'Explore the benefits of using environmentally friendly cleaning solutions and how they can protect your family and the environment.',
//       image: '/api/placeholder/800/500',
//       category: 'Green Cleaning',
//       author: 'Sarah Williams',
//       date: 'April 5, 2025',
//       tags: ['Eco-Friendly', 'Green Cleaning', 'Sustainability']
//     },
//     {
//       id: 4,
//       title: 'Seasonal Cleaning Checklist: Spring Edition',
//       excerpt: 'Get your home ready for spring with our comprehensive cleaning checklist that covers every room and surface.',
//       image: '/api/placeholder/800/500',
//       category: 'Seasonal',
//       author: 'David Rodriguez',
//       date: 'March 25, 2025',
//       tags: ['Seasonal Cleaning', 'Spring Cleaning', 'Checklists']
//     },
//     {
//       id: 5,
//       title: 'How to Maintain a Clean Car Interior Year-Round',
//       excerpt: 'Tips and tricks for keeping your vehicle's interior clean, fresh, and well-maintained throughout all seasons.',
//       image: '/api/placeholder/800/500',
//       category: 'Auto Cleaning',
//       author: 'Lisa Thompson',
//       date: 'March 20, 2025',
//       tags: ['Car Cleaning', 'Auto Care', 'Maintenance']
//     },
//     {
//       id: 6,
//       title: 'The Professional Approach to Post-Construction Cleanup',
//       excerpt: 'Learn how professionals handle the challenging task of cleaning up after renovation and construction projects.',
//       image: '/api/placeholder/800/500',
//       category: 'Specialized Cleaning',
//       author: 'James Wilson',
//       date: 'March 15, 2025',
//       tags: ['Post-Construction', 'Renovation', 'Specialized']
//     }
//   ];
  
//   // Filter posts based on search term
//   const filteredPosts = blogPosts.filter(post => 
//     post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
//   );
  
//   // Categories for sidebar
//   const categories = [
//     'Residential', 'Commercial', 'Green Cleaning', 
//     'Seasonal', 'Auto Cleaning', 'Specialized Cleaning'
//   ];
  
//   // Recent posts for sidebar
//   const recentPosts = blogPosts.slice(0, 3);
  
//   // Popular tags
//   const popularTags = ['Deep Cleaning', 'Commercial', 'Eco-Friendly', 'Spring Cleaning', 'Maintenance'];
  
//   return (
//     <div className="bg-background py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-darktext font-libre">Cleaning Insights Blog</h1>
//           <p className="mt-4 text-lg text-gray-600 font-bai">
//             Expert tips, industry insights, and helpful guides for all your cleaning needs.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2">
//             {/* Search Bar */}
//             <div className="mb-8">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search articles..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full py-2 pl-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary font-bai"
//                 />
//                 <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
//               </div>
//             </div>
            
//             {/* Blog Posts */}
//             <div className="space-y-10">
//               {filteredPosts.length > 0 ? (
//                 filteredPosts.map(post => (
//                   <div key={post.id} className="bg-card rounded-lg shadow-md overflow-hidden">
//                     <img 
//                       src={post.image} 
//                       alt={post.title} 
//                       className="w-full h-64 object-cover"
//                     />
//                     <div className="p-6">
//                       <div className="flex items-center mb-4 text-sm text-gray-500 font-bai">
//                         <span className="flex items-center mr-4">
//                           <Calendar size={16} className="mr-1" />
//                           {post.date}
//                         </span>
//                         <span className="flex items-center mr-4">
//                           <User size={16} className="mr-1" />
//                           {post.author}
//                         </span>
//                         <span className="flex items-center">
//                           <Tag size={16} className="mr-1" />
//                           {post.category}
//                         </span>
//                       </div>
//                       <h2 className="text-2xl font-bold text-primary font-libre mb-3">{post.title}</h2>
//                       <p className="text-gray-600 mb-4">{post.excerpt}</p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {post.tags.map((tag, index) => (
//                           <span 
//                             key={index} 
//                             className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bai"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <button className="text-primary font-semibold hover:text-accent transition duration-200 font-bai">
//                         Read More →
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center py-12">
//                   <p className="text-lg text-gray-600 font-bai">No articles found for "{searchTerm}"</p>
//                   <button 
//                     onClick={() => setSearchTerm('')}
//                     className="mt-4 text-primary font-semibold hover:text-accent transition duration-200 font-bai"
//                   >
//                     Clear Search
//                   </button>
//                 </div>
//               )}
//             </div>
            
//             {/* Pagination */}
//             {filteredPosts.length > 0 && (
//               <div className="flex justify-center mt-12">
//                 <div className="flex space-x-2">
//                   <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-bai">Previous</button>
//                   <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 font-bai">1</button>
//                   <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-bai">2</button>
//                   <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-bai">3</button>
//                   <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-bai">Next</button>
//                 </div>
//               </div>
//             )}
//           </div>
          
//           {/* Sidebar */}
//           <div>
//             {/* Categories */}
//             <div className="bg-card rounded-lg shadow-md p-6 mb-8">
//               <h3 className="text-xl font-bold text-primary font-libre mb-4">Categories</h3>
//               <ul className="space-y-2">
//                 {categories.map((category, index) => (
//                   <li key={index}>
//                     <button 
//                       className="flex items-center justify-between w-full text-left py-2 px-3 hover:bg-gray-50 rounded-md transition duration-150 font-bai"
//                       onClick={() => setSearchTerm(category)}
//                     >
//                       <span>{category}</span>
//                       <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
//                         {blogPosts.filter(post => post.category === category).length}
//                       </span>
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             {/* Recent Posts */}
//             <div className="bg-card rounded-lg shadow-md p-6 mb-8">
//               <h3 className="text-xl font-bold text-primary font-libre mb-4">Recent Posts</h3>
//               <div className="space-y-4">
//                 {recentPosts.map(post => (
//                   <div key={post.id} className="flex space-x-3">
//                     <img 
//                       src={post.image} 
//                       alt={post.title}
//                       className="w-16 h-16 object-cover rounded-md flex-shrink-0"
//                     />
//                     <div>
//                       <h4 className="font-semibold text-darktext hover:text-primary transition duration-150 font-bai line-clamp-2">
//                         {post.title}
//                       </h4>
//                       <p className="text-sm text-gray-500 mt-1">{post.date}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Popular Tags */}
//             <div className="bg-card rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-bold text-primary font-libre mb-4">Popular Tags</h3>
//               <div className="flex flex-wrap gap-2">
//                 {popularTags.map((tag, index) => (
//                   <button 
//                     key={index}
//                     className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition duration-200 font-bai"
//                     onClick={() => setSearchTerm(tag)}
//                   >
//                     {tag}
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             {/* Newsletter Signup */}
//             <div className="bg-primary bg-opacity-10 rounded-lg shadow-md p-6 mt-8">
//               <h3 className="text-xl font-bold text-primary font-libre mb-2">Subscribe to Our Newsletter</h3>
//               <p className="text-gray-600 mb-4 font-bai">Get the latest cleaning tips and tricks delivered to your inbox!</p>
//               <form className="space-y-3">
//                 <input 
//                   type="email" 
//                   placeholder="Your email address" 
//                   className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary font-bai"
//                 />
//                 <button 
//                   type="submit"
//                   className="w-full bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-200 font-bai"
//                 >
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;