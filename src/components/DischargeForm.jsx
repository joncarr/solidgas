const DischargeForm = () => {

    return (
        <form id="discharges-form" method="POST">
            <h2 className="text-base/7 font-semibold text-gray-900">Discharges Information</h2>
            <p className="mt-1 text-sm/6 text-gray-600">Please provide details for the discharge.</p>
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
                <div className="sm:col-span-4">
                    <label htmlFor="discharge-reason" className="block text-sm font-medium text-gray-900">Discharge
                        Reason</label>
                    <div className="mt-2 relative">
                        <select id="discharge-reason" name="discharge-reason"
                                className="block w-full rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-10 text-base text-gray-900 appearance-none focus:border-indigo-600 focus:outline-none sm:text-sm">
                            <option value="">Select discharge reason...</option>
                            <option value="AMA">AMA</option>
                            <option value="Medical Discharge">Medical Discharge</option>
                            <option value="Step-down">Step-down</option>
                            <option value="Therapeutic Discharge">Therapeutic Discharge</option>
                            <option value="Transfer to Higher LOC">Transfer to Higher LOC</option>
                            <option value="Treatment Complete">Treatment Complete</option>
                            <option value="Other">Other</option>
                        </select>
                        <svg className="absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-500"
                             viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                                  d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </div>
                </div>
                <div className="sm:col-span-4">
                    <label htmlFor="loc-discharged" className="block text-sm font-medium text-gray-900">LOC
                        Discharged</label>
                    <div className="mt-2 relative">
                        <select id="loc-discharged" name="loc-discharged"
                                className="block w-full rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-10 text-base text-gray-900 appearance-none focus:border-indigo-600 focus:outline-none sm:text-sm">
                            <option value="">Select level of care...</option>
                            <option value="Detox">Detox</option>
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
                    <label htmlFor="last-date-attended-group" className="block text-sm font-medium text-gray-900">Last
                        Date Attended Group</label>
                    <div className="mt-2">
                        <input type="date" name="last-date-attended-group" id="last-date-attended-group"
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

export default DischargeForm;