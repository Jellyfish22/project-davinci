import { FC, ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
}

export const Card: FC<CardProps> = ({ children }) => {
  return <div className="bg-white p-4 rounded-lg border-2 border-black">{children}</div>
}
