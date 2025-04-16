import React from 'react';

export const Position = () => {
    return (
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-[#0b0c10] text-white">
            {/* Blurred shape background */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 opacity-60" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                    <defs>
                        <linearGradient id="bs2-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                            <stop offset="0%" stopColor="#6366F1"></stop>
                            <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
                        </linearGradient>
                    </defs>
                    <path fill="url(#bs2-a)" fillRule="evenodd" d="m346 898 461 369-284 58z" transform="translate(-346 -898)" />
                </svg>
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-300 to-purple-400 text-transparent bg-clip-text mb-16">
                    Open positions
                </h3>

                <div className="space-y-16 text-left">
                    {[
                        {
                            title: 'Engineering',
                            roles: [
                                ['Software Engineering Intern', 'Remote / North America'],
                                ['Software Engineer, Core Infrastructure', 'Remote'],
                                ['Software Engineer, Data Platform', 'Remote / Europe'],
                                ['Software Engineer, Marketing Systems', 'Remote / North America']
                            ]
                        },
                        {
                            title: 'Marketing',
                            roles: [
                                ['Product Marketing Manager', 'Remote / North America'],
                                ['Marketing Manager', 'Remote / Europe']
                            ]
                        },
                        {
                            title: 'Design',
                            roles: [
                                ['Product Designer, Consumer', 'Remote / North America'],
                                ['Senior Product Designer', 'Remote / Europe'],
                                ['Lead Designer', 'Remote / Europe']
                            ]
                        }
                    ].map((department, i) => (
                        <div key={i}>
                            <h4 className="text-xl font-semibold text-indigo-200 mb-5">{department.title}</h4>
                            <ul className="space-y-4">
                                {department.roles.map(([title, location], j) => (
                                    <li
                                        key={j}
                                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-5 bg-white/5 border border-white/10 rounded-lg shadow-md hover:shadow-indigo-500/20 transition duration-300 backdrop-blur-md"
                                    >
                                        <span className="text-white font-medium text-base">{title}</span>
                                        <a href="#0" className="text-indigo-400 hover:text-indigo-300 mt-2 sm:mt-0 font-medium whitespace-nowrap">
                                            {location} <span aria-hidden="true">-&gt;</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
