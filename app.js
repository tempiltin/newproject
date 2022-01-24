const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const exhbs = require('express-handlebars')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const categoryRouter = require('./routes/category');
const bookpageRouter = require('./routes/bookpage');
const bookPDFRouter = require('./routes/bookPDF');
const checkoutRouter = require('./routes/checkout');
const wishlistRouter = require('./routes/wishlist');
const admindashboardRouter = require('./routes/admin-dashboard');
const admincategoryRouter = require('./routes/admin-category');
const adminauthorRouter = require('./routes/admin-author');
const adminbooksRouter = require('./routes/admin-books');
const profileRouter = require('./routes/profile');
const profileeditRouter = require('./routes/profile-edit');
const adduserRouter = require('./routes/add-user');
const userlistRouter = require('./routes/user-list');
const signinRouter = require('./routes/sign-in');
const signupRouter = require('./routes/sign-up');
const pagesrecoverpwRouter = require('./routes/pages-recoverpw');
const pagesconfirmmailRouter = require('./routes/pages-confirm-mail');
const pageslockscreenRouter = require('./routes/pages-lock-screen');
const pagestimelineRouter = require('./routes/pages-timeline');
const pagesinvoiceRouter = require('./routes/pages-invoice');
const blankpageRouter = require('./routes/blank-page');
const pageserrorRouter = require('./routes/pages-error');
const pageserror500Router = require('./routes/pages-error-500');
const pagespricingRouter = require('./routes/pages-pricing');
const pagesmaintenanceRouter = require('./routes/pages-maintenance');
const pagescomingsoonRouter = require('./routes/pages-comingsoon');
const pagesfaqRouter = require('./routes/pages-faq');
const formlayoutRouter = require('./routes/form-layout');
const formvalidationRouter = require('./routes/form-validation');
const app = express();

// view engine setup
// Using exhbs
const hbs = exhbs.create({
  defaultLayout: 'layout',
  extname: 'hbs',
  runtimeOptions: {
      allowProtoMethodsByDefault: true,
      allowProtoPropertiesByDefault: true
  }
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category', categoryRouter);
app.use('/book-page', bookpageRouter);
app.use('/book-pdf', bookPDFRouter);
app.use('/Checkout', checkoutRouter);
app.use('/wishlist', wishlistRouter);
app.use('/admin-dashboard', admindashboardRouter);
app.use('/admin-category', admincategoryRouter);
app.use('/admin-author', adminauthorRouter);
app.use('/admin-books', adminbooksRouter);
app.use('/profile', profileRouter);
app.use('/profile-edit', profileeditRouter);
app.use('/add-user', adduserRouter);
app.use('/user-list', userlistRouter);
app.use('/sign-in', signinRouter);
app.use('/sign-up', signupRouter);
app.use('/pages-recoverpw', pagesrecoverpwRouter);
app.use('/pages-confirm-mail', pagesconfirmmailRouter);
app.use('/pages-lock-screen', pageslockscreenRouter);
app.use('/pages-timeline', pagestimelineRouter);
app.use('/pages-invoice', pagesinvoiceRouter);
app.use('/blank-page', blankpageRouter);
app.use('/pages-error', pageserrorRouter);
app.use('/pages-error-500', pageserror500Router);
app.use('/pages-pricing', pagespricingRouter);
app.use('/pages-maintenance', pagesmaintenanceRouter);
app.use('/pages-comingsoon', pagescomingsoonRouter);
app.use('/pages-faq', pagesfaqRouter);
app.use('/form-layout', formlayoutRouter);
app.use('/form-validation', formvalidationRouter);


// app.use('/', shopRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
