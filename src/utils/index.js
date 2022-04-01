const getThirtyDaysAgo = () => {
  const today = new Date()
  const thirtyAgo = today - 1000 * 60 * 60 * 24 * 30;
  const thirtyAgoDate = new Date(thirtyAgo)
  return thirtyAgoDate
}

module.exports = {
  getThirtyDaysAgo
}