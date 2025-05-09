import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollToTop({ scrollRef }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
