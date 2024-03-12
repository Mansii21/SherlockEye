import Image from 'next/image'

const style = {
  wrapper:
    'flex flex-col space-y-2 divide-y divide-[#343536] rounded border border-[#343536] bg-[#1a1a1b] p-4 text-gray-300',
  profileInfoContainer: 'flex items-center space-x-4 ',
  profilePicContainer: `relative h-12 w-12`,
  profilePic: 'object-contain',
  aboutContent: 'py-2 text-sm',
  statsWrapper: 'flex items-center space-x-16',
  stat: 'flex flex-col',
  statTitle: 'text-xs',
  footer: 'flex flex-col space-y-4 pt-2',
  createdAt: 'text-sm font-light',
  joinedButton:
    'cursor-pointer rounded-full border border-gray-300 py-1 text-center text-sm font-semibold',
}

const About = () => {
  return (
    <div className={style.wrapper}>
      <div className='pb-2'>
        <div className={style.profileInfoContainer}>
          <div className={style.profilePicContainer}>
            {/* <Image
              src='https://i.ibb.co/Ks6r2s5/r-Ll-Cifh-XRJi-T0-Ro-N2-Fj-K-Logo-roundbackground-black.png'
              layout='fill'
              className={style.profilePic}
              alt='Profile Image'
            /> */}
          </div>
          <p>About the User</p>
        </div>
        <p className={style.aboutContent}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
        </p>

        <div className={style.statsWrapper}>
          <div className={style.stat}>
            <span>2.1m</span>
            <span className={style.statTitle}>Members</span>
          </div>
          <div className={style.stat}>
            <span>246</span>
            <span className={style.statTitle}>Online</span>
          </div>
        </div>
      </div>

      <div className={style.footer}>
        <p className={style.createdAt}>Created Jan 31, 2021</p>

        <div className={style.joinedButton}>Joined</div>
      </div>
    </div>
  )
}

export default About
