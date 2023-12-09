import Image from "next/image";

// data

export default function Setting({ icon, title, description}) {
  return (
    <div>
      <Image src={icon} width="40" height="40"/>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
