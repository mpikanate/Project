// @ts-nocheck

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
  headerSize = "20px",
  isNormal = true,
  isUnderOver = false,
  is3_5 = false,
  is6_12 = false,
  isRec = false,
  isFav = false,
  isSearch = false
  
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
            {/* <CardMedia
              component="img"
              height={imgHeight}
              image={img} /> */}

            {/* {isUnderOver ?
              <CardMedia
                component="img"
                height={imgHeight}
                image={`/food_under_${foodId}.png`} />
              : <CardMedia
                component="img"
                height={imgHeight}
                image={`/food_${foodId}.png`} />  
            } */}

            {
              isNormal ?
              // Image from img parameter
                <CardMedia
                  component="img"
                  height={imgHeight}
                  image={img} />

                : isUnderOver ?
                 // Image from img under over
                 <CardMedia
                  component="img"
                  height={imgHeight}
                  image={`/food_Under_${foodId}.png`} />
                  :

                  is3_5 ? 
                  // Image from img3_5 
                  <CardMedia
                    component="img"
                    height={imgHeight}
                    image={`/food_3_5_${foodId}.png`} />
                    :
                    is6_12 ?
                      <CardMedia
                        component="img"
                        height={imgHeight}
                        image={`/food_6_12_${foodId}.png`} />
                      : 
                      <CardMedia
                        component="img"
                        height={imgHeight}
                        image={`/food_${foodId}.png`} />
                        
            }



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