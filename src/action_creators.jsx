export function createBucket(title) {
  return {
    type: 'CREATE_BUCKET',
    title
  }
}

export function addCard(title, description, bucketId) {
  return {
    type: 'ADD_CARD',
    title,
    description,
    bucketId
  }
}

export function updateCard(description, bucketId, cardId) {
  return {
    type: 'UPDATE_CARD',
    bucketId,
    cardId,
    description
  }
}