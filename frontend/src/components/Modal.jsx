import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ListItem, ListItemAvatar, Avatar, ListItemText, List } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    outline: 0,
};

export default function BasicModal({ open, handleClose }) {
    const us = [
        { avatar: "K", name: "Krish Srivastava", roll: "AP21110010302" },
        { avatar: "A", name: "Ayon Sarkar", roll: "AP21110010286" },
        { avatar: "A", name: "Anirudhha Dewangan", roll: "AP21110011194" },
        { avatar: "N", name: "Nageshwar Prasad Yadav", roll: "AP21110011195" },
        { avatar: "S", name: "Suman Kumar", roll: "AP21110010283" },
        { avatar: "P", name: "Paras Agarwal", roll: "AP21110010324" },
    ]
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h3" component="h3">
                        About
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Made with ❤️ by:
                        <Box >
                            {/* grid mui list  */}
                            <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "20px", '@media (max-width: 600px)': { gridTemplateColumns: "1fr",justifyContent:"center",alignItems:"center" } }}>
                                {us.map((user) => (
                                    <ListItem key={user.name}>
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: "red" }}>
                                                {user.avatar}
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={user.name} secondary={user.roll} />
                                    </ListItem>
                                ))}
                            </List>
                            <Button sx={{ display: 'flex', justifyContent: 'canter', alignItems: 'center' }} variant="contained" href="https://github.com/retr0-kernel/OS-Virtual-Labs" target="_blank" startIcon={<GitHubIcon />}>
                                Github
                            </Button>
                        </Box>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}