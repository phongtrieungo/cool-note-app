import app from './app'
import env from './utils/validate-env';
import mongoose from 'mongoose'

const port = env.PORT
mongoose.connect(env.MONGO_CONNECTION_STRING).then(() => {
  console.log('Mongoose connected');
  app.listen(port, () => {
    console.log(`App is running at port ${port}`)
  })
})
  .catch(console.error)
