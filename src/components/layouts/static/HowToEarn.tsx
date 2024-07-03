import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { howToPostService, howToGetWork } from '@/constants/staticData';
import SectionTop from '../../ui/SectionTop';
import ListItem from '../../ui/list-item';

const HowToEarn = () => {
  return (
    <Tabs
      defaultValue="talent"
      className="flex flex-col items-center justify-center"
    >
      <TabsList className="mb-8 w-min py-9 px-2">
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
            {data.icon && <data.icon size={48} />}
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
            {data.icon && <data.icon size={48} />}
          </ListItem>
        ))}
      </TabsContent>
    </Tabs>
  );
};

export default HowToEarn;
