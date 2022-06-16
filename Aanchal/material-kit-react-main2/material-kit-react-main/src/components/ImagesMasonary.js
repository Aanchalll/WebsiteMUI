import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    height: "12rem",
    width: "55rem",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    height: "12rem",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    height: "12rem",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    height: "12rem",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    height: "12rem",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    height: "12rem",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    height: "12rem",
    width: "24rem",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    height: "12rem",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    height: "12rem",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
    height: "12rem",
    width: "22rem",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
    height: "12rem",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    height: "12rem",
  },
];

export default function MasonryImageList() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <ImageList variant="masonry" cols={5}>
        {itemData.map((item) => (
          <>
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                //   srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                height={item.height}
                width={item.width ? item.width : "23rem !important"}
              />
              <span style={{ color: "#fff" }}>{item.height}</span>
            </ImageListItem>
          </>
        ))}
      </ImageList>
    </Box>
  );
}
