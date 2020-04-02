import {Form, Input, TextArea, Button, Image, Message, Header, Icon} from "semantic-ui-react";
import React, {useEffect, useState} from "react";
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import catchErrors from '../utils/catchErrors'

const INITIAL_PRODUCT={
    name: "",
    price: "",
    media: "",
    description: ""
};

function CreateProduct() {
    const [product, setProduct] = useState(INITIAL_PRODUCT);      // Changes in the product component
    const [mediaPreview ,setMediaPreview] = useState("");     // For the uploaded image preview
    const [success, setSuccess] = useState(false);    // The form was filled successfully
    const [loading, setLoading] = useState(false);    // A loading icon after filling the form
    const [disabled, setDisabled] = useState(true);     // Defines if the form submitting is disabled
    const [error, setError] = useState("");     // Defines the error to be displayed to the client

    //Whenever one of the product fields is changed, do this
    useEffect( () => {
        const isProduct = Object.values(product).every(element => Boolean(element));    // if every element in the product holds a value, meaning is not "" = false
        isProduct ? setDisabled(false) : setDisabled(true);
    },  [product] );

    function handleChange(event){
        const { name, value, files } = event.target;// save the field name and the value we get from the client inside the field, files for the media field
        if(name === 'media'){
            setProduct(prevState => ({ ...prevState, media: files[0] }));
            setMediaPreview(window.URL.createObjectURL(files[0]));
        } else {
            setProduct(prevState => ({...prevState, [name]: value})); // This way we are updating the relevant field, saving the previous state of the others
        }
    }

    async function handleImageUpload(){
        const data = new FormData();
        data.append('file', product.media);
        data.append('upload_preset', 'zersheva');
        data.append('cloud_name', 'dgmvbx86i');
        const response = await axios.post(process.env.CLOUDINARY_URL, data);
        const mediaUrl = response.data.url;
        return mediaUrl;
    }

    async function handleSubmit(event){
        try {
            event.preventDefault(); // prevents refreshing
            setLoading(true);
            const mediaUrl = await handleImageUpload();
            console.log({mediaUrl});
            const url = `${baseUrl}/api/product`;
            const {name, price, description} = product;
            const payload = {name:"", price, description, mediaUrl};
            const response = await axios.post(url, payload); // create a POST req at the api, includins Body info (=payload)
            console.log({response});
            setProduct(INITIAL_PRODUCT);
            setMediaPreview("");
            setSuccess(true);
        }
        catch (error) {
            catchErrors(error, setError);
        }finally {
            setLoading(false);
        }
    }

  return (
      <>
        <Header as={"h2"} block>
          <Icon name={"add"} color={"green"}/>
          Create New Product
        </Header>
        <Form loading={loading} success={success} error={Boolean(error)} onSubmit={handleSubmit}>
            <Message
                error
                header={"Error"}
                content={error}
            />
            <Message
                success
                icon={"check"}
                header={"Success"}
                content={"The new product has been posted"}
            />
          <Form.Group widths="equal">
            <Form.Field
              control = {Input}
              name = {"name"}
              label = {"Name"}
              placeholder = "Name"
              value={product.name}
              onChange={handleChange}
            />
            <Form.Field
                control = {Input}
                name = {"price"}
                label = {"Price"}
                placeholder = "Price"
                min = "0.00"
                step = "0.01"
                type = "number"
                value={product.price}
                onChange={handleChange}
            />
            <Form.Field
                control = {Input}
                name = {"media"}
                type = "file"
                label = {"Media"}
                accept = "image/*"  //Accepts only img file
                content = "Select Image"
                onChange={handleChange}
            />
          </Form.Group>
            <Image src={mediaPreview} rounded centered size={"small"}/>
            <Form.Field
                control={TextArea}
                name={"description"}
                label={"Description"}
                placeholder={"Description"}
                value={product.description}
                onChange={handleChange}
            />
            <Form.Field
                control={Button}
                disabled={disabled || loading}
                color={"green"}
                icon={"pencil alternate"}
                content={"Submit"}
                type={"submit"}
            />
        </Form>
      </>
  );
}

export default CreateProduct;
