// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// export default function Pagination({ currentPage, totalPages, onPageChange }) {
//    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

//    return (
//       <div className="flex justify-center mt-8 space-x-2">
//          <button
//             onClick={() => onPageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className={`flex items-center px-4 py-2 border rounded-l-md ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
//          >
//             <FaChevronLeft className="mr-2" />
//             Previous
//          </button>

//          {pages.map(page => (
//             <button
//                key={page}
//                onClick={() => onPageChange(page)}
//                className={`px-4 py-2 border ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-200'}`}
//             >
//                {page}
//             </button>
//          ))}

//          <button
//             onClick={() => onPageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className={`flex items-center px-4 py-2 border rounded-r-md ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
//          >
//             Next
//             <FaChevronRight className="ml-2" />
//          </button>
//       </div>
//    );
// }





import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

   return (
      <div className="flex justify-center my-6 space-x-2">
         <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center px-4 py-2 border rounded-l-md ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
         >
            <FaChevronLeft className="mr-2" />
            Previous
         </button>

         {pages.map(page => (
            <button
               key={page}
               onClick={() => onPageChange(page)}
               className={`px-4 py-2 border ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-200'}`}
            >
               {page}
            </button>
         ))}

         <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center px-4 py-2 border rounded-r-md ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
         >
            Next
            <FaChevronRight className="ml-2" />
         </button>
      </div>
   );
}
