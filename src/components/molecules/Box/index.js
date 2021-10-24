import './Box.scss'
import { LogoSecond, ImgTransfer } from '../../../assets'
import { Gap, Group, Text } from '../../atoms'
import { paymentButton, warningButton, pendingButton, successButton } from '../../../utils'

// mui component
import { Button } from '@mui/material'

const CardBox = ({logo, heading, text}) => {
    return (
        <div className="card-box">
            <img src={logo} alt={heading} />
            <Gap height={24} />
            <p className="heading__card-box">{heading}</p>
            <Gap height={9} />
            <p className="subheading__card-box">{text}</p>
        </div>
    )
}

const ContentBox = ({img, heading, type, price, subtext, ...rest}) => {
    return (
        <div {...rest}>
            <div className="content-box c-pointer">
                <img src={'/assets/img/tour/' + img} className="content-cover-image" alt={heading} />
                <Gap height={11} />
                <p className="heading__content-box">{heading}</p>
                <Gap height={10} />
                <div className="d-flex-between">
                    <p className="subheading__content-box color-theme">{type} {price}</p>
                    <p className="country__content-box">{subtext}</p>
                </div>
            </div>
        </div>
    )
}

const ShowButton = ({status, ...rest}) => {
    if (status == 'waiting') {
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

    return (
        <>
            <div className="main">
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
                <Gap height={28} />
                <p className="text-right">
                    <ShowButton status={status} {...rest} />
                </p>
            </div>
            <Gap height={86} />
        </>
    )
}


const Box = ({variant, logo, heading, text, img, item, status, ...rest}) => {
    switch (variant) {
        case 'card':
            return <CardBox logo={logo} heading={heading} text={text} />
        case 'content':
            return <ContentBox img={item.image} heading={item.name} type={item.type} price={item.price} subtext={item.country} {...rest} />
        case 'payment':
            return <PaymentBox status={status} {...rest} />
    
        default:
            return (
                <div className="card-box">
                    <img src={img} alt={heading} />
                    <Gap height={24} />
                    <p className="heading__card-box">{heading}</p>
                    <Gap height={9} />
                    <p className="subheading__card-box">{text}</p>
                </div>
            )
    }

    
}

export default Box