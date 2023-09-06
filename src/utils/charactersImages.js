import Batman from '../../assets/batman.svg'
import Robin from '../../assets/robin.svg'
import Wonder from '../../assets/wonder.svg'
import Joker from '../../assets/joker.svg'
import Harry from '../../assets/harry.svg'
import Superman from '../../assets/superman.svg'
import Thor from '../../assets/thor.svg'
import Spiderman from '../../assets/spiderman.svg'
import Wolverine from '../../assets/wolverine.svg'
import ProfileDefault from '../../assets/profileDefault.svg'

export const charactersImages = (width, height) => [
  {
    name: 'NoImage',
    image: <ProfileDefault width={width} height={height} />,
  },
  {
    name: 'joker',
    image: <Joker width={width} height={height} />,
  },
  {
    name: 'wonder',
    image: <Wonder width={width} height={height} />,
  },
  {
    name: 'batman',
    image: <Batman width={width} height={height} />,
  },
  {
    name: 'robin',
    image: <Robin width={width} height={height} />,
  },
  {
    name: 'harry',
    image: <Harry width={width} height={height} />,
  },
  {
    name: 'superman',
    image: <Superman width={width} height={height} />,
  },
  {
    name: 'thor',
    image: <Thor width={width} height={height} />,
  },
  {
    name: 'spiderman',
    image: <Spiderman width={width} height={height} />,
  },
  {
    name: 'wolverine',
    image: <Wolverine width={width} height={height} />,
  },
]
