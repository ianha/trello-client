export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function createBucket(title) {
  return {
    meta: { remote: true },
    type: 'CREATE_BUCKET',
    title
  }
}

export function addCard(title, description, bucketId) {
  return {
    meta: { remote: true },
    type: 'ADD_CARD',
    title,
    description,
    bucketId
  }
}

export function updateCard(description, bucketId, cardId) {
  return {
    meta: { remote: true },
    type: 'UPDATE_CARD',
    bucketId,
    cardId,
    fields : {
      description
    }
  }
}