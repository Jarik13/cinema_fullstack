import React, { useEffect } from 'react';
import { MapPinCheckIcon, TicketCheckIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHallList } from '@/redux/Hall/Action';
import { getSessionList } from '@/redux/Session/Action';
import { getLocationList } from '@/redux/Location/Action';
import { getFilmList } from '@/redux/Film/Action';
import { bookTickets } from '@/redux/Ticket/Action';

const BuyTicketList = ({ selectedSeats, setSelectedSeats }) => {
    const params = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const sessions = useSelector(store => store.session?.sessions);
    const halls = useSelector(store => store.hall?.halls);
    const films = useSelector(store => store.film?.films || []);
    const locations = useSelector(store => store.location?.locations || []);

    const session = sessions?.find(s => s.Id === params.sessionId);
    const hall = halls?.find(h => h.Id === session?.HallId);
    const film = films?.find(f => f.Id === session?.FilmId);
    const location = locations?.find(l => l.Id === hall?.LocationId);

    useEffect(() => {
        dispatch(getHallList(false));
        dispatch(getSessionList(false));
        dispatch(getFilmList(false));
        dispatch(getLocationList(false));
    }, [dispatch]);

    const ticketsId = selectedSeats?.filter(t => t?.Id).map(t => t.Id);
    console.log(ticketsId);

    const handleBookTickets = (ticketsId) => {
        if (ticketsId) {
            dispatch(bookTickets(ticketsId));
        }

        console.log(ticketsId);
        navigate(`/my-profile`);
    }

    const tickets = selectedSeats.map((ticket) => {
        return {
            row: Math.floor(ticket?.Seat_number / 100),
            seat: (ticket?.Seat_number % 100),
            price: ticket?.Price,
            id: ticket?.Seat_number,
        };
    });

    const removeTicket = (id) => {
        setSelectedSeats(prevSeats => {
            const updatedSeats = prevSeats.filter(ticket => ticket?.Seat_number !== id);
            return updatedSeats;
        });
    };

    const totalTickets = tickets.length;
    const totalPrice = tickets.reduce((sum, ticket) => sum + ticket.price, 0);

    return (
        <div className='flex flex-col w-1/4 gap-8 p-2'>
            <div className='flex flex-col gap-4 text-xl'>
                <div className='flex items-center gap-2'>
                    <MapPinCheckIcon className='w-5 h-5 text-gray-500' />
                    <h3>{location?.Name + ", " + location?.City || "No location selected"}</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <TicketCheckIcon className='w-5 h-5 text-gray-500' />
                    <h3>From {film?.Age_limit}+</h3>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                {tickets.map((ticket) => (
                    <div key={ticket.id} className='flex justify-between items-center border-b pb-2'>
                        <div>
                            <h4>Row: {ticket.row}, Seat: {ticket.seat}</h4>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h4 className='font-bold'>${ticket.price}</h4>
                            <Button
                                variant="ghost"
                                className='text-red-500 hover:text-red-700'
                                onClick={() => removeTicket(ticket.id)}
                            >
                                X
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {tickets.length > 0 ? (
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center justify-between text-xl'>
                        <h4>Total Tickets: {totalTickets}</h4>
                        <h4>Total Price: ${totalPrice}</h4>
                    </div>
                    <div className='flex gap-4 justify-around'>
                        <Button
                            onClick={() => handleBookTickets(ticketsId)}
                        >
                            Book tickets
                        </Button>
                        <Button
                            variant="destructive"
                            onClick={() => navigate(`/${params.locationId}/sessions/${params.sessionId}/snacks`)}
                        >
                            Proceed to Payment
                        </Button>
                    </div>
                </div>
            ) : (
                <div className='text-center text-xl p-10 border-t-2 border-b-2'>
                    <h3>Your tickets here!</h3>
                </div>
            )}
        </div>
    );
};

export default BuyTicketList;
