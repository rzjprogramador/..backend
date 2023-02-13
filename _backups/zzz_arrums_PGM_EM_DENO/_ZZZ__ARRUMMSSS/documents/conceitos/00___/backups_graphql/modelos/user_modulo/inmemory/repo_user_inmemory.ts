

export const collectionUser: UserIntersectionRequestEntity[] = []

export const addUserMemory = (User: UserIntersectionRequestEntity) => {
  collectionUser.push(User)
}

console.log(collectionUser)
