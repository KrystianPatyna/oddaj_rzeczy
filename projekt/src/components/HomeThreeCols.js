import React, {Component} from 'react';
import '../scss/elements/_HomeThreeCols.scss';
import '../scss/settings/_fonts.scss'
import '../scss/settings/_colors.scss'

class HomeThreeCols extends Component {
  render() {
    return (<>
      <div className='ThreeColsContainer'>
        <div className='ColumnConstainer'>
          <h2>10</h2>
          <h3>oddanych rzeczy</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisc
          Pellentesque vel enim a elit viverra elementuma.
          Aliquam erat volutpat.</p>
        </div>
        <div className='ColumnConstainer'>
          <h2>5</h2>
          <h3>wspartych organizacji</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisc
          Pellentesque vel enim a elit viverra elementuma.
          Aliquam erat volutpat.</p>
        </div>
        <div className='ColumnConstainer'>
          <h2>7</h2>
          <h3>zorganizowanych zbiórek</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisc
          Pellentesque vel enim a elit viverra elementuma.
          Aliquam erat volutpat.</p>
        </div>
      </div>
      </>
    )
  }
}
export default HomeThreeCols
