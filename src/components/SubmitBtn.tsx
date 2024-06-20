import React from 'react'
import { Button } from './ui/button'
import { FaPaperPlane } from 'react-icons/fa'
import { useFormStatus } from 'react-dom';

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="group flex items-center w-28 text-white text-sm bg-dark rounded-full gap-2 hover:scale-110 active:scale-110 transition" disabled={pending} type="submit">
      { 
        pending 
        ? <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        : <>
            Submit <FaPaperPlane className="text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>
          </>
      }
    </Button>
  )
}

export default SubmitBtn
