<<<<<<< HEAD
//se va a encargar de coordinar uniendo todas las entidades "conmutador"

const express = require('express');
const router= express.Router();

const v1Routes = require('./v1');

router.use('/v1', v1Routes);

=======
//se va a encargar de coordinar uniendo todas las entidades "conmutador"

const express = require('express');
const router= express.Router();

const v1Routes = require('./v1');

router.use('/v1', v1Routes);

>>>>>>> 2e24b54e6ccf07d04d8a4dd0c19cbad60c5bfe67
module.exports=router;