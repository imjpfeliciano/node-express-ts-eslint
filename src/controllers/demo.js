export default {
  hi(req, res) {
    res.status(200).json({
      hello: 'world',
    });
  },
};
