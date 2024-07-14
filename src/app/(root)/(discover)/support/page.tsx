import Banner from '@/components/shared/Banner';
import SupportOptions from '@/components/layouts/static/SupportOptions';

const Support = () => {
	return (
		<main>
			<Banner
				title='Help Center'
				slogan='Find solutions fast.'
				description='Search hundreds of articles on SkillHub Help'
				placeholder='Try "skillhub 101" or "how to earn" '
			/>
			<SupportOptions />
		</main>
	);
};

export default Support;
