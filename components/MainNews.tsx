"use client"
import React from "react"
import Image from "next/image"

type NewsItem = {
  id: number
  title: string
  content: string
  image: string
}

const mainNews: NewsItem = {
  id: 1,
  title: "Main News Title",
  content: "This is the main news content. It's longer and more detailed.",
  image: "/main-new.jpeg",
}

const smallNews: NewsItem[] = [
  {
    id: 2,
    title: "Small News 1",
    content: "Short content 1",
    image: "/path-to-image1.jpg",
  },
  {
    id: 3,
    title: "Small News 2",
    content: "Short content 2",
    image: "/path-to-image2.jpg",
  },
  {
    id: 4,
    title: "Small News 3",
    content: "Short content 3",
    image: "/path-to-image3.jpg",
  },
]

const MainNews: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 md:grid-rows-3 gap-4 p-4 bg-zinc-100">
      {/* Main news */}
      <div className="md:col-span-5 md:row-span-3">
        <div className="border rounded-md overflow-hidden h-full">
          <div className="relative w-full">
            <Image
              src={mainNews.image}
              alt={mainNews.title}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={300}
            />
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2 text-slate-900">
              {mainNews.title}
            </h2>
            <p className="text-slate-700">{mainNews.content}</p>
          </div>
        </div>
      </div>
      {/* Small news */}
      {smallNews.map((news) => (
        <div
          key={news.id}
          className="md:col-span-2 border rounded-md overflow-hidden h-full"
        >
          <div className="relative w-full h-48 md:h-full">
           
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-slate-900">
              {news.title}
            </h3>
            <p className="text-slate-700">{news.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MainNews
