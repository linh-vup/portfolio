import '../styles/Portfolio.scss';

export default function PortfolioProjectCard({
  image,
  type,
  name,
  stack,
  description,
  link,
  githubLink
}) {
  return (
    <div className='project-card'>
      {/* <img
        className='project-image'
        src='../assets/game_screenshot.png'
        alt='project screenshot'
      /> */}
      <div className='project-image-container'>
        <img className='project-image' src={image} alt='test' />
      </div>

      <div className='project-body'>
        <span>{type}</span>
        <h3>{name}</h3>
        <div className='stack-container'>{stack}</div>
        <p>{description}</p>
        <div className='project-links'>
          <a href={link}>
            <svg
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.11 15.39L8.23002 19.27C7.76026 19.7233 7.13288 19.9767 6.48002 19.9767C5.82716 19.9767 5.19978 19.7233 4.73002 19.27C4.49962 19.0405 4.31681 18.7678 4.19207 18.4675C4.06733 18.1671 4.00312 17.8452 4.00312 17.52C4.00312 17.1948 4.06733 16.8728 4.19207 16.5725C4.31681 16.2722 4.49962 15.9995 4.73002 15.77L8.61002 11.89C8.79832 11.7017 8.90411 11.4463 8.90411 11.18C8.90411 10.9137 8.79832 10.6583 8.61002 10.47C8.42172 10.2817 8.16632 10.1759 7.90002 10.1759C7.63372 10.1759 7.37832 10.2817 7.19002 10.47L3.31002 14.36C2.52838 15.2108 2.10564 16.3306 2.13009 17.4857C2.15455 18.6408 2.6243 19.7418 3.44125 20.5587C4.2582 21.3757 5.35918 21.8454 6.51427 21.8699C7.66935 21.8944 8.78923 21.4716 9.64002 20.69L13.53 16.81C13.7183 16.6217 13.8241 16.3663 13.8241 16.1C13.8241 15.8337 13.7183 15.5783 13.53 15.39C13.3417 15.2017 13.0863 15.0959 12.82 15.0959C12.5537 15.0959 12.2983 15.2017 12.11 15.39ZM20.69 3.30997C19.8488 2.47398 18.711 2.00476 17.525 2.00476C16.339 2.00476 15.2012 2.47398 14.36 3.30997L10.47 7.18997C10.3768 7.28321 10.3028 7.3939 10.2524 7.51572C10.2019 7.63755 10.1759 7.76811 10.1759 7.89997C10.1759 8.03183 10.2019 8.1624 10.2524 8.28422C10.3028 8.40604 10.3768 8.51673 10.47 8.60997C10.5633 8.70321 10.6739 8.77717 10.7958 8.82763C10.9176 8.87809 11.0482 8.90406 11.18 8.90406C11.3119 8.90406 11.4424 8.87809 11.5643 8.82763C11.6861 8.77717 11.7968 8.70321 11.89 8.60997L15.77 4.72997C16.2398 4.2766 16.8672 4.02323 17.52 4.02323C18.1729 4.02323 18.8003 4.2766 19.27 4.72997C19.5004 4.95946 19.6832 5.23218 19.808 5.53249C19.9327 5.8328 19.9969 6.15479 19.9969 6.47997C19.9969 6.80516 19.9327 7.12714 19.808 7.42745C19.6832 7.72776 19.5004 8.00049 19.27 8.22997L15.39 12.11C15.2963 12.2029 15.2219 12.3135 15.1711 12.4354C15.1204 12.5573 15.0942 12.688 15.0942 12.82C15.0942 12.952 15.1204 13.0827 15.1711 13.2045C15.2219 13.3264 15.2963 13.437 15.39 13.53C15.483 13.6237 15.5936 13.6981 15.7154 13.7489C15.8373 13.7996 15.968 13.8258 16.1 13.8258C16.232 13.8258 16.3627 13.7996 16.4846 13.7489C16.6065 13.6981 16.7171 13.6237 16.81 13.53L20.69 9.63997C21.526 8.79875 21.9952 7.66095 21.9952 6.47497C21.9952 5.289 21.526 4.15119 20.69 3.30997ZM8.83002 15.17C8.92346 15.2627 9.03428 15.336 9.15611 15.3857C9.27795 15.4355 9.40841 15.4607 9.54002 15.46C9.67163 15.4607 9.80209 15.4355 9.92393 15.3857C10.0458 15.336 10.1566 15.2627 10.25 15.17L15.17 10.25C15.3583 10.0617 15.4641 9.80627 15.4641 9.53997C15.4641 9.27367 15.3583 9.01828 15.17 8.82997C14.9817 8.64167 14.7263 8.53588 14.46 8.53588C14.1937 8.53588 13.9383 8.64167 13.75 8.82997L8.83002 13.75C8.73629 13.8429 8.6619 13.9535 8.61113 14.0754C8.56036 14.1973 8.53422 14.328 8.53422 14.46C8.53422 14.592 8.56036 14.7227 8.61113 14.8445C8.6619 14.9664 8.73629 15.077 8.83002 15.17Z'
                fill='black'
              />
            </svg>
          </a>
          <a href={githubLink}>
            <svg
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 2.2467C9.6255 2.2468 7.32849 3.09182 5.51999 4.63055C3.71149 6.16929 2.50953 8.30133 2.12916 10.6452C1.74879 12.989 2.21485 15.3918 3.44393 17.4235C4.67301 19.4551 6.58491 20.9832 8.83755 21.7342C9.33755 21.8217 9.52505 21.5217 9.52505 21.2592C9.52505 21.0217 9.51254 20.2342 9.51254 19.3967C7.00003 19.8592 6.35003 18.7842 6.15003 18.2217C5.9281 17.6747 5.5763 17.1899 5.12503 16.8092C4.77503 16.6217 4.27503 16.1592 5.11252 16.1467C5.4323 16.1814 5.73901 16.2927 6.00666 16.4711C6.2743 16.6495 6.49499 16.8899 6.65003 17.1717C6.7868 17.4174 6.97071 17.6337 7.19122 17.8082C7.41173 17.9827 7.6645 18.112 7.93506 18.1886C8.20562 18.2652 8.48864 18.2877 8.76791 18.2548C9.04717 18.2219 9.3172 18.1342 9.56251 17.9967C9.6058 17.4883 9.83237 17.013 10.2 16.6592C7.97503 16.4092 5.65003 15.5467 5.65003 11.7217C5.63597 10.7279 6.00271 9.76631 6.67503 9.03423C6.36931 8.17045 6.40508 7.22252 6.77503 6.38423C6.77503 6.38423 7.6125 6.12172 9.52503 7.40923C11.1613 6.95921 12.8887 6.95921 14.525 7.40923C16.4375 6.10923 17.275 6.38423 17.275 6.38423C17.645 7.22251 17.6808 8.17046 17.375 9.03423C18.0494 9.76506 18.4164 10.7275 18.4 11.7217C18.4 15.5592 16.0625 16.4092 13.8375 16.6592C14.0762 16.9011 14.26 17.1915 14.3764 17.5107C14.4929 17.83 14.5393 18.1705 14.5125 18.5092C14.5125 19.8468 14.5 20.9217 14.5 21.2592C14.5 21.5217 14.6875 21.8342 15.1875 21.7342C17.4362 20.9771 19.3426 19.4455 20.5664 17.4128C21.7903 15.38 22.2519 12.9785 21.8689 10.6369C21.4859 8.29535 20.2832 6.16608 18.4755 4.62922C16.6678 3.09235 14.3727 2.24794 12 2.2467Z'
                fill='black'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
