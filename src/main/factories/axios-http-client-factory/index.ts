import { AxiosHttpClient } from "../../../infra/axios-http-client";
import { settings } from "../../config/settings";

export const makeAxiosHttpClient = () => new AxiosHttpClient(settings.API_URL)
