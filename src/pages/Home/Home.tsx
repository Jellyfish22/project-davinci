import { FC, useState } from 'react'

export const Home: FC = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
      <div className="flex items-center justify-center w-full h-full">
        {showText ? (
          <div className="text-black text-9xl font-bold">Ern is a cuuuunt</div>
        ) : (
          <img
            src="/retra_full-1.png"
            alt="Logo"
            className="max-w-full max-h-full"
          />
        )}
      </div>

      <button
        className="absolute bottom-5 right-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        onClick={() => setShowText(!showText)}
      >
      Goggles Image
      </button>
    </div>
  );
};
