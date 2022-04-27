
const Button = (props) => {
  return (
    <div className="btn btn-primary">{props.children}</div>
  )
}

const ButtonSecondary = (props) => {
    return (
      <div className="btn btn-secondary">{props.children}</div>
    )
  }

  const ButtonSuccess = (props) => {
    return (
      <div className="btn btn-success">{props.children}</div>
    )
  }

export default Button;
export {ButtonSecondary,ButtonSuccess};