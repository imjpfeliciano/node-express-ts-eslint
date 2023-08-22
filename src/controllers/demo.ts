export default {
  hi(req: any, res: any) {
    res.status(200).json({
      hello: 'world',
    });
  },
};
