import React from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-between'>
        <div className='text-3xl'>
            <h1>Film Name</h1>
            <h2 className='text-xl mb-4'>Film Description</h2>
            <Button 
              variant="destructive" 
              className="mt-2"
              onClick={() => navigate("1/sessions")}
            >
              Choose Session
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
  )
}

export default MovieDetails;