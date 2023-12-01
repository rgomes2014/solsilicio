import Text from "../text";
import styles from '@/app/components/__ui/banner/styles.module.css';

const Banner = ({title, subtitle}) => {
    return(
        <div className={styles.banner}>
            <div className={styles.container}>
                <Text tag="h2" className={styles.title}>{title}</Text>
                <Text tag="h3" className={styles.subtitle}>{subtitle}</Text>
            </div>
        </div>
    );
}

export default Banner;