mport React from "react";

const Table = () => {
    return <div>
        <Heading />
        {
            records.map(record => <Row />)
        }
    </div>
}

export default Table;