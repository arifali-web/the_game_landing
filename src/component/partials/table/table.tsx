const data = [
    { category: "Physical attraction", weight: "5%", John: 10, Kevin: 5, Aron: 7 },
    { category: "Emotional attraction", weight: "5%", John: 7, Kevin: 5, Aron: 5 },
    { category: "Intellectual interest", weight: "50%", John: 5, Kevin: 6, Aron: 10 },
    { category: "Them as a personality", weight: "20%", John: 5, Kevin: 9, Aron: 8 },
    { category: "How they make me feel", weight: "15%", John: 6, Kevin: 7, Aron: 10 },
    { category: "How they feel about me", weight: "5%", John: 6, Kevin: 10, Aron: 8 },
    { category: "Weighted subtotal score", weight: "", John: "5,55", Kevin: "6,85", Aron: "9,1" }
];

const Table = () => {
    return (
        <table className='text-white table'>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>John</th>
                    <th>Kevin</th>
                    <th>Aron</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.category}</td>
                        <td>{row.weight}</td>
                        <td>{row.John}</td>
                        <td>{row.Kevin}</td>
                        <td>{row.Aron}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default Table();
