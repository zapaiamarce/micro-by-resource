import { send } from "micro";

const byResource = (handlers) => (req, res) => {
  const { params, resource } = req.query;
  const key = resource || (params && params[0]);
  if (key && handlers[key]) {
    return handlers[key](req, res);
  } else {
    return send(res, 404, { message: "resource not found" });
  }
};

export default byResource;
