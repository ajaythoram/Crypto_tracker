

import React, { useEffect } from 'react';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./Select_coins.css"
import { Get_100Coins } from '../../../functions/Get100coins';
function Compare_select({
    coin1,
     coin2,
      handleCoinChange,
    days,
    handleDaysChange,
    }) {
    const [allCoins, setAllCoins] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const myCoins = await Get_100Coins();
            setAllCoins(myCoins);
            console.log("Fetched coins:", myCoins);
        } catch (error) {
            console.error("Error fetching coins:", error);
        }
    }

    console.log("coin1:", coin1);
    console.log("coin2:", coin2);
    return (
        <div className='select_coin'>
            <h2>Crypto 1</h2>
            <Select

                sx={{
                    height: "2.5rem",
                    color: "var(--white)",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--white)",
                    },
                    "& .MuiSvgIcon-root": {
                        color: "var(--white)",
                    },
                    "& .hover": {
                        "$$ fieldset": {
                            borderColor: "3a80e9",
                        },
                    },
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={coin1}
                label="Coin1"
                onChange={(event) => handleCoinChange(event, false)}
            >
                {allCoins
               .filter((item) => item.id != coin2)
                .map((coin) => (
                    <MenuItem key={coin.id} value={coin.id}>
                        {coin.name}
                    </MenuItem>

                ))}
            </Select>

            <h2>Crypto 2</h2>
            <Select

                sx={{
                    height: "2.5rem",
                    color: "var(--white)",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--white)",
                    },
                    "& .MuiSvgIcon-root": {
                        color: "var(--white)",
                    },
                    "& .hover": {
                        "$$ fieldset": {
                            borderColor: "3a80e9",
                        },
                    },
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={coin2}
                label="Coin2"
                onChange={(event) => handleCoinChange(event, true)}
            >
                {allCoins
                .filter((item) => item.id != coin1)
                .map((coin) => (
                    <MenuItem key={coin.id} value={coin.id}>
                        {coin.name}
                    </MenuItem>
                ))}
            </Select>

        </div>
    );
}
export default Compare_select;