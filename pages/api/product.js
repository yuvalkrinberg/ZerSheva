import Product from "../../models/Product";
import connectDb from "../../utils/connectDb";
import catchErrors from "../../utils/catchErrors";

connectDb(); //make sure we are connected to the DB before any action

export default async (req, res) => { // GET -> handleGetRequest,  DELETE -> handleDeleteRequest
    switch (req.method){
        case "GET":
            await handleGetRequest(req, res);
            break;
        case "POST":
            await handlePostRequest(req,res);
            break;
        case "DELETE":
            await handleDeleteRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} is not allowed`);// There was an error
            break;
    }
}

async function handleGetRequest (req, res) {
    const { _id } = req.query;// the id provided in the query string
    const product = await Product.findOne({ _id});// find the product with the given _id in the DB
    res.status(200).json(product);
}

async function handlePostRequest (req, res) {
    const {name, price, description , mediaUrl} = req.body;
    try {
        // if the client missed one of the fields. return an error to the client
        if (!name || !price || !description || !mediaUrl) {
            return res.status(422).send("missing field/s");
        }
        //else, create new product, using the body
        const product = await new Product({
            name,
            price,
            description,
            mediaUrl
        }).save();
        res.status(201).json(product);
    }
    catch (error) {
        console.error(error);
    }
}

async function handleDeleteRequest (req, res) {
    const {_id} = req.query;// the id provided in the query string
    await Product.findOneAndDelete({ _id});// find the product with the given _id
    res.status(204).json({});
}