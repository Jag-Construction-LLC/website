import Link from 'next/link';
import Image from 'next/image';

export default function About() {
    return (
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 my-10">
            <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Our Strengths</h2>
            <p className="mb-7 text-lg text-gray-500">Here are a few of Jag's biggest strengths.</p>
            <div className="w-full">
                <div className="flex flex-col w-full mb-10 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-700 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-green-700 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Extensive Field Experience</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-green-700 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">Our work on a wide variety of fuel projects give us a practical ability to identify, assess, and quantify cost liabilities on even the most complex assignments.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full ml-0 md:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-700 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-green-700 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Team Leadership</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-green-700 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">We lead advanced integrated estimating teams, ensuring that every estimate—from conceptual to detailed—is both accurate and comprehensive.</p>
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
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Innovative Processes</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-gray-800 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">We have a proven track record in creating and refining cost estimating and modeling procedures that align seamlessly with client requirements.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-700 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-blue-700 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Complex Project Management</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-blue-700 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">Our success on large-scale, heavy-civil, and utility projects, as well as our experience with oil, gas, petroleum, and chemical plant upgrades, prove our capability to manage multifaceted construction endeavors.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full ml-0 md:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Collaborative Expertise</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-gray-800 uppercase">------------</p>
                                <p className="mb-2 text-gray-600">By integrating client staff, subcontractors, and joint venture partners, we consistently deliver projects that exceed expectations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};