"use client"
import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import mainNew from "../public/main-new.jpeg"

type NewsItem = {
  id: number
  title: string
  content: string
  phoneContent?: string
  image: string
  date: string
}

const mainNews: NewsItem = {
  id: 1,
  title: "DLC de Elden Ring",
  content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel debitis ut similique numquam quaerat sed eius error aspernatur, accusamus porro assumenda, rerum commodi necessitatibus ratione vitae doloribus et atque incidunt.",
  phoneContent:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  image: "/main-new.jpeg",
  date: "2024-06-01",
}

const smallNews: NewsItem[] = [
  {
    id: 2,
    title: "Comienza la Copa America",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image: "/copa-america.png",
    date: "2024-06-02",
  },
  {
    id: 3,
    title: "Argentina golea a Guatemala",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image: "/argentina-guatemala.webp",
    date: "2024-06-03",
  },
]

const MainNews: React.FC = () => {
  const router = useRouter()

  const handleClick = (id: number) => {
    router.push(`/${id}`)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 md:grid-rows-2 gap-4">
      {/* Main news */}
      <div
        className="md:col-span-5 md:row-span-2 border rounded-md h-full cursor-pointer relative"
        onClick={() => handleClick(mainNews.id)}
      >
        <div>
          <Image src={mainNew} alt={mainNews.title} className="rounded-t-md" />
        </div>
        <div className="p-4 flex-1">
          <h2 className="text-2xl font-bold mb-2 text-slate-900 hover:underline">
            {mainNews.title}
          </h2>
          <p className="text-slate-700 hidden md:block">{mainNews.content}</p>
          <p className="text-slate-700 md:hidden">{mainNews.phoneContent}</p>
        </div>
        <div className="text-slate-500 text-xs relative bottom-1 left-4">
          {mainNews.date}
        </div>
      </div>
      {/* Small news */}
      {smallNews.map((news) => (
        <div
          key={news.id}
          className="md:col-span-2 border rounded-md flex flex-col cursor-pointer"
          onClick={() => handleClick(news.id)}
        >
          <div className="relative w-full h-48 overflow-hidden rounded-t-md">
            <Image
              src={news.image}
              alt={news.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-t-md"
            />
          </div>
          <div className="p-4 flex-1 relative">
            <h3 className="text-xl font-semibold text-slate-900 hover:underline">
              {news.title}
            </h3>
            <p className="text-slate-700">{news.content}</p>
          </div>
          <div className="text-slate-500 text-xs relative bottom-1 left-4">
            {news.date}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MainNews
