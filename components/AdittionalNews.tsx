"use client"
import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

type NewsItem = {
  id: number
  title: string
  content: string
  image: string
  date: string
}

const additionalNews: NewsItem[] = [
  {
    id: 4,
    title: "El Eras Tour alcanza su noche 100",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image: "/eras-tour.webp",
    date: "2024-06-04",
  },
  {
    id: 5,
    title:
      "Mavericks superan a Celtics, pero la serie vuelve a Boston con Dallas abajo 3-1",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image: "/dallas-boston.avif",
    date: "2024-06-05",
  },
  {
    id: 6,
    title:
      "Italia remonta y vence 2-1 a Albania",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image: "/italia-albania.webp",
    date: "2024-06-06",
  },
  {
    id: 7,
    title:
      "Sony anuncia nuevo juego de Astro Bot",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image: "/astrobot.webp",
    date: "2024-06-07",
  },
]

const AdditionalNews: React.FC = () => {
  const router = useRouter()

  const handleClick = (id: number) => {
    router.push(`/${id}`)
  }

  return (
    <div className="my-8 border-t border-slate-900">
      <div className="flex justify-between px-1 md:px-2">
        <h2 className="text-2xl font-bold my-3 text-slate-700">Especial</h2>
        <button className="text-slate-700 font-semibold  flex items-center">
          <p className="hover:underline">Ver Más</p>
          <span className="ml-2">&rarr;</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {additionalNews.map((news) => (
          <div
            key={news.id}
            className="border rounded-md overflow-hidden cursor-pointer relative"
            onClick={() => handleClick(news.id)}
          >
            <div className="relative w-full h-48">
              <Image
                src={news.image}
                alt={news.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-slate-900 hover:underline">
                {news.title}
              </h3>
              <p className="text-slate-700 mb-3">{news.content}</p>
            </div>
            <div className="text-slate-500 text-xs absolute bottom-1 left-4">
              {news.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdditionalNews
