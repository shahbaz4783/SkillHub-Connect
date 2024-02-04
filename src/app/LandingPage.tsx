import Hero from "@/components/section/Hero";
import { popular_categories } from '@/data/popular_categories';
import SectionTop from '@/components/layouts/SectionTop';

export default function LandingPage() {
	return (
		<>
			<main className='w-11/12 m-auto'>
				<Hero />

				<section className="mb-24">
					<SectionTop
						heading='Browse talent by category'
						subhead='Explore diverse expertise and Skills across categories'
					/>
					<article className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
						{popular_categories.map((item) => (
							<menu className='flex flex-col gap-3 rounded-lg bg-card bg-slate-100 p-6 hover:bg-slate-200 cursor-pointer'>
								<h2 className='font-semibold text-lg'>
									{item.title}
								</h2>
								<div className="flex gap-6 text-stone-600 font-semibold">
									<p>{item.rating}</p>
									<p>{item.skills} skills</p>
								</div>
							</menu>
						))}
					</article>
				</section>

				<section className='info-section'>
					<aside className='img-wrapper'>
						<img
							src='https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZWxhbmNlfGVufDB8fDB8fHww'
							alt=''
						/>
					</aside>
					<aside className='text-container'>
						<article className='head'>
							<h2>
								Where Industry Leaders <br />
								Find Top Talent
							</h2>
							<p>
								Access the top 1% on SkillHub Connect, coupled with a suite of
								cutting-edge workforce management tools. Redefine innovation and
								embrace the future of success
							</p>
							<button className='btn-primary'>Learn More</button>
						</article>
						<article className='list-wrapper'>
							<li className='list-item'>
								<div>
									<img src='/assets/screwdriver.svg' alt='' />
								</div>
								<div>
									<h3>Access expert talent to fill your skill gaps</h3>
								</div>
							</li>
							<li className='list-item'>
								<div>
									<img src='/assets/briefcase.svg' alt='' />
								</div>
								<div>
									<h3>
										Control your workflow: hire, classNameify and pay your
										talent
									</h3>
								</div>
							</li>
							<li className='list-item'>
								<div>
									<img src='/assets/headphone.svg' alt='' />
								</div>
								<div>
									<h3>Partner with SkillHub for end-to-end support</h3>
								</div>
							</li>
						</article>
					</aside>
				</section>

				<section className='info-section'>
					<aside className='text-container'>
						<article className='head'>
							<h2>
								Find great <br />
								work
							</h2>
							<p>
								Meet clients you're excited to work with and take your career or
								business to new heights.
							</p>
							<a href='/jobs/all'>
								<button className='btn-primary'>Find Opportunities</button>
							</a>
						</article>
						<article className='list-wrapper'>
							<li className='list-item'>
								<div>
									<img src='/assets/screwdriver.svg' alt='' />
								</div>
								<div>
									<h3>
										Find opportunities for every stage of your freelance career
									</h3>
								</div>
							</li>
							<li className='list-item'>
								<div>
									<img src='/assets/briefcase.svg' alt='' />
								</div>
								<div>
									<h3>Control when, where, and how you work</h3>
								</div>
							</li>
							<li className='list-item'>
								<div>
									<img src='/assets/headphone.svg' alt='' />
								</div>
								<div>
									<h3>Explore different ways to earn</h3>
								</div>
							</li>
						</article>
					</aside>
					<aside className='img-wrapper'>
						<img
							src='https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZWxhbmNlfGVufDB8fDB8fHww'
							alt=''
						/>
					</aside>
				</section>

				<section className='com-test-section'>
					<article className='head'>
						<h2>
							Trusted by leading <br />
							brands and startups
						</h2>
					</article>
					<article className='grid-3-col'>
						<div className='com-testimonial'>
							<div className='text-content'>
								<h3>Microsoft</h3>
								<q>
									One of the advantages of utilizing freelancers is finding
									talent with different skills quickly as our needs change.
								</q>
								<p>Carol Taylor, Director of Content Experience</p>
							</div>
							<div className='com-stats'>
								<h2>Results</h2>
								<div className='com-stats-texts'>
									<div>
										<h3>50% Faster</h3>
										<p>launch of projects</p>
									</div>
									<div>
										<h3>10,000</h3>
										<p>projects completed</p>
									</div>
								</div>
							</div>
						</div>
						<div className='com-testimonial'>
							<div className='text-content'>
								<h3>Microsoft</h3>
								<q>
									One of the advantages of utilizing freelancers is finding
									talent with different skills quickly as our needs change.
								</q>
								<p>Carol Taylor, Director of Content Experience</p>
							</div>
							<div className='com-stats'>
								<h2>Results</h2>
								<div className='com-stats-texts'>
									<div>
										<h3>50% Faster</h3>
										<p>launch of projects</p>
									</div>
									<div>
										<h3>10,000</h3>
										<p>projects completed</p>
									</div>
								</div>
							</div>
						</div>
						<div className='com-testimonial'>
							<div className='text-content'>
								<h3>Microsoft</h3>
								<q>
									One of the advantages of utilizing freelancers is finding
									talent with different skills quickly as our needs change.
								</q>
								<p>Carol Taylor, Director of Content Experience</p>
							</div>
							<div className='com-stats'>
								<h2>Results</h2>
								<div className='com-stats-texts'>
									<div>
										<h3>50% Faster</h3>
										<p>launch of projects</p>
									</div>
									<div>
										<h3>10,000</h3>
										<p>projects completed</p>
									</div>
								</div>
							</div>
						</div>
					</article>
				</section>
			</main>
		</>
	);
}
