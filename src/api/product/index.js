import express from 'express';
import isNil from 'lodash/isNil.js';
import { StatusCodes, BAD_PARAM_MSG } from '../../constants.js'

const router = express.Router();

router.get('/', (req, res) => {
  const {from, to} = req.query;

  if(isNil(from) || isNil(to)){
    res.status(StatusCodes.BAD_REQUEST).send(BAD_PARAM_MSG);
  }

});

export default router;