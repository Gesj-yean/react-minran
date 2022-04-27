import axios from "axios";

export const POST = (url: string, data?: object) => axios.post(url, data);
export const GET = (url: string, data?: object) => axios.get(url, data);
export const DELETE = (url: string, data?: object) => axios.delete(url, data);
export const PUT = (url: string, data?: object) => axios.put(url, data);
export const PATCH = (url: string, data?: object) => axios.patch(url, data);
