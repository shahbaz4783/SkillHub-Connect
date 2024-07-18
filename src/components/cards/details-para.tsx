'use client';

import { cn } from '@/lib/utils';
import { useState, useRef, useEffect } from 'react';

interface DetailsParaProps {
  description: string;
}

const DetailsPara = ({ description }: DetailsParaProps) => {
  const [expandText, setExpandText] = useState<boolean>(false);
  const [showReadMore, setShowReadMore] = useState<boolean>(false);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (paraRef.current) {
      const lineHeight = parseFloat(
        getComputedStyle(paraRef.current).lineHeight,
      );
      const maxHeight = lineHeight * 3;
      if (paraRef.current.scrollHeight > maxHeight) {
        setShowReadMore(true);
      }
    }
  }, [description]);

  return (
    <>
      <p
        ref={paraRef}
        className={cn('line-clamp-3 text-slate-500', {
          'line-clamp-none': expandText,
        })}
      >
        {description}
      </p>
      {showReadMore && !expandText && (
        <p
          className="cursor-pointer text-right text-slate-600 hover:text-slate-800"
          onClick={() => setExpandText(true)}
        >
          Read more
        </p>
      )}
    </>
  );
};

export default DetailsPara;
