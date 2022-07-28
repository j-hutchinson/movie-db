import styled from 'styled-components';

const TableContainer = styled.table`
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 8px;
    table-layout: auto;
    width: 640px;
`;

const TableRow = styled.tr`
    border-bottom: 1px solid #dcdcdc;
`;

const TableHead = styled.thead`
    border-bottom: 1px solid #dcdcdc;
`;

const TableCell = styled.td`
    padding: 8px 12px;
`;

interface Props {
    content: any;
}

export const Table: React.FC<Props> = ({ content }) => (
    <TableContainer>
        <TableHead>
            <TableRow>
                <th>Title</th>
                <th>The table header</th>
            </TableRow>
        </TableHead>
        <tbody>
            {content.map(row => (
                <TableRow key={row.id}>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.poster_path}</TableCell>
                </TableRow>
            ))}
        </tbody>
    </TableContainer>
);