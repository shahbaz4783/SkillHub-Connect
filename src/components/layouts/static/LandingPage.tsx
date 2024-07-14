import { LandingPageHero } from '@/components/layouts/static/Hero';
import {
  getStartedList,
  forClient,
  forTalent,
  whyWe,
  ourFeatures,
  ourAchievement,
} from '@/constants/staticData';
import Link from 'next/link';
import Image from 'next/image';
import SectionTop from '@/components/ui/SectionTop';
import ListItem from '@/components/ui/list-item';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { categories } from '@/constants/options';
import PageHeading from '@/components/ui/page-heading';
import SectionHeading from '@/components/shared/SectionHeading';

const LandingPage = () => {
  return (
    <>
      <main className="space-y-40">
        <LandingPageHero />
        {/* Popular Categories */}
        {/* <section className="px-4 md:px-0">
          <SectionTop
            heading="Browse talent by category"
            subhead="Explore diverse expertise and Skills across categories"
          />
          <article className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => (
              <menu
                key={item.title}
                className="flex cursor-pointer flex-col gap-3 rounded-lg bg-card bg-slate-100 p-6 hover:bg-slate-200"
              >
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <div className="flex gap-6 font-semibold text-stone-600">
                  <p>{21}</p>
                  <p>{31} skills</p>
                </div>
              </menu>
            ))}
          </article>
        </section> */}

        {/* Getting Started */}
        <section className="flex flex-col justify-between gap-8 px-4 md:flex-row md:px-0">
          <aside className="flex-[4] overflow-hidden rounded-md md:flex">
            <Image
              draggable={false}
              src="/images/form-fill.jpg"
              alt=""
              width={600}
              height={600}
            />
          </aside>
          <aside className="flex-[6]">
            <SectionHeading
              title="Getting work done has never been easier"
              titleStyle="font-serif text-4xl font-normal lg:w-1/2"
            />
            <article className="flex flex-col gap-2">
              {getStartedList.map((data) => (
                <ListItem
                  key={data.heading}
                  title={data.heading}
                  subheading={data.subheading}
                >
                  {data.icon && <data.icon />}
                </ListItem>
              ))}
            </article>
          </aside>
        </section>

        {/* For Client Section */}
        <section
          className="bg-[url] bg-cover bg-center p-6 text-stone-200 md:rounded-md"
          style={{ backgroundImage: 'url(/images/cube.jpg)' }}
        >
          <h3 className="mb-24 text-xl text-stone-100">For clients</h3>

          <SectionHeading
            title="Find talent your way"
            subTitle="Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations."
            titleStyle="font-serif text-5xl font-normal lg:w-1/2"
            subTitleStyle="text-slate-300 lg:w-1/2 text-md"
          />
          <menu className="grid gap-6 md:grid-cols-3">
            {forClient.map((data) => (
              <Link
                href={data.link}
                key={data.title}
                className="flex flex-col justify-center gap-4 rounded-lg bg-slate-700 p-4 text-slate-100 hover:bg-slate-900"
              >
                <h2 className="w-4/5 text-2xl font-bold ">{data.heading}</h2>
                <p className="text-lg">
                  {data.title} <FaArrowRight />{' '}
                </p>
              </Link>
            ))}
          </menu>
        </section>

        {/* Why we */}
        <section className="flex px-4 md:px-0">
          <aside className="flex-[5]">
            <SectionHeading
              title="Where Industry Leaders Find Top Talent"
              subTitle="Access the top 1% on SkillHub Connect, coupled with a suite of cutting-edge workforce management tools. Redefine innovation and embrace the future of success"
              titleStyle="font-serif text-4xl font-normal lg:w-1/2"
              subTitleStyle="lg:w-1/2 text-md"
            />
            <article className="flex flex-col gap-2">
              {whyWe.map((data) => (
                <ListItem
                  key={data.heading}
                  title={data.heading}
                  subheading={data.subheading}
                >
                  {data.icon && <data.icon />}
                </ListItem>
              ))}
            </article>
          </aside>

          <aside className="hidden flex-[3] overflow-hidden rounded-md object-cover md:flex">
            <Image
              draggable={false}
              src="/images/linkedin-sales-solutions.jpg"
              alt=""
              width={500}
              height={500}
            />
          </aside>
        </section>

        {/* For talent */}
        <section className="flex flex-col gap-4 overflow-hidden bg-gradient-to-r from-slate-800 to-slate-600 text-slate-100 md:flex-row md:rounded-md">
          <aside className="">
            <Image
              className=" h-full object-cover"
              draggable={false}
              src="/images/firosnv-photography.jpg"
              alt=""
              width={500}
              height={500}
            />
          </aside>
          <aside className="flex-1 px-4 py-6">
            <h3 className="mb-10 text-xl">For talent</h3>

            <SectionHeading
              title="Find great work"
              subTitle="Meet clients you’re excited to work with and take your career or business to new heights."
              titleStyle="font-serif text-5xl font-normal lg:w-1/2"
              subTitleStyle="text-slate-300 lg:w-1/2 text-md"
            />
            <menu className="grid gap-6 border-t-2 pt-8 md:grid-cols-3">
              {forTalent.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
              <Link href={'/jobs'}>
                <Button variant={'secondary'}>Find Opportunities</Button>
              </Link>
            </menu>
          </aside>
        </section>

        {/* We are trustful */}
        <section className="flex flex-col gap-4 text-black md:flex-row">
          <aside className="flex flex-col gap-8 rounded-md bg-gradient-to-r from-stone-100 to-stone-200 p-8">
            <h1 className="font-serif text-3xl md:w-3/4 md:text-6xl">
              Why businesses turn to SkillHub
            </h1>
            <article className="flex flex-col gap-2">
              {ourFeatures.map((data) => (
                <ListItem
                  key={data.heading}
                  title={data.heading}
                  subheading={data.subheading}
                >
                  {data.icon && <data.icon />}
                </ListItem>
              ))}
            </article>
          </aside>
          <aside className="flex flex-col gap-8 rounded-md bg-stone-100 p-8">
            <h2 className="text-3xl md:w-1/2">
              We’re the world’s work marketplace
            </h2>
            <article className="flex flex-col gap-2">
              {ourAchievement.map((data) => (
                <ListItem
                  key={data.heading}
                  title={data.heading}
                  subheading={data.subheading}
                >
                  {data.icon && <data.icon />}
                </ListItem>
              ))}
            </article>
          </aside>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
