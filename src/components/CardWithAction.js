
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';

const CardWithAction = ({
    maxWidth = 'auto',
    img = "",
    imgHeight = '200',
    actionLink = "",
    title = "",
    titleSize = "20px",
    textButton = "",
    isFavourite = false,
    handleFavouriteAction = () => { }
}) => {
    return (
        <Card sx={{ maxWidth: 'maxWidth' }}>
            <Link href={actionLink}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height={imgHeight}
                        image={img} />
                    <CardContent>
                        <div style={{fontSize: titleSize}}>
                            {title}
                        </div>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions >
                <Link href={actionLink}>
                    <Button color="primary" >
                        {textButton}
                    </Button>
                </Link>
                {isFavourite && <Button onClick={handleFavouriteAction}>
                    <FavoriteBorderIcon>
                    </FavoriteBorderIcon>
                </Button>}
            </CardActions>
        </Card>
    )
}

export default CardWithAction