function Card() {
  return (
    <div className="w-80 border-2 border-black-50">
      <div className="relative bg-green-200 w-full h-24">
        <img
          className="w-24 h-24 rounded-full object-cover absolute left-28 top-10"
          src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
          alt="profile"
        />
      </div>
      <div className="mt-10 text-center">
        <div className="flex justify-center items-center gap-1">
          <h2 className="font-bold text-lg">Rita corrida</h2>
          <span className="text-gray-500">32</span>
        </div>
        <p className="text-gray-500">London</p>
      </div>
      <hr className="mt-4" />
      <div className="flex justify-between p-4">
        <div>
          <p className="font-bold">80k</p>
          <span className="text-gray-500">Followers</span>
        </div>
        <div>
          <p className="font-bold">803k</p>
          <span className="text-gray-500">Likes</span>
        </div>
        <div>
          <p className="font-bold">1.4k</p>
          <span className="text-gray-500">Posts</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
