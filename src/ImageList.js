import ImageItem from "./ImageItem";

function ImageList({ imagesPlaceHolder }) {
  return (
    <div>
      {imagesPlaceHolder.map((images, index) => {
        return <ImageItem key={index} showImage={images}></ImageItem>;
      })}
    </div>
  );
}

export default ImageList;
