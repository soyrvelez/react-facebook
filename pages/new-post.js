import Image from "next/image";

//data

export default function NewPost({ user, caption, media, reactions, comments, views, createdAt }) {
  let renderedMedia;
  if (media.type === 'image') {
    renderedMedia = <Image src={media.url} width="640" height="360"/>;
  } else {
    renderedMedia = <video width="750" height="500" controls>
    <source src={media.url} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  }

  return (
    <div>
      <Image src={user.image} width="40" height="40"/>
      <h4>{user.name}</h4>
      <p>...</p>
      <p>{createdAt}</p>
      <p>{caption}</p>
      {renderedMedia}
      <div>
        <div>
          <p>Like</p>
          <p>Comment</p>
          <p>Share</p>
        </div>
        <div>
          <p>{reactions}</p>
          <p>{comments}</p>
          <p>{views}</p>
        </div>
      </div>
    </div>
  );
}
