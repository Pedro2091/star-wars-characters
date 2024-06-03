import { Alert, Flex, Spin } from 'antd';
import styles from './style.module.css'

import { CharacterResponse } from 'src/models/CharacterResponse';
import { useFetch } from 'src/services/api';
import { Character } from 'src/models/Character';
import CharacterCard from '../CharacterCard';

interface CharacterListProps {
    currentPagination: number;
    search: string | null;
    setTotalCharacters: (total: number | undefined) => void;
}

export default function CharacterList({ currentPagination, search, setTotalCharacters, }: CharacterListProps) {
    const { data, loading, error } = useFetch<CharacterResponse>(`/people`, { page: currentPagination, search: search });
    const characters: Character[] = data?.results || [];
    setTotalCharacters(data?.count);

    return (
        <>
            {!loading && !error &&
                <Flex className={styles.characterContainer} wrap gap='middle' justify='center' align='flex-start'>
                    {characters?.map((character) => (
                        <CharacterCard key={character.name} character={character} />
                    ))}
                </Flex>
            }

            {characters.length === 0 && !loading && !error &&
                <span>No characters found</span>
            }

            {loading &&
                <Spin data-testid="loading" size="large" />
            }

            {error &&
                <Alert
                    message="Error while loading characters"
                    description={`Error: ${error?.message}`}
                    type="error"
                />
            }
        </>
    );
};

