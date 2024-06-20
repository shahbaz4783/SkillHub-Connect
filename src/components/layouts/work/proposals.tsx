import { Card } from '@/components/ui/card';
import { getUserProposals } from '@/data/proposals';
import React from 'react';

const Proposals = async () => {
  const proposals = await getUserProposals();
  return (
    <section>
      <h1>Submitted Proposals ({proposals?.length})</h1>
      {proposals?.map((data) => (
        <Card>
          <p>Initiated {data.createdAt.toDateString()}</p>
          <div>
            <h3>Total price of project</h3>
            <p>The amount your client will see.</p>
            <p>${data.bid.toFixed(2)}</p>
          </div>
          <div>
            <h3>You'll receive</h3>
            <p>The estimated payment, after service fees.</p>
            <p>${data.paymentReceive.toFixed(2)}</p>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default Proposals;
