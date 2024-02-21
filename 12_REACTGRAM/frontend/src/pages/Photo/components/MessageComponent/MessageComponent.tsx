import Message from '../../../../components/Message/Message';
import styles from '../../Photo.module.css';

interface IMessageCompProp {
	error: boolean|[],
	message: string
}

function MessageComponent({error, message}: IMessageCompProp) {
	return (
		<>
		  <div className={styles.message_container}>
      {typeof error === "boolean" ? (
				error 
					?
					<Message msg={'Erro, tente novamente mais tarde.'} type="error" />
					: null
			) : (
				error.map((erro) =>
					<Message msg={erro} type="error" />
				)				
			)}
      {message && <Message msg={message} type="success" />}
      </div>
		</>
	)
}
export default MessageComponent