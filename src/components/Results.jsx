import { calculateInvestmentResults } from '../util/investment.js'

export default function Results({input}) {
    const resultsData = calculateInvestmentResults(input);
    return <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
    </table>
}