import React, { useState } from 'react';
import { withRouter } from 'next/router';

import { FixedSizeList as List } from 'react-window';
import PropTypes from 'prop-types';

import BottomNav from '../components/BottomNav';
import Dialog from '../components/marketplace-styles/purchaseDialog';
import LocationSelect from '../components/marketplace-styles/locationSelect';

import eventList from '../Data/eventList.json';

import { TopRow, TopPart, BottomPart, BottomLeft, BottomRight, DateCell, Contents, BottomRow, TestButton, GridContainer, Heading1, FilterContainer, SearchButtonLong, SearchButton, ButtonContainer } from '../components/marketplace-styles/index'

function marketplace(props) {

    const { router } = props;

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [type, setType] = useState("");
    const [typeFilter, setTypeFilter] = useState(false);

    const [location, setLocation] = useState("LOCATION");
    const [locationFilter, setLocationFilter] = useState(false);

    // for initial purposes --> ideally replaced by query with locationFilter
    function filteredList(events) {
        const filteredEvents = [];
        if (location == "LOCATION") {
            return events.events;
        }
        for (let i = 0; i < events.events.length; i += 1) {
            if (events.events[i].event_details.city == location) {
                filteredEvents.push(events.events[i]);
            }
        };

        return filteredEvents;
    };


    const TopCell = ({ index, style }) => {
        const filteredEvents = filteredList(eventList);
        console.log("r", filteredEvents[index].event_details.date)

        return (
            <div style={style}>
                <DateCell>
                    {filteredEvents[index].event_details.date}
                    {/* {`${(new Date(Date.parse(eventList.events[index].event_details.date))).toString().split(' ')[0]}, ${(new Date(Date.parse(eventList.events[index].event_details.date))).getDate()}.${(new Date(Date.parse(eventList.events[index].event_details.date))).getMonth() + 1}`} */}
                </DateCell>

                <TestButton onClick={() => handleClick(index)}>

                    <Contents>
                        <TopPart>
                            <TopRow>
                                {filteredEvents[index].event_name}
                                {/* <div>{activeEvents[index].event_details.date}</div> */}
                            </TopRow>
                            <BottomRow>
                                {filteredEvents[index].event_owner}
                            </BottomRow>
                        </TopPart>

                        <BottomPart>
                            <BottomLeft>
                                <div>{filteredEvents[index].event_details.location_name}</div>
                            </BottomLeft>
                            <BottomRight>
                                Time
                            </BottomRight>
                        </BottomPart>
                        {/* <TestButton onClick={() => handleClick(index)}>
  {`Get Tickets (${activeEvents[index].ticket_data.total_tickets
    - activeEvents[index].ticket_data.tickets_sold} left)`}
</TestButton> */}
                    </Contents>
                </TestButton>
            </div >
        )
    };

    function handleClick(index) {
        setIsDialogOpen(true);
    }

    function resetFilters() {
        console.log("reset filters");
        setTypeFilter(false);
        setLocationFilter(false);
    }

    return (
        <>
            <Dialog isOpen={isDialogOpen} setState={setIsDialogOpen} />
            <Heading1>Ticket Marketplace</Heading1>

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {/* <TypeSelect type={type} setType={setType} setTypeFilter={setTypeFilter} /> */}
                <SearchButton onClick={() => resetFilters()}>Reset</SearchButton>
                <LocationSelect location={location} setLocation={setLocation} setLocationFilter={setLocationFilter} />
            </div>
            <GridContainer>
                <List
                    itemCount={filteredList(eventList).length}
                    itemSize={150}
                    height={filteredList(eventList).length * 150}
                    width={"100%"}
                    style={{ margin: '0 auto 0 auto' }}
                >
                    {TopCell}
                </List>
            </GridContainer>
            <BottomNav initialRoute={"marketplace"} userID={router.query.user} />
        </>
    );
}
// marketplace.propTypes = {
//     query: PropTypes.objectOf(PropTypes.object),
// };

// marketplace.defaultProps = {
//     query: PropTypes.object,
// };

export default withRouter(marketplace);