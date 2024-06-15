import DetailsSection from '@/components/wrapper/DetailsSection';
import { getJobDetailsData } from '@/data/all-listings';
import { BrainCircuit, CircleDollarSign } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react';

interface JobDetailedInfoProps {
  jobId: string;
}

const JobDetailedInfo = async ({ jobId }: JobDetailedInfoProps) => {
  const jobDetails = await getJobDetailsData(jobId);

  if (!jobDetails) return redirect('/');

  return (
    <main className="md:w-3/4">
      <DetailsSection>
        <p className="text-2xl font-semibold">{jobDetails.title}</p>
        <p className="text-sm text-slate-500">
          {jobDetails.createdAt.toDateString()}
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
        <p>Project Type: {jobDetails.projectType}</p>
      </DetailsSection>

      <DetailsSection>
        <h2 className="text-lg font-semibold">Skills and Expertise</h2>
        <div className="space-x-3 md:w-1/2">
          {jobDetails.skills.split(',').map((item, index) => (
            <span
              key={index}
              className="rounded-3xl bg-slate-200 p-2 text-sm text-slate-600 md:px-4"
            >
              {item.trim()}
            </span>
          ))}
        </div>
      </DetailsSection>

      <DetailsSection>
        <h2 className="text-lg font-semibold">Activity on this job </h2>
        <menu>
          <div className="space-x-3 text-sm">
            <span>Proposals:</span>
            <span>
              {jobDetails.proposalCount < 5
                ? 'Less than 5'
                : jobDetails.proposalCount >= 5 &&
                    jobDetails.proposalCount <= 20
                  ? '5 to 20'
                  : 'More than 20'}
            </span>
          </div>
        </menu>
      </DetailsSection>
    </main>
  );
};

export default JobDetailedInfo;
