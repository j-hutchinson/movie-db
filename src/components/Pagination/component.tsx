import { Pagination as MaterialPagination } from '@mui/material';

interface Props {
    totalPages: number;
    setPage: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ totalPages, setPage }) => {
    const handleChange = (_, value) => {
        setPage(value);
    };
    return (
        <MaterialPagination count={totalPages} variant="outlined" color="primary" onChange={handleChange} />
    );
}