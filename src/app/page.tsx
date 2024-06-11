import iconPic from '@/app/icon.png'
import { Search } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col text-white">
      <header className="bg-charleston-green fixed flex w-full flex-col items-center border border-red-600 p-5">
        <div className="flex w-5/6 justify-between border border-pink-600">
          <div className="flex w-1/4 items-center gap-3">
            <Image src={iconPic} alt="Icone" width={50} height={50} />
            <h1 className="text-3xl font-semibold">Cartzilla</h1>
          </div>
          <div className="flex w-3/4 items-center justify-between border border-green-500">
            <div className="flex w-2/4 border border-white">
              <Search className="w-1/12" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Procurar produtos"
                className="w-11/12 bg-transparent"
              />
            </div>
            <div className="w-1/4 text-center">Promoção</div>
            <div className="w-1/4 text-center">Páginas</div>
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
