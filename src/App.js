
import './App.css';
import Title from './components/Title/Title';
import Face from './images/icon-facebook.svg'
import YouTube from './images/icon-youtube.svg'
import Instagram from './images/icon-instagram.svg'
import Twitter from './images/icon-twitter.svg'
import Tel from './images/icon-whatsapp.svg'
import Subtitle from './components/Subtitle/Subtitle';
import CardBotton from './components/Card-Bottom';
import Cardtop from './components/Card-Top/Cardtop';


function App() {
  const Cards = [
    {
      num: '1300',
      social: '@mianUmair',
      follower: 'Followers',
      image: Face,
      subscriber: '12 Today',
      color: '#028AE3',
      colorUp: '#3ECEAE',
      down: '+'
    },
    {
      num: '1600',
      social: '@mianUmair',
      follower: 'Followers',
      image: Twitter,
      subscriber: '12 Today',
      color: '#03A3ED',
      colorUp: '#3ECEAE',
      down: '+'
    },
    {
      num: '15K',
      social: '@mianUmair',
      follower: 'Followers',
      image: Instagram,
      subscriber: '1099 Today',
      color: '#e24b91',
      colorUp: '#3ECEAE',
      down: '+'
    },
    {
      num:'8239',
      social: 'mian@Uma.',
      follower: 'Subscribers',
      image: YouTube,
      subscriber: '144 Today',
      color: '#D90427',
      colorUp: '#E20C0C',
      down: '-'
    },
    {
      num: '1200',
      social: 'Mian@Umair',
      follower: 'Contacts',
      image:Tel,
      subscriber: '515 Today',
      color: '#04d939',
      colorUp: '#3ECEAE',
      down: '+'

    }

  ]
  const CardB = [{
    //facebook
    name: 'Page Views',
    followers: '87',
    image: Face,
    subscriber: '3%',
    color: '#3ECEAE',
    down: '+'
  },
  {
    name: 'Likes',
    followers: '52',
    image: Face,
    subscriber: '2%',
    color: '#E20C0C',
    down: '-'
  },

//instagram
{
  name: 'Likes',
  followers: '5462',
  image: Instagram,
  subscriber: '2257%',
  color: '#3ECEAE',
  down: '+'
},
{
  name: 'Profile Views',
  followers: '30k',
  image: Instagram,
  subscriber: '1000%',
  color: '#3ECEAE',
  down: '+'
},
 //Twitter 
 {
  name: 'Retweets',
  followers: '117',
  image: Twitter,
  subscriber: '303%',
  color: '#3ECEAE',
  down: '+'
},
{
  name: 'Likes',
  followers: '507',
  image: Twitter,
  subscriber: '553%',
  color: '#3ECEAE',
  down: '+'
},

  //youtube
  {
    name: 'Likes',
    followers: '107',
    image: YouTube,
    subscriber: '19%',
    color: '#3ECEAE',
    down: '+'
  },
  {
    name: 'Total Views',
    followers: '1407',
    image: YouTube,
    subscriber: '12%',
    color: '#E20C0C',
    down: '-'
  },
//whatsapp
  {
    name: 'Total Updates',
    followers: '107',
    image: Tel,
    subscriber: '19%',
    color: '#3ECEAE',
    down: '+'
  },
  {
    name: 'Channels',
    followers: '500',
    image: Tel,
    subscriber: '12%',
    color: '#3ECEAE',
    down: '+'
  },


]
  return (
    <div className="App">
     <Title/>

     {Cards.map(cardTop => <Cardtop
          key={cardTop.image}
          num={cardTop.num}
          social={cardTop.social}
          follower={cardTop.follower}
          image={cardTop.image}
          subscriber={cardTop.subscriber}
          color={cardTop.color}
          colorUp={cardTop.colorUp}
          down={cardTop.down}
        />)}
        <Subtitle/>
        {CardB.map(cardBottom => <CardBotton
          key={cardBottom.followers}
          name={cardBottom.name}
          follower={cardBottom.followers}
          image={cardBottom.image}
          subscriber={cardBottom.subscriber}
          colorUp={cardBottom.color}
          down={cardBottom.down}
        />)}
    </div>
  );
}

export default App;
