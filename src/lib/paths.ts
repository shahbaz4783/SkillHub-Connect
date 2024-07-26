const paths = {
  home() {
    return '/';
  },
  myJobPost() {
    return '/client/job-post';
  },
  jobPostDetails(jobPostId: string) {
    return `/client/job-post/${jobPostId}`;
  },
};

export default paths;
