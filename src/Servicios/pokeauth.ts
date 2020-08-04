/* eslint-disable no-console */
import { config } from "../config";
import { getHeaders } from "./shared";
// 👊 a la api

const post = (
  endpoint: string,
  body: { [key: string]: unknown } = {},
  headers: Headers = getHeaders()
) => {
  const token = JSON.parse(window.localStorage.getItem("token"));
  if (token) {
    headers.append("x-jwt-authentication-header", token);
  }
  return fetch(`${config.authenticationApiEndpoint}/${endpoint}`, {
    body: JSON.stringify(body),
    headers,
    method: "POST",
  }).then((response) => response.json());
};

const get = (endpoint: string, headers: Headers = getHeaders()) => {
  const token = JSON.parse(window.localStorage.getItem("token"));
  if (token) {
    headers.append("x-jwt-authentication-header", token);
  } else {
    console.error("🚨🚨🚨NO TOKEN!!!!🚨🚨🚨");
  }
  return fetch(`${config.authenticationApiEndpoint}/${endpoint}`, {
    headers,
  }).then((response) => response.json());
};

export const remove = (
  endpoint: string,
  body: { [key: string]: unknown } = {},
  headers: Headers = getHeaders()
) => {
  const token = JSON.parse(window.localStorage.getItem("token"));
  if (token) {
    headers.append("x-jwt-authentication-header", token);
  } else {
    console.error("🚨🚨🚨NO TOKEN!!!!🚨🚨🚨");
  }
  return fetch(`${config.authenticationApiEndpoint}/${endpoint}`, {
    body: JSON.stringify(body),
    headers,
    method: "DELETE",
  }).then((response) => response.json());
};

export const login = ({ usuario, password }) => {
  return post("login", {
    email: usuario,
    password,
  });
};

export const obtenerFavoritos = () => get(`favoritos`);

export const obtenerFavorito = (id: number) => get(`favoritos/${id}`);

export const setearFavorito = (id: number) => post(`favoritos/${id}`);

export const borrarFavorito = (id: number) => remove(`favoritos/${id}`);
