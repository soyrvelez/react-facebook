import Image from "next/image";

// data

export default function NewVideos() {
  return(
    <div>
      <h3>New Videos For You: 88</h3>
      <div>
        <div>
          <Image src="/engineer.png" width="80" height="80"/>
          <p>New video from Mr. Beast</p>
          <p>4 hours ago</p>
        </div>
        <div>
          <Image src="/engineer.png" width="80" height="80"/>
          <p>Your crazy aunt and others shared videos</p>
          <p>8 hours ago</p>
        </div>
      </div>
    </div>
  );
}
