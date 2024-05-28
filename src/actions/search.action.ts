'use server';

import { redirect } from 'next/navigation';

export const searchAction = async (formData: FormData) => {
  const q = formData.get('q');

  if (typeof q !== 'string' || !q) redirect('/');

  redirect(`/search?q=${q}`);
};
