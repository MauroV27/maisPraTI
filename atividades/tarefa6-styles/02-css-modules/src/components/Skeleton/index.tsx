import styles from "./Skeleton.module.css";

interface Props {
	height: string;
	width?: string;
}

export function Skeleton({ height, width = "100%" }: Props) {
	return <div className={styles.skeleton} style={{ height, width }} />;
}
