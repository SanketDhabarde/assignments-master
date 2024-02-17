interface CradProps {
  name: string;
  age: number;
  image: string;
  place: string;
  followers: number;
  likes: number;
  posts: number;
}

function Card({ name, age, image, place, followers, likes, posts }: CradProps) {
  return (
    <div className="w-80 border-2 border-black-50">
      <div className="relative bg-green-200 w-full h-24">
        <img
          className="w-24 h-24 rounded-full object-cover absolute left-28 top-10"
          src={image}
          alt="profile"
        />
      </div>
      <div className="mt-10 text-center">
        <div className="flex justify-center items-center gap-1">
          <h2 className="font-bold text-lg">{name}</h2>
          <span className="text-gray-500">{age}</span>
        </div>
        <p className="text-gray-500">{place}</p>
      </div>
      <hr className="mt-4" />
      <div className="flex justify-between p-4">
        <div>
          <p className="font-bold">{followers}K</p>
          <span className="text-gray-500">Followers</span>
        </div>
        <div>
          <p className="font-bold">{likes}K</p>
          <span className="text-gray-500">Likes</span>
        </div>
        <div>
          <p className="font-bold">{posts}K</p>
          <span className="text-gray-500">Posts</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
