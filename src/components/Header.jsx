import PropTypes from 'prop-types'

function Header({text}) {
  return (
    <>
        <h1 className='header'>Feedback Application</h1>
    {text}
    </>

  )
}

Header.propTypes = {
  text: PropTypes.string
}

export default Header 