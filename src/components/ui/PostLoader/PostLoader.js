import React from 'react'
import ContentLoader from 'react-content-loader'

const PostLoader = (props) => (
  <ContentLoader
    speed={2}
    viewBox="0 0 400 160"
    backgroundColor="#cfcfcf"
    foregroundColor="#b5b5b5"
    style={{
      maxHeight: '100%',
    }}
    {...props}
  >
    <rect x="86" y="18" rx="3" ry="3" width="118" height="11" />
    <rect x="177" y="95" rx="3" ry="3" width="410" height="6" />
    <rect x="178" y="67" rx="9" ry="9" width="57" height="15" />
    <circle cx="54" cy="24" r="20" />
    <rect x="38" y="62" rx="14" ry="14" width="128" height="92" />
    <rect x="244" y="67" rx="9" ry="9" width="57" height="15" />
    <rect x="177" y="111" rx="3" ry="3" width="115" height="6" />
    <rect x="269" y="144" rx="3" ry="3" width="66" height="6" />
    <rect x="361" y="144" rx="3" ry="3" width="28" height="7" />
  </ContentLoader>
)

export default PostLoader
