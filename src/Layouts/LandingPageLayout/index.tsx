import React, { ReactNode } from 'react'

import PropTypes from 'prop-types'

interface LandingPageLayoutProps {
  children: ReactNode
}

const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({ children }) => {
  return <div style={{ color: 'red' }}>{children}</div>
}

LandingPageLayout.propTypes = {
  children: PropTypes.node
}

export default LandingPageLayout
