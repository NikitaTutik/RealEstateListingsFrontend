import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const NewAdPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [sqft, setSqft] = useState("");
  const [location, setLocation] = useState("");
  const [uploaded_images, setUploadedImages] = useState<FileList | null>(null);
  const UserContext = useContext(AuthContext);
  const owner :any = UserContext?.auth.userId;
  const formData = new FormData();
  const navigate = useNavigate();


  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setUploadedImages(event.target.files);
    }
  };

  const uploadImages = async (uploaded_images: FileList) => {
    for (let i = 0; i < uploaded_images.length; i++) {
      formData.append("uploaded_images", uploaded_images[i]);
    }
  };

  const handleUpload = () => {
    if (uploaded_images) {
      uploadImages(uploaded_images);
    }
  };

  async function handleNewAd(event: React.FormEvent) {
    event.preventDefault();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('bedrooms', bedrooms);
    formData.append('bathrooms', bathrooms);
    formData.append('sqft', sqft);
    formData.append('location',location);
    formData.append('owner', owner);

    const res = await axios({
      method: "post",
      url: "https://real-estate-listingsapi.onrender.com/api/properties/",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${UserContext?.auth.token}`,
      },
    });

    if (res.status === 201) {
      navigate("/");
    } else {
      alert("Something went wrong " + res.status);
    }
  }


  return (
    <body id="new-ad-page">
      <form>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            type="text"
            label="Title"
            onChange={(e) => setTitle(e.currentTarget.value)}
            value={title}
          />
          <Input
            type="text"
            label="Description"
            onChange={(e) => setDescription(e.currentTarget.value)}
            value={description}
          />
          <Input
            type="number"
            placeholder="0.00"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$</span>
              </div>
            }
            onChange={(e) => setPrice(e.currentTarget.value)}
            value={price}
          />
          <Input
            type="text"
            label="Bedrooms"
            onChange={(e) => setBedrooms(e.currentTarget.value)}
            value={bedrooms}
          />
          <Input
            type="text"
            label="Bathrooms"
            onChange={(e) => setBathrooms(e.currentTarget.value)}
            value={bathrooms}
          />
          <Input
            type="text"
            label="Sqft"
            onChange={(e) => setSqft(e.currentTarget.value)}
            value={sqft}
          />
          <Input
            type="text"
            label="Location"
            onChange={(e) => setLocation(e.currentTarget.value)}
            value={location}
          />
          <Input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            id="formFileMultiple"
            multiple
            onChange={handleImageChange}
          />
        </div>

        <Button onClick={(e) => {handleUpload(); handleNewAd(e);}} color="success">
          Post!
        </Button>
      </form>
    </body>
  );
};

export default NewAdPage;
