const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;
export const connectionStr = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.ju8fk.mongodb.net/foodDeliveryDB?retryWrites=true&w=majority&appName=Cluster0`;
// export const connectionStr = `mongodb+srv://simrandeepkaur06489:1234@cluster0.ju8fk.mongodb.net/foodDeliveryDB?retryWrites=true&w=majority&appName=Cluster0`;


