const style = {
  profilePic: 'h-4 w-4 rounded-full',
  wrapper:'flex items-center space-x-2 text-xs text-[#818384]',
  profilePicContainer:'flex items-center space-x-1',
  tag:'cursor-pointer text-xs font-semibold text-[#D7DADC] hover:underline',
  postedBy:'flex item-center space-x-1',
};

const Info = ({author}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.profilePicContainer}>
      <img className={style.profilePic} src="path_to_your_image_file.jpg" alt="Profile"/>
        </div>
      <div className={style.tag}>Sherlocks eye</div>
      <div className={style.postedBy}>
      <div><span>  Posted by {author}  </span>
        <span>june 15
      </span>
      </div>
      </div>
      
    </div>
  );
};

export default Info;
