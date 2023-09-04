import React, { useState, useEffect } from 'react'
import { BalanceSheetRequestType, BusinessType } from '../types/Business'
import { accountingProviders } from '../Constants/AccountingProviderOptions'
import { REGISTER_LOAN } from '@/api/LoanAPI'
import Sheet from '../BalanceSheet/Sheet'

interface Props {
    exportData: (data: BalanceSheetRequestType) => void
}

const Form: React.FC<Props> = ({ exportData }) => {
    const [load, setLoad] = useState(false)
    const [name, setName] = useState<string>("")
    const [year, setYear] = useState<string>("")
    const [profitSummary, setProfitSummary] = useState<string>("")
    const [isProfit, setIsProfit] = useState(true)
    const [provider, setProvider] = useState<string>("")
    const [userName, setuserName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [loanAmount, setLoanAmount] = useState<number>(0)
    const [newBusiness, setBusiness] = useState<BalanceSheetRequestType | null>(null)

    const [error, setError] = useState<string | null>()


    const initialiseBusiniess = async () => {
        setLoad(true)
        setError(null)
        try {
            const data: BusinessType = {
                name: name,
                yearEst: parseInt(year),
                profitLossSummary: isProfit ? parseInt(profitSummary) : -parseInt(profitSummary),
                userData: {
                    name: userName,
                    email: email
                },
                loanAmount: loanAmount,
            }
            const res = await REGISTER_LOAN(data)
            const resData: BalanceSheetRequestType = {
                businessId: res.data._id,
                email: res.data.userData.email,
                name: res.data.userData.name,
            }
            setBusiness(resData)
            exportData(resData)
            // setBusiness(res.data)
            // if (newBusiness)
            //     exportData(newBusiness)

        } catch (error: any) {
            setError(error.message)
        }
        setLoad(false)
    }


    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        initialiseBusiniess()
    }




    return (
        <main>

            {/* form content */}
            <div className="flex flex-col p-3 gap-2 items-center mt-5 justify-center w-full">
                {
                    error &&
                    <div className="alert alert-error">
                        <span>{error}</span>
                    </div>
                }
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3">
                        <p className="font-lg font-bold">
                            User details
                        </p>
                        <input
                            type="text"
                            onChange={(e) => setuserName(e.target.value)}
                            required
                            autoFocus
                            placeholder="User name"
                            className="input input-bordered w-[350px]" />

                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                            className="input input-bordered w-[350px]" />

                        <p className="font-lg font-bold">
                            Business details
                        </p>
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            required
                            autoFocus
                            placeholder="Business name"
                            className="input input-bordered w-[350px]" />

                        <input
                            type="text"
                            onChange={(e) => setYear(e.target.value)}
                            required
                            placeholder="Year established"
                            className="input input-bordered w-[350px]" />

                        <input
                            type="number"
                            onChange={(e) => setProfitSummary(e.target.value)}
                            required
                            placeholder="Profit/loss summary"
                            className={isProfit ? 'input input-bordered w-[350px] text-green-600' : 'input input-bordered w-[350px] text-red-600'} />

                        <div className="flex flex-row items-center gap-1">
                            <label htmlFor="profit-loss">Profit</label>
                            <input
                                type="checkbox"
                                checked={isProfit}
                                onChange={() => setIsProfit(!isProfit)}
                                id="profit-loss"
                                className="checkbox" />
                        </div>

                        <p className="font-lg font-bold">
                            Accounting provider details
                        </p>

                        <select
                            onChange={(e) => setProvider(e.target.value)}
                            required
                            value={provider}
                            className="select select-bordered w-[350px]"
                        >
                            <option disabled value="">
                                Choose accounting provider
                            </option>
                            {accountingProviders.map((provider: string, index: number) => (
                                <option key={index} value={provider}>
                                    {provider}
                                </option>
                            ))}
                        </select>

                        <input
                            type="number"
                            onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                            required
                            placeholder="Loan amount"
                            className="input input-bordered w-[350px]" />
                    </div>
                    <button type="submit" className="btn btn-neutral mt-3">
                        Request balance sheet
                    </button>
                </form>
                {/* {
                    newBusiness &&
                    <button className="btn btn-neutral mt-3">
                        Go to balance sheet
                    </button>
                } */}

            </div>


        </main>
    )
}

export default Form