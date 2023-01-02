const passport = require("passport");
const passportJwt = require("passport-jwt");
const db = require("../database");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const User = require("../models/userModel");


// POUR LA VERIFICATION DU TOKEN SEULEMENT, CETTE METHODE VA ATTACHER L'OBJECT USER A REQ 
passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SALT,
    },
     (jwtPayload, done) => {
      return db.users.findOne({ where: { id: jwtPayload.id } })
        .then((user) => {
          return done(null, user);
        })
        .catch((err) => {
          return done(err);
        });
    }
    )
  )
