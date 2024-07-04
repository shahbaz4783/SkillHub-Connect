import Image from 'next/image';
import { Button } from '../../ui/button';
import Link from 'next/link';
import TrustedBy from '@/components/shared/trusted-by';

export function LandingPageHero() {
  return (
    <section className="flex min-h-[80svh] px-4 md:px-0">
      <aside className="flex flex-1 flex-col justify-center gap-12">
        <article className="flex flex-col gap-6">
          <div>
            <h1 className="font-serif text-6xl font-semibold text-green-600">
              Redefine
            </h1>
            <h1 className="font-serif text-6xl font-semibold text-green-600">
              the norm...
            </h1>
          </div>
          <div>
            <p className="text-xl font-semibold text-stone-500">
              Break free from tradition. Assemble your dream team today.
            </p>
            <p className="text-xl font-semibold text-stone-500">
              Right now. Right here.
            </p>
          </div>
          <div className="">
            <Link href={'/signup'}>
              <Button>Get Started</Button>
            </Link>
          </div>
        </article>
        <TrustedBy />
      </aside>
      <aside className="hidden flex-1 md:flex">
        <Image
          draggable={false}
          src={'/images/working.png'}
          width={600}
          height={600}
          alt="Image of hero section"
        />
      </aside>
    </section>
  );
}

export function WorkHero() {
  return (
    <section className="flex flex-col-reverse justify-between gap-6 lg:flex-row">
      <aside className="space-y-10">
        <div className="font-semibold text-3xl lg:text-5xl">
          <h1>Do the work you love,</h1>
          <h1>your way</h1>
        </div>
        <p className="text-slate-500 lg:w-3/4">
          Build rewarding relationships in the world’s Work Marketplace. Your
          home for the work you want.
        </p>
        <div className="flex gap-4">
          <Link href={'/search?q=projects'}>
            <Button className="w-full md:w-auto">Browse Projects</Button>
          </Link>
          <Link href={'/search?q=jobs'}>
            <Button className="w-full md:w-auto" variant={'secondary'}>
              View Job Listings
            </Button>
          </Link>
        </div>
        <TrustedBy />
      </aside>
      <aside>
        <Image
          draggable={false}
          src={'/lady-working.webp'}
          alt="Project work image"
          width={700}
          height={600}
        />
      </aside>
    </section>
  );
}
