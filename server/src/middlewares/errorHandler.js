export default function (error, req, res, next) {
  res.status (400).send ('Bad request!');
}