import SectionHeading from '@/components/shared/SectionHeading';
import NoDataFound from '@/components/ui/NoDataFound';
import React from 'react';

const ManageOrdersPage = () => {
  return (
    <div>
      <SectionHeading title="Manage Orders" />
      <div>
        <table className="w-full border">
          <thead>
            <tr className="border bg-slate-100">
              <th className="border py-4 font-normal text-slate-600">Buyer</th>
              <th className="border py-4 font-normal text-slate-600">
                Catalog Id
              </th>
              <th className="border py-4 font-normal text-slate-600">Due On</th>
              <th className="border py-4 font-normal text-slate-600">Total</th>
              <th className="border py-4 font-normal text-slate-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr className="text-center">
              <td>shahbaz</td>
              <td>hhjvrewkjnsvkjeeaqve</td>
              <td>23 march, 2024</td>
              <td>$309</td>
              <td>In Progress</td>
            </tr> */}
          </tbody>
        </table>
        <NoDataFound message="You have not any orders at the moment" />
      </div>
    </div>
  );
};

export default ManageOrdersPage;
