import { useState, useEffect } from 'react';

export default function Carousel() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	const images = [
		'/src/assets/carousel/ciclyst1.jpg',
		'/src/assets/carousel/ciclyst2.jpg',
		'/src/assets/carousel/ciclyst3.jpg',
		'/src/assets/carousel/ciclyst4.jpg'
	];

	// Função para ir para o próximo slide
	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % images.length);
	};

	// Função para ir para o slide anterior
	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
	};

	// Função para ir para um slide específico
	const goToSlide = (index) => {
		setCurrentSlide(index);
	};

	// Pausar reprodução automática quando o usuário interage
	const pauseAutoPlay = () => {
		setIsAutoPlaying(false);
	};

	// Retomar reprodução automática
	const resumeAutoPlay = () => {
		setIsAutoPlaying(true);
	};

	// Efeito para transição automática
	useEffect(() => {
		if (!isAutoPlaying) return;

		const interval = setInterval(() => {
			nextSlide();
		}, 3000);

		return () => clearInterval(interval);
	}, [isAutoPlaying, currentSlide]);

	return (
		<div id="default-carousel" className="relative mx-auto" data-carousel="slide">
			<div className="relative h-56 w-xs md:w-2xl overflow-hidden rounded-lg md:h-96">
				{images.map((image, index) => (
					<div
						key={index}
						className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
							index === currentSlide ? 'opacity-100' : 'opacity-0'
						}`}
					>
						<img 
							src={image} 
							className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
							alt={`Slide ${index + 1}`} 
						/>
					</div>
				))}
			</div>

			<div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
				{images.map((_, index) => (
					<button
						key={index}
						type="button"
						className={`w-3 h-3 rounded-full transition-colors duration-300 ${
							index === currentSlide 
								? 'bg-white' 
								: 'bg-white/50 hover:bg-white/75'
						}`}
						aria-current={index === currentSlide ? "true" : "false"}
						aria-label={`Slide ${index + 1}`}
						onClick={() => {
							goToSlide(index);
							pauseAutoPlay();
							// Retomar reprodução automática após 5 segundos de inatividade
							setTimeout(resumeAutoPlay, 5000);
						}}
					></button>
				))}
			</div>

			<button 
				type="button" 
				className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" 
				onClick={() => {
					prevSlide();
					pauseAutoPlay();
					setTimeout(resumeAutoPlay, 5000);
				}}
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
					<svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
					</svg>
					<span className="sr-only">Previous</span>
				</span>
			</button>
			<button 
				type="button" 
				className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none border-none" 
				onClick={() => {
					nextSlide();
					pauseAutoPlay();
					setTimeout(resumeAutoPlay, 5000);
				}}
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 ">
					<svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
					</svg>
					<span className="sr-only">Next</span>
				</span>
			</button>
		</div>
	);
}