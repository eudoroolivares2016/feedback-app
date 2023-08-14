import PropTypes from 'prop-types'

function Header({text}) {
  return (
    <>
        <div>Feedback Application</div>
    {text}
    </>

  )
}

Header.propTypes = {
  text: PropTypes.string
}

export default Header 