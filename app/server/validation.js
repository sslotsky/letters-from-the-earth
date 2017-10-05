import { asyncValidator } from 'validate-this'

export class ValidationException {
  constructor(errors) {
    this.errors = errors
  }
}

export function factCheck(bookshelf, params) {
  const bookshelfModel = bookshelf.Model
  bookshelf.Model = bookshelf.Model.extend({
    constructor: function () {
      bookshelfModel.apply(this, arguments)

      if (this.validate) {
        this.on('saving', model =>
          asyncValidator(model, this.validate).then(errors => {
            if (Object.keys(errors).length) {
              throw new ValidationException(errors)
            }
          })
        )
      }
    }
  })
}

export const required = (field, model) => {
  if (!model.toJSON()[field]) {
    return Promise.resolve('Required')
  }

  return Promise.resolve()
}

export const unique = (field, model) => {
  const values = model.toJSON()

  return model.where({ [field]: values[field] }).fetchAll().then(records => {
    if (records.some(r => r.id !== values.id)) {
      return 'Already Taken'
    }
  })
}
