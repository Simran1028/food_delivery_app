const {username,password}=process.env
export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.ju8fk.mongodb.net/foodDeliveryDB?retryWrites=true&w=majority&appName=Cluster0"