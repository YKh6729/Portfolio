import { Request, Response } from "express";

export const Home = async (req: Request, res: Response) => {
  try {
    console.log("Hello, you are in home\n", req.body);
    const data: string = "MY HOME";
    res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "something went wrong" });
  }
};
