import Image from "next/image"

export default function GamingCategory({ icon, name}) {
  return (
      <div>
        <Image src="/engineer.png" width="80" height="80"/>
        <h3>{name}</h3>
      </div>
  )
}
