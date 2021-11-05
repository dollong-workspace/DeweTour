import { LogoSecond, ImgTransfer } from '../../../assets'
import { Gap, Group, Text } from '../../atoms'
import { paymentButton, warningButton, pendingButton, successButton } from '../../../utils'

// mui component
import { Button } from '@mui/material'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import { useState } from 'react'

const ShowButton = ({status, ...rest}) => {
    if (status === 'waiting') {
        return (
            <Button variant="contained" sx={paymentButton} {...rest}>
                pay
            </Button>
        ) 
    } else {
        // need fixed
        return (
            <Button sx={{display: 'none'}}></Button>
        )
    }
}

const PaymentBox = ({name, country, type, count, totalPayment, status, ...rest}) => {
    let boxStatus, textBoxStatus
    
    switch (status) {
        case 'waiting':
            boxStatus = warningButton
            textBoxStatus = 'Waiting Payment'
            break;
        
        case 'pending':
            boxStatus = pendingButton
            textBoxStatus = 'Waiting Approve'
            break;

        case 'success':
            boxStatus = successButton
            textBoxStatus = 'Approve'
            break;

        default:
            break;
    }

    const [loading, setLoading] = useState(true)

    setTimeout(()=> {
        setLoading(false)
    }, 3000)
    return (
        <>
            <div className="main">
                {
                    loading ? 
                    <Stack sx={{padding: '20px', backgroundColor: 'white', borderRadius: '5px'}}>
                        <Skeleton variant="rectangular" width={159} height={68} sx={{marginBottom: '10px'}} />
                        <Skeleton variant="rectangular" height={100} />
                        <Gap height={76} />
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Skeleton variant="text" width={100} />
                            <Skeleton variant="text" width={100} />
                            <Skeleton variant="text" width={100} />
                            <Skeleton variant="text" width={100} />
                            <Skeleton variant="text" width={100} />
                            <Skeleton variant="text" width={100} />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Skeleton variant="text" width={100} />
                            <Skeleton variant="text" width={100} />
                            <Skeleton variant="text" width={100} />
                            <Skeleton variant="text" width={100} />
                            <Skeleton variant="text" width={100} />
                            <Skeleton variant="text" width={100} />
                        </div>
                    </Stack>
                    : 
                    <div className="content__payment">
                        <Group variant="space-between-only" className="detail-heading__payment">
                            <div className="left-side__heading_payment">
                                <img src={LogoSecond} alt="" />
                                <Gap height={28} />
                                <Group variant="space-between-only">
                                    <div>
                                        <Text variant="bold" fontSize={24}>{name}</Text>
                                        <Text variant="p" fontSize={14} className="color-second">{country}</Text>
                                        <Gap height={31} />
                                        <Button variant="text" sx={boxStatus}>{textBoxStatus}</Button>
                                    </div>
                                    <div>
                                        <Text variant="bold" fontSize={18}>Date Trip</Text>
                                        <Text variant="bold" fontSize={14} className="color-second">26 August 2021</Text>
                                        <Gap height={27} />
                                        <Text variant="bold" fontSize={18}>Accomodation</Text>
                                        <Text variant="bold" fontSize={14} className="color-second">Hotel 4 Nights</Text>
                                    </div>
                                    <div>
                                        <Text variant="bold" fontSize={18}>Duration</Text>
                                        <Text variant="bold" fontSize={14} className="color-second">6 Day 4 Night</Text>
                                        <Gap height={27} />
                                        <Text variant="bold" fontSize={18}>Transportation</Text>
                                        <Text variant="bold" fontSize={14} className="color-second">Qatar Airways</Text>
                                    </div>
                                </Group>
                            </div>
                            <div className="right-side__heading_payment">
                                <Text variant="bold" fontSize={36} lineHeight="49px">Booking</Text>
                                <Text variant="p" fontSize={18} lineHeight="25px" className="color-second">
                                    <strong>Saturday</strong> 22 july 2021
                                </Text>
                                <Gap height={20} />
                                <Group className="text-center">
                                    <img src={ImgTransfer} alt="transfer proof" />
                                    <Gap height={12.63} />
                                    <Text variant="p" fontSize={13} lineHeight="15px" className="color-second">Upload payment proof</Text>
                                </Group>
                            </div>
                        </Group>
                        <Gap height={9.18} />
                        <div className="detail-body__payment">
                            <table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Full Name</th>
                                        <th>Gender</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Doltons Edward</td>
                                        <td>Male</td>
                                        <td>083896833112</td>
                                        <td className="table-bold">Qty</td>
                                        <td className="table-bold">:</td>
                                        <td className="table-bold">{count}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="table-bold">Total</td>
                                        <td className="table-bold">:</td>
                                        <td className="table-bold color-warning">{type} {totalPayment}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
                
                <Gap height={28} />
                <p className="text-right">
                    <ShowButton status={status} {...rest} />
                </p>
            </div>
            <Gap height={86} />
        </>
    )
}

export default PaymentBox