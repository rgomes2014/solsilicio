import styles from '@/app/components/input/styles.module.css';

const Input = ({placehodolder,title, name, value, type,...rest}) => {
    return(
        <div className={styles.engInput}>
            {title !== '' && 
                (
                    <>
                        <label className={styles.label}>{title}</label>
                    </> 
                )
            }
            <input className={styles.inputForm} type={type} placeholder={placehodolder} name={name} value={value} {...rest}/>
        </div>
    );
}

export default Input;