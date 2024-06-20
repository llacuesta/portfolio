// Imports
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { links } from "@/lib/data";

export const useSectionInView = ({
  sectionName,
  threshold
}: {
  sectionName: (typeof links)[number]["name"],
  threshold: number,
}) => {
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    const { ref, inView } =  useInView({
      threshold: threshold,
    });
  
    useEffect(() => {
      if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName);
      }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
      ref
    }
}