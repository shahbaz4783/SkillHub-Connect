import Hero from "@/components/section/Hero";

export default function LandingPage() {
	return (
		<>
			<main className='w-11/12 m-auto'>
        <Hero />
				<section className='info-section'>
					<aside className='img-wrapper'>
						<img
							src='https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvY2Vzc3xlbnwwfHwwfHx8MA%3D%3D'
							alt=''
						/>
					</aside>
					<aside className='text-container'>
						<article className='head'>
							<h2>
								Getting work done has <br />
								never been easier
							</h2>
							<a href='/register'>
								<button className='btn-primary'>Register for free</button>
							</a>
						</article>
						<article className='list-wrapper'>
							<li className='list-item'>
								<div>
									<img src='/assets/screwdriver.svg' alt='' />
								</div>
								<div>
									<h3>No cost to join</h3>
									<p>
										Register and browse professionals, explore projects, or even
										book a consultation.
									</p>
								</div>
							</li>
							<li className='list-item'>
								<div>
									<img src='/assets/briefcase.svg' alt='' />
								</div>
								<div>
									<h3>Post a job and hire top talent</h3>
									<p>
										Finding talent doesn’t have to be a chore. Post a job or we
										can search for you!
									</p>
								</div>
							</li>
							<li className='list-item'>
								<div>
									<img src='/assets/headphone.svg' alt='' />
								</div>
								<div>
									<h3>Work with the best—without breaking the bank</h3>
									<p>
										Upwork makes it affordable to up your work and take
										advantage of low transaction rates.
									</p>
								</div>
							</li>
						</article>
					</aside>
				</section>

				<section className='popular_categories'>
					<div>
						<h2>Explore popular categories.</h2>
						<p>Looking for work? Browse jobs</p>
					</div>
					<div className='box-container'>
						<div className='box'>
							<div>
								<img src='/assets/treadmill.svg' alt='' />
							</div>
							<p>Development and IT</p>
						</div>
						<div className='box'>
							<div>
								<img src='/assets/elliptical.svg' alt='' />
							</div>
							<p>AI Services</p>
						</div>
						<div className='box'>
							<div>
								<img src='/assets/indoorcycle.svg' alt='' />
							</div>
							<p>Sales and Marketing</p>
						</div>
						<div className='box'>
							<div>
								<img src='/assets/climber.svg' alt='' />
							</div>
							<p>Writing and Translation</p>
						</div>
						<div className='box'>
							<div>
								<img src='/assets/rower.svg' alt='' />
							</div>
							<p>Finance and Accounting</p>
						</div>
						<div className='box'>
							<div>
								<img src='/assets/accessories.svg' alt='' />
							</div>
							<p>Design and Creative</p>
						</div>
					</div>
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
