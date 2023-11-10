import { rest } from "msw";

// Use the `window.location` API to get the current URL in your Gitpod workspace
const currentURL = window.location.href;

const baseURL = currentURL.endsWith("/") ? currentURL : currentURL + "/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 1,
        username: "gitpod",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 1,
        profile_image:
          "https://res.cloudinary.com/dpay9bkkx/image/upload/v1/media/../default-user_fqha9k",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
