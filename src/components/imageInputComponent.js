import { useState } from "react";
import Cropper from "react-easy-crop";

const ImageInputComponent = (props) => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropArea, setCropArea] = useState({ x: 0, y: 0, width: 0, height: 0 });

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   // setImage(file);
  //   setImage(URL.createObjectURL(file)); // Set image preview using URL.createObjectURL

  //   props.inputChangeHandler(file); // Pass the FormData object to the parent component

  //   // const file = event.target.files[0];
  //   // const reader = new FileReader();
  //   // reader.onload = () => {
  //   //   setImage(reader.result);
  //   //   props.inputChangeHandler(file);
  //   // };
  //   // reader.readAsDataURL(file);
  // };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imageDataURL = reader.result;
      setImage(imageDataURL);
      props.inputChangeHandler(imageDataURL); // Pass the base64-encoded image data
    };
    reader.readAsDataURL(file);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCropArea(croppedArea);
  };

  return (
    // <div className="flex flex-col items-center justify-center">
    //   <label htmlFor="image-input" className="text-lg font-bold mb-2">
    //     Choose an image:
    //   </label>
    //   <input
    //     id="image-input"
    //     type="file"
    //     accept="image/*"
    //     onChange={handleImageChange}
    //     className="border border-gray-400 py-2 px-4 rounded-lg mb-4"
    //   />
    //   {image && (
    //     <div className="relative w-64 h-64 mb-4">
    //       <Cropper
    //         image={image}
    //         crop={crop}
    //         zoom={zoom}
    //         aspect={1}
    //         onCropChange={setCrop}
    //         onZoomChange={setZoom}
    //         onCropComplete={onCropComplete}
    //         cropShape="round"
    //         showGrid={false}
    //         className="object-contain h-full w-full"
    //       />
    //       <div
    //         className="absolute border-2 border-gray-400 inset-0"
    //         style={{
    //           top: `${cropArea.y}%`,
    //           left: `${cropArea.x}%`,
    //           width: `${cropArea.width}%`,
    //           height: `${cropArea.height}%`,
    //         }}
    //       />
    //     </div>
    //   )}
    // </div>

    <div className="mb-4">
      <label
        className="block text-gray-700 font-bold mb-2"
        htmlFor="profilePic">
        Choose an image:
      </label>
      <input
        id="image-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {/* <label
          htmlFor="image-input"
          className="bg-teal-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md cursor-pointer">
          Upload Image
          <input
            id="image-input"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label> */}
      {image && (
        <div className="relative w-64 h-64 mt-4 mb-4">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            cropShape="round"
            showGrid={false}
            className="object-contain h-full w-full"
          />
          <div
            className="absolute border-2 border-gray-400 inset-0"
            style={{
              top: `${cropArea.y}%`,
              left: `${cropArea.x}%`,
              width: `${cropArea.width}%`,
              height: `${cropArea.height}%`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageInputComponent;
