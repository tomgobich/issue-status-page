import { Exception } from '@adonisjs/core/exceptions'

export default class ServerErrorException extends Exception {
  static status = 500
}