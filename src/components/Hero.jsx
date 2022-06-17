import ilustration from './img/img-superationbn.png'
import './Hero.css';

const Hero = () => {
	return (
		<section className='hero-container'>
			<div className="flex-hero">
				<div className="text-content-hero">
					<span className='spam'>Lorem ipsum dolor sit amet consectetur.</span>
					<h1 className='title'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
					<p className='paraf'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, veniam magnam. Amet maiores corrupti totam?</p>
					<button className='btn-hero' type='button'>See More</button>
				</div>
				<div className="img-content-hero">
					<img src={ilustration} alt="img" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
