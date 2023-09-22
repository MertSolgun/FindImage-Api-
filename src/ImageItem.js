function ImageItem({ showImage }) {
  return (
    <div>
      <img src={showImage.urls.small}></img>
    </div>
  );
}

export default ImageItem;
