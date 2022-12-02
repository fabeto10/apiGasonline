let mainController = {
  getPlaca: async (req, res) => {
    try {
      res.status(200).json("Success");
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  setPlaca: async (req, res) => {
    try {
      res.status(200).json("Success");
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  getGrupoPlacas: async (req, res) => {
    try {
      console.log(res.data);
      res.status(200).json("Success");
      // if(process.env.ADMIN.email === 'admin'){
      // }
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  setGrupoPlacas: async (req, res, next) => {
    try {
      res.status(200).json("Success");
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
};

module.exports = mainController;