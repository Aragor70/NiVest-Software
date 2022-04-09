import { connect } from 'mongoose';


const db: any = process.env.mongoPublicURI;

const options: any = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

export default async () => {
    try {
        const conn: any = await connect(db, options);
        console.log(`MongoDB connected... `);
        console.log(conn.connection.host)
    } catch(err: any){
        console.error(err.message);
        process.exit(1);
    }
}