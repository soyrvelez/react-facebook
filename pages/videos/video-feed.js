import NewPost from "../new-post";

// data
const videos = [
  {
    user: {
      name: 'Bill Murray',
      image: "/engineer.png"
    },
    caption: "React is very interesting and accessible.",
    media: {
      type: 'image',
      url: "/engineer.png"
    },
    reactions: '8.8K',
    comments: "800",
    views: "1.2M",
    createdAt: "October 23",
  },
  {
    user: {
      name: 'Not Bill Murray',
      image: "/engineer.png"
    },
    caption: "This is my alter ego account.",
    media: {
      type: 'image',
      url: "/engineer.png"
    },
    reactions: '666',
    comments: "666",
    views: "666",
    createdAt: "July 6",
  }
];

export default function VideoFeed() {
  const displayVideosArray = videos.map((video, idx) => {
    return <NewPost user={video.user} caption={video.caption} media={video.media} reactions={video.reactions} comments={video.comments} views={video.views} createdAt={video.createdAt} key={idx} />
  });

  return (
    <div>
      {displayVideosArray}
    </div>
  );
}
