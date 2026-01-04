import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);


export const useGsapFadeInUp = (selector: string, stagger = 0.1) => {
  onMounted(() => {
    gsap.fromTo(
      selector,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger,
        ease: 'power3.out',
      }
    );
  });
};


export const useGsapScrollAnimation = (selector: string, options = {}) => {
  onMounted(() => {
    gsap.fromTo(
      selector,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
        ...options,
      }
    );
  });
};


export const useGsapHoverScale = (selector: string, scale = 1.05) => {
  onMounted(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      gsap.set(el, { transformOrigin: 'center center' });
      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          scale,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  });
};


export const useGsapTextFill = (selector: string) => {
  onMounted(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el: any) => {
      const text = el.textContent;
      el.innerHTML = '';
      
      const chars = text.split('');
      chars.forEach((char: string) => {
        const span = document.createElement('span');
        span.textContent = char;
        el.appendChild(span);
      });

      gsap.fromTo(
        el.querySelectorAll('span'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power3.out',
        }
      );
    });
  });
};


export const useGsapCounter = (selector: string, endValue: number, duration = 2) => {
  onMounted(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el: any) => {
      const obj = { value: 0 };
      
      gsap.to(obj, {
        value: endValue,
        duration,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = Math.floor(obj.value);
        },
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });
  });
};


export const useGsapDrawLine = (selector: string) => {
  onMounted(() => {
    const lines = document.querySelectorAll(selector);
    lines.forEach((line: any) => {
      const length = line.getTotalLength();
      gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(line, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: line,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  });
};


export const useGsapRotate = (selector: string, duration = 20) => {
  onMounted(() => {
    gsap.to(selector, {
      rotation: 360,
      duration,
      ease: 'none',
      repeat: -1,
    });
  });
};


export const useGsapFloat = (selector: string, distance = 20, duration = 4) => {
  onMounted(() => {
    gsap.to(selector, {
      y: -distance,
      duration,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  });
};


export const useGsapParallax = (selector: string, speed = -50) => {
  onMounted(() => {
    gsap.to(selector, {
      y: `${speed}px`,
      scrollTrigger: {
        trigger: selector,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      },
    });
  });
};


export const useGsapBlurEffect = (selector: string) => {
  onMounted(() => {
    gsap.fromTo(
      selector,
      {
        filter: 'blur(10px)',
        opacity: 0,
      },
      {
        filter: 'blur(0px)',
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
};


export const useGsapTimeline = (callback: (tl: gsap.core.Timeline) => void) => {
  onMounted(() => {
    const tl = gsap.timeline();
    callback(tl);
  });
};
