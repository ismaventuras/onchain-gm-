'use client'
import { useContractRead } from 'wagmi'


const GM_ADDRESS = "0x153a434b9bBfDc90a35a63ce7e8B20CcC622891C"
const GM_ABI = [
    {
        "inputs": [],
        "name": "GM",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    }
] as const

export function GMFetcher() {
    const { data, isError, isLoading } = useContractRead({
        address: GM_ADDRESS,
        abi: GM_ABI,
        functionName: 'GM',
    })


    return (
        <div>
            {isLoading && <p>Fetching your GM from the depths of an EVM!</p>}
            {isError && <p>Woops! Something wrong when fetching your GM 🍉</p>}
            {data &&
            <div className='p-24 flex justify-center rounded-lg bg-gradient-to-r from-yellow-600 to-red-600 shadow-lg'>
                <h2 className='text-6xl text-lime-400 font-bold tracking-widest'>{data}</h2>
            </div>            
            }
            <a href='https://moonbase.moonscan.io/address/0x153a434b9bbfdc90a35a63ce7e8b20ccc622891c' className='underline' target='_blank'>Contract</a>
        </div>
    )
}