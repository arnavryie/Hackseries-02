import React, { useEffect, useRef } from 'react';

const CyberEmbers = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle collection
        const particleCount = 45;
        const particles = [];

        const colors = [
            'rgba(212, 175, 55, ',    // Gold
            'rgba(255, 183, 3, ',     // Amber
            'rgba(0, 240, 255, ',     // Cyan
            'rgba(255, 230, 150, '    // White-gold
        ];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2.2 + 0.6,
                speedY: Math.random() * 0.7 + 0.2,
                speedX: (Math.random() - 0.5) * 0.4,
                baseAlpha: Math.random() * 0.6 + 0.2,
                alpha: 0,
                colorBase: colors[Math.floor(Math.random() * colors.length)],
                pulseSpeed: Math.random() * 0.03 + 0.01,
                angle: Math.random() * Math.PI * 2
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                p.y -= p.speedY;
                p.x += Math.sin(p.angle) * 0.3 + p.speedX;
                p.angle += 0.02;

                // Subtle alpha breathing
                p.alpha = p.baseAlpha + Math.sin(p.angle * 2) * 0.15;

                // Wrap around screen
                if (p.y < -10) {
                    p.y = canvas.height + 10;
                    p.x = Math.random() * canvas.width;
                }
                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;

                // Draw glowing ember
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `${p.colorBase}${Math.max(0.1, Math.min(1, p.alpha))})`;
                ctx.shadowBlur = p.size * 4;
                ctx.shadowColor = p.colorBase.includes('0, 240') ? '#00f0ff' : '#d4af37';
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-1 overflow-hidden"
            style={{ opacity: 0.75 }}
        />
    );
};

export default CyberEmbers;
