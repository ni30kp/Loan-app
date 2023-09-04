"use client"

import { GET_BALANCE_SHEET, GET_DECISION_DATA } from "@/api/LoanAPI"
import Sheet from "@/components/BalanceSheet/Sheet"
import Decision from "@/components/Decision/Decision"
import Form from "@/components/LoanForm/Form"
import { BalanceSheetRequestType, BalanceSheetType, DecisionEngineType } from "@/components/types/Business"
import { useState } from "react"

export default function Home() {
  const [balanceSheet, setBalanceSheet] = useState<BalanceSheetType[] | null>()
  const [load, setLoad] = useState(false)
  const [showForm, setShowForm] = useState(true)
  const [newBusiness, setBusiness] = useState<any | null>(null)
  const [decisionData, setDecisionData] = useState<DecisionEngineType | null>(null)

  // receives a balance sheet with random values, simulates the accounting provider
  const getBalanceSheet = async (data: BalanceSheetRequestType) => {
    setLoad(true)
    try {
      const res = await GET_BALANCE_SHEET(data)
      setBusiness(res.data)
      setBalanceSheet(res.data.balanceSheet)
    } catch (error: any) {
      console.log(error?.message)
    }
    setLoad(false)
  }

  // makes a call to get decision data, simulates the decision engine
  const handleSubmit = async () => {
    try {
      const res = await GET_DECISION_DATA(newBusiness)
      setDecisionData(res.data)
    } catch (error: any) {
      console.log(error?.message)
    }
  }

  // clears up all the data
  const handleCancel = () => {
    setShowForm(true)
    setBalanceSheet(null)
    setBusiness(null)
    setDecisionData(null)
  }

  return (
    <main>
      {
        // Only show form initially when the user need to register for loan
        showForm &&
        < Form exportData={(data) => {
          setBusiness(data)
          getBalanceSheet(data)
          setShowForm(false)
        }
        } />
      }

      <div className="flex min-h-screen flex-col ">
        {/* Loading component to display during api calls */}
        {load ?
          <div className="flex text-3xl font-bold flex-col items-center justify-center h-screen">
            Fetching balance sheet please wait
          </div>
          :
          <div>
            {
              balanceSheet &&
              <>
                <Sheet
                  data={balanceSheet}
                />
              </>
            }

            {balanceSheet &&
              <div className="flex flex-row gap-3 items-center justify-center">
                <button onClick={handleSubmit} className="btn btn-neutral">
                  submit application
                </button>
                <button onClick={handleCancel} className="btn btn-neutral">
                  Cancel
                </button>
              </div>
            }


            {
              decisionData &&
              <div className="flex flex-col items-center justify-center">
                <Decision data={decisionData} />
                <button className="btn btn-neutral" onClick={handleCancel}>New application</button>
              </div>
            }
          </div>
        }
      </div>
    </main>
  )
}
