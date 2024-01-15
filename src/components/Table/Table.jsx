import Transaction from "../Transaction/Transaction"

export default function Table ({items}) {
    return (
        <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <tbody>
            {items.map(row => (
                <tr key={row.id}>
                    <Transaction items={row}              />
                </tr>


            ))}
        </tbody>
      </table>  
    )
}

