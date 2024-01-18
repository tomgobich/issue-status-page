/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import NotFoundException from '#exceptions/not_found_exception'
import ServerErrorException from '#exceptions/server_error_exception'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/not-found', async () => {
  throw new NotFoundException('Testing Not Found Exception')
})

router.get('/server-error', async () => {
  throw new ServerErrorException('Testing Server Error Exception')
})
