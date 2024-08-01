import paths from '@/lib/paths';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href={paths.home()}>
        <p className="font-mono text-lg font-semibold text-slate-700">
          SkillHub
        </p>
        <p className="text-right font-serif text-xs italic">Connect</p>
      </Link>
    </div>
  );
};

export default Logo;
