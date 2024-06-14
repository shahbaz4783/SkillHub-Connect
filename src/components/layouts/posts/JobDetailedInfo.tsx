import DetailsSection from '@/components/wrapper/DetailsSection';
import { BrainCircuit, CircleDollarSign } from 'lucide-react';
import React from 'react';

interface JobDetailedInfoProps {
  title: string;
  createdAt: Date;
  description: string;
  budget: number;
  experience: string;
  skills: string;
}

const JobDetailedInfo = ({
  title,
  createdAt,
  description,
  budget,
  experience,
  skills,
}: JobDetailedInfoProps) => {
  return (
    <main className="md:w-3/4">
      <DetailsSection>
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-sm">{createdAt.toDateString()}</p>
      </DetailsSection>

      <DetailsSection>
        <p className="text-sm">{description}</p>
      </DetailsSection>

      <DetailsSection>
        <div className="flex gap-12">
          <menu className="flex gap-4 p-2">
            <div className="pt-1">
              <CircleDollarSign />
            </div>
            <ul>
              <li className="font-semibold text-stone-600">${budget}</li>
              <li className="text-sm text-slate-500">Budget</li>
            </ul>
          </menu>
          <menu className="flex gap-4 p-2">
            <div className="pt-1">
              <BrainCircuit />
            </div>
            <ul>
              <li className="font-semibold text-stone-600">{experience}</li>
              <li className="text-sm text-slate-500">
                I am looking for a mix of experience and value
              </li>
            </ul>
          </menu>
        </div>
      </DetailsSection>

      <DetailsSection>
        <h2 className="text-lg font-semibold">Skills and Expertise</h2>
        <div className="space-x-3 md:w-1/2">
          {skills.split(',').map((item, index) => (
            <span
              key={index}
              className="rounded-3xl bg-slate-200 px-2 py-1 md:px-4"
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
            <span>Less than 5</span>
          </div>
          <div className="space-x-3 text-sm">
            <span>Proposals:</span>
            <span>Less than 5</span>
          </div>
        </menu>
      </DetailsSection>
    </main>
  );
};

export default JobDetailedInfo;
