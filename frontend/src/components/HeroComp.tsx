// import { useEffect, useState } from "react"

export default function HeroComp() {

  const w = 150
  const h = 100
  return (
    <div className="w-full">
      <div className="flex items-center">
        <h1 className="text-2xl font-extrabold">What's on your mind?</h1>
      </div>
      <div className="flex gap-2 overflow-auto">
        <img src="./Cakes.avif" alt="cakes" width={w} height={h} />
        <img src="./Chole_Bature.avif" alt="cakes" width={w} height={h} />
        <img src="./Dhokla.avif" alt="cakes" width={w} height={h} />
        <img src="./Dosa.avif" alt="cakes" width={w} height={h} />
        <img src="./Idli.avif" alt="cakes" width={w} height={h} />
        <img src="./Juice.avif" alt="cakes" width={w} height={h} />
        <img src="./Kachori.avif" alt="cakes" width={w} height={h} />
        <img src="./Lassi.avif" alt="cakes" width={w} height={h} />
        <img src="./Omelette.avif" alt="cakes" width={w} height={h} />
        <img src="./Pakodas.avif" alt="cakes" width={w} height={h} />
        <img src="./Paratha.avif" alt="cakes" width={w} height={h} />
        <img src="./Poori.avif" alt="cakes" width={w} height={h} />
        <img src="./Poha.avif" alt="cakes" width={w} height={h} />
        <img src="./Samosas.avif" alt="cakes" width={w} height={h} />
        <img src="./Sandwich.avif" alt="cakes" width={w} height={h} />
        <img src="./tea.avif" alt="cakes" width={w} height={h} />
        <img src="./Vada.avif" alt="cakes" width={w} height={h} />

      </div>
    </div>
  )
}
