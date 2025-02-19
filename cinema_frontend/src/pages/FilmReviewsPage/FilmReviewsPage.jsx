import GoToHomePage from '@/components/GoToHomePage/GoToHomePage';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import SendReviewCard from '@/components/SendReviewCard/SendReviewCard';
import { Button } from '@/components/ui/button';
import { getFilmList } from '@/redux/Film/Action';
import { getSessionList } from '@/redux/Session/Action';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FilmReviewsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const films = useSelector(store => store.film?.films || []);

    const currentFilmNumber = useSelector(store => store.film?.currentFilmNumber || 1);
    const selectedLocation = useSelector(store => store.location?.selectedLocation || null);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        dispatch(getFilmList(false, null));
        dispatch(getSessionList(false));
    }, [dispatch])

    const film = films[currentFilmNumber - 1];

    return (
        <div className='py-4 px-5 flex flex-col min-h-screen'>
            <GoToHomePage message={"Reviews"} navigation={"/"} />
            <div className='grid grid-cols-[3fr_2fr] gap-10'>
                <div className='text-3xl'>
                    <h1>{film?.Name || "Film name"}</h1>
                    <h2 className='text-[16px] mb-4'>{film?.Description || "Film description"}</h2>
                    <Button
                        variant="destructive"
                        className="mt-2"
                        onClick={() => navigate(`/${selectedLocation?.id}/sessions`)}
                    >
                        Choose Session
                    </Button>
                </div>
                <div>
                    <div className='flex gap-4 mb-3'>
                        <span>{film?.Rating || "Film rating"}</span>
                        <span>•</span>
                        <span>{film?.Release_year || "Film release year"}</span>
                        <span>•</span>
                        <div>
                            {
                                film?.Genres && film?.Genres.length > 0 ? (
                                    film.Genres.map((genre, index) => (
                                        <span key={index}>{genre.Name}{index < film.Genres.length - 1 && ", "}</span>
                                    ))
                                ) : (
                                    <span>No genres available</span>
                                )
                            }
                        </div>
                        <span>•</span>
                        <span>{film?.Age_limit + "+" || "Film age rating"}</span>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-[1fr_3fr] gap-8 mt-10'>
                <SendReviewCard filmId={film?.Id} />
                <div className='p-4 border rounded-lg bg-gray-50 w-full'>
                    <h2 className="text-xl font-semibold mb-3">User Reviews</h2>
                    {reviews.length === 0 ? (
                        <p className="text-gray-500">No reviews yet.</p>
                    ) : (
                        <div className="space-y-4">
                            {reviews.map((review) => (
                                <div key={review.id} className="p-3 border rounded-lg bg-white shadow">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-semibold">{review.username}</span>
                                        <span className="text-sm text-gray-600">{review.mark}/10</span>
                                    </div>
                                    <p className="text-gray-700">{review.content}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FilmReviewsPage;