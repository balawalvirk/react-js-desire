import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPages = () => {
        const pages = [];
        if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 4) {
                pages.push(1, 2, 3, 4, 5, '...', totalPages);
            } else if (currentPage > 4 && currentPage < totalPages - 3) {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            } else {
                pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            }
        }
        return pages;
    };

    return (
        <div className="flex justify-center items-center space-x-1 lg:space-x-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-1 lg:px-3 py-1 size-8 md:size-10 rounded-full bg-[#333333] text-yellow disabled:opacity-50 flex justify-center items-center"
            >
                <FaArrowLeft size={20} />
            </button>
            {getPages().map((page, index) => (
                <button
                    key={index}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                    className={`px-3 py-1 rounded ${currentPage === page ? 'bg-custom-gradient' : 'text-yellow'} ${page === '...' ? 'cursor-default' : ''}`}
                    disabled={page === '...'}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-1 lg:px-3 py-1  size-8 md:size-10 rounded-full bg-[#333333] text-yellow disabled:opacity-50 flex justify-center items-center"
            >
                <FaArrowRight size={20} />
            </button>
        </div>
    );
};

export default Pagination;
