/* --- Global --- */
import idx from 'idx'
import React from 'react'


export default props =>
<DID.Context>{box => (
  <Atom.Span sm thin sx={props.sx}>{idx(box, _=>_['@'][box.address].profile.name)}</Atom.Span>
)}</DID.Context>