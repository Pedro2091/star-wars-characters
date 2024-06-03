import { ConfigProvider, Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

interface SearchBarProps {
    className?: string;
    setSearch: (value: string) => void;
}

const { Search } = Input;

export default function SearchBar({ className, setSearch }: SearchBarProps) {
    const onSearch: SearchProps['onSearch'] = (value) => {
        setSearch(value);
    }

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: 'black',
                    colorBorder: '#6D6D6D',
                    colorTextPlaceholder: '#6D6D6D',
                    fontFamily: "Poppins",
                },
            }}
        >
            <Search data-testid="search" className={className} placeholder="Search for a character" onSearch={onSearch} />
        </ConfigProvider>
    )
};