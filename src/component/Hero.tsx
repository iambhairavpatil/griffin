import { Carousel } from "react-bootstrap";
import { useEffect, useRef } from "react";

const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const video = videoRef.current;
                if (!video) return;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play().catch(() => { });
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        const video = videoRef.current;
        if (video) observer.observe(video);

        return () => {
            if (video) observer.unobserve(video);
        };
    }, []);

    return (
        <section className="hero">
            <Carousel controls={false} indicators={false} fade interval={6000}>
                {/* Slide 1 - Video */}
                <Carousel.Item>
                    <video
                        ref={videoRef}
                        className="d-block w-100"
                        muted
                        loop
                        playsInline
                        style={{ objectFit: "cover", height: "100vh" }}
                    >
                        <source src="./images/intro.mp4" type="video/mp4" />
                    </video>
                </Carousel.Item>

                {/* Slide 2 - Image */}
                <Carousel.Item>
                    <img
                        src="./images/p8.jpg"
                        className="d-block w-100"
                        alt="Perfume Slide"
                    />
                </Carousel.Item>

                {/* Slide 3 - Image */}
                <Carousel.Item>
                    <img
                        src="./images/banner-1.jpg"
                        className="d-block w-100"
                        alt="Perfume Slide 2"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="./images/banner-3.jpg"
                        className="d-block w-100"
                        alt="Perfume Slide 2"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="./images/banner-2.jpg"
                        className="d-block w-100"
                        alt="Perfume Slide 2"
                    />
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Hero;