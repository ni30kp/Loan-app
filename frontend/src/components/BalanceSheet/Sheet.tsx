import React from 'react'
import { BalanceSheetType } from '../types/Business'


interface Props {
    data: BalanceSheetType[]
}
const Sheet: React.FC<Props> = ({ data }) => {
    return (
        <div className='p-5'>
            <div className="overflow-x-auto border-2 rounded">
                <p className='text-3xl font-bold p-2'>Balance sheet</p>
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Month</th>
                            <th>Profit/Loss</th>
                            <th>Assets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((element: any, index: number) => {
                                return <tr key={index}>
                                    <th>{element.year}</th>
                                    <td>{element.month}</td>
                                    <td>{element.profitOrLoss}</td>
                                    <td>{element.assetsValue}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Sheet