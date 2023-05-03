import { mount } from 'marketing/module';
import { useEffect, useRef } from 'react';

export function MarketingModule() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current != null && mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
}
