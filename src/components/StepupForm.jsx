const StepupForm = () => {

    return (
        <form id="step-ups-form" method="POST">
            <h2 className="text-base/7 font-semibold text-gray-900">Step-Ups Information</h2>
            <p className="mt-1 text-sm/6 text-gray-600">Please provide details for the step-up.</p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="patient-first-name" className="block text-sm font-medium text-gray-900">Patient
                        First Name</label>
                    <div className="mt-2">
                        <input type="text" name="patient-first-name" id="patient-first-name" autoComplete="given-name"
                               className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none sm:text-sm"/>
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="patient-last-name" className="block text-sm font-medium text-gray-900">Patient Last
                        Name</label>
                    <div className="mt-2">
                        <input type="text" name="patient-last-name" id="patient-last-name" autoComplete="family-name"
                               className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none sm:text-sm"/>
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="patient-date-of-birth" className="block text-sm font-medium text-gray-900">Patient
                        Date of Birth</label>
                    <div className="mt-2">
                        <input type="date" name="patient-date-of-birth" id="patient-date-of-birth"
                               className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none sm:text-sm"/>
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="step-up-date" className="block text-sm font-medium text-gray-900">Step-up
                        Date</label>
                    <div className="mt-2">
                        <input type="date" name="step-up-date" id="step-up-date"
                               className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none sm:text-sm"/>
                    </div>
                </div>
                <div className="sm:col-span-4">
                    <label htmlFor="reason-for-step-up" className="block text-sm font-medium text-gray-900">Reason for
                        Step-Up</label>
                    <div className="mt-2">
                        <input type="text" name="reason-for-step-up" id="reason-for-step-up"
                               className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none sm:text-sm"/>
                    </div>
                </div>
                <div className="sm:col-span-4">
                    <label htmlFor="loc-stepping-up-to" className="block text-sm font-medium text-gray-900">Which LOC
                        are they Stepping up to?</label>
                    <div className="mt-2 relative">
                        <select id="loc-stepping-up-to" name="loc-stepping-up-to"
                                className="block w-full rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-10 text-base text-gray-900 appearance-none focus:border-indigo-600 focus:outline-none sm:text-sm">
                            <option value="">Select level of care...</option>
                            <option value="RTC">RTC</option>
                            <option value="PHP">PHP</option>
                            <option value="IOP">IOP</option>
                            <option value="OP">OP</option>
                        </select>
                        <svg className="absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-500"
                             viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                                  d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="group-start-date" className="block text-sm font-medium text-gray-900">Group Start
                        Date</label>
                    <div className="mt-2">
                        <input type="date" name="group-start-date" id="group-start-date"
                               className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none sm:text-sm"/>
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="days-per-week" className="block text-sm font-medium text-gray-900">Number of Days
                        per Week</label>
                    <div className="mt-2">
                        <input type="number" name="days-per-week" id="days-per-week" min="0" max="7"
                               className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none sm:text-sm"/>
                    </div>
                </div>
                <div className="sm:col-span-4">
                    <label className="block text-sm font-medium text-gray-900">Days of the Week</label>
                    <div className="mt-2 space-y-2">
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" name="days-of-week" value="Monday"
                                       className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                <span className="ml-2 text-sm text-gray-900">Monday</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" name="days-of-week" value="Tuesday"
                                       className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                <span className="ml-2 text-sm text-gray-900">Tuesday</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" name="days-of-week" value="Wednesday"
                                       className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                <span className="ml-2 text-sm text-gray-900">Wednesday</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" name="days-of-week" value="Thursday"
                                       className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                <span className="ml-2 text-sm text-gray-900">Thursday</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" name="days-of-week" value="Friday"
                                       className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                <span className="ml-2 text-sm text-gray-900">Friday</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" name="days-of-week" value="Saturday"
                                       className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                <span className="ml-2 text-sm text-gray-900">Saturday</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="checkbox" name="days-of-week" value="Sunday"
                                       className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                <span className="ml-2 text-sm text-gray-900">Sunday</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="hours-per-day" className="block text-sm font-medium text-gray-900">Number of Hours
                        per Day</label>
                    <div className="mt-2">
                        <input type="number" name="hours-per-day" id="hours-per-day" min="0"
                               className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none sm:text-sm"/>
                    </div>
                </div>
                <div className="sm:col-span-6">
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-900">Notes or Comments</label>
                    <div className="mt-2">
                        <textarea name="notes" id="notes" rows="4"
                                  className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none sm:text-sm"></textarea>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold text-gray-900"
                        onClick="window.location.href='<?!= getWebAppUrl() ?>'">Back
                </button>
                <button id="cancelBtn" type="button" className="text-sm font-semibold text-gray-900">Cancel</button>
                <button type="submit"
                        className="rounded-md bg-[#dd5e3c] px-3 py-2 text-sm font-semibold text-white hover:bg-[#c74d2e] focus:outline-none focus:ring-2 focus:ring-[#dd5e3c] focus:ring-offset-2">Submit
                </button>
            </div>
        </form>
    )
}

export default StepupForm;