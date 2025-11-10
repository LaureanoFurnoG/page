import './Bar.css'
import { useState, useEffect, useMemo } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Bar({metric1, metric2, metric3, prop1, prop2, prop3}) {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  const count1 = useMemo(() => <CountUp end={metric1} duration={3} />, [metric1]);
  const count2 = useMemo(() => <CountUp end={metric2} duration={3} />, [metric2]);
  const count3 = useMemo(() => <CountUp end={metric3} duration={3} />, [metric3]);
  return (
    <>
    <div className="Container-bar" ref={ref}>
      <div className="section-bar">
        <h3>+{startCount && count1}</h3>
        <p>{prop1}</p>
      </div>

      <div className="section-bar">
        <h3>+{startCount && count2}</h3>
        <p>{prop2}</p>
      </div>

      <div className="section-bar">
        <h3>+{startCount && count3}</h3>
        <p>{prop3}</p>
      </div>
    </div>
    </>
  )
}

export default Bar