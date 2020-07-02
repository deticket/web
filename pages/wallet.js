import React, { useState } from 'react'
import { withRouter } from 'next/router';
import Link from 'next/link';
import { FixedSizeList as List } from 'react-window';
import PropTypes from 'prop-types';

import BottomNav from '../components/BottomNav';

import ticketList from '../Data/ticketList.json';
import eventList from '../Data/eventList.json';


import { TopRow, BottomRow, StyledCell, ColoredCell, GridContainer, SubHeading, Heading1 } from '../components/wallet-styles/index'


function wallet(props) {
    const { router } = props;

    const [user, setUser] = useState(router.query.user);

    // for initial purposes --> ideally replaced by query with query param from URL
    const getTicketList = () => {
        let ticketArray = [];
        for (let i = 0; i < ticketList.tickets.length; i += 1) {
            if (ticketList.tickets[i].OwnerName === router.query.user) {
                ticketArray.push(ticketList.tickets[i]);
            }
        }
        return ticketArray;
    }

    const TopCell = ({ index, style }) => {
        // console.log(ticketData);
        return (
            <div style={style}>
                {/* <Link href={`/ticket?user=${ticketData[index].userID}&ticketID=${ticketData[index].ticketID}${ticketData[index].events.event_ID}`}> */}
                <div>
                    <StyledCell>
                        <TopRow>
                            <div>{eventList.events[index].event_name} </div>
                            <div>{eventList.events[index].event_details.date}</div>

                            {/* <div>{ticketData[index].events.event_name}</div>
                                <div>{ticketData[index].events.event_details.date}</div> */}
                        </TopRow>
                        {/* <BottomRow>{ticketData[index].events.event_details.city}</BottomRow> */}

                        <BottomRow>{eventList.events[index].event_details.city}</BottomRow>
                    </StyledCell>
                    <ColoredCell>
                        {/* {ticketData[index].events.event_name} */}
                        {eventList.events[index].event_name}
                    </ColoredCell>
                </div>
                {/* </Link> */}
            </div>
        );
    };

    return (
        <>

            <>
                <Heading1>My Tickets</Heading1>
                <SubHeading>
                    {/* {ticketData.length} */}
                    {3}
                    {' '}
                Ticket(s) available
              </SubHeading>
                <GridContainer>
                    <List
                        //itemCount={ticketData.length}
                        itemCount={getTicketList().length}
                        itemSize={170}
                        // height={ticketData.length * 170}
                        height={getTicketList().length * 170}
                        width="85%"
                        style={{ margin: '0 auto 0 auto' }}
                    >
                        {TopCell}
                    </List>
                    <Link href={`/marketplace?user=${router.query.user}`}>
                        <StyledCell style={{
                            width: '85%', borderColor: 'white', borderStyle: 'dashed', borderWidth: '2px', background: 'transparent', margin: 'auto', height: '9em',
                        }}
                        >
                            <div style={{ color: 'white' }}>
                                Browse Marketplace for more Tickets
                    </div>
                        </StyledCell>
                    </Link>
                </GridContainer>
                <BottomNav initialRoute={"wallet"} userID={router.query.user} />
            </>


            {/* );
                }}
            </Query> */}      </>

    );
}

// wallet.propTypes = {
//   query: PropTypes.objectOf(PropTypes.any),
//   index: PropTypes.number,
//   style: PropTypes.objectOf(PropTypes.any),
// };

// wallet.defaultProps = {
//   query: PropTypes.object,
//   index: 1,
//   style: PropTypes.object,
// };

export default withRouter(wallet);

wallet.getInitialProps = ({ query }) => ({ query });
