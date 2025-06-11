export function LivePreview() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 aspect-video rounded-md relative overflow-hidden">
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-gray-700/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600/70 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-play text-white"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs bg-gradient-to-t from-black/70 to-transparent">
        <div className="w-full h-1 bg-gray-700 rounded-full mb-2">
          <div className="w-1/4 h-full bg-white rounded-full"></div> {/* Dummy progress */} 
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-volume-2"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
            <span>00:00</span>
          </div>
          {/* Additional controls could go here if needed */}
        </div>
      </div>
    </div>
  );
} 