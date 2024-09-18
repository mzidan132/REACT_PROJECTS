// models/topic.js
import mongoose, { Schema } from 'mongoose';

const topicSchema = new Schema(
  {
    title: { type: String, required: true },
    Voucher: { type: String, required: true },
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
