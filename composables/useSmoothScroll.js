import Lenis from '@studio-freight/lenis'

export const useSmoothScroll = () => {

	const scrollLenis = new Lenis({
		duration: 1.2,
		orientation: 'vertical',
		gestureOrientation: 'vertical',
		smoothWheel: true,
		infinite: true
	})

	gsap.ticker.add((time) => {
		scrollLenis.raf(time * 1000)
	})

	gsap.ticker.lagSmoothing(0)
}