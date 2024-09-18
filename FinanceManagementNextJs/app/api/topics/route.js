import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
// api/topics/route.js (POST)
import connectMongoDB from '@/libs/mongodb';
import Topic from '@/models/topic';

export async function POST(request) {
  const { title, Voucher, userId, amount, date } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, Voucher, userId, amount, date });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}


export async function GET(request) {
  const userId = request.nextUrl.searchParams.get("userId"); // Get userId from query params
  await connectMongoDB();
  const topics = await Topic.find({ userId }); // Find topics for the specific user
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}


