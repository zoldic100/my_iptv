import  './hero.css'
import {Button} from '../../components/index'
const Hero  = () => {
  return (
    <div className='hero-main text-white   rounded-[25px] px-10 py-6'>
        <div className="hero-text max-w-96 mx-2">
            <h6 className="hero-subtitle text-xl mb-5 font-semibold">
                Welcome To My Iptv
            </h6>
            <h4 className="hero-title leading-12 text-5xl uppercase font-extrabold mb-2 ">
                <em className='text-pink-500'>Browse </em>
                Our Poupular Offers
            </h4>
            <Button className=" bg-pink-500 hover:bg-pink-300 text-white" value="Brows Now"/>
        </div>
    </div>
  )
}

export default  Hero