import { Input } from '@/_components/Input'
import iconPic from '@/app/icon.png'
import { Heart, Moon, Percent, ShoppingCart, UserRound } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col text-white">
      <header className="fixed flex w-full flex-col items-center border border-red-600 bg-charleston-green p-5">
        <div className="flex w-5/6 justify-between border border-pink-600">
          <div className="flex w-1/4 items-center gap-3">
            <Image src={iconPic} alt="Icone" width={50} height={50} />
            <h1 className="text-3xl font-semibold">Cartzilla</h1>
          </div>
          <div className="flex w-3/4 items-center justify-between border border-green-500">
            <Input.Root />
            <button className="flex w-1/5 items-center justify-center gap-3 text-center">
              <div className="bg-charcoal/70 rounded-full p-5">
                <Percent color="#F55266" />
              </div>
              <div className="flex flex-col">
                <span className="text-light-periwinkle text-sm">
                  Apenas este mês
                </span>
                <h2 className="text-lg font-medium">Até 20% OFF</h2>
              </div>
            </button>
            <div className="flex w-1/5 items-center justify-between text-center">
              <button>
                <Moon color="#E0E5EB" />
              </button>
              <button>
                <Heart color="#E0E5EB" />
              </button>
              <button>
                <UserRound color="#E0E5EB" />
              </button>
              <button>
                <ShoppingCart color="#E0E5EB" />
              </button>
            </div>
          </div>
        </div>
        <nav className="flex w-5/6 justify-between border border-blue-600">
          <div>Categorias</div>
          <div>Pt-br</div>
        </nav>
      </header>
      <div className="h-[1000px] w-full border border-red-600">
        <div className="w-5/6"></div>
      </div>
      <footer className="h-[1000px] w-full border border-red-600">
        <div className="w-5/6"></div>
      </footer>
    </main>
  )
}
