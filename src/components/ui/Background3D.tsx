import React from 'react';

export function Background3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#fafafa]">
      
      {/* Wave 1 - Bottom */}
      <svg
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full h-[50vh] text-primary/5 fill-current"
        preserveAspectRatio="none"
      >
        <path d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,170.7C672,139,768,85,864,80C960,75,1056,117,1152,144C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

      {/* Wave 2 - Bottom offset */}
      <svg
        viewBox="0 0 1440 320"
        className="absolute bottom-[-5vh] left-0 w-full h-[60vh] text-primary/10 fill-current"
        preserveAspectRatio="none"
      >
        <path d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      
      {/* Wave 3 - Top inverted */}
      <svg
        viewBox="0 0 1440 320"
        className="absolute top-0 left-0 w-full h-[40vh] text-primary/5 fill-current rotate-180"
        preserveAspectRatio="none"
      >
        <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
}
