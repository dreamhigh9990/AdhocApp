import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  

    setTimeout(window.scrollTo(0,0),100);

  return <>{props.children}</>
};

export default ScrollToTop;