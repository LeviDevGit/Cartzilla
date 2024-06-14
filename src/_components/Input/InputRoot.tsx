'use client'

import { Search } from 'lucide-react'
import { useRef } from 'react'

export function InputRoot() {
  const inputElement = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    if (inputElement.current) {
      inputElement.current.focus()
    }
  }

  return (
    <div
      className="flex w-2/4 cursor-text items-center justify-start gap-2 rounded-full border border-white p-3 focus-within:outline focus-within:outline-blue-500"
      onClick={() => {
        focusInput()
      }}
    >
      <Search className="w-1/12" size={20} />
      <input
        type="text"
        name=""
        id=""
        ref={inputElement}
        placeholder="Procurar por produtos"
        className="w-10/12 bg-transparent text-lg font-light outline-none"
      />
    </div>
  )
}
