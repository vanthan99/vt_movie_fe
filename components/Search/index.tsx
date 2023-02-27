import { AutoComplete, Button, Input, SelectProps, Space } from "antd";
import { useRef, useState } from "react";
import styled from "styled-components";
import { SearchOutlined } from '@ant-design/icons';

const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
    new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((_, idx) => {
            const category: any = `${query}${idx}`;
            return {
                value: category,
                label: (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>
                            Found {query} on{' '}
                            <a
                                href={`https://s.taobao.com/search?q=${query}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {category}
                            </a>
                        </span>
                        <span>{getRandomInt(200, 100)} results</span>
                    </div>
                ),
            };
        });



const Search = () => {

    const [options, setOptions] = useState<SelectProps<object>['options']>([]);

    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value: string) => {
        console.log('onSelect', value);
    };
    const ref = useRef()
    return (
        <SearchWrapper>
            <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{ width: 300 }}
                options={options}
                onSelect={onSelect}
                onSearch={handleSearch}
            >
                <StyledSearch size="large" placeholder="input here" />
            </AutoComplete>
        </SearchWrapper>
    );
}

const StyledSearch = styled(Input.Search)`
    input, .ant-input-search-button {
        border-radius: 2rem !important;
    }

    .ant-input-search-button {
        margin-left: 1rem;
    }
`
const SearchWrapper = styled.div`

`


export default Search;