import React from 'react'
import ContentLoader from 'react-content-loader'

const CommentLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="86" y="18" rx="3" ry="3" width="118" height="11" />
    <rect x="87" y="46" rx="3" ry="3" width="410" height="6" />
    <rect x="87" y="61" rx="3" ry="3" width="380" height="6" />
    <rect x="87" y="82" rx="3" ry="3" width="84" height="7" />
    <circle cx="54" cy="24" r="20" />
  </ContentLoader>
)

export default CommentLoader
