import React from 'react'

import Bio from '../../components/bio';

const BioPagePreview = ({ entry, widgetFor }) => (
  <Bio
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

export default BioPagePreview
