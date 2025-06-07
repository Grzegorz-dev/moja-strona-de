'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimationWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animowane = document.querySelectorAll('.fadeInUp, .animacja-scale');
    animowane.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]); // 👈 ważne!

  return <div key={pathname}>{children}</div>; // 👈 to też ważne
}


