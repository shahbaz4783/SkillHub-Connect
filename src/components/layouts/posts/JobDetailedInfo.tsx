import { AllSkills } from '@/components/cards/skills-list';
import DetailsSection from '@/components/wrapper/DetailsSection';
import { getJobDetailsData } from '@/data/posts';
import { timeSince } from '@/lib/utils';
import { BrainCircuit, CircleDollarSign } from 'lucide-react';
import { redirect } from 'next/navigation';

interface JobDetailedInfoProps {
  jobId: string;
}

const JobDetailedInfo = async ({ jobId }: JobDetailedInfoProps) => {
  const jobDetails = await getJobDetailsData(jobId);

  if (!jobDetails) return redirect('/');

  return (
    <main className="lg:w-3/4">
      <DetailsSection>
        <p className="text-2xl font-semibold">{jobDetails.title}</p>
        <p className="text-sm text-slate-500">
          Posted {timeSince(jobDetails.createdAt)}
        </p>
      </DetailsSection>

      <DetailsSection>
        <p className="text-sm">{jobDetails.description}</p>
      </DetailsSection>

      <DetailsSection>
        <div className="flex gap-12">
          <menu className="flex gap-4 p-2">
            <div className="pt-1">
              <CircleDollarSign />
            </div>
            <ul>
              <li className="font-semibold text-stone-600">
                ${jobDetails.price}
              </li>
              <li className="text-sm text-slate-500">Budget</li>
            </ul>
          </menu>
          <menu className="flex gap-4 p-2">
            <div className="pt-1">
              <BrainCircuit />
            </div>
            <ul>
              <li className="font-semibold text-stone-600">
                {jobDetails.experience === 'expert'
                  ? 'Expert'
                  : jobDetails.experience === 'intermidiate'
                    ? 'Intermidiate'
                    : 'Entry Level'}
              </li>
              <li className="text-sm text-slate-500">
                {jobDetails.experience === 'expert'
                  ? 'I am willing to pay higher rates for the most experienced freelancers'
                  : jobDetails.experience === 'intermidiate'
                    ? 'I am looking for a mix of experience and value'
                    : 'I am looking for freelancers with the lowest rates'}
              </li>
            </ul>
          </menu>
        </div>
      </DetailsSection>

      <DetailsSection>
        <div className="space-x-3 text-sm">
          <span>Project Type:</span>
          <span className="text-slate-600">{jobDetails.projectType}</span>
        </div>
      </DetailsSection>

      <DetailsSection>
        <h2 className="text-lg font-semibold">Skills and Expertise</h2>
        <AllSkills skills={jobDetails.skills} />
      </DetailsSection>

      <DetailsSection>
        <h2 className="text-lg font-semibold">Activity on this job </h2>
        <menu>
          <div className="space-x-3 text-sm">
            <span>Proposals:</span>
            <span className="text-slate-600">
              {jobDetails.proposalCount === 0
                ? 'No proposals yet'
                : jobDetails.proposalCount}
            </span>
          </div>
        </menu>
      </DetailsSection>
    </main>
  );
};

export default JobDetailedInfo;
