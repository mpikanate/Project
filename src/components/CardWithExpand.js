
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, IconButton, Link, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CardWithExpand = ({
    title = "",
    data = "",
    img="/Ingre.png",
}) => {

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const [expanded, setExpanded] = useState(false);data = 
    data = data.replace(/\"/gm, '');
    data = data.replace(/\r\n|\n|\r/gm, '<br />');
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 'auto' }}>
            <CardActionArea
                onClick={handleExpandClick}
            >
                <CardMedia
                    component="img"
                    height="200"
                    image={img} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ExpandMore
                    expand2={expanded.toString()}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph textAlign={'left'}>
                        <div
                            dangerouslySetInnerHTML={{ __html: data }}
                        />
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default CardWithExpand