import { useEffect, useState } from "react";

const sections = [
  "solutions",
  "apps",
  "stories",
  "pricing",
  "faq",
];

export function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActive(entry.target.id);
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}