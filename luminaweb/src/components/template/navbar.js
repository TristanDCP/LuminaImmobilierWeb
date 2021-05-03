import React from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/navbar.css';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    makeStyles,
    CssBaseline,
    Drawer,
    Hidden,
    List,
    ListItem,
    useTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import useToken from '../../functions/useToken';

const drawerWidth = 240; // Largeur sidebar mobile

const useStyles = makeStyles((theme) => ({ // CSS
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    drawer: { // Sidebar Mobile
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: { // Navbar tous support
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: { // Boutons sidebar
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth
    },
    content: { // Contenu en dessous de la nav
        flexGrow: 1,
        marginTop: theme.spacing(15),
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(10),
        },
    },
    closeMenuButton: { // Bouton Fermeture sidebar
        marginRight: 'auto',
        marginLeft: 0,
    },
    title: { // Titre
        flexGrow: 1,
    },
    navLink: { // Liste des éléments de la nav
        padding: theme.spacing(2),
        fontSize: '40px',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    }
}));

export default function Navigation() {

    const {token, setToken} = useToken();

    const navLinks = [
        { title: 'Accueil', path: '' },
        { title: 'Page de Test', path: 'about' },
        { title: 'Propriétés', path: 'properties' },
        { title: 'Login', path: 'profile' },
        { title: 'FAQ', path: '' },
    ]

    const navLinksConnected = [
        { title: 'Accueil', path: '' },
        { title: 'Page de Test', path: 'about' },
        { title: 'Propriétés', path: 'properties' },
        { title: 'Profil', path: 'profile' },
        { title: 'FAQ', path: '' },
    ]

    const history = useHistory();

    const goToSomePage = (namePage) => {
        history.push(`/${namePage}`);
    }

    const classes = useStyles();

    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() { // Function ouverture sidebar
        setMobileOpen(!mobileOpen)
    }

    const drawer = ( // Liste éléments navigation
        <div>
            <List>
                {!token ? navLinks.map(item =>
                    <ListItem button key={item.title} onClick={() => goToSomePage(item.path)} setToken={setToken}>
                        {item.title}
                    </ListItem>
                ) : navLinksConnected.map(item =>
                    <ListItem button key={item.title} onClick={() => goToSomePage(item.path)}>
                        {item.title}
                    </ListItem>
                )}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Lumina
                    </Typography>
                    <div className={classes.navLink}>
                        {!token ? navLinks.map(item =>
                            <Button color="inherit" onClick={() => goToSomePage(item.path)}>{item.title}</Button>
                        ) : navLinksConnected.map(item =>
                            <Button color="inherit" onClick={() => goToSomePage(item.path)}>{item.title}</Button>
                        )}
                    </div>
                </Toolbar>
            </AppBar>

            <nav className={classes.drawer}>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                            <CloseIcon />
                        </IconButton>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <div className={classes.content} />
        </div>
    );
}