import React from 'react'
import { DecisionEngineType } from '../types/Business'

interface Props {
    data: DecisionEngineType
}

const Decision: React.FC<Props> = ({ data }) => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Pre assessment score</h1>
                    <p><strong>Name</strong> : {data.name}</p>
                    <p><strong>Pre Assessment Score</strong> : {data.preAssessment}</p>
                    <p><strong>Profit loss summary</strong> : {data.profitLossSummary}</p>
                    <p><strong>Year established</strong> : {data.yearEst}</p>
                </div>
            </div>
        </div>
    )
}

export default Decision