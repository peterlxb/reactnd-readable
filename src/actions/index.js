export * from './categories'
export * from './posts'
export * from './comments'

export const SHOW_MESSAGE = 'SHOW_MESSAGE'

export function setMessage(message) {
  return {
    type: SHOW_MESSAGE,
    message
  }
}
