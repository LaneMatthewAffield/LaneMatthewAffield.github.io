// ParticleBackground.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // or loadFull for more features

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                particles: {
                    number: {
                        value: 150, // More particles for a denser star field
                        density: {
                            enable: true,
                            value_area: 1200, // Adjust density as needed
                        },
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -1, // Ensures particles are behind other content
                    },
                    color: {
                        value: "#15417A", // White stars
                    },
                    shape: {
                        type: "square", // <--- Change shape to 'star'
                    },
                    opacity: {
                        value: 0.8, // Slightly transparent stars
                        random: true, // Randomize opacity for a twinkling effect
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 2, // Smaller star size
                        random: true, // Randomize size for variety
                        animation: {
                            enable: true,
                            speed: 4,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                    
                    links: {
                        enable: true,
                        distance: 150,
                        color: {
                            value: "#629BE4", // <--- Change this to a darker color (e.g., a darker grey)
                        },
                        opacity: 0.4,
                        width: 1, // Stars typically don't have connecting lines
                    },
                    move: {
                        enable: true, // Allow stars to move slowly
                        speed: 0.2, // Very slow movement
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },

                detectRetina: true,
            }}
        />
    );
};

export default ParticleBackground;