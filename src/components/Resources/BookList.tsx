import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book } from '../../data/resourcesData';
import { Search, Filter } from 'lucide-react';

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(books.map(book => book.category)));
  
  // Filter books based on search term and selected category
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? book.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by title, author, or description..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter size={18} className="text-gray-400" />
          </div>
          <select
            className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="bg-white rounded-xl shadow-card overflow-hidden h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={book.imageUrl} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full mb-2 capitalize">
                  {book.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                <p className="text-sm text-gray-700 flex-1">{book.description}</p>
                <a 
                  href={`https://www.google.com/search?q=${encodeURIComponent(book.title + ' by ' + book.author)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors inline-block"
                >
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500">No books found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookList;