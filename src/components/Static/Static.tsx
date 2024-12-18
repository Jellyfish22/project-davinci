import { FC } from 'react'

export const Static: FC = () => {

  return (
    <div className="relative h-screen w-screen">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 "
        style={{
          backgroundImage: `url('/tvstatic.gif')`, // Update path if needed
          opacity: 0.08,
          zIndex: 2,
          transition: "opacity 1s",
        }}
      />
      {/* Content Layer */}
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">
          Welcome to the Static Background!
        </h1>
      </div>
    </div>
  );
};