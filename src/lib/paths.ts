const paths = {
  home() {
    return '/';
  },

  myJobPost() {
    return '/client/job-post';
  },

  createListing(type: 'catalog' | 'jobPost') {
    if (type === 'catalog') return '/freelancer/service-catalog/create';
    if (type === 'jobPost') return '/client/job-post/create';
  },

  jobPost(jobPostId: string, type: 'apply' | 'proposals' | 'edit' | '') {
    return `/client/job-post/${jobPostId}/${type}`;
  },

  serviceCatalog(catalogId: string, type: 'buy' | 'proposals' | 'edit' | '') {
    return `/freelancer/service-catalog/${catalogId}/${type}`;
  },

  catalogDetails(catalogId: string) {
    return `/services/${catalogId}`;
  },

  myApplications() {
    return '/freelancer/proposals';
  },

  orders() {
    return '/freelancer/orders';
  },

  profile(username: string) {
    return `/profile/${username}`;
  },

  userStats() {
    return '/profile';
  },

  browse(type: 'service' | 'earn') {
    if (type === 'service') return '/service';
    if (type === 'earn') return '/earn';
  },

  support() {
    return '/support';
  },

  settings(
    type:
      | ''
      | 'personal-information'
      | 'profile-settings'
      | 'address'
      | 'password-and-security'
      | 'payment-methods'
      | ' notification-settings'
      | 'privacy'
      | 'account-activity'
      | 'connected-apps',
  ) {
    return `/settings/$${type}`;
  },

  search(q: string) {
    return `/search?q=${q}`;
  },
};

export default paths;