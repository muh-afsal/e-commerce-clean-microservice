import { producer } from "..";
import { Types } from "mongoose";

export const productCreatedProducer = async (data: {
  _id?: Types.ObjectId;
  name: string;
  description: string;
  price: number;
  stock: number;
}) => {
  try {
    await producer.connect();

    const message = {
      topic: 'product',
      messages: [{
        key: 'productcreated',
        value: JSON.stringify(data)
      }]
    };

    await producer.send(message);
    console.log('Message sent successfully:', message);

  } catch (error: any) {
    console.error('Kafka produce error:', error?.message);
  } finally {
    await producer.disconnect();
  }
};
