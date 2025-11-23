import React from 'react';

const About = () => {
    return(
        <div className='container'>
                <h3><strong>About Us – Lebanese International University (LIU)</strong></h3>

                <p>Welcome to the Lebanese International University (LIU), a center of academic excellence and innovation in Lebanon.</p>

                <p>Founded with the vision of providing high-quality education accessible to students across Lebanon and the region, LIU has grown into one of the country’s leading private universities. With 9 campuses nationwide, LIU offers a wide range of undergraduate, graduate, and professional programs designed to prepare students for successful careers in a globalized world.</p>


                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-10">

                    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-6 shadow-lg hover:bg-white/20 transition">
                        <h2 className="text-2xl font-semibold text-white mb-2">Our Mission:<br/></h2>
                        <p className="text-gray-300"><br/>Our mission is to empower students through knowledge, critical thinking, and practical skills, fostering lifelong learning and contributing to the social and economic development of Lebanon.                            
                        </p>
                    </div>

                    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-6 shadow-lg hover:bg-white/20 transition">
                        <h2 className="text-2xl font-semibold text-white mb-2">Our Values:</h2>
                        <p className="text-gray-300">   <br/>	•	Excellence: We are committed to maintaining the highest academic standards.
                                                        <br/>	•	Innovation: We encourage creativity and forward-thinking in teaching, research, and community service.
                                                        <br/>	•	Inclusivity: We welcome students from diverse backgrounds and support equal opportunities for all.
                                                        <br/>	•	Community Engagement: We aim to positively impact society through outreach and partnerships.
                        </p>
                    </div>

                    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-6 shadow-lg hover:bg-white/20 transition">
                        <h2 className="text-2xl font-semibold text-white mb-2">Our Faculties and Programs</h2>
                        <p className="text-gray-300">  <br/>LIU offers programs across multiple faculties, including:<br/>
                                                        <br/>	•	Arts & Sciences
                                                        <br/>	•	Business & Management
                                                        <br/>	•	Education
                                                        <br/>	•	Engineering
                                                        <br/>	•	Pharmacy
                        </p>
                    </div>

                    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-6 shadow-lg hover:bg-white/20 transition">
                        <h2 className="text-2xl font-semibold text-white mb-2">Why Choose LIU?</h2>
                        <p className="text-gray-300">   <br/>	•	Experienced faculty and modern curricula
                                                        <br/>	•	State-of-the-art facilities across all campuses
                                                        <br/>	•	Strong emphasis on research, internships, and career readiness
                                                        <br/>	•	Vibrant student life with clubs, events, and cultural activities
                        </p>
                    </div>

                    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-6 shadow-lg hover:bg-white/20 transition">
                        <h2 className="text-2xl font-semibold text-white mb-2">Connect With Us</h2>
                        <p className="text-gray-300">   
                            Join the LIU community and take the first step toward a future full of opportunities. Explore our programs, visit a campus, or contact us today to learn more.
                        </p>
                    </div>

                </div>

        </div>
    )
} 
export default About