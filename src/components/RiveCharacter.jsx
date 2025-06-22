import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const AnimeCharacter = () => {
  const characterRef = useRef(null);
  const auraRef = useRef(null);

  useEffect(() => {
    // Character breathing animation
    anime({
      targets: characterRef.current,
      scale: [1, 1.05, 1],
      translateY: [0, -5, 0],
      duration: 4000,
      easing: 'easeInOutSine',
      loop: true
    });

    // Eye blinking animation
    anime({
      targets: '.anime-eye',
      scaleY: [1, 0.1, 1],
      duration: 150,
      delay: anime.stagger(100),
      easing: 'easeInOutQuad',
      loop: true,
      loopDelay: 3000
    });

    // Typing arms animation
    anime({
      targets: '.arm-left',
      rotate: [-10, -25, -10],
      duration: 800,
      easing: 'easeInOutQuad',
      loop: true,
      direction: 'alternate'
    });

    anime({
      targets: '.arm-right',
      rotate: [10, 25, 10],
      duration: 800,
      delay: 400,
      easing: 'easeInOutQuad',
      loop: true,
      direction: 'alternate'
    });

    // Laptop screen glow
    anime({
      targets: '.laptop-screen',
      boxShadow: [
        '0 0 10px rgba(59, 130, 246, 0.5)',
        '0 0 30px rgba(59, 130, 246, 0.8)',
        '0 0 10px rgba(59, 130, 246, 0.5)'
      ],
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true
    });

    // Code particles floating
    anime({
      targets: '.code-particle',
      translateY: [50, -100],
      translateX: () => anime.random(-30, 30),
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5],
      rotate: () => anime.random(-180, 180),
      duration: 3000,
      delay: anime.stagger(500),
      easing: 'easeOutCubic',
      loop: true
    });

    // Energy aura pulse
    anime({
      targets: auraRef.current,
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      duration: 3000,
      easing: 'easeInOutSine',
      loop: true
    });

    // Hair spikes movement
    anime({
      targets: '.hair-spike',
      rotate: function(el, i) {
        return [
          anime.random(-5, 5),
          anime.random(-10, 10),
          anime.random(-5, 5)
        ];
      },
      scale: [1, 1.1, 1],
      duration: 2000,
      delay: anime.stagger(200),
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate'
    });

    // Code lines typing effect
    anime({
      targets: '.code-line',
      width: ['0%', function(el) { return el.getAttribute('data-width') + '%'; }],
      opacity: [0, 1],
      duration: 1500,
      delay: anime.stagger(300),
      easing: 'easeOutExpo',
      loop: true,
      loopDelay: 2000
    });

    // Mouse hover interactions
    const character = characterRef.current;
    if (character) {
      character.addEventListener('mouseenter', () => {
        anime({
          targets: character,
          scale: 1.1,
          duration: 300,
          easing: 'easeOutCubic'
        });
        
        // Eyes follow cursor
        anime({
          targets: '.anime-eye',
          scale: [1, 1.2, 1],
          duration: 200,
          easing: 'easeOutQuad'
        });
      });

      character.addEventListener('mouseleave', () => {
        anime({
          targets: character,
          scale: 1,
          duration: 300,
          easing: 'easeOutCubic'
        });
      });
    }

    // Keyboard typing effect
    anime({
      targets: '.keyboard',
      scale: [1, 1.02, 1],
      duration: 400,
      easing: 'easeInOutQuad',
      loop: true,
      direction: 'alternate',
      delay: anime.random(0, 1000)
    });

    // Hoodie zipper shine
    anime({
      targets: '.hoodie-zipper',
      opacity: [0.7, 1, 0.7],
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true
    });

    // Laptop base subtle movement
    anime({
      targets: '.laptop-base',
      scaleX: [1, 1.01, 1],
      duration: 3000,
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate'
    });

    // Random head tilt for personality
    anime({
      targets: '.anime-head',
      rotate: [-1, 1, -1],
      duration: 4000,
      easing: 'easeInOutSine',
      loop: true,
      delay: 1000
    });

    // Hand finger tapping simulation
    anime({
      targets: '.hand',
      scale: [1, 0.95, 1],
      duration: 300,
      easing: 'easeInOutQuad',
      loop: true,
      delay: anime.stagger(150),
      direction: 'alternate'
    });

    // Character entrance animation
    anime({
      targets: characterRef.current,
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 1000,
      easing: 'easeOutBack',
      delay: 500
    });

    // Code particles entrance
    anime({
      targets: '.code-particle',
      opacity: [0, 1],
      scale: [0, 1],
      duration: 800,
      delay: anime.stagger(100, { start: 1500 }),
      easing: 'easeOutBack'
    });

    // Gaming setup glow effect
    anime({
      targets: '.gaming-setup',
      filter: [
        'drop-shadow(0 0 5px rgba(59, 130, 246, 0.3))',
        'drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))',
        'drop-shadow(0 0 5px rgba(59, 130, 246, 0.3))'
      ],
      duration: 3000,
      easing: 'easeInOutSine',
      loop: true
    });

    // Eye shine effect
    anime({
      targets: '.anime-eye::after',
      opacity: [0.8, 1, 0.8],
      scale: [1, 1.2, 1],
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true,
      delay: anime.random(0, 1000)
    });

    // Click interaction
    if (character) {
      character.addEventListener('click', () => {
        // Excited jump animation
        anime({
          targets: character,
          translateY: [-20, 0],
          scale: [1.1, 1.2, 1],
          duration: 600,
          easing: 'easeOutBounce'
        });

        // Eyes widen
        anime({
          targets: '.anime-eye',
          scaleX: [1, 1.3, 1],
          scaleY: [1, 1.5, 1],
          duration: 400,
          easing: 'easeOutQuad'
        });

        // Burst of code particles
        anime({
          targets: '.code-particle',
          translateY: anime.random(-50, -100),
          translateX: anime.random(-50, 50),
          scale: [1, 1.5, 0.8],
          opacity: [1, 0.8, 1],
          duration: 800,
          easing: 'easeOutCubic'
        });

        // Screen flash
        anime({
          targets: '.laptop-screen',
          backgroundColor: ['rgba(30, 64, 175, 0.1)', 'rgba(59, 130, 246, 0.3)', 'rgba(30, 64, 175, 0.1)'],
          duration: 300,
          easing: 'easeInOutQuad'
        });
      });
    }

    // Cleanup function
    return () => {
      if (character) {
        character.removeEventListener('mouseenter', () => {});
        character.removeEventListener('mouseleave', () => {});
        character.removeEventListener('click', () => {});
      }
    };

  }, []);

  return (
    <div className="w-80 h-80 mx-auto cursor-pointer transition-transform hover:scale-105">
      <div className="anime-character-container">
        {/* Energy Aura */}
        <div ref={auraRef} className="energy-aura"></div>
        
        {/* Main Character */}
        <div ref={characterRef} className="anime-character">
          {/* Head */}
          <div className="anime-head">
            {/* Hair with animated spikes */}
            <div className="anime-hair">
              <div className="hair-spike hair-spike-1"></div>
              <div className="hair-spike hair-spike-2"></div>
              <div className="hair-spike hair-spike-3"></div>
              <div className="hair-spike hair-spike-4"></div>
            </div>
            
            {/* Eyes */}
            <div className="anime-eyes">
              <div className="anime-eye eye-left"></div>
              <div className="anime-eye eye-right"></div>
            </div>
            
            {/* Face details */}
            <div className="anime-mouth"></div>
          </div>
          
          {/* Body */}
          <div className="anime-body">
            <div className="hoodie-pocket"></div>
            <div className="hoodie-zipper"></div>
          </div>
          
          {/* Arms */}
          <div className="arm arm-left">
            <div className="hand"></div>
          </div>
          <div className="arm arm-right">
            <div className="hand"></div>
          </div>
          
          {/* Epic Gaming Setup */}
          <div className="gaming-setup">
            <div className="laptop-base"></div>
            <div className="laptop-screen">
              <div className="screen-content">
                <div className="code-line" data-width="75"></div>
                <div className="code-line" data-width="45"></div>
                <div className="code-line" data-width="90"></div>
                <div className="code-line" data-width="60"></div>
                <div className="code-line" data-width="80"></div>
              </div>
            </div>
            <div className="keyboard"></div>
          </div>
        </div>
        
        {/* Floating Code Particles */}
        <div className="code-particles-container">
          <div className="code-particle">{'{ }'}</div>
          <div className="code-particle">{'<>'}</div>
          <div className="code-particle">const</div>
          <div className="code-particle">{'=>'}</div>
          <div className="code-particle">React</div>
          <div className="code-particle">TS</div>
          <div className="code-particle">API</div>
          <div className="code-particle">[]</div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCharacter;