import React from 'react';
import { Link } from 'react-router-dom';
import {
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';

export const mainListItem = (
    <div>
        <Link to="">
            <ListItem button>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText primary="Accueil" />
            </ListItem>
        </Link>

        <Link to="/profile">
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Link>

        <Link to="/dashboard/document">
            <ListItem button>
                <ListItemIcon>
                    <InsertDriveFileIcon />
                </ListItemIcon>
                <ListItemText primary="Documents" />
            </ListItem>
        </Link>

        <Link to="/dashboard/appointment">
            <ListItem button>
                <ListItemIcon>
                    <EventIcon />
                </ListItemIcon>
                <ListItemText primary="Rendez-Vous" />
            </ListItem>
        </Link>

        <Link to="/dashboard/settings">
            <ListItem button>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Paramètres" />
            </ListItem>
        </Link>
    </div>
);