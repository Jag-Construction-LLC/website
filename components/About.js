import Link from 'next/link';
import Image from 'next/image';

export default function About() {
    return (
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 my-16">
            <h2 className="mb-2 text-3xl font-semibold leading-tight text-center text-gray-900">Strengths for Success</h2>
            <p className="max-w-md mx-auto mb-10 text-center text-gray-500">Discover the qualities that set us apart and drive our commitment to superior project delivery.</p>
            <div className="w-full">
                <div className="flex flex-col w-full mb-10 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-700 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-green-700 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Versatile Trade Expertise</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-green-700 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">Our mastery across all construction trades allows us to tackle projects of any scope, delivering
                                    quality craftsmanship from foundation to finish.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full ml-0 md:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-700 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-green-700 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Leadership in Collaboration</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-green-700 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">We orchestrate diverse teams of tradespeople, ensuring every element of your build works in
                                    harmony for a flawless outcome.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full mb-5 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Innovative Execution</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-gray-800 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">Our proven approach integrates advanced tools and techniques to streamline construction,
                                    keeping your project on track and on budget.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-900 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-blue-900 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Complex Project Delivery</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-blue-900 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">From residential builds to large-scale commercial, heavy-civil, and industrial projects, we thrive
                                    on turning ambitious plans into reality.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full ml-0 md:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Client-Centered Partnership</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-gray-800 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">By working closely with you and our network of skilled subcontractors, we bring your vision to
                                    life while exceeding expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};