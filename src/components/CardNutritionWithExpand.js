
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, IconButton, Link, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { get } from 'lodash';

const CardNutritionWithExpand = ({
    title = "",
    data = {},
    img="/Nutri.png",
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

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    console.log("data: ", data)

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
                    expand2={expanded}
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
                        แคลอรี่ {get(data, "Calorie", 0)} กรัม<br></br>
                        โปรตีน {get(data, "Protein", 0)} กรัม<br></br>
                        คาร์โบไฮเดรต {get(data, "Cabohydrate", 0)} กรัม<br></br>
                        ไขมัน {get(data, "Fat", 0)} กรัม<br></br>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default CardNutritionWithExpand