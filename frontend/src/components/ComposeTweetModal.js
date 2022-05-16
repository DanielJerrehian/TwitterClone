import React from 'react'

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';

import ComposeTweet from './ComposeTweet.js'


function ComposeTweetModal(props) {
    const { tweets, setTweets, openTweetModal, setOpenTweetModal } = props

    function handleClose() {
        setOpenTweetModal(false);
    }

    return (
        <Dialog onClose={handleClose} open={openTweetModal} maxWidth='md' fullWidth={true}>
            <DialogTitle>
                <IconButton size='lg' onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <ComposeTweet tweets={tweets} setTweets={setTweets} handleClose={handleClose} modal={true}/>
        </Dialog>
    )
}

export default ComposeTweetModal