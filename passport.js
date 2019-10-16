import passport from "passport";
import ModelUser from "./models/entities/User.entity";
// 여기 modUser 불러와야되나 User.entity 불러와야 되나

passport.use(ModelUser.createStrategy());
/*
passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));
*/
passport.serializeUser(User.serializeUser()); // cookie에 id 저장
passport.deserializeUser(User.deserializeUser()); // 사용자 정보 조회
/*
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
*/
