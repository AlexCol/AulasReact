type Props = {
    execute: Function
}

const ExecuteFuncion = ({execute}: Props) => {
  return (
    <div>        
        <button onClick={() => execute()}>Click to execute Function!</button>
    </div>
  )
}

export default ExecuteFuncion