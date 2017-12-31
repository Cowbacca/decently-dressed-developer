import * as React from 'react'
import {ReactNode} from 'react'

export default ({children}: { children: ReactNode }) => (
  <footer style={{display: 'flex'}}>
    {React.Children.map(children, child => (
      <div style={{flex: 1, textAlign: 'center'}}>
        {child}
      </div>
    ))}
  </footer>
)

