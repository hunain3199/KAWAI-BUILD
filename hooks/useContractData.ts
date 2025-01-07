import { useEffect, useState, useCallback } from 'react'
import { useContractRead } from 'wagmi'
import { readContract } from '@wagmi/core'
import { presaleContractABI } from '../config/abi/presaleContractABI'
import { erc20ContractABI } from '../config/abi/ERC20ABI'
import { PresaleConfig } from '../config/presaleConfig';


export const fetchBNBPrice = () => {
    const [bnbPrice, setBNBPrice] = useState(0);

    const handleBnbPrice = useCallback(async () => {
        try {
            const data = await readContract({
                address: PresaleConfig.presaleAddress as `0x${string}`,
                abi: presaleContractABI,
                functionName: 'getLatestPriceEth',
            });
            console.log(data)
            setBNBPrice(Number(data) / (10 ** 8));
        } catch (error) {
            console.error('Error fetching contract data:', error);
        }
        return false;
    }, []);

    return { bnbPrice, onBnbPrice: handleBnbPrice };
};

export const fetchUSDTBal = () => {
    const [usdtBal, setUSDBal] = useState(0);
    const handleUSDTBal = useCallback(async (address: any) => {
        if (address) {
            try {
                const data = await readContract({
                    address: PresaleConfig.usdtAddress as `0x${string}`,
                    abi: erc20ContractABI,
                    functionName: 'balanceOf',
                    args: [address as `0x${string}`],
                });

                setUSDBal(Number(data) / (10 ** 6));
            } catch (error) {
                console.error('Error fetching contract data:', error);
            }
        }
        return false;
    }, []);

    return { usdtBal, onUSDTBal: handleUSDTBal };
};

export const fetchAllowance = () => {
    const [allowance, setAllowance] = useState(0);

    const handleAllowance = useCallback(async (address: any) => {
        if (address) {
            try {
                const data = await readContract({
                    address: PresaleConfig.usdtAddress as `0x${string}`,
                    abi: erc20ContractABI,
                    functionName: 'allowance',
                    args: [address as `0x${string}`, PresaleConfig.presaleAddress as `0x${string}`],
                });

                setAllowance(Number(data) / (10 ** 6));
            } catch (error) {
                console.error('Error fetching contract data:', error);
            }
        }
        return false;
    }, []);

    return { allowance, onAllowance: handleAllowance };
};

export const fetchDigiAmount = () => {
    const [digiBal, setDigiBal] = useState(0);
    const handleDigiBal = useCallback(async (address: any) => {
        if (address) {
            try {
                const data = await readContract({
                    address: PresaleConfig.digiAddress as `0x${string}`,
                    abi: erc20ContractABI,
                    functionName: 'balanceOf',
                    args: [address as `0x${string}`],
                });

                setDigiBal(Number(data) / (10 ** 18));
            } catch (error) {
                console.error('Error fetching contract data:', error);
            }
        }
        return false;
    }, []);

    return { digiBal, onDigiBal: handleDigiBal };
};
