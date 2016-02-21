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

export function moveBucket(bucketId, index) {
  return {
    meta: { remote: true },
    type: 'MOVE_BUCKET',
    bucketId,
    index
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

export function moveCard(bucketId, cardId, index) {
  return {
    meta: { remote: true },
    type: 'MOVE_CARD',
    bucketId,
    cardId,
    index
  }
}