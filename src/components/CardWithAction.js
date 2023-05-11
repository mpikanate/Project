
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { get, size } from 'lodash';
const API_URL = process.env.REACT_APP_API_ENDPOINT;

const CardWithAction = ({
  maxWidth = 'auto',
  img = "",
  imgHeight = '200',
  actionLink = "",
  title = "",
  titleSize = "20px",
  textButton = "",
  isFavourite = false,
  foodId = 0,
  userId = 0,
  isLink = true,
  header = "",
  headerSize = "20px"
}) => {
  const [isUserFavourite, setIsUserFavourite] = useState(false)

  const fetchFavFood = async (request) => {
    // Call Api
    axios.post(`${API_URL}/api/food/find-favorite`, {
      food_id: foodId,
      user_id: userId
    })
      .then(function (response) {
        const { data, status } = response
        if (status == 200) {
          const favFood = get(data, "data", [])
          if (size(favFood) > 0) {
            setIsUserFavourite(true)
          }
        } else {
          toast.error('Internal Server Error! Please try again', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error('Internal Server Error! Please try again', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  }

  const createFavFood = async (request) => {
    // Call Api
    axios.post(`${API_URL}/api/food/favorite`, request)
      .then(function (response) {
        const { data, status } = response
        if (status == 200) {
          window.location.reload();
        } else {
          toast.error('Internal Server Error! Please try again', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error('Internal Server Error! Please try again', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  }

  const unFavFood = async (request) => {
    // Call Api
    axios.post(`${API_URL}/api/food/unfavorite`, request)
      .then(function (response) {
        const { data, status } = response
        if (status == 200) {
          window.location.reload();
        } else {
          toast.error('Internal Server Error! Please try again', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error('Internal Server Error! Please try again', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  }


  useEffect(() => {
    if (isFavourite) {
      fetchFavFood({
        food_id: foodId,
        user_id: userId
      })
    }
  }, [isFavourite])
  return (
    <Card sx={{ maxWidth: 'maxWidth' }}>
      {isLink ?
        <Link href={actionLink}>
          <CardActionArea>
            <CardMedia
              component="img"
              height={imgHeight}
              image={img} />
            <CardContent>
              {title !== "" &&
                <div style={{ fontSize: titleSize, fontFamily: 'Sarabun' }}>
                  {title}
                </div>
              }
            </CardContent>
          </CardActionArea>
        </Link> :
        <CardActionArea>
          <CardMedia
            component="img"
            height={imgHeight}
            image={img} />
          <CardContent>
            {header !== "" &&
              <div style={{ fontSize: headerSize, marginBottom: 10, fontFamily: 'Sarabun' }}>
                {header}
              </div>
            }
            {title !== "" &&
              <div style={{ fontSize: titleSize, fontFamily: 'Sarabun' }}>
                {title}
              </div>
            }
          </CardContent>
        </CardActionArea>
      }

      <CardActions >
        {isLink &&
          <Link href={actionLink}>
            <Button color="primary" >
              {textButton}
            </Button>
          </Link>
        }
        {isFavourite &&
          (isUserFavourite ?
            <Button onClick={() => {
              unFavFood({
                food_id: foodId,
                user_id: userId
              })
            }}>
              <FavoriteIcon>
              </FavoriteIcon>
            </Button>
            :
            <Button onClick={() => {
              createFavFood({
                food_id: foodId,
                user_id: userId
              })
            }}>
              <FavoriteBorderIcon>
              </FavoriteBorderIcon>
            </Button>
          )}
      </CardActions>
    </Card>
  )
}

export default CardWithAction