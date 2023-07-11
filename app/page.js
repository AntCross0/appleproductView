import Image from 'next/image';
import cyan from '/public/assets/media/hero_cyan.png';
import black from '/public/assets/media/hero_black.png';
import pink from '/public/assets/media/hero_pink.png';
import green from '/public/assets/media/hero_green.png';
import purple from '/public/assets/media/hero_purple.png';


const products = [{
  color: '#8FC0D6',
  lightColor: '#DBF0F9',
  image: cyan,
},
{
  color: '#91D68F',
  lightColor: '#DBF9DF',
  image: green,
},
{
  color: '#D68FCA',
  lightColor: '#F8DBF9',
  image: pink,
},
{
  color: '#646464',
  lightColor: '#AEAEAE',
  image: black,
},
{
  color: '#9D8FD6',
  lightColor: '#EBDBF9',
  image: purple,
}
]

const counter = 2;

export default function Home() {
  return (
    <main style={{ background: `radial-gradient(circle,${products[counter].lightColor} 10%,${products[counter].color} 100%)` }} className={`transition-all w-screen h-screen flex flex-col py-2 select-none`}>
      <navbar className='w-full h-16 flex flex-row justify-between px-4'>
        <div className=''>Airpods Max</div>
        <div className='flex flex-row gap-x-4'>
          <span>Gallery</span>
          <span>Overview</span>
          <span>My account</span>
        </div>
      </navbar>
      <div className='h-full grid grid-cols-2 place-content-center'>
        <div className='flex flex-col py-8 space-y-12 px-12 justify-center'>
          <h2 className='font-black text-6xl '>AirPods MAX</h2>
          <p className='text-lg text-'>a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.</p>
          <div className='flex flex-row gap-4 w-full'>
            <button className='h-12 w-12 rounded-full bg-red-400'>
            </button>
            <button className='h-12 w-12 rounded-full bg-red-400'>
            </button>
            <button className='h-12 w-12 rounded-full bg-red-400'>
            </button>
            <button className='h-12 w-12 rounded-full bg-red-400'>
            </button>
            <button className='place-self-end h-12 w-28 px-4 rounded-full bg-sky-500 text-white font-semibold mx-auto'>$549</button>
          </div>
        </div>
        <div className='relative h-full '>
          <div className='absolute top-4 right-4 blur-[2px]'>
            <Image src={products[counter - 1].image} alt='product' width={100} height={100} />
          </div>
          <div className='absolute bottom-4 right-4 blur-[2px]'>
            <Image src={products[counter + 1].image} alt='product' width={100} height={100} />
          </div>
          <div className='py-20'>
            <Image src={products[counter].image} alt='product' width={1200} height={300} />
          </div>
        </div>
      </div>
    </main >

  )
}
