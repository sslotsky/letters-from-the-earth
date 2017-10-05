import knex from 'knex'
import bookshelf from 'bookshelf'
import { factCheck } from './validation';
import config from '../../knexfile'

export const kx = knex(config)

const orm = bookshelf(kx)
orm.plugin('pagination')
orm.plugin(factCheck)
export default orm

