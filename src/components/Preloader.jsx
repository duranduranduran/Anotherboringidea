import { useEffect } from 'react'
import { gsap } from 'gsap'

const Preloader = () => {
    useEffect(() => {
        const preloader = document.querySelector('.preloader')

        gsap.to(preloader, {
            duration: 1,
            opacity: 0,
            onComplete: () => {
                preloader.style.display = 'none'
            }
        })
    }, [])

    return (
        <div className="preloader">

            <div className="preloader__spinner"></div>
        </div>
    )
}

export default Preloader