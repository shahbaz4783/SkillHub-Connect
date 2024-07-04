import Image from 'next/image';
import React from 'react';

const TrustedBy = () => {
  return (
    <article>
      <h3 className="text-slate-500">Trusted by</h3>
      <div className="flex gap-2">
        <Image
          draggable={false}
          src={'/microsoft.svg'}
          width={100}
          height={40}
          alt="google"
        />
        <Image
          draggable={false}
          src={'/oracle.svg'}
          width={100}
          height={40}
          alt="oracle"
        />
        <Image
          draggable={false}
          src={'/netflix.svg'}
          width={100}
          height={40}
          alt="netflix"
        />
      </div>
    </article>
  );
};

export default TrustedBy;
