import GoToHomePage from '@/components/GoToHomePage/GoToHomePage';
import { Button } from '@/components/ui/button';
import React from 'react';

const FilmDetailsOnlinePage = () => {
    return (
        <div className='flex flex-col w-full p-4'>
            <GoToHomePage message={"Watch film online"} navigation={"/watch-online"} />

            <div className='flex justify-between'>
                <div className='text-3xl'>
                    <h1>Film Name</h1>
                    <h2 className='text-xl mb-4'>Film Description</h2>
                    <Button
                        variant="destructive"
                        className="mt-2"
                        onClick={() => alert('Proceeding to payment...')}
                    >
                        Buy now
                    </Button>
                </div>
                <div>
                    <div className='flex gap-4 mb-3'>
                        <span>Film Rating</span>
                        <span>•</span>
                        <span>Film Release Year</span>
                        <span>•</span>
                        <span>Film Genre</span>
                        <span>•</span>
                        <span>Film Duration</span>
                        <span>•</span>
                        <span>Film Age Rating</span>
                    </div>
                    <Button variant="destructive" size="sm">See reviews</Button>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">Watch Trailer</h2>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/6kO2LNnZ3M4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg w-full"
                ></iframe>
            </div>
        </div>
    );
}

export default FilmDetailsOnlinePage;