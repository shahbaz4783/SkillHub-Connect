import ProposalForm from '@/components/forms/post/proposal-form';
import SectionTop from '@/components/ui/SectionTop';

const page = () => {
  return (
    <>
      <SectionTop heading="Submit a proposal" subhead="" />
      <ProposalForm />
    </>
  );
};

export default page;
