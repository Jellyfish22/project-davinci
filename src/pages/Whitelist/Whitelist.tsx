import { FC } from 'react'
import Card from '../../components/Card'

export const Whitelist: FC = () => {
  return (
    <div className="w-full h-screen flex align-middle text-center justify-center ">
      <div className="text-9xl">
        <Card>
          <h3 className="w-full uppercase text-5xl font-black tracking-tight">
            POZA<span className="pl-2 opacity-40 text-2xl">// Whitelist</span>
          </h3>
        </Card>
      </div>
    </div>
  )
}
