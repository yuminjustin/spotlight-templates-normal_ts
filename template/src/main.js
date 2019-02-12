import './assets/css/reset.css'
import app from './app'

app();
/* webpack hot reload */
if (module.hot) {
    module.hot.accept();
}