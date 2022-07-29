import {
    StyledContainer,
    StyledItem,
    CellContainer,
    StyledImage,
    StyledImageHolder,
    StyledRating
} from './styles';
import { Content } from '../types';

interface Props {
    content: Content[];
}

export const Gallery: React.FC<Props> = ({ content }) => (
    <StyledContainer>
        {content.map(row => (
            <StyledItem key={row.id}>
                <CellContainer>
                    <StyledImageHolder>
                        <StyledRating>{row.vote_average}</StyledRating>
                        {row.poster_path ?
                            <StyledImage src={`https://image.tmdb.org/t/p/w500/${row.poster_path}`} />
                            :
                            <StyledImage src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" />
                        }
                    </StyledImageHolder>
                    <div>
                        <p>{row.release_date.substring(0, 4)}</p>
                        {row.title}
                    </div>
                </CellContainer>
            </StyledItem>
        ))}
    </StyledContainer>
);
