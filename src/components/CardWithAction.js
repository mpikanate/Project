
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material';
import React from 'react';

const CardWithAction = ({ maxWidth = 'auto', img = "", imgHeight = '200', actionLink = "", title = "", textButton = "" }) => {
    return (
        <Card sx={{ maxWidth: 'maxWidth' }}>
            <Link href={actionLink}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height={imgHeight}
                        image={img} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions >
                <Link href={actionLink}>
                    <Button color="primary" >
                        {textButton}
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default CardWithAction