import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { howToPostService, howToGetWork } from '@/constants/staticData';
import SectionTop from '../../ui/SectionTop';
import ListItem from '../../ui/ListItem';

const HowToEarn = () => {
  return (
    <section className="mb-28">
      <SectionTop heading="Explore the different ways to earn" subhead="" />
      <Tabs defaultValue="talent" className="flex flex-col">
        <TabsList className="mb-8 py-6">
          <TabsTrigger value="talent">Talent Marketplace</TabsTrigger>
          <TabsTrigger value="project">Project Catalog</TabsTrigger>
        </TabsList>
        <TabsContent
          value="talent"
          className="m-auto grid gap-6 md:w-3/4 md:grid-cols-3 md:gap-16 md:text-center"
        >
          {howToGetWork.map((data, index) => (
            <ListItem
              key={index}
              title={data.heading}
              subheading={data.subheading}
              className="md:flex-col md:items-center"
              iconSize="3.5em"
            >
              {data.icon && <data.icon />}
            </ListItem>
          ))}
        </TabsContent>
        <TabsContent
          value="project"
          className="m-auto mt-0 grid gap-6 md:w-3/4 md:grid-cols-3 md:gap-16 md:text-center"
        >
          {howToPostService.map((data, index) => (
            <ListItem
              key={index}
              title={data.heading}
              subheading={data.subheading}
              className="md:flex-col md:items-center"
              iconSize="3.5em"
            >
              {data.icon && <data.icon />}
            </ListItem>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default HowToEarn;
