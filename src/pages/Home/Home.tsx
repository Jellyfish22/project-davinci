import { FC } from 'react'

export const Home: FC = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/tvstencil3.jpg')" }}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="/retra_full.png"
          alt="Logo"
          className="max-w-[40%] max-h-[40%] transform translate-x-[-150px]"
        />
      </div>
    </div>
  );
};