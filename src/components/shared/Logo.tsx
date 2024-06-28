import Link from 'next/link';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link
        href={'/'}
        className="font-serif text-2xl font-semibold text-slate-700"
      >
        SkillHub Connect
      </Link>
    </div>
  );
}

export default Logo